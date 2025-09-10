import fs from "fs/promises";
import path from "path";
import eee from "./targets.js";
async function bacaProjectKeMarkdown(
  dirPath,
  basePath = dirPath,
  opsiPengecualian = { folders: [], fileExct: [] },
) {
  const ignoredDirs = new Set([...eee.folders, ...opsiPengecualian.folders]);
  const ignoredExtensions = new Set([
    ...eee.fileExct,
    ...opsiPengecualian.fileExct,
  ]);
  console.log("Folder yang dikecualikan:", Array.from(ignoredDirs));
  console.log(
    "Ekstensi file yang dikecualikan:",
    Array.from(ignoredExtensions),
  );
  async function bacaRekursif(currentDir) {
    let markdownContent = "";
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (ignoredDirs.has(entry.name)) {
          console.log(`-> Mengabaikan folder: ${entry.name}`);
          continue;
        }
        markdownContent += await bacaRekursif(fullPath);
      } else if (entry.isFile()) {
        const fileExtension = path.extname(entry.name).toLowerCase();
        if (ignoredExtensions.has(fileExtension)) {
          console.log(`-> Mengabaikan file: ${entry.name}`);
          continue;
        }
        try {
          const relativePath = path
            .relative(basePath, fullPath)
            .replace(/\\/g, "/");
          console.log(`Membaca file: ${relativePath}`);
          const content = await fs.readFile(fullPath, "utf-8");
          markdownContent += `**lokasi asal**\n${relativePath}\n\n**isi konten asli**\n\`\`\`\n${content}\n\`\`\`\n\n---\n\n`;
        } catch (readError) {
          console.warn(
            `Peringatan: Gagal membaca file ${fullPath}. Mungkin file ini biner atau rusak.`,
          );
        }
      }
    }
    return markdownContent;
  }
  return await bacaRekursif(dirPath);
}
export { bacaProjectKeMarkdown };
