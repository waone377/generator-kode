import modeBuatProject from "./_config/service_pembuatan_proyek.js";
import modePerbaikiProject from "./_config/service_perbaikan_proyek.js";
import { resetHistory } from "./_config/service_manajemen_riwayat.js";
import { masukan, printMenu } from "./_config/service_antarmuka_pengguna.js";

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
