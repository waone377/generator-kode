import model from "./config/service-model.js";
import generateApp from "./config/service-fileses.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
async function run() {
  console.log("*GENERATOR CODE*");
  console.log("contoh perintah:");
  console.log("- buatkan 1 project contoh perulangan kode piton..");
  console.log("- buatkan 2 project api express untuk pembelajaran..");
  console.log("===");
  console.log("ketik 'exit' untuk stop..");
  const teks = prompt("Project seperti apa?> ");
  if (teks.toLowerCase() === "exit") {
    console.clear();
    console.log("program berhenti..");
    process.exit(0);
  }
  try {
    console.clear();
    console.log("memproses permintaan..");
    const response = await model.sendMessage({ message: teks });
    const result = await response.text;
    return result;
  } catch (err) {
    return err.message;
  }
}
while (true) {
  const res = await run();
  await generateApp(JSON.parse(res));
}
