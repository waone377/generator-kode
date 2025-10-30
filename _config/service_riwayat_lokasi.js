import fs from "fs/promises";

const LAST_PATH_FILE = "history_path.json";

async function writeLastPath(targetPath) {
  try {
    const data = JSON.stringify({ lastPath: targetPath }, null, 2);
    await fs.writeFile(LAST_PATH_FILE, data, "utf-8");
  } catch (err) {
    console.warn(`Peringatan: Gagal menyimpan path terakhir: ${err.message}`);
  }
}

async function readLastPath() {
  try {
    const data = await fs.readFile(LAST_PATH_FILE, "utf-8");
    const parsedData = JSON.parse(data);
    if (parsedData && typeof parsedData.lastPath === "string") {
      return parsedData.lastPath;
    }
    return null;
  } catch (err) {
    if (err.code === "ENOENT" || err instanceof SyntaxError) {
      return null;
    }
    console.warn(`Peringatan: Gagal membaca path terakhir: ${err.message}`);
    return null;
  }
}

export { writeLastPath, readLastPath };
