import kirimKeModel from "./service_pengiriman_prompt.js";
import generateApp from "./service_manajemen_berkas.js";
import { bacaProjectKeMarkdown } from "./service_pembaca_proyek.js";
import readPrompt from "./service_pembaca_prompt.js";
import {
  masukan,
  masukanWajib,
  pilihOpsi,
} from "./service_antarmuka_pengguna.js";
import { readLastPath, writeLastPath } from "./service_riwayat_lokasi.js";
import fs from "fs/promises";
import path from "path";
import os from "os";

async function modePerbaikiProject() {
  let rawTargetDir;
  const lastPath = await readLastPath();

  console.clear();
  if (lastPath) {
    console.log(`Path terakhir Anda:\n\"${lastPath}\" `);
    const useLast = pilihOpsi("Gunakan path terakhir (y/n)? > ", ["y", "n"]);
    if (useLast === "y") {
      rawTargetDir = lastPath;
    } else {
      console.clear();
      rawTargetDir = masukanWajib("Masukkan lokasi path ke folder project > ");
    }
  } else {
    rawTargetDir = masukanWajib("Masukkan lokasi path ke folder project > ");
  }

  const resolvedTargetDir = rawTargetDir.startsWith("~/")
    ? path.join(os.homedir(), rawTargetDir.substring(2))
    : rawTargetDir;
  const finalTargetPath = path.resolve(resolvedTargetDir);

  try {
    await fs.access(finalTargetPath);
    await writeLastPath(finalTargetPath);

    console.clear();
    console.log(
      `\nPilih mode pembacaan source:\n1. Sertakan source tertentu saja (Inclusion)\n2. Kecualikan source tertentu (Exclusion)`,
    );
    const modeBaca = pilihOpsi("Pilih mode (1/2)? > ", ["1", "2"]);

    const opsiBaca = {
      mode: modeBaca === "1" ? "include" : "exclude",
      folders: [],
      files: [],
      fileExct: [],
    };

    const actionVerb =
      opsiBaca.mode === "include" ? "disertakan" : "dikecualikan";

    console.clear();
    console.log(
      `Masukkan nama folder yang ingin ${actionVerb}.\nPisahkan dengan koma (contoh: src,components)`,
    );
    const folderInput = masukan(`Folder untuk ${actionVerb} > `);
    opsiBaca.folders = folderInput
      .split(",")
      .map((f) => f.trim())
      .filter((f) => f);

    console.clear();
    console.log(
      `\nMasukkan nama file yang ingin ${actionVerb}.\nPisahkan dengan koma (contoh: .env,package.json)`,
    );
    const fileInput = masukan(`Nama file untuk ${actionVerb} > `);
    opsiBaca.files = fileInput
      .split(",")
      .map((f) => f.trim())
      .filter((f) => f);

    console.clear();
    console.log(
      `\nMasukkan ekstensi file yang ingin ${actionVerb}.\nPisahkan dengan koma (contoh: .txt,.css)`,
    );
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

    console.log("Struktur project berhasil dibaca.");
    const teks = pilihOpsi("Gunakan file prompt.txt (y/n)? > ", ["y", "n"]);
    let keyword = "";
    if (teks === "y") {
      try {
        const isiPrompt = await readPrompt();
        const konfir = pilihOpsi("Lanjutkan dengan prompt.txt (y/n)? > ", [
          "y",
          "n",
        ]);
        if (konfir === "n") {
          console.clear();
          keyword = masukanWajib("Apa yang ingin diperbaiki/ditambahkan? > ");
        } else {
          keyword = isiPrompt;
        }
      } catch (err) {
        console.clear();
        throw new Error(err.message);
      }
    } else {
      console.clear();
      keyword = masukanWajib("Apa yang ingin diperbaiki/ditambahkan? > ");
    }
    const finalPrompt = `pahami dan analisa struktur project saya di folder \"${path.basename(finalTargetPath)}\":\ndan bantu saya memperbaiki project saya!, ini struktur projek lengkapnya:\n---\n${projectMarkdown}---\nTugas anda: ${keyword}\n perhatikan perintah tugasnya, oke..`;
    const raw = await kirimKeModel(finalPrompt);
    const response = JSON.parse(raw);
    let outputPath = finalTargetPath;
    let isDelet = false;

    console.log(
      `\nPilih mode penyimpanan:\n1. Timpa project asli\n2. Membuat project baru\n`,
    );
    const modeSimpan = pilihOpsi("Silakan pilih (1/2)? > ", ["1", "2"]);

    if (modeSimpan === "1") {
      isDelet = true;
      console.clear();
      console.log(`Project asli di \"${finalTargetPath}\" akan ditimpa.`);
    } else if (modeSimpan === "2") {
      console.clear();
      const namaRepoBaru = masukanWajib(
        "Masukkan nama untuk repository baru > ",
      );
      outputPath = path.resolve("./output", namaRepoBaru);
      console.log(`Perbaikan akan disimpan di repository baru: ${outputPath}`);
    }

    await generateApp(response, outputPath, isDelet);
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
