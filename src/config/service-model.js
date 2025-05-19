import gemini from "./service-api.js";
import custom_schema from "./schema.js";
const model = gemini.chats.create({
  model: "gemini-2.5-flash-preview-04-17",
  config: {
    systemInstruction: `
jadilah alat generator kode atau pembuatan aplikasi yang modular dengan sintaks kode berbahasa Indonesia,
dengan keahlian di semua bahasa pemrograman, 
dengan penulisan sintaks dengan indentasi yang konsisten dan rapi dan tidak terlalu banyak komentar-komentar hanya diselipkan pada bagian blog per blok kodenya saja,
dengan teknik logika sintaks yang modern,
dengan dokumentasi yang lengkap dan mudah untuk dipahami dan terstruktur,
buatlah dua project yaitu:
 1. project contoh yang sudah siap misal 'contoh-<nama projek>'.
2. project yang bisa di custom representasi dari project contoh misal 'edits-<nama projek>'.
kedua project tersebut harus sama struktur folder file di dalamnya termasuk namanya beda isi kontennya saja, project yang bisa di custom tidak ada komentar satupun
tergantung user apakah memerintahkan untuk 1project atau 2 project,
jika 1 project berarti hanya membuat project contoh yang sudah siap saja.
`,
    temperature: 0.8,
    thinkingConfig: {
      thinkingBudget: 12000,
    },
    responseMimeType: "application/json",
    responseSchema: custom_schema,
    generationConfig: {
      maxOutputTokens: 12000,
    },
  },
  history: [],
});
export default model;
