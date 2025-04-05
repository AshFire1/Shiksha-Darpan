require("dotenv").config();
const genAI = require("@google/generative-ai");

const runTest = async () => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = new genAI.GoogleGenerativeAI(apiKey).getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent("Say hello!");
  const text = result.response.text();
  console.log(text);
};

runTest();
