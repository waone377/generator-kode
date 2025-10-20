import kirimKeModel from "./service_pengiriman_prompt.js";
import generateApp from "./service_manajemen_berkas.js";
import { bacaProjectKeMarkdown } from "./service_pembaca_proyek.js";
import readPrompt from "./service_pembaca_prompt.js";
import { masukan } from "./service_antarmuka_pengguna.js";
import { readLastPath, writeLastPath } from "./service_riwayat_lokasi.js";
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
    console.log("\nPilih mode pembacaan source:");
    console.log("1. Sertakan source tertentu saja (Inclusion)");
    console.log("2. Kecualikan source tertentu (Exclusion)");
    const modeBaca = masukan("Pilih mode (1/2)? > ");

    const opsiBaca = {
      mode: modeBaca === "1" ? "include" : "exclude",
      folders: [],
      files: [],
      fileExct: [],
    };

    const actionVerb =
      opsiBaca.mode === "include" ? "disertakan" : "dikecualikan";

    console.clear();
    console.log(`Masukkan nama folder yang ingin ${actionVerb}.`);
    console.log("Pisahkan dengan koma (contoh: src,components)");
    const folderInput = masukan(`Folder untuk ${actionVerb} > `);
    opsiBaca.folders = folderInput
      .split(",")
      .map((f) => f.trim())
      .filter((f) => f);

    console.log(`\nMasukkan nama file yang ingin ${actionVerb}.`);
    console.log("Pisahkan dengan koma (contoh: index.js,utils.js)");
    const fileInput = masukan(`Nama file untuk ${actionVerb} > `);
    opsiBaca.files = fileInput
      .split(",")
      .map((f) => f.trim())
      .filter((f) => f);

    console.log(`\nMasukkan ekstensi file yang ingin ${actionVerb}.`);
    console.log("Pisahkan dengan koma (contoh: .js,.css)");
    const extInput = masukan(`Ekstensi file untuk ${actionVerb} > `);
    opsiBaca.fileExct = extInput
      .split(",")
      .map((f) => f.trim())
      .filter((f) => f);

    console.clear();
    console.log(`\nMembaca struktur project dari: ${finalTargetPath}`);
    const projectMarkdown = await bacaProjectKeMarkdown(
      finalTargetPath,
      finalTargetPath,
      opsiBaca,
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
    console.log("Laporan:\n", parsedResponse.keterangan);
    console.log(
      "\npilih mode penyimpanan:\n1. timpa project asli\n2. membuat project baru\n",
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
