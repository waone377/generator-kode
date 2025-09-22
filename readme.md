# Generator Kode AI

Generator Kode AI adalah sebuah alat baris perintah (CLI) yang kuat berbasis Node.js untuk membuat dan memperbaiki struktur proyek perangkat lunak secara otomatis menggunakan kecerdasan buatan dari Google (Gemini).

## Fitur Utama

- **Pembuatan Proyek**: Buat struktur proyek lengkap dari awal hanya dengan memberikan deskripsi. Proyek baru akan dibuat di dalam folder `output/`.
- **Perbaikan Proyek**: Baca proyek yang sudah ada, dan minta AI untuk menambahkan fitur, melakukan refactoring, atau memperbaiki bug.
- **Pengecualian Dinamis**: Saat memperbaiki proyek, Anda bisa memasukkan nama folder atau ekstensi file tambahan yang ingin diabaikan secara langsung.
- **Mode Penyimpanan Fleksibel**: Pilih untuk menimpa file proyek asli dengan perbaikan atau menyimpan hasilnya di repository (folder) baru.
- **Manajemen History**: Simpan dan gunakan kembali riwayat percakapan dengan AI, atau reset jika diperlukan.
- **Dukungan Path Dinamis**: Dapat menerima input path seperti `~/Documents/proyek-saya` saat memilih proyek.

## Prasyarat

- [Node.js](https://nodejs.org/) (v18.x atau lebih baru)
- Kunci API dari [Google AI Studio](https://aistudio.google.com/app/apikey).

## Instalasi & Konfigurasi

1.  **Clone Repository:**

    ```bash
    git clone <https://github.com/waone377/generator-kode.git
    cd generator-kode
    ```

2.  **Install Dependensi:**

    ```bash
    npm install
    ```

3.  **Konfigurasi Lingkungan:**

    - Buat file baru bernama `.env` di root direktori proyek.
    - Salin dan tempel konten berikut ke dalam file `.env` tersebut.

    ```env
    # Masukkan kunci API Anda yang didapat dari Google AI Studio
    API_KEY_GEMINI=

    # Konfigurasi Model (opsional, bisa menggunakan default)
    MODEL=gemini-2.5-pro
    TEMPERATURE=0.9
    PEMIKIRAN=23000
    MAX_OUTPUT_TOKENS=15000
    ```

    - **Penting**: Isi variabel `API_KEY_GEMINI` dengan kunci API Anda.

## Cara Penggunaan

Jalankan aplikasi melalui terminal:

```bash
npm start
```

### Opsi Menu

Anda akan disambut dengan menu utama:

1.  **Membuat Project Baru**: Membuat proyek dari nol berdasarkan deskripsi Anda. Anda bisa mengetik prompt langsung atau menggunakan isi dari file `prompt.txt`.
2.  **Memperbaiki Project**: Memodifikasi proyek yang sudah ada.
    - **Masukkan Path**: Tentukan lokasi proyek yang akan diperbaiki.
    - **Pengecualian Tambahan**: Masukkan folder atau nama file (misal: `dist, build`) atau ekstensi file (misal: `.log, .tmp`) yang ingin diabaikan, dipisahkan koma.
    - **Masukkan Perintah Perbaikan**: Jelaskan apa yang ingin Anda ubah atau tambahkan.
    - **Pilih Mode Simpan**: Tentukan apakah ingin **menimpa** file asli atau **membuat repository baru** di folder `output/`.
3.  **Reset History Percakapan**: Menghapus semua riwayat percakapan di `history.json` untuk memulai sesi baru.

## Struktur Proyek

```
generator-kode/

├── config/                 # Direktori pusat untuk semua modul logika aplikasi.
│   ├── intruksi.txt        # Instruksi sistem (system prompt) yang mendefinisikan peran AI.
│   ├── schema.js           # Skema JSON untuk memastikan output AI terstruktur.
│   ├── targets.js          # Konfigurasi default file/folder yang diabaikan saat revisi.
│   ├── service-api.js      # Menginisialisasi koneksi ke Google GenAI API.
│   ├── service-fileses.js  # Menulis struktur file & folder yang dihasilkan AI ke disk.
│   ├── service-history.js  # Mengelola baca/tulis/reset riwayat percakapan.
│   ├── service-kirim.js    # Mengirim prompt pengguna ke model AI dan mengelola riwayat.
│   ├── service-model.js    # Mengonfigurasi instance model AI dengan instruksi & parameter.
│   ├── service-pembuatan.js# Mengelola alur kerja untuk mode "Membuat Project Baru".
│   ├── service-perbaikan.js# Mengelola alur kerja untuk mode "Memperbaiki Project".
│   ├── service-print.js    # Fungsi bantuan untuk menampilkan UI dan menerima input di konsol.
│   ├── service-prompt.js   # Membaca konten dari file prompt.txt.
│   └── service-revisi.js   # Membaca proyek yang ada dan mengubahnya menjadi konteks untuk AI.
├── .env                    # File konfigurasi environment (kunci API, dll). (Tidak di-commit)
├── .gitignore              # Daftar file & folder yang diabaikan oleh Git.
├── app.js                  # Titik masuk utama aplikasi yang menjalankan menu utama.
├── history.json            # Menyimpan riwayat percakapan dengan AI untuk menjaga konteks.
├── package-lock.json       # Mengunci versi dependensi yang terinstal.
├── package.json            # Manifes proyek: dependensi, skrip, dan metadata.
├── prompt.txt              # File opsional untuk menyimpan prompt yang panjang/kompleks.
└── readme.md               # Dokumentasi proyek ini.
```
