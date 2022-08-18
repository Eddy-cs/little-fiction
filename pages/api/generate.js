import { Configuration, OpenAIApi } from "openai";
import { addData, getData } from "./firebase-config";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
let timestampMax = true;

async function checkTimestamps(userid) {
  const data = await getData();
  const today = new Date().toLocaleDateString();
  let allRequests = 0;
  let userRequests = 0;

  for (let d = 0; d < data.length; d++) {
    let time = data[d].timestamp;
    let date = new Date(time.seconds * 1000).toLocaleDateString("en-US");
    if (userid === "null") {
      if (date == today) {
        allRequests++;
      }
    } else {
      if (date == today) {
        allRequests++;
      }
      if (date == today && data[d].uid === userid) {
        userRequests++;
      }
    }
  }

  if (userid === "null") {
    if (allRequests >= 7) {
      timestampMax = false;
    }
  } else {
    if (allRequests >= 10) {
      timestampMax = false;
    } else {
      if (userRequests >= 5) {
        timestampMax = false;
      }
    }
  }
}

export default async function openAiCreate(req, res) {
  await checkTimestamps(req.body.uid);
  if (timestampMax === true) {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(req.body.topic, req.body.theme),
      temperature: 0.8,
      top_p: 1,
      max_tokens: 10,
    });
    const response = completion.data.choices[0].text;
    const filterL = await contenFilter(response);

    if (filterL == "0" || filterL == "1") {
      const storyData = {
        story: response,
        title: `The ${req.body.topic} and The ${req.body.theme}`,
        uid: req.body.uid,
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
        "Sorry, the maximum number of requests for today has been reached. Please try again tomorrow.",
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
  return `This is a creative story for children made using the topics "${topic}" and "${theme}":`;
}
