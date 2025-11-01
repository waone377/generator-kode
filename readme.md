# Generator-Kode: Generator & Refactor Kode Cerdas Berbasis AI

Generator-Kode adalah sebuah alat baris perintah (CLI) canggih yang ditenagai oleh Google Gemini AI untuk membantu developer mempercepat alur kerja mereka, baik dalam membuat struktur proyek baru dari awal maupun melakukan refactoring pada proyek yang sudah ada berdasarkan instruksi bahasa alami.

## Fitur Utama

- **Pembuatan Proyek Baru**: Hasilkan seluruh struktur folder dan file untuk proyek baru (misalnya, "buatkan saya API server Express dengan TypeScript") hanya dengan satu perintah.
- **Refactoring & Perbaikan Proyek**: Analisis kode proyek yang ada dan terapkan perubahan, tambahkan fitur baru, atau perbaiki bug sesuai instruksi Anda.
- **Pembacaan Proyek Selektif**: Kontrol penuh atas file mana yang dianalisis oleh AI, dengan mode inklusi (hanya baca yang dipilih) atau eksklusi (abaikan yang dipilih).
- **Riwayat Percakapan Berkonteks**: Menyimpan dan menggunakan kembali riwayat interaksi dengan AI, memungkinkan Anda untuk melakukan koreksi berulang hingga hasil yang diinginkan tercapai.
- **Konfigurasi Fleksibel**: Mudah untuk mengkonfigurasi model AI, temperature, dan parameter lainnya melalui file `.env`.
- **Dukungan Prompt Eksternal**: Gunakan file `prompt.txt` untuk instruksi yang lebih panjang dan kompleks, ideal untuk tugas yang rumit.

## Prasyarat

