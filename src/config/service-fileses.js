import fs from "fs/promises";
import path from "path";
const jalur = path.join(path.resolve("src"), "output");
async function generateApp(data) {
  console.clear();
  console.log("sedang membuat project..");
  console.log("semua disimpan di folder output/");
  try {
    for (const e of data) {
      const to = path.join(jalur, e.lokasi);
      switch (e.jenis) {
        case "dokumentasi":
          await fs.writeFile(to, e.konten);
          console.log(`file ${e.lokasi}, selesai dibuat..`);
          break;
        case "config":
          await fs.writeFile(to, e.konten);
          console.log(`file ${e.lokasi}, selesai dibuat..`);
          break;
        case "folder":
          await fs.mkdir(to, { recursive: true });
          console.log(`folder ${e.lokasi}, selesai dibuat..`);
          break;
        case "file":
          await fs.writeFile(to, e.konten);
          console.log(`file ${e.lokasi}, selesai dibuat..`);
          break;
        default:
          console.log("jenis komponen tidak benar!");
          break;
      }
    }
  } catch (err) {
    console.error(err.message);
  }
}
export default generateApp;
