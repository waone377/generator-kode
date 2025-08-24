import model from "./config/service-model.js";
import generateApp from "./config/service-fileses.js";
import { bacaProjectKeMarkdown } from "./config/service-revisi.js";
import { print, stop, printMenu } from "./config/service-print.js";
import promptSync from "prompt-sync";
import fs from "fs/promises";
import path from "path";
import os from "os";

const prompt = promptSync();

async function kirimKeModel(pesan) {
  try {
    console.clear();
    console.log("Sedang memproses permintaan, mohon tunggu...");
    
    let historyData = [];
    try {
      const fileContent = await fs.readFile("history.json", "utf-8");
      if (fileContent) {
        historyData = JSON.parse(fileContent);
      }
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error(`Gagal memuat history.json: ${err.message}`);
      }
    }
    model.history = historyData;

    const response = await model.sendMessage({ message: pesan });
    await fs.writeFile("history.json", JSON.stringify(model.history, null, 2));
    const result = await response.text;
    return result;
  } catch (err) {
    throw new Error(`Gagal mendapatkan respons dari model: ${err.message}`);
  }
}

async function modeBuatProject() {
  print();
  const teks = prompt("Gunakan file prompt.txt (ya/tidak)? > ");
  let keyword = "";

  if (teks.toLowerCase() === "ya") {
    print();
    try {
      const text = await fs.readFile("prompt.txt", "utf-8");
      console.log("Isi prompt.txt:\n---\n", text);
      const konfir = prompt("Lanjutkan dengan isi dari prompt.txt di atas (ya/tidak)? > ");
      stop(konfir);
      if (konfir.toLowerCase() === "tidak") {
        print();
        keyword = prompt("Project seperti apa yang Anda inginkan? > ");
        stop(keyword);
      } else {
        keyword = text;
      }
    } catch (readErr) {
      console.error("Gagal membaca file prompt.txt.");
      keyword = prompt("Project seperti apa yang Anda inginkan? > ");
      stop(keyword);
    }
  } else {
    stop(teks);
    print();
    keyword = prompt("Project seperti apa yang Anda inginkan? > ");
    stop(keyword);
  }
  
  const rawResponse = await kirimKeModel(keyword);
  const parsedResponse = JSON.parse(rawResponse);
  await generateApp(parsedResponse);
}

async function modePerbaikiProject() {
  print();
  const rawTargetDir = prompt("Masukkan path ke folder project (bisa menggunakan ~/ atau ../) > ");
  stop(rawTargetDir);

  let resolvedTargetDir;
  if (rawTargetDir.startsWith('~/')) {
    resolvedTargetDir = path.join(os.homedir(), rawTargetDir.substring(2));
  } else {
    resolvedTargetDir = rawTargetDir;
  }
  const finalTargetPath = path.resolve(resolvedTargetDir);

  try {
    await fs.access(finalTargetPath);
    console.log(`Membaca struktur project dari: ${finalTargetPath}`);
    const projectMarkdown = await bacaProjectKeMarkdown(finalTargetPath);

    print();
    console.log("Struktur project berhasil dibaca.");
    const perintahPerbaikan = prompt("Apa yang ingin Anda perbaiki atau tambahkan? > ");
    stop(perintahPerbaikan);
    
    const finalPrompt = `
Berikut adalah struktur dan konten project yang ada, yang terletak di dalam folder bernama "${path.basename(finalTargetPath)}":
---
${projectMarkdown}
---
Tugas saya adalah: ${perintahPerbaikan}

Tolong berikan struktur file yang diperbarui secara lengkap dalam format JSON yang diminta. Pastikan semua path file yang Anda berikan berada di dalam folder root yang sama, yaitu "${path.basename(finalTargetPath)}".`;
    
    const rawResponse = await kirimKeModel(finalPrompt);
    const parsedResponse = JSON.parse(rawResponse);
    const konfir = prompt(`Project di dalam "${finalTargetPath}" akan diperbaiki/ditimpa. Lanjutkan (ya/tidak)? > `);
    if (konfir.toLowerCase() === 'ya') {
      await generateApp(parsedResponse, path.dirname(finalTargetPath));
    } else {
      console.log("Perbaikan dibatalkan oleh pengguna.");
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: Direktori tidak ditemukan di '${finalTargetPath}'`);
    } else {
      console.error(`Terjadi kesalahan saat memperbaiki project: ${error.message}`);
    }
  }
}

async function main() {
  while (true) {
    printMenu();
    const pilihan = prompt("Pilihan Anda (1/2)? > ");
    stop(pilihan);

    try {
      if (pilihan === "1") {
        await modeBuatProject();
      } else if (pilihan === "2") {
        await modePerbaikiProject();
      } else {
        console.log("Pilihan tidak valid. Silakan coba lagi.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        continue;
      }
      
      console.log("\n---");
      console.log("Proses selesai!");
      console.log("---\n");

    } catch (error) {
      console.error(`\n!!! Terjadi kesalahan fatal: ${error.message} !!!`);
      if (error instanceof SyntaxError) {
        console.log("Model mungkin memberikan respons yang tidak valid (bukan JSON). Coba lagi dengan prompt yang berbeda.");
      }
    }
    
    const lanjut = prompt("Apakah Anda ingin melakukan proses lain (ya/tidak)? > ");
    if (lanjut.toLowerCase() !== 'ya') {
      stop('exit');
    }
  }
}

main();
