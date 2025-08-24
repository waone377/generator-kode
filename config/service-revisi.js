import fs from "fs/promises";
import path from "path";

const ignoredExtensions = new Set([
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.ico',
    '.mp3', '.wav', '.ogg', '.flac', '.aac',
    '.mp4', '.mov', '.avi', '.mkv', '.webm',
    '.zip', '.rar', '.7z', '.tar', '.gz',
    '.woff', '.woff2', '.ttf', '.otf', '.eot',
    '.lock', '.log', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
    '.exe', '.dll', '.so', '.class', '.pyc', '.jar', '.bin', '.img', '.iso'
]);

const ignoredDirs = new Set(['node_modules', '.git', '.vscode', '.idea', '__pycache__']);

async function bacaProjectKeMarkdown(dirPath, basePath = dirPath) {
  let markdownContent = "";
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) {
        continue;
      }
      markdownContent += await bacaProjectKeMarkdown(fullPath, basePath);
    } else if (entry.isFile()) {
      const fileExtension = path.extname(entry.name).toLowerCase();
      if (ignoredExtensions.has(fileExtension)) {
        continue;
      }

      try {
        const relativePath = path.relative(basePath, fullPath).replace(/\\/g, "/");
        const content = await fs.readFile(fullPath, "utf-8");
        
        markdownContent += `**lokasi**\n${relativePath}\n\n`;
        markdownContent += `**isi konten**\n\`\`\`\n${content}\n\`\`\`\n\n---\n\n`;
      } catch (readError) {
        console.warn(`Peringatan: Gagal membaca file ${fullPath}. Mungkin file ini biner atau rusak.`);
      }
    }
  }

  return markdownContent;
}

export { bacaProjectKeMarkdown };
