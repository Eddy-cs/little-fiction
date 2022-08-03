import { Configuration, OpenAIApi } from "openai";
import { addData } from "./firebase-config";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.topic, req.body.theme),
    temperature: 0.6,
    max_tokens: 6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });

  let storyData = {
    story: completion.data.choices[0].text,
    title: `The ${req.body.topic} and The ${req.body.theme}`,
  };

  addData(storyData);
  console.log(res);
  console.log(completion.data.choices[0].text);
}

function generatePrompt(topic, theme) {
  return `This is a story made with the topic "${topic}" and theme "${theme}":`;
}
