import fs from "fs/promises";
import path from "path";
async function generateApp(data, target) {
  const defaultJalurOutput = path.join(path.resolve("."), "output");
  const basePath = target || defaultJalurOutput;
  console.clear();
  console.log(`Sedang membuat/memperbarui project di: ${basePath}`);
  try {
    await fs.mkdir(basePath, { recursive: true });
    for (const item of data) {
      const targetPath = path.join(basePath, item.lokasi);
      switch (item.jenis) {
        case "folder":
          await fs.mkdir(targetPath, { recursive: true });
          console.log(`Folder dibuat: ${item.lokasi}`);
          break;
        case "file":
        case "dokumentasi":
        case "config":
          await fs.mkdir(path.dirname(targetPath), { recursive: true });
          await fs.writeFile(targetPath, item.konten || "");
          console.log(`File dibuat: ${item.lokasi}`);
          break;
        default:
          console.warn(`Jenis komponen tidak dikenal: ${item.jenis}`);
          break;
      }
    }
  } catch (err) {
    console.error(`Gagal saat membuat project: ${err.message}`);
  }
}
export default generateApp;