- [Node.js](https://nodejs.org/) (versi 18.x atau lebih tinggi)
- API Key dari [Google AI Studio](https://aistudio.google.com/app/apikey)

## Instalasi & Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan Gen-Kode di mesin lokal Anda.

**1. Clone Repositori**
```bash
git clone https://github.com/waone377/generator-kode.git
cd generator-kode
```

**2. Instal Dependensi**
```bash
npm install
```

**3. Konfigurasi Environment Variable**

Buat file baru bernama `.env` di root direktori proyek. Salin konten di bawah ini dan isi nilainya sesuai dengan konfigurasi Anda.

```env
API_KEY_GEMINI=?
MODEL=gemini-2.5-pro
TEMPERATURE=0.9
PEMIKIRAN=23000
MAX_OUTPUT_TOKENS=15000
```

- `API_KEY_GEMINI`: Kunci API Anda dari Google AI Studio. **Wajib diisi.**
- `MODEL`: Model Gemini yang ingin Anda gunakan. `gemini-2.5-flash` atau `gemini-2.5-pro` adalah pilihan yang solid dan direkomendasikan.
- `TEMPERATURE`: Mengontrol kreativitas output (0.0 - 2.0). Nilai yang lebih tinggi (misalnya, 0.9) menghasilkan output yang lebih beragam, sementara nilai yang lebih rendah (misalnya, 0.2) lebih fokus dan deterministik.
- `PEMIKIRAN`: Alokasi token untuk proses "berpikir" internal model sebelum menghasilkan respons.
- `MAX_OUTPUT_TOKENS`: Jumlah maksimum token yang dapat dihasilkan oleh model dalam satu respons.

## Cara Penggunaan

Jalankan aplikasi dari terminal:

```bash
npm start
```

Anda akan disambut dengan menu utama untuk memilih mode operasi.

### Mode 1: Membuat Project Baru

Ideal untuk memulai proyek dari nol berdasarkan deskripsi konseptual.

1.  Pilih menu `1`.
2.  Tentukan apakah akan menggunakan `prompt.txt` untuk deskripsi yang detail atau mengetik langsung di terminal.
3.  Setelah AI memproses permintaan, masukkan nama untuk folder proyek baru.
4.  Proyek akan dibuat di dalam direktori `output/<nama-proyek>`.

### Mode 2: Memperbaiki Project

Digunakan untuk memodifikasi, menambah fitur, atau memperbaiki kode pada proyek yang sudah ada.

1.  Pilih menu `2`.
2.  Masukkan path ke direktori proyek yang akan diperbaiki. Aplikasi akan mengingat path terakhir yang Anda gunakan.
3.  **Pilih Mode Pembacaan Source**:
    -   **Inklusi (Sertakan)**: Mode ini hanya akan menganalisis file/folder yang Anda tentukan secara spesifik. Berguna untuk perbaikan yang sangat terfokus.
    -   **Eksklusi (Kecualikan)**: Mode ini akan membaca seluruh proyek dan mengabaikan file/folder yang Anda tentukan. Direkomendasikan untuk pemahaman konteks yang lebih luas.
4.  Berikan instruksi perbaikan, baik melalui `prompt.txt` atau input langsung.
5.  Setelah AI memberikan solusi, pilih mode penyimpanan:
    -   **Timpa project asli**: Menerapkan perubahan langsung ke proyek sumber.
    -   **Membuat project baru**: Menyimpan versi yang telah diperbaiki sebagai proyek baru di dalam direktori `output/`.

### Mode 3: Reset History Percakapan

Opsi ini akan menghapus semua riwayat percakapan yang tersimpan di `history.json` untuk memulai sesi baru yang bersih.

## Struktur Proyek

- `app.js`: Titik masuk utama aplikasi, mengelola alur menu utama.
- `_config/`: Direktori pusat untuk semua modul dan konfigurasi.
  - `_instruct/`: Berisi file teks yang digunakan sebagai instruksi sistem untuk AI.
    - `intruksi.txt`: Instruksi inti peran dan format output AI.
    - `dokumentasi.txt`: Konteks tambahan atau dokumentasi teknis untuk AI.
  - `service_antarmuka_pengguna.js`: Mengelola interaksi dengan pengguna di terminal (input/output).
  - `service_definisi_skema.js`: Mendefinisikan skema JSON yang diharapkan dari respons AI.
  - `service_inisialisasi_model.js`: Menginisialisasi model Google Gemini dengan konfigurasi dari `.env`.
  - `service_manajemen_berkas.js`: Menangani operasi file system seperti membuat/menghapus file dan folder.
  - `service_manajemen_riwayat.js`: Mengelola pembacaan dan penulisan riwayat percakapan (`history.json`).
  - `service_pembaca_prompt.js`: Membaca konten dari `prompt.txt`.
  - `service_pembaca_proyek.js`: Membaca struktur dan konten proyek target menjadi format markdown.
  - `service_pembuatan_proyek.js`: Mengelola logika untuk mode "Membuat Project Baru".
  - `service_pengiriman_prompt.js`: Mengirim permintaan ke model AI, mengelola riwayat sesi, dan menangani koreksi.
  - `service_perbaikan_proyek.js`: Mengelola logika untuk mode "Memperbaiki Project".
  - `service_riwayat_lokasi.js`: Mengelola penyimpanan dan pembacaan path proyek terakhir (`history_path.json`).
  - `service_target_abaikan.js`: Berisi daftar file, folder, dan ekstensi yang akan diabaikan saat membaca proyek.
- `package.json`: Mendefinisikan metadata proyek, dependensi, dan skrip.
- `prompt.txt`: Tempat untuk menulis instruksi/prompt yang panjang atau kompleks untuk AI.
- `history.json`: (Dibuat saat runtime) Menyimpan riwayat percakapan dengan AI.
- `history_path.json`: Menyimpan path direktori terakhir yang digunakan dalam mode perbaikan.
- `output/`: Direktori default tempat proyek baru atau yang diperbaiki disimpan.
- `.gitignore`: Mengabaikan file dan folder yang tidak perlu dilacak oleh Git.
- `readme.md`: Dokumentasi proyek ini.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC.
