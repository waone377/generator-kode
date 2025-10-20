import model from "./service_inisialisasi_model.js";
import { readHistory, writeHistory } from "./service_manajemen_riwayat.js";
import { masukan } from "./service_antarmuka_pengguna.js";

async function kirimKeModel(pesan) {
  try {
    const historyData = await readHistory();

    console.clear();
    console.log("item history: ", historyData.length);
    const konfirm = masukan("Gunakan history sebelumnya (y/n)? > ");
    let activeHistory = [];
    if (konfirm.toLowerCase() === "y" && historyData.length > 0) {
      activeHistory = historyData.slice(-2);
    }

    model.history = activeHistory;

    console.clear();
    console.log("Sedang memproses permintaan, mohon tunggu...");

    const response = await model.sendMessage({ message: pesan });
    const resultText = response.text;

    if (resultText) {
      const fullHistoryToSave = activeHistory.concat([
        {
          role: "user",
          parts: [{ text: pesan }],
        },
        {
          role: "model",
          parts: [{ text: resultText }],
        },
      ]);
      await writeHistory(fullHistoryToSave);
    }

    return resultText;
  } catch (err) {
    throw new Error(`Gagal mendapatkan respons dari model: ${err.message}`);
  }
}

export default kirimKeModel;
