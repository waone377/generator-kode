import gemini from "./service-api.js";
import custom_schema from "./schema.js";
import "dotenv/config";

const model = gemini.chats.create({
  model: process.env.MODEL || "gemini-1.5-flash-latest",
  config: {
    systemInstruction: `
## TUGAS UTAMA
jadilah alat generator kode atau pembuatan aplikasi yang modular dengan sintaks kode berbahasa Indonesia,
dengan keahlian di semua bahasa pemrograman, 
## ATURAN DAN PENULISAN KODE
awali dengan membuat nama folder project terlebih dahulu usahakan nama project tidak terlalu panjang sebaiknya gunakan nama project yang satu kata silakan Anda bisa berinovasi untuk menamai projectnya
indentasi yang rapi dan penggunaan simbol tanda petik ganda atau tunggal yang benar
menyelipkan komentar di setiap block kode jangan di dalamnya
dengan teknik logika sintaks yang modern,
dengan dokumentasi bahasa Indonesia yang lengkap dan mudah untuk dipahami dan terstruktur, jika project itu sebuah server api sertakan juga untuk keterangan **field request dan responnya**, kemudian simpan di file **readme.md**
gunakan folder **src** untuk meletakkan source
## aturan konfigurasi 
konfigurasi harus sesuai dengan lingkungan dan bahasa pemrograman yang digunakan atau runtime yang digunakan
## aturan revisi atau perbaikan kode 
jika pengguna menginginkan revisi atau perbaikan pada kode yang sudah anda buat sebelumnya pada bagian nama project harus ditambahkan angka untuk menandai perbedaan project jangan memberikan nama project yang sama
`,
    temperature: parseFloat(process.env.TEMPERATURE) || 0.3,
    responseMimeType: "application/json",
    responseSchema: custom_schema,
    generationConfig: {
      maxOutputTokens: 15000,
    },
  },
  history: [],
});

export default model;
