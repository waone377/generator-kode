import fs from "fs/promises";
const location = "history.json";

async function resetHistory() {
  try {
    await fs.writeFile(location, "[]", "utf-8");
    console.clear();
    console.log("History percakapan berhasil direset.");
  } catch (error) {
    throw new Error(`Gagal mereset history: ${error.message}`);
  }
}

async function writeHistory(data) {
  try {
    await fs.writeFile(location, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    throw new Error(`Penulisan history gagal, ${err.message}!`);
  }
}

async function readHistory() {
  try {
    const data = await fs.readFile(location, "utf-8");
    const story = JSON.parse(data);
    if (!Array.isArray(story)) {
      console.warn(
        "Peringatan: file history.json ditemukan tetapi formatnya tidak valid. Memulai history baru.",
      );
      return [];
    }
    return story;
  } catch (err) {
    if (err.code === "ENOENT" || err instanceof SyntaxError) {
      return [];
    }
    throw new Error(`Pembacaan history gagal, ${err.message}!`);
  }
}

export { resetHistory, readHistory, writeHistory };
