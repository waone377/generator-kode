import { Type } from "@google/genai";
const source = {
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
        description:
          "Path relatif dari root project. Gunakan '/' sebagai pemisah direktori. Boleh menggunakan '~' di awal untuk home directory.",
        pattern: "^(~\\/)?[a-zA-Z0-9._\\-/]+$",
      },
      konten: {
        type: Type.STRING,
        description:
          "Isi konten (untuk file/config/dokumentasi). Kosongkan jika jenis adalah folder.",
      },
    },
    propertyOrdering: ["jenis", "lokasi", "konten"],
    required: ["jenis", "lokasi"],
  },
};
const keterangan = {
  type: Type.STRING,
  description:
    "keterangan atau laporan substansi tentang project yang diperbaiki ataupun telah dibuat",
};
const custom_schema = {
  type: Type.OBJECT,
  properties: {
    aplication: source,
    keterangan: keterangan,
  },
  propertyOrdering: ["aplication", "keterangan"],
  required: ["aplication", "keterangan"],
};
export default custom_schema;
