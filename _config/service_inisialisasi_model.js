import { GoogleGenAI } from "@google/genai";
import custom_schema from "./service_definisi_skema.js";
import "dotenv/config";
import fs from "fs/promises";
let intruksi;
try {
  intruksi = await fs.readFile("_config/service_instruksi_utama.txt", "utf-8");
} catch (err) {
  throw new Error("pembacaan file instruksi gagal!", err.message);
}
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
    systemInstruction: intruksi,
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
