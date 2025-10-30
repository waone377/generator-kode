import fs from "fs/promises";
import path from "path";
async function generateApp(data, target, isDelet) {
  const defaultJalurOutput = path.join(path.resolve("."), "output");
  const basePath = target || defaultJalurOutput;
  console.clear();
  console.log(`Sedang membuat/memperbarui project di: ${basePath}`);
  try {
    // penanganan penghapusan
    await fs.mkdir(basePath, { recursive: true });
    if (isDelet && data.deleting) {
      for (const e of data.deleting) {
        const targetPath = path.join(basePath, e.lokasi);
        switch (e.jenis) {
          case "folder":
            await fs.rm(targetPath, { recursive: true });
            console.log(`${e.lokasi} Folder dihapus:..`);
            break;
          case "file":
            await fs.unlink(targetPath);
            console.log(`${e.lokasi} File dihapus:..`);
            break;
          default:
            console.warn(`Jenis komponen tidak dikenal: ${e.jenis}`);
            break;
        }
      }
    }
    // penanganan pembuatan
    if (data.aplication) {
      for (const item of data.aplication) {
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
    }
  } catch (err) {
    console.error(`Gagal saat membuat project: ${err.message}`);
  }
}
export default generateApp;
