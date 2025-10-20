import fs from "fs/promises";
import path from "path";
import eee from "./service_target_abaikan.js";

async function bacaProjectKeMarkdown(
  dirPath,
  basePath = dirPath,
  opsiBaca = { mode: "exclude", folders: [], files: [], fileExct: [] },
) {
  async function bacaRekursif(currentDir) {
    let markdownContent = "";
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        if (eee.folders.includes(entry.name)) {
          continue;
        }
        if (
          opsiBaca.mode === "exclude" &&
          opsiBaca.folders.includes(entry.name)
        ) {
          continue;
        }
        markdownContent += await bacaRekursif(fullPath);
      } else if (entry.isFile()) {
        const relativePath = path
          .relative(basePath, fullPath)
          .replace(/\\/g, "/");
        const fileExtension = path.extname(entry.name).toLowerCase();
        const fileName = entry.name.toLowerCase();

        if (eee.fileExct.includes(fileExtension)) {
          continue;
        }

        let shouldProcess = false;

        if (opsiBaca.mode === "include") {
          const includedDirs = new Set(opsiBaca.folders);
          const includedFiles = new Set(opsiBaca.files);
          const includedExtensions = new Set(opsiBaca.fileExct);

          if (
            includedDirs.size === 0 &&
            includedFiles.size === 0 &&
            includedExtensions.size === 0
          ) {
            shouldProcess = false;
          } else {
            if (includedExtensions.has(fileExtension)) shouldProcess = true;
            if (includedFiles.has(fileName)) shouldProcess = true;
            if (relativePath.split("/").some((part) => includedDirs.has(part)))
              shouldProcess = true;
          }
        } else {
          const ignoredFiles = new Set(opsiBaca.files);
          const ignoredExtensions = new Set(opsiBaca.fileExct);

          if (
            ignoredExtensions.has(fileExtension) ||
            ignoredFiles.has(fileName)
          ) {
            continue;
          }
          shouldProcess = true;
        }

        if (shouldProcess) {
          try {
            console.log(`Membaca file: ${relativePath}`);
            const content = await fs.readFile(fullPath, "utf-8");
            markdownContent += `**lokasi**\n${relativePath}\n\n**isi konten**\n\`\`\`\n${content}\n\`\`\`\n\n---\n\n`;
          } catch (readError) {
            console.warn(
              `Peringatan: Gagal membaca file ${fullPath}. Mungkin file ini biner atau rusak.`,
            );
          }
        }
      }
    }
    return markdownContent;
  }

  return await bacaRekursif(dirPath);
}

export { bacaProjectKeMarkdown };
