import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
if (!process.env.API_KEY_GEMINI) {
  console.error("api key TIDAK DITEMUKAN!");
}
const gemini = new GoogleGenAI({ apiKey: process.env.API_KEY_GEMINI });
export default gemini;
