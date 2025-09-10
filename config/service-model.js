import gemini from "./service-api.js";
import custom_schema from "./schema.js";
import "dotenv/config";
import fs from "fs/promises";
let intruksi;
try {
  intruksi = await fs.readFile("config/intruksi.txt", "utf-8");
} catch (err) {
  throw new Error("pembacaan file instruksi gagal!", err.message);
}
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
