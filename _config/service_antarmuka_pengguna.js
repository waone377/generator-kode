import promptSync from "prompt-sync";

const prompt = promptSync();

function handleExit(input) {
  if (input && input.trim().toLowerCase() === "exit") {
    console.clear();
    console.log("Program berhenti..");
    process.exit(0);
  }
}

function print() {
  console.clear();
  console.log("*GENERATOR CODE*\nketik 'exit' untuk stop..\n===");
}

function printMenu() {
  console.clear();
  console.log(
    `*GENERATOR CODE*\nPilih mode yang ingin Anda jalankan:\n1. Membuat Project Baru\n2. Memperbaiki Project\n3. Reset History Percakapan\nketik 'exit' untuk keluar..\n===`,
  );
}

function masukan(teks) {
  const keyword = prompt(teks);
  handleExit(keyword);
  return keyword;
}

function masukanWajib(teks) {
  while (true) {
    const keyword = prompt(teks);
    handleExit(keyword);
    if (keyword && keyword.trim()) {
      return keyword.trim();
    }
    console.log("\nInput tidak boleh kosong. Silakan coba lagi.");
  }
}

function pilihOpsi(teks, opsi) {
  const opsiValid = opsi.map((o) => o.toLowerCase());
  while (true) {
    const keyword = prompt(teks);
    handleExit(keyword);
    const pilihan = keyword.trim().toLowerCase();
    if (opsiValid.includes(pilihan)) {
      return pilihan;
    }
    console.log(
      `\nPilihan tidak valid. Harap masukkan salah satu dari: ${opsi.join(", ")}`,
    );
  }
}

export { print, masukan, masukanWajib, pilihOpsi, printMenu };
