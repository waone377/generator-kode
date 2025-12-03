import Print from "../util/tampilan.js";
import Masukan from "../util/input.js";
import { data } from "../util/files.js";
class Prompt {
  static async pembuatan() {
    const { dataPrompt } = await data();
    const pakePrompt = Masukan.pilih("gunakan prompt.txt (y/n)?> ", ["y", "n"]);
    let prompt = "";
    if (pakePrompt === "y") {
      prompt = dataPrompt;
      Print.clear("isi prompt:\n***", prompt || "kosong", "\n***");
      const next = Masukan.pilih("lanjutkan (y/n)?> ", ["y", "n"]);
      if (next === "n") {
        prompt = Masukan.wajib("project seperti apa yang ingin dibuat?> ");
      }
    } else {
      prompt = Masukan.wajib("project seperti apa yang ingin dibuat?> ");
    }
    return prompt;
  }
  static async perbaikan() {
    const { dataPrompt } = await data();
    const pakePrompt = Masukan.pilih("gunakan prompt.txt (y/n)?> ", ["y", "n"]);
    let prompt = "";
    if (pakePrompt === "y") {
      prompt = dataPrompt;
      Print.clear("isi prompt:\n***", prompt || "kosong", "\n***");
      const next = Masukan.pilih("lanjutkan (y/n)?> ", ["y", "n"]);
      if (next === "n") {
        prompt = Masukan.wajib("apa yang ingin diperbaiki?> ");
      }
    } else {
      prompt = Masukan.wajib("apa yang ingin diperbaiki?> ");
    }
    return prompt;
  }
}
export default Prompt;
