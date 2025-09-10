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
    git clone <URL_REPO_ANDA> gen-kode
    cd gen-kode
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
    - **Pengecualian Tambahan**: Masukkan folder (misal: `dist, build`) atau ekstensi file (misal: `.log, .tmp`) yang ingin diabaikan, dipisahkan koma.
    - **Masukkan Perintah Perbaikan**: Jelaskan apa yang ingin Anda ubah atau tambahkan.
    - **Pilih Mode Simpan**: Tentukan apakah ingin **menimpa** file asli atau **membuat repository baru** di folder `output/`.
3.  **Reset History Percakapan**: Menghapus semua riwayat percakapan di `history.json` untuk memulai sesi baru.

## Struktur Proyek

```
gen-kode/
├── config/                 # Modul service dan konfigurasi
│   ├── intruksi.txt        # Instruksi sistem untuk model AI
│   ├── schema.js           # Skema JSON untuk respons AI
│   ├── service-api.js      # Koneksi ke API Google GenAI
│   ├── service-fileses.js  # Logika pembuatan file/folder
│   ├── service-model.js    # Konfigurasi model AI
│   ├── service-print.js    # Fungsi UI konsol
│   ├── service-revisi.js   # Logika membaca struktur proyek
│   └── targets.js          # Daftar file/folder default yang diabaikan
├── .env                    # File konfigurasi environment (kunci API, dll)
├── .gitignore              # File yang diabaikan oleh Git
├── app.js                  # Titik masuk utama aplikasi
├── history.json            # Menyimpan riwayat percakapan dengan AI
├── package-lock.json       # Informasi detail dependensi
├── package.json            # Dependensi dan skrip proyek
├── prompt.txt              # File untuk menyimpan prompt yang panjang/kompleks
└── readme.md               # Dokumentasi ini
```
