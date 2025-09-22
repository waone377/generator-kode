import promptSync from "prompt-sync";
function print() {
  console.clear();
  console.log("*GENERATOR CODE*");
  console.log("ketik 'exit' untuk stop..");
  console.log("===");
}
function printMenu() {
  console.clear();
  console.log("*GENERATOR CODE*");
  console.log("Pilih mode yang ingin Anda jalankan:");
  console.log("1. Membuat Project Baru");
  console.log("2. Memperbaiki Project");
  console.log("3. Reset History Percakapan");
  console.log("ketik 'exit' untuk keluar..");
  console.log("===");
}
const prompt = promptSync();
function masukan(teks) {
  const keyword = prompt(teks);
  if (keyword.toLowerCase() === "exit") {
    console.clear();
    console.log("Program berhenti..");
    process.exit(0);
  }
  return keyword;
}
export { print, masukan, printMenu };
