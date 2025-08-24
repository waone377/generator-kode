import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

if (!process.env.API_KEY_GEMINI) {
  console.error("API Key tidak ditemukan!");
  console.log("Silakan buat file .env dan tambahkan variabel 'API_KEY_GEMINI' dengan kunci API Anda.");
  process.exit(0);
}

const gemini = new GoogleGenAI({ apiKey: process.env.API_KEY_GEMINI });

export default gemini;
