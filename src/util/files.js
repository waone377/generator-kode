import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";
import eee from "../config/ignore.js";
async function bacaFile(p, isJson = false) {
  try {
    const cek = path.extname(p);
    const data = await fs.readFile(p, "utf-8");
    return cek === ".json" && !isJson ? JSON.parse(data) : data;
  } catch (err) {
    throw new Error(`gagal  membaca file ${p}`);
  }
}
async function tulisFile(p, data) {
  try {
    await fs.writeFile(p, data);
  } catch (err) {
    throw new Error(`gagal menulis ke file ${p}`);
  }
}
async function buatFolder(p) {
  try {
    await fs.mkdir(p, { recursive: true });
  } catch (err) {
    throw new Error(`gagal membuat folder ${p}`);
  }
}
async function hapusFile(p) {
  try {
    await fs.unlink(p);
  } catch (err) {
    throw new Error(`gagal menghapus file ${p}`);
  }
}
async function hapusFolder(p) {
  try {
    await fs.rm(p, { recursive: true });
  } catch (err) {
    throw new Error(`gagal menghapus folder ${p}`);
  }
}
async function bacaFolder(p, { foldernya, filenya, extensinya }, mode) {
  try {
    const folder = [
      ...eee.folder.filter((e) => e).map((e) => `!${e}/**`),
      ...foldernya,
    ];
    const extensi = [
      ...eee.extensi.filter((e) => e).map((e) => `!**/*.${e.replace(".", "")}`),
      ...extensinya,
    ];
    let config = [];
    if (mode === "1") {
      config = [
        ...foldernya.map((e) => e.replace("!", "")),
        ...filenya.map((e) => e.replace("!", "")),
        ...extensinya.map((e) => e.replace("!", "")),
      ];
    } else {
      config = ["**/*.*", ...folder, ...filenya, ...extensi];
    }

    return await fg(config, { cwd: p, absolute: true, sort: true });
  } catch (err) {
    throw new Error(`gagal membaca folder ${p}`);
  }
}
async function cekAda(p) {
  try {
    await fs.access(p);
  } catch (err) {
    throw new Error(`gagal mengecek ${p}`);
  }
}
async function data() {
  try {
    const dataHistory = await bacaFile("history/riwayat.json");
    const targetData = await bacaFile("history/target.json");
    const dataIntruksi = await bacaFile("src/dok/intruksi.txt");
    const dataPrompt = await bacaFile("prompt.txt");
    return {
      dataHistory,
      dataTarget: targetData.target || "",
      dataIntruksi,
      dataPrompt,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}
export {
  bacaFile,
  tulisFile,
  buatFolder,
  hapusFile,
  hapusFolder,
  bacaFolder,
  cekAda,
  data,
};
