import { Type } from "@google/genai";
const custom_schema = {
  type: Type.ARRAY,
  description:
    "Struktur project aplikasi yang harus dibuat, gunakan mekanisme yang modern dan standar industri kebanyakan, awali dengan membuat nama folder projectnya terlebih dahulu",
  items: {
    type: Type.OBJECT,
    properties: {
      jenis: {
        type: Type.STRING,
        enum: ["folder", "file", "dokumentasi", "config"],
        description: "Jenis komponen: folder/file/config/dokumentasi",
      },
      lokasi: {
        type: Type.STRING,
        pattern: "^[a-z0-9_\\-/]+$",
        description: "Path relatif dari root project",
      },
      konten: {
        type: Type.STRING,
        description:
          "Isi konten (untuk file/config/dokumentasi). Kosongkan jika jenis folder",
      },
    },
    required: ["jenis", "lokasi"],
    propertyOrdering: ["jenis", "lokasi", "konten"],
  },
};
export default custom_schema;
