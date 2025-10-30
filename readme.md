# Gen-Kode: Generator & Refactor Kode Cerdas Berbasis AI

Gen-Kode adalah sebuah alat baris perintah (CLI) canggih yang ditenagai oleh Google Gemini AI untuk membantu developer mempercepat alur kerja mereka, baik dalam membuat struktur proyek baru dari awal maupun melakukan refactoring pada proyek yang sudah ada berdasarkan instruksi bahasa alami.

## Fitur Utama

- **Pembuatan Proyek Baru**: Hasilkan seluruh struktur folder dan file untuk proyek baru (misalnya, "buatkan saya API server Express dengan TypeScript") hanya dengan satu perintah.
- **Refactoring & Perbaikan Proyek**: Analisis kode proyek yang ada dan terapkan perubahan, tambahkan fitur baru, atau perbaiki bug sesuai instruksi Anda.
- **Pembacaan Proyek Selektif**: Kontrol penuh atas file mana yang dianalisis oleh AI saat refactoring, dengan mode inklusi (hanya baca yang dipilih) atau eksklusi (abaikan yang dipilih).
- **Riwayat Percakapan**: Menyimpan riwayat interaksi dengan AI, memungkinkan Anda untuk melanjutkan percakapan sebelumnya untuk konteks yang lebih baik.
- **Konfigurasi Fleksibel**: Mudah untuk mengkonfigurasi model AI, temperature, dan parameter lainnya melalui file `.env`.
- **Dukungan Prompt Eksternal**: Gunakan file `prompt.txt` untuk instruksi yang lebih panjang dan kompleks.

## Prasyarat

- [Node.js](https://nodejs.org/) (versi 18.x atau lebih tinggi)
- [Git](https://git-scm.com/)
- API Key dari [Google AI Studio](https://aistudio.google.com/app/apikey)

## Instalasi & Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan Gen-Kode di mesin lokal Anda.

**1. Clone Repositori**

```bash
git clone https://github.com/waone377/generator-kode.git
```

**2. Masuk ke Direktori Proyek**

```bash
cd generator-kode
```

**3. Instal Dependensi**

```bash
npm install
```

**4. Konfigurasi Environment Variable**

Buat file baru bernama `.env` di root direktori proyek. Salin konten dari contoh di bawah ini dan isi nilainya sesuai dengan konfigurasi Anda.

```env
API_KEY_GEMINI=?
MODEL=gemini-2.5-pro
TEMPERATURE=0.9
PEMIKIRAN=23000
MAX_OUTPUT_TOKENS=15000
```

- `API_KEY_GEMINI`: Kunci API Anda dari Google AI Studio. **Wajib diisi.**
- `MODEL`: Model Gemini yang ingin Anda gunakan. `gemini-1.5-pro-latest` adalah pilihan yang solid dan direkomendasikan.
- `TEMPERATURE`: Mengontrol keacakan output. Nilai yang lebih tinggi (misalnya, 0.9) menghasilkan output yang lebih kreatif, sementara nilai yang lebih rendah (misalnya, 0.2) lebih deterministik.
- `PEMIKIRAN`: Alokasi token untuk proses "berpikir" internal model sebelum menghasilkan respons.
- `MAX_OUTPUT_TOKENS`: Jumlah maksimum token yang dapat dihasilkan oleh model dalam satu respons.

## Cara Penggunaan

Jalankan aplikasi dengan perintah berikut:

```bash
npm start
```

Anda akan disambut dengan menu utama:

```
*GENERATOR CODE*
Pilih mode yang ingin Anda jalankan:
1. Membuat Project Baru
2. Memperbaiki Project
3. Reset History Percakapan
ketik 'exit' untuk keluar..
===
```

### 1. Membuat Project Baru

- Pilih menu `1`.
- Anda akan ditanya apakah ingin menggunakan `prompt.txt`. Jika ya (`y`), konten dari file tersebut akan digunakan sebagai deskripsi proyek.
- Jika tidak (`n`), Anda bisa langsung mengetikkan deskripsi proyek yang diinginkan di terminal.
- Setelah AI memproses permintaan, Anda akan diminta untuk memasukkan nama repositori/folder untuk proyek baru Anda.
- Proyek akan dibuat di dalam direktori `output/<nama-repositori>`.

### 2. Memperbaiki Project

- Pilih menu `2`.
- Masukkan path (lokasi) ke direktori proyek yang ingin Anda perbaiki. Aplikasi akan mengingat path terakhir yang Anda gunakan.
- **Pilih Mode Pembacaan Source**: Anda akan diberikan pilihan untuk mengontrol file apa saja yang akan dianalisis oleh AI:
  - **Inklusi (Sertakan)**: Mode ini hanya akan mengirimkan file dan folder yang Anda tentukan secara spesifik. Berguna untuk perbaikan yang sangat terfokus.
  - **Eksklusi (Kecualikan)**: Mode ini akan membaca seluruh proyek dan mengabaikan file atau folder yang Anda tentukan. Ini adalah mode default dan direkomendasikan untuk pemahaman konteks yang lebih luas.
  - Filter dapat diterapkan berdasarkan nama folder, nama file, dan ekstensi file.
- Sama seperti mode pembuatan, Anda bisa menggunakan `prompt.txt` atau mengetikkan instruksi perbaikan secara langsung.
- Setelah AI memberikan solusinya, Anda akan diberi pilihan:
  1. **Timpa project asli**: Menerapkan perubahan langsung ke proyek sumber.
  2. **Membuat project baru**: Menyimpan versi yang telah diperbaiki sebagai proyek baru di dalam direktori `output/`.

### 3. Reset History Percakapan

- Pilih menu `3`.
- Opsi ini akan menghapus semua riwayat percakapan yang tersimpan di `history.json`.

## Struktur Proyek

Berikut adalah gambaran singkat tentang file dan folder penting dalam proyek ini:

- `app.js`: Titik masuk utama aplikasi yang menangani logika menu.
- `_config/`: Direktori inti yang berisi semua logika layanan.
  - `service_inisialisasi_model.js`: Konfigurasi dan inisialisasi model AI.
  - `service_pembuatan_proyek.js`: Logika untuk mode "Buat Proyek Baru".
  - `service_perbaikan_proyek.js`: Logika untuk mode "Perbaiki Proyek".
  - `service_pembaca_proyek.js`: Fungsi untuk membaca dan mem-parsing struktur proyek menjadi format markdown.
  - `service_manajemen_berkas.js`: Menangani pembuatan/penghapusan file dan folder.
- `history.json`: Menyimpan riwayat percakapan terakhir dengan AI.
- `history_path.json`: Menyimpan path direktori terakhir yang digunakan dalam mode perbaikan.
- `prompt.txt`: Tempat untuk menulis prompt yang panjang atau kompleks.
- `output/`: Direktori default tempat proyek baru akan dibuat.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC.
