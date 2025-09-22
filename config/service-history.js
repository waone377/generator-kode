import fs from "fs/promises";
async function resetHistory() {
  try {
    await fs.writeFile("history.json", "[]", "utf-8");
    console.log("History percakapan berhasil direset.");
  } catch (error) {
    throw new Error("Gagal mereset history:", error.message);
  }
  await new Promise((r) => setTimeout(r, 2000));
}
async function writeHistory(data) {
  try {
    await fs.writeFile("history.json", JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error(`penulisan history gagal, ${err.message}!`);
  }
}
async function readHistory() {
  try {
    const data = await fs.readFile("history.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error(`pembacaan history gagal, ${err.message}!`);
    if (err.code !== "ENOENT") {
      await fs.writeFile("history.json", "[]");
    }
    return [];
  }
}
export { resetHistory, readHistory, writeHistory };
