# Belajar TypeScript untuk Pemula

Repositori materi dan latihan TypeScript bertahap, santai, dan interaktif untuk pemula total.

---

## Checklist Progres Belajar

- [x] **Tahap 1: Kenalan dengan TypeScript**
  - [x] Apa itu TypeScript & Bedanya dengan JavaScript
  - [x] Inisialisasi Project (`package.json`, `tsconfig.json`)
  - [x] Menjalankan file TypeScript pertama kali
  - [x] Latihan 01 & Kunci Jawaban
- [x] **Tahap 2: Tipe Data Dasar**
  - [x] `string`, `number`, `boolean`
  - [x] Array dan cara memberi tipe ke array (`string[]`, `number[]`)
  - [x] Object dan cara memberi tipe ke object
  - [x] Latihan 02 & Kunci Jawaban
- [x] **Tahap 3: Function dengan TypeScript**
  - [x] Tipe parameter function
  - [x] Tipe return value function
  - [x] Optional parameter (`?`) & `void`
  - [x] Latihan 03 & Kunci Jawaban
- [x] **Tahap 4: Interface**
  - [x] Konsep & fungsi interface
  - [x] Membuat custom shape object (misal: Data Murid)
  - [x] Optional property (`?`) & Interface pada Function/Array
  - [x] Latihan 04 & Kunci Jawaban
- [x] **Tahap 5: Latihan Gabungan & Proyek Mini**
  - [x] Program Manajemen Data Perpustakaan Buku
  - [x] Latihan 05 (Sistem Kasir Restoran) & Kunci Jawaban
- [x] **Rangkuman Istilah Penting (Glossary)**

---

## Struktur Lengkap Repositori

```text
belajar-typescript/
├── package.json
├── tsconfig.json
├── README.md
└── 01-dasar/
    ├── 01-perkenalan.ts
    ├── 02-tipe-data.ts
    ├── 03-function.ts
    ├── 04-interface.ts
    ├── 05-proyek-mini-buku.ts
    └── latihan/
        ├── latihan-01.ts
        ├── jawaban-01.ts
        ├── latihan-02.ts
        ├── jawaban-02.ts
        ├── latihan-03.ts
        ├── jawaban-03.ts
        ├── latihan-04.ts
        ├── jawaban-04.ts
        ├── latihan-05.ts
        └── jawaban-05.ts
```

---

## Cara Menjalankan File

Gunakan perintah `npx tsx` di terminal:

```bash
# Menjalankan materi:
npx tsx 01-dasar/01-perkenalan.ts
npx tsx 01-dasar/02-tipe-data.ts
npx tsx 01-dasar/03-function.ts
npx tsx 01-dasar/04-interface.ts
npx tsx 01-dasar/05-proyek-mini-buku.ts

# Menjalankan kunci jawaban latihan:
npx tsx 01-dasar/latihan/jawaban-05.ts
```

---

## Rangkuman Istilah Penting (Glossary)

| Istilah | Penjelasan Sederhana | Analogi Sehari-hari |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript yang dilengkapi sistem pengecekan tipe data secara otomatis sebelum program dijalankan. | Buku resep yang diperiksa oleh koki ahli sebelum mulai memasak. |
| **Type Annotation** | Cara kita memberi label tipe pada variabel, parameter, atau return value (misal: `: string`, `: number`). | Menempelkan stiker label "Gula" pada toples dapur. |
| **Type Inference** | Kemampuan TypeScript menebak tipe data secara otomatis berdasarkan nilai awal yang kita masukkan. | Mengetahui isi kotak sepatu adalah sepatu tanpa membaca labelnya. |
| **Primitive Types** | Tipe data dasar yang paling mendasar: `string` (teks), `number` (angka), `boolean` (`true`/`false`). | Bahan baku dasar dapur: air, garam, gula. |
| **Array Type (`T[]`)** | Kumpulan data bertipe seragam (misal `string[]` hanya boleh diisi teks). | Rak telur yang setiap lubangnya hanya boleh diisi telur. |
| **Function Parameters Type** | Menentukan tipe data input yang wajib dikirim ke function. | Lubang koin pada mesin penjual otomatis yang hanya menerima uang koin asli. |
| **Function Return Type** | Menentukan tipe data hasil keluaran yang dihasilkan function. | Jus buah yang keluar dari mesin blender. |
| **`void`** | Tipe return khusus untuk function yang **tidak mengembalikan nilai apa-apa** (hanya menjalankan aksi seperti `console.log`). | Kurir yang mengantar paket dan langsung pergi tanpa memberikan struk kembali. |
| **Optional (`?`)** | Tanda tanya setelah nama properti/parameter yang menandakan bahwa data tersebut **boleh kosong / tidak diisi**. | Catatan opsional saat memesan ojek online (misal: "titip di pagar"). |
| **`interface`** | Cetakan / kontrak baku yang menentukan struktur dan tipe properti dari sebuah object. | Template formulir KTP kosong yang kolom-kolomnya sudah ditentukan. |
