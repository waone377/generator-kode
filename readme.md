# Generator Kode Bertenaga Gemini

**Generator Kode**, adalah aplikasi Node.js yang memanfaatkan kekuatan AI dari Google Gemini untuk menghasilkan kode secara otomatis berdasarkan perintah pengguna.

## Fitur

- Menghasilkan kode dari prompt pengguna.
- Berbasis AI dengan API Gemini.
- Mudah dijalankan secara lokal.

## Instalasi

### 1.  Clone repositori ini
jalankan perintah terminal di bawah 

```bash
git clone https://github.com/waone377/generator-kode.git
```
pastikan **git** sudah terinstal di terminal anda.
### 2. masuk ke repository 
jalankan perintah di bawah 
```bash
cd generate-kode
```
setelah masuk jalankan perintah untuk menginstal dependency dengan perintah 
```bash
npm install
```
pastikan NPM dan nodejs sudah terinstal di terminal anda 
### 3. menambahkan file konfigurasi atau variabel environment untuk menyimpan kunci api 
untuk menjalankan aplikasi dan menggunakan model Gemini, Anda harus membuat kunci api: 
[dapatkan kunci api](https://ai.google.dev/gemini-api/docs/api-key?hl=id)
silakan ikuti panduan di halaman tersebut setelah kunci api dibuat jalankan perintah 
```bash
echo "API_KEY_GEMINI=???" > .env
```
silakan ganti simbol **???** dengan kunci api yang anda dapatkan di halaman di atas

### 4. jalankan aplikasi 
jalankan aplikasi dengan perintah 
```bash
npm run start
```
dan silakan gunakan semoga bermanfaat..
