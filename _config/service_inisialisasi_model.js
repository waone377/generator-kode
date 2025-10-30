import { GoogleGenAI } from "@google/genai";
import custom_schema from "./service_definisi_skema.js";
import "dotenv/config";
if (!process.env.API_KEY_GEMINI) {
  console.log(
    "Silakan buat file .env dan tambahkan variabel 'API_KEY_GEMINI' dengan kunci API Anda.",
  );
  process.exit(0);
}
const gemini = new GoogleGenAI({ apiKey: process.env.API_KEY_GEMINI });
const model = gemini.chats.create({
  model: process.env.MODEL,
  config: {
    systemInstruction: "",
    temperature: parseFloat(process.env.TEMPERATURE),
    thinkingConfig: {
      includeThoughts: true,
      thinkingBudget: process.env.PEMIKIRAN,
    },
    tools: [],
    responseMimeType: "application/json",
    responseSchema: custom_schema,
    generationConfig: {
      maxOutputTokens: parseInt(process.env.MAX_OUTPUT_TOKENS),
      presencePenalty: 7,
      frequencyPenalty: 14,
      enableEnhancedCivicAnswers: false,
    },
  },
  history: [],
});
export default model;
