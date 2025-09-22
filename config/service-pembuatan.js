import kirimKeModel from "./service-kirim.js";
import readPrompt from "./service-prompt.js";
import { masukan } from "./service-print.js";
import generateApp from "./service-fileses.js";
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
  await generateApp(parsedResponse);
}
export default modeBuatProject;
