import kirimKeModel from "./service-kirim.js";
import generateApp from "./service-fileses.js";
import { bacaProjectKeMarkdown } from "./service-revisi.js";
import readPrompt from "./service-prompt.js";
import { masukan } from "./service-print.js";
import { readLastPath, writeLastPath } from "./service-last-path.js";
import fs from "fs/promises";
import path from "path";
import os from "os";

async function modePerbaikiProject() {
  console.clear();

  let rawTargetDir;
  const lastPath = await readLastPath();

  if (lastPath) {
    const useLast = masukan(`Gunakan path terakhir "${lastPath}" (y/n)? > `);
    if (useLast.toLowerCase() === "y") {
      rawTargetDir = lastPath;
    } else {
      console.clear();
      rawTargetDir = masukan("Masukkan lokasi path ke folder project > ");
    }
  } else {
    rawTargetDir = masukan("Masukkan lokasi path ke folder project > ");
  }

  const resolvedTargetDir = rawTargetDir.startsWith("~/")
    ? path.join(os.homedir(), rawTargetDir.substring(2))
    : rawTargetDir;
  const finalTargetPath = path.resolve(resolvedTargetDir);

  try {
    await fs.access(finalTargetPath);
    await writeLastPath(finalTargetPath);

    console.clear();
    console.log("Masukkan folder tambahan yang ingin dikecualikan.");
    console.log("Pisahkan dengan koma (contoh: dist,build)");
    const folderTambahan = masukan("Folder tambahan untuk dikecualikan > ");
    console.log("Masukkan nama file tambahan yang ingin dikecualikan.");
    console.log("Pisahkan dengan koma (contoh: .env,router)");
    const fileTambahan = masukan("nama file tambahan untuk dikecualikan > ");
    console.log("Masukkan ekstensi file tambahan yang ingin dikecualikan.");
    console.log("Pisahkan dengan koma (contoh: .json,.txt)");
    const extensiTambahan = masukan(
      "Ekstensi file tambahan untuk dikecualikan > ",
    );
    const opsiPengecualian = {
      folders: folderTambahan
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
      files: fileTambahan
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
      fileExct: extensiTambahan
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
    };
    console.clear();
    console.log(`\nMembaca struktur project dari: ${finalTargetPath}`);
    const projectMarkdown = await bacaProjectKeMarkdown(
      finalTargetPath,
      finalTargetPath,
      opsiPengecualian,
    );
    console.clear();
    console.log("Struktur project berhasil dibaca.");
    const teks = masukan("Gunakan file prompt.txt (y/n)? > ");
    let keyword = "";
    if (teks.toLowerCase() === "y") {
      try {
        const isiPrompt = await readPrompt();
        const konfir = masukan("Lanjutkan dengan prompt.txt (y/n)? > ");
        if (konfir.toLowerCase() === "n") {
          console.clear();
          keyword = masukan("Apa yang ingin diperbaiki/ditambahkan? > ");
        } else {
          keyword = isiPrompt;
        }
      } catch (err) {
        console.clear();
        throw new Error(err.message);
      }
    } else {
      console.clear();
      keyword = masukan("Apa yang ingin diperbaiki/ditambahkan? > ");
    }
    const finalPrompt = `pahami dan analisa struktur project saya di folder "${path.basename(finalTargetPath)}":\ndan bantu saya memperbaiki project saya!, ini struktur projek lengkapnya:\n---\n${projectMarkdown}---\nTugas anda: ${keyword}\n perhatikan perintah tugasnya, oke..`;
    const rawResponse = await kirimKeModel(finalPrompt);
    const parsedResponse = JSON.parse(rawResponse);
    console.clear();
    console.log(
      "pilih mode penyimpanan:\n1. timpa project asli\n2. membuat project baru\n",
    );
    const modeSimpan = masukan("silakan pilih satu atau dua?> ");
    let outputPath = finalTargetPath;
    let isDelet = false;
    if (modeSimpan === "2") {
      console.clear();
      const namaRepoBaru = masukan("Masukkan nama untuk repository baru > ");
      outputPath = path.resolve("./output", namaRepoBaru);
      console.log(`Perbaikan akan disimpan di repository baru: ${outputPath}`);
    } else {
      isDelet = true;
      console.clear();
      console.log(`Project asli di \"${finalTargetPath}\" akan ditimpa.`);
    }
    await generateApp(parsedResponse, outputPath, isDelet);
  } catch (error) {
    console.clear();
    if (error.code === "ENOENT") {
      console.error(`Error: Direktori tidak ditemukan di '${finalTargetPath}'`);
    } else {
      console.error(`Terjadi kesalahan: ${error.message}`);
    }
  }
}
export default modePerbaikiProject;
