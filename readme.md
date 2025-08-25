# Generator Kode AI Versi 3

Generator Kode AI adalah sebuah alat baris perintah (CLI) yang kuat berbasis Node.js untuk membuat dan memperbaiki struktur proyek perangkat lunak secara otomatis menggunakan kecerdasan buatan dari Google (Gemini).

Versi 3 menambahkan kemampuan untuk secara cerdas mengabaikan file yang tidak relevan (gambar, video, audio, biner, dll.) saat membaca proyek untuk perbaikan.

## Fitur Utama

- **Pembuatan Proyek**: Buat struktur proyek lengkap dari awal hanya dengan memberikan deskripsi dalam bahasa natural. Proyek baru akan dibuat di dalam folder `output/`.
- **Perbaikan Proyek**: Baca proyek yang sudah ada dari lokasi mana pun, dan minta AI untuk menambahkan fitur, melakukan refactoring, atau memperbaiki bug.
- **Pengabaian File Cerdas**: Secara otomatis mengabaikan file gambar, video, audio, dan file biner lainnya saat membaca struktur proyek, membuat proses lebih cepat dan konteks lebih relevan.
- **Dukungan Path Dinamis**: Dapat menerima input path seperti `~/Documents/proyek-saya` atau `../proyek-lama` saat memilih proyek yang akan diperbaiki.
- **Modular & Interaktif**: Kode sumber yang terstruktur dan antarmuka baris perintah yang mudah digunakan.

## Prasyarat

- [Node.js](https://nodejs.org/) (disarankan versi 18.x atau lebih baru)
- Kunci API dari [Google AI Studio](https://aistudio.google.com/app/apikey).

## Instalasi

1.  **unduh Proyek ini:** clone repository ini.

    ```bash
    git clone https://github.com/waone377/generator-kode.git
    ```

*pastikan `git` sudah terinstal..*

2.  **Masuk ke direktori proyek:**
    ```bash
    cd generator-kode
    ```

3.  **Install dependensi yang diperlukan:**
    ```bash
    npm install
    ```

4.  **Konfigurasi Lingkungan:**
    -   buatlah file  `.env`.

```bash
nano .env
```

*pastikan `nano` sudah terinstal..*

isi dengan

```.env
API_KEY_GEMINI=?
MODEL=gemini-2.5-pro
TEMPERATUR=0.9
PEMIKIRAN=23000

```

*ganti **?** dengan api key yang telah anda dapatkan..*

## Cara Penggunaan

Jalankan aplikasi melalui terminal dengan perintah berikut:

```bash
npm start
```

### Opsi Menu

Setelah aplikasi berjalan, Anda akan diberikan dua pilihan utama:

#### 1. Membuat Project Baru

Pilih opsi ini untuk membuat proyek dari awal.
-   Aplikasi akan memproses permintaan dan membuat semua file dan folder di dalam direktori `output/`.

#### 2. Memperbaiki Project

Pilih opsi ini untuk memodifikasi atau menambahkan fitur pada proyek yang sudah ada.
-   **Masukkan Path**: Anda akan diminta memasukkan path ke folder proyek yang ingin diperbaiki.
-   **Analisis Proyek**: Aplikasi akan memindai semua file teks dari direktori tersebut, mengabaikan file media/biner dan folder seperti `node_modules`.
-   **Masukkan Perintah Perbaikan**: Berikan instruksi perbaikan (contoh: *"tambahkan validasi email di endpoint register"*).
-   Aplikasi akan mengirimkan konteks proyek beserta perintah Anda ke AI dan menghasilkan struktur file yang telah diperbarui di lokasi yang sama.

## Struktur Proyek (Generator Kode ini)

```
generator-kode/
├── config/             # Folder konfigurasi dan modul service
│   ├── schema.js       # Skema JSON untuk respons AI
│   ├── service-api.js  # Koneksi ke API Google GenAI
│   ├── service-fileses.js # Logika untuk membuat file dan folder
│   ├── service-model.js # Konfigurasi model AI
│   ├── service-print.js # Fungsi-fungsi untuk UI konsol
│   └── service-revisi.js # Fungsi untuk membaca project dengan filter file
├── app.js              # Titik masuk utama aplikasi
├── history.json        # Menyimpan riwayat percakapan dengan AI
├── package.json        # Dependensi dan skrip NPM
├── prompt.txt          # Contoh file prompt untuk membuat project
└── readme.md           # Dokumentasi ini
```
