import kirimKeModel from "./service-kirim.js";
import readPrompt from "./service-prompt.js";
import { masukan } from "./service-print.js";
import generateApp from "./service-fileses.js";
import path from "path";
async function modeBuatProject() {
  console.clear();
  const teks = masukan("Gunakan file prompt.txt (y/n)? > ");
  let keyword = "";
  if (teks.toLowerCase() === "y") {
    try {
      const isiPrompt = await readPrompt();
      const konfir = masukan("Lanjutkan dengan prompt.txt (y/n)? > ");
      if (konfir.toLowerCase() === "n") {
        console.clear();
        keyword = masukan("Project seperti apa yang Anda inginkan? > ");
      } else {
        keyword = isiPrompt;
      }
    } catch (err) {
      console.clear();
      throw new Error(err.message);
      keyword = masukan("Project seperti apa yang Anda inginkan? > ");
    }
  } else {
    console.clear();
    keyword = masukan("Project seperti apa yang Anda inginkan? > ");
  }
  const rawResponse = await kirimKeModel(keyword);
  const parsedResponse = JSON.parse(rawResponse);
  let target;
  while (true) {
    console.clear();
    const nameRepo = masukan("masukkan nama repositori project?> ");
    if (!nameRepo.replace(/\W/g, "").trim()) {
      console.log("silakan masukkan nama project!");
      await new Promise((r) => setTimeout(r, 2000));
      continue;
    }
    target = path.resolve("./output", nameRepo);
    break;
  }
  await generateApp(parsedResponse, target);
}
export default modeBuatProject;
