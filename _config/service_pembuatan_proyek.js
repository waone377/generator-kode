import kirimKeModel from "./service_pengiriman_prompt.js";
import readPrompt from "./service_pembaca_prompt.js";
import { masukanWajib, pilihOpsi } from "./service_antarmuka_pengguna.js";
import generateApp from "./service_manajemen_berkas.js";
import path from "path";

async function modeBuatProject() {
  console.clear();
  const gunakanPromptFile = pilihOpsi("Gunakan file prompt.txt (y/n)? > ", [
    "y",
    "n",
  ]);
  let keyword = "";

  if (gunakanPromptFile === "y") {
    try {
      const isiPrompt = await readPrompt();
      const konfir = pilihOpsi("Lanjutkan dengan prompt.txt (y/n)? > ", [
        "y",
        "n",
      ]);
      if (konfir === "n") {
        console.clear();
        keyword = masukanWajib("Project seperti apa yang Anda inginkan? > ");
      } else {
        keyword = isiPrompt;
      }
    } catch (err) {
      console.clear();
      console.error(err.message);
      keyword = masukanWajib("Project seperti apa yang Anda inginkan? > ");
    }
  } else {
    console.clear();
    keyword = masukanWajib("Project seperti apa yang Anda inginkan? > ");
  }

  const raw = await kirimKeModel(keyword);
  const response = JSON.parse(raw);

  const nameRepo = masukanWajib("Masukkan nama repositori project > ");
  const target = path.resolve("./output", nameRepo);

  await generateApp(response, target, false);
}

export default modeBuatProject;
