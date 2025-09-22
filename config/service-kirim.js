import model from "./service-model.js";
import { readHistory, writeHistory } from "./service-history.js";
import { masukan } from "./service-print.js";
async function kirimKeModel(pesan) {
  try {
    const historyData = (await readHistory()) || [];
    console.clear();
    const konfirm = masukan("Gunakan history sebelumnya (y/n)? > ");
    model.history =
      konfirm.toLowerCase() === "y" && historyData.length > 0
        ? historyData.slice(-2)
        : [];
    console.clear();
    console.log("Sedang memproses permintaan, mohon tunggu...");
    const response = await model.sendMessage({ message: pesan });
    if (response.text) {
      await writeHistory(response.text);
    }
    const result = await response.text;
    return result;
  } catch (err) {
    throw new Error(`Gagal mendapatkan respons dari model: ${err.message}`);
  }
}
export default kirimKeModel;
