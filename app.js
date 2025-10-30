import modeBuatProject from "./_config/service_pembuatan_proyek.js";
import modePerbaikiProject from "./_config/service_perbaikan_proyek.js";
import { resetHistory } from "./_config/service_manajemen_riwayat.js";
import { pilihOpsi, printMenu } from "./_config/service_antarmuka_pengguna.js";

async function main() {
  while (true) {
    printMenu();
    const pilihan = pilihOpsi("Pilih menu (1/2/3)? > ", ["1", "2", "3"]);
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
          break;
      }
      console.log("\nProses selesai...\n");
    } catch (error) {
      console.error(`\nOops! Terjadi kesalahan: ${error.message}`);
    }
    const lanjut = pilihOpsi("Ingin lanjut proses lain (y/n)? > ", ["y", "n"]);
    if (lanjut === "n") {
      console.clear();
      console.log("Program telah berhenti...");
      process.exit(0);
    }
  }
}

main();
