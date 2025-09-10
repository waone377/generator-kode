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
    let historyData = [];
    try {
      const isi = await fs.readFile("history.json", "utf-8");
      if (isi) {
        historyData = JSON.parse(isi);
      }
    } catch (err) {
      if (err.code !== "ENOENT") {
        await fs.writeFile("history.json", "[]");
      }
    }
    const konfirm = prompt("Gunakan history sebelumnya (y/n)? > ");
    model.history = konfirm.toLowerCase() === "y" ? historyData : [];
    console.clear();
    console.log("Sedang memproses permintaan, mohon tunggu...");
    const response = await model.sendMessage({ message: pesan });
    if (response.text) {
      await fs.writeFile(
        "history.json",
        JSON.stringify(model.history, null, 2),
      );
    }
    const result = await response.text;
    return result;
  } catch (err) {
    throw new Error(`Gagal mendapatkan respons dari model: ${err.message}`);
  }
}
async function modeBuatProject() {
  print();
  const teks = prompt("Gunakan file prompt.txt (y/n)? > ");
  let keyword = "";
  if (teks.toLowerCase() === "y") {
    print();
    try {
      const isiPrompt = await fs.readFile("prompt.txt", "utf-8");
      console.log("Isi prompt.txt:\n---\n", isiPrompt);
      const konfir = prompt("Lanjutkan dengan prompt.txt (y/n)? > ");
      stop(konfir);
      if (konfir.toLowerCase() === "n") {
        print();
        keyword = prompt("Project seperti apa yang Anda inginkan? > ");
        stop(keyword);
      } else {
        keyword = isiPrompt;
      }
    } catch (err) {
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
  const rawTargetDir = prompt("Masukkan path ke folder project > ");
  stop(rawTargetDir);
  const resolvedTargetDir = rawTargetDir.startsWith("~/")
    ? path.join(os.homedir(), rawTargetDir.substring(2))
    : rawTargetDir;
  const finalTargetPath = path.resolve(resolvedTargetDir);
  try {
    await fs.access(finalTargetPath);
    print();
    console.log("Masukkan folder tambahan yang ingin dikecualikan.");
    console.log("Pisahkan dengan koma (contoh: dist,build)");
    const folderTambahan = prompt("Folder tambahan untuk dikecualikan > ");
    console.log("Masukkan ekstensi file tambahan yang ingin dikecualikan.");
    console.log("Pisahkan dengan koma (contoh: .env,.tmp)");
    const fileTambahan = prompt("Ekstensi file tambahan untuk dikecualikan > ");
    const opsiPengecualian = {
      folders: folderTambahan
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
      fileExct: fileTambahan
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
    };
    console.log(`\nMembaca struktur project dari: ${finalTargetPath}`);
    const projectMarkdown = await bacaProjectKeMarkdown(
      finalTargetPath,
      finalTargetPath,
      opsiPengecualian,
    );
    print();
    console.log("Struktur project berhasil dibaca.");
    const teks = prompt("Gunakan file prompt.txt (y/n)? > ");
    let keyword = "";
    if (teks.toLowerCase() === "y") {
      print();
      try {
        const isiPrompt = await fs.readFile("prompt.txt", "utf-8");
        console.log("Isi prompt.txt:\n---\n", isiPrompt);
        const konfir = prompt("Lanjutkan dengan prompt.txt (y/n)? > ");
        stop(konfir);
        keyword =
          konfir.toLowerCase() === "n"
            ? prompt("Apa yang ingin diperbaiki/ditambahkan? > ")
            : isiPrompt;
        stop(keyword);
      } catch {
        console.error("Gagal membaca file prompt.txt.");
        keyword = prompt("Apa yang ingin diperbaiki/ditambahkan? > ");
        stop(keyword);
      }
    } else {
      stop(teks);
      print();
      keyword = prompt("Apa yang ingin diperbaiki/ditambahkan? > ");
      stop(keyword);
    }
    const finalPrompt = `pahami struktur project di folder "${path.basename(finalTargetPath)}":\nbantu saya memperbaiki project saya\n---\n${projectMarkdown}---\nTugas anda: ${keyword}`;
    const rawResponse = await kirimKeModel(finalPrompt);
    const parsedResponse = JSON.parse(rawResponse);
    print();
    const modeSimpan = prompt(
      "Pilih mode penyimpanan: (1) Timpa project asli, (2) Buat di repository baru > ",
    );
    stop(modeSimpan);
    let outputPath = finalTargetPath;
    if (modeSimpan === "2") {
      const namaRepoBaru = prompt("Masukkan nama untuk repository baru > ");
      stop(namaRepoBaru);
      outputPath = path.resolve("./output", namaRepoBaru);
      console.log(`Perbaikan akan disimpan di repository baru: ${outputPath}`);
    } else {
      console.log(`Project asli di \"${finalTargetPath}\" akan ditimpa.`);
    }
    const konfir = prompt(`Lanjutkan (y/n)? > `);
    if (konfir.toLowerCase() === "y") {
      await generateApp(parsedResponse, outputPath);
    } else {
      console.log("Perbaikan dibatalkan.");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: Direktori tidak ditemukan di '${finalTargetPath}'`);
    } else {
      console.error(`Terjadi kesalahan: ${error.message}`);
    }
  }
}
async function resetHistory() {
  try {
    await fs.writeFile("history.json", "[]", "utf-8");
    console.log("History percakapan berhasil direset.");
  } catch (error) {
    console.error("Gagal mereset history:", error.message);
  }
  await new Promise((r) => setTimeout(r, 2000));
}
async function main() {
  while (true) {
    printMenu();
    const pilihan = prompt("Pilih menu (1/2/3)? > ");
    stop(pilihan);
    try {
      switch (pilihan) {
        case "1":
          await modeBuatProject();
          break;
        case "2":
          await modePerbaikiProject();
          break;
        case "3":
          await resetHistory();
          continue;
        default:
          console.log("Pilihan tidak valid.");
          await new Promise((r) => setTimeout(r, 1500));
          continue;
      }
      console.log("\n---");
      console.log("Proses selesai!");
      console.log("---\n");
    } catch (error) {
      console.error(`\n!!! Kesalahan fatal: ${error.message} !!!`);
      if (error instanceof SyntaxError) {
        console.log(
          "Model mungkin memberi respons tidak valid (bukan JSON). Coba prompt lain.",
        );
      }
    }
    const lanjut = prompt("Ingin lanjut proses lain (y/n)? > ");
    if (lanjut.toLowerCase() !== "y") {
      stop("exit");
    }
  }
}
main();
