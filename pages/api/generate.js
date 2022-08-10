import { Configuration, OpenAIApi } from "openai";
import { addData, getData } from "./firebase-config";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
let timestampMax = true;

async function checkTimestamps() {
  const data = await getData();
  const today = new Date().toLocaleDateString();
  const datesChecked = [];
  for (let d = 0; d < data.length; d++) {
    const time = data[d].timestamp;
    const date = new Date(time.seconds * 1000).toLocaleDateString("en-US");
    date == today ? datesChecked.push(date) : null;
  }
  datesChecked.length > 15 ? (timestampMax = false) : null;
}

export default async function openAiCreate(req, res) {
  await checkTimestamps();
  if (timestampMax === true) {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(req.body.topic, req.body.theme),
      temperature: 0.6,
      max_tokens: 200,
    });
    const response = completion.data.choices[0].text;
    const filterL = await contenFilter(response);

    console.log("filter", filterL);
    if (filterL == "0" || filterL == "1") {
      const storyData = {
        story: response,
        title: `The ${req.body.topic} and The ${req.body.theme}`,
      };
      addData(storyData);
      res.status(200).json({ result: response });
    } else {
      res
        .status(200)
        .json({ result: "Please try again by modifying the input." });
    }
  } else {
    res.status(200).json({
      result:
        "We're sorry, the maximum number of requests for today has been reached. Please try again later.",
    });
  }
}

async function contenFilter(resp) {
  const filterResponse = await openai
    .createCompletion({
      model: "content-filter-alpha",
      prompt: `<|endoftext|>${resp}\n--\nLabel:`,
      max_tokens: 1,
      temperature: 0,
      top_p: 0,
      logprobs: 10,
    })
    .catch((error) => {});
  return filterResponse.data["choices"][0]["text"];
}

function generatePrompt(topic, theme) {
  return `This is a creative children story made using the topics "${topic}" and "${theme}":`;
}
