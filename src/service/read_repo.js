import path from "path";
import { bacaFolder, bacaFile, tulisFile, cekAda } from "../util/files.js";
import Print from "../util/tampilan.js";
import Masukan from "../util/input.js";
async function readRepo(target) {
  try {
    const data = {
      folder: [],
      file: [],
      extensi: [],
    };
    const mode = Masukan.pilih(
      "pilih pembacaan file & folder:\n1. pilih beberapa\n2. kecualikan beberapa\nsilahkan pilih (1/2)?> ",
      ["1", "2"],
    );
    const text = mode === "1" ? "dipilih" : "dikecualikan";
    Masukan.pilih(
      "jika folder/file/extensi/ lebih dari satu pisahkan dengan (,)\ncontoh:\nfolder: dist, node_modules\nfile: example.js, config.json\nextensi: .txt, .py\n mengerti lanjut (y/n): ",
      ["y", "n"],
    );
    const foldernya = Masukan.biasa(
      `masukkan nama volder yang ingin ${text}?: `,
    );
    data.folder.push(foldernya.replaceAll(" ", "").split(","));
    const filenya = Masukan.biasa(
      `masukkan nama file yang ingin ${text} beserta extensinya?: `,
    );
    data.file.push(filenya.replaceAll(" ", "").split(","));
    const extensinya = Masukan.biasa(
      `masukkan format extensi yang ingin ${text}?: `,
    );
    data.extensi.push(extensinya.replaceAll(" ", "").split(","));
    const daftar = {
      foldernya: data.folder
        .flat()
        .filter((e) => e)
        .map((e) => `!${e}/**`),
      filenya: data.file
        .flat()
        .filter((e) => e)
        .map((e) => `!**/${e}`),
      extensinya: data.extensi
        .flat()
        .filter((e) => e)
        .map((e) => `!**/*.${e.replace(".", "")}`),
    };
    const repo = await bacaFolder(target, daftar, mode);
    const dir = target.split("/").pop();
    Print.clear("membaca...\nvolder:", dir, "\npath:", target, "\n===");
    let markdown = "";
    for (const e of repo) {
      const letak = e.substring(e.indexOf(dir) + dir.length + 1, e.length);
      Print.log("sedang membaca", letak);
      const kode = await bacaFile(e, true);
      markdown += `\n\n---\n\n*lokasi*\n\n${letak}\n\n*isi konten*\n\n\`\`\`\n${kode}\n\`\`\`\n\n---`;
    }
    const echo = `nama repository: ${dir}\n${markdown}`;
    await tulisFile("history/repo.md", echo);
    Print.log("selesai terbaca");
    return echo;
  } catch (err) {
    throw new Error(err.message);
  }
}
export default readRepo;
