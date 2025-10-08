import modeBuatProject from "./config/service-pembuatan.js";
import modePerbaikiProject from "./config/service-perbaikan.js";
import { resetHistory } from "./config/service-history.js";
import { print, masukan, printMenu } from "./config/service-print.js";
async function main() {
  while (true) {
    printMenu();
    const pilihan = masukan("Pilih menu (1/2/3)? > ");
    try {
      switch (pilihan) {
        case "1":
          await modeBuatProject();
          break;
        case "2":
          await modePerbaikiProject();
          break;
        case "3":
          await resetHistory();
          await new Promise((r) => setTimeout(r, 2000));
          continue;
        default:
          console.clear();
          console.log("Pilihan tidak valid.");
          await new Promise((r) => setTimeout(r, 2000));
          continue;
      }
      console.log("\nProses selesai...\n");
    } catch (error) {
      console.error(`\noops..errorr ${error.message} !!!`);
    }
    const lanjut = masukan("Ingin lanjut proses lain (y/n)? > ");
    if (lanjut.toLowerCase() === "n") {
      console.clear();
      console.log("program telah berhenti...");
      process.exit(0);
    }
  }
}
main();
