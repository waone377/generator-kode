import fs from "fs/promises";
async function readPrompt() {
  try {
    const data = await fs.readFile("prompt.txt", "utf-8");
    console.clear();
    console.log("isi dari file from.txt:\n", data);
    return data;
  } catch (err) {
    throw new Error(`pembacaan prom.txt gagal ${err.message}`);
  }
}
export default readPrompt;
