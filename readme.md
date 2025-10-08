# Gen-Kode: Generator & Refactor Kode Berbasis AI

Gen-Kode adalah sebuah alat baris perintah (CLI) yang ditenagai oleh Google Gemini AI untuk membantu developer dalam membuat struktur proyek baru dari awal atau memperbaiki (refactoring) proyek yang sudah ada berdasarkan deskripsi bahasa alami.

## Fitur Utama

- **Pembuatan Proyek Baru**: Hasilkan seluruh struktur folder dan file untuk proyek baru (misalnya, "buatkan saya API server Express dengan TypeScript") hanya dengan satu perintah.
- **Perbaikan & Refactoring Proyek**: Analisis kode proyek yang ada dan terapkan perubahan, tambahkan fitur baru, atau perbaiki bug sesuai instruksi Anda.
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
- `MODEL`: Model Gemini yang ingin Anda gunakan. `gemini-2.5-pro` adalah pilihan yang direkomendasikan.
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
- Jika tidak (`n`), Anda bisa langsung mengetikkan deskripsi proyek yang diinginkan di terminal (contoh: `buatkan saya aplikasi to-do list sederhana menggunakan React dan Tailwind CSS`).
- Setelah AI memproses permintaan, Anda akan diminta untuk memasukkan nama repositori/folder untuk proyek baru Anda.
- Proyek akan dibuat di dalam direktori `output/<nama-repositori>`.

### 2. Memperbaiki Project

- Pilih menu `2`.
- Masukkan path (lokasi) absolut atau relatif ke direktori proyek yang ingin Anda perbaiki. Aplikasi akan mengingat path terakhir yang Anda gunakan.
- Anda dapat menentukan folder, file, atau ekstensi file tambahan yang ingin dikecualikan dari proses pembacaan.
- Sama seperti mode pembuatan, Anda bisa menggunakan `prompt.txt` atau mengetikkan instruksi perbaikan secara langsung (contoh: `tambahkan endpoint baru untuk menghapus pengguna berdasarkan id di file controller`).
- Setelah AI memberikan solusinya, Anda akan diberi pilihan:
    1.  **Timpa project asli**: Menerapkan perubahan langsung ke proyek sumber.
    2.  **Membuat project baru**: Menyimpan versi yang telah diperbaiki sebagai proyek baru di dalam direktori `output/`.

### 3. Reset History Percakapan

- Pilih menu `3`.
- Opsi ini akan menghapus semua riwayat percakapan yang tersimpan di `history.json`. Ini berguna jika Anda ingin memulai sesi baru dengan AI tanpa konteks dari interaksi sebelumnya.

## Menggunakan `prompt.txt`

Untuk permintaan yang panjang atau kompleks, Anda dapat menuliskan deskripsi lengkap di dalam file `prompt.txt` di root direktori. Saat aplikasi bertanya "Gunakan file prompt.txt (y/n)?", jawab dengan `y` untuk menggunakan konten file tersebut sebagai input Anda.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC.