import model from "./service_inisialisasi_model.js";
import { readHistory, writeHistory } from "./service_manajemen_riwayat.js";
import { pilihOpsi, masukanWajib } from "./service_antarmuka_pengguna.js";
import fs from "fs/promises";

async function kirimKeModel(pesan) {
  try {
    const historyData = await readHistory();
    const intruksi = await fs.readFile(
      "_config/_instruct/intruksi.txt",
      "utf-8",
    );

    let dokumentasi = "";
    try {
      dokumentasi = await fs.readFile(
        "_config/_instruct/dokumentasi.txt",
        "utf-8",
      );
    } catch (error) {
      if (error.code !== "ENOENT") {
        console.warn(
          "Peringatan: Gagal membaca file dokumentasi.txt:",
          error.message,
        );
      }
    }

    console.clear();
    console.log(`Item history: ${historyData.length}`);
    let currentPesan = pesan;
    let intruksiFinal = intruksi;
    let finalResultText = "";

    let sesiHistory = [];

    if (historyData.length > 0) {
      const konfirm = pilihOpsi("Gunakan history sebelumnya (y/n)? > ", [
        "y",
        "n",
      ]);
      if (konfirm === "y") {
        sesiHistory = historyData.slice(-2);
      }
    }

    if (dokumentasi && dokumentasi.trim() !== "") {
      console.clear();
      const isDok = pilihOpsi(
        "Sertakan konteks dari dokumentasi.txt (y/n)? > ",
        ["y", "n"],
      );
      if (isDok === "y") {
        intruksiFinal = `${intruksi}\n\n# KONTEKS panduan KRITIS\n\nAnda WAJIB menggunakan panduan berikut sebagai SATU-SATUNYA SUMBER KEBENARAN untuk menyelesaikan permintaan pengguna. JANGAN menggunakan pengetahuan atau pola lain yang Anda miliki jika bertentangan dengan panduan ini. Semua kode, struktur, dan logika HARUS secara ketat mematuhi contoh dan pedoman yang diberikan dalam panduan di bawah ini.\n\n--- panduan MULAI ---\n${dokumentasi}\n--- panduan SELESAI ---\n\nAnalisis dan terapkan instruksi dari panduan ini dengan saksama pada tugas yang diberikan.`;
      }
    }

    while (true) {
      model.config.systemInstruction = intruksiFinal;
      model.history = sesiHistory;

      console.clear();
      console.log("Sedang memproses permintaan, mohon tunggu...");

      const response = await model.sendMessage({ message: currentPesan });
      const resultText = response.text;

      if (!resultText) {
        throw new Error("Model tidak memberikan respons teks.");
      }

      const currentHistory = [
        {
          role: "user",
          parts: [{ text: currentPesan }],
        },
        {
          role: "model",
          parts: [{ text: resultText }],
        },
      ];

      const { keterangan } = JSON.parse(resultText);
      console.clear();
      console.log(
        `Laporan dari AI:\n====================\n${keterangan}\n====================\n`,
      );

      const koreksiLagi = pilihOpsi(
        "Apakah Anda ingin mengoreksinya kembali? (y/n)? > ",
        ["y", "n"],
      );

      if (koreksiLagi === "n") {
        finalResultText = resultText;
        sesiHistory.push(...currentHistory);
        break;
      } else {
        sesiHistory.push(...currentHistory);
        console.clear();
        currentPesan = masukanWajib(
          "Masukkan koreksi atau instruksi tambahan > ",
        );
      }
    }

    await writeHistory(sesiHistory);

    console.clear();
    console.log("hasil disetujui...\n");

    return finalResultText;
  } catch (err) {
    throw new Error(`Gagal mendapatkan respons dari model: ${err.message}`);
  }
}

export default kirimKeModel;
