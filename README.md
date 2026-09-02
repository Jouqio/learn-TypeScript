# 🚀 Belajar TypeScript: Panduan Lengkap Pemula hingga Menengah

Repositori materi dan latihan TypeScript bertahap, santai, dan interaktif dari nol hingga mahir.

---

## 📋 Checklist Progres Belajar

### 🟢 Bagian 1: 01-Dasar (Completed ✅)
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
- [x] **Tahap 5: Latihan Gabungan & Proyek Mini Dasar**
  - [x] Program Manajemen Data Perpustakaan Buku
  - [x] Latihan 05 (Sistem Kasir Restoran) & Kunci Jawaban

### 🟢 Bagian 2: 02-Menengah (Completed ✅)
- [x] **Tahap 1: Union & Intersection Types**
  - [x] Union Type (`|` / ATAU)
  - [x] Literal Union (`"admin" | "user"`)
  - [x] Intersection Type (`&` / DAN)
  - [x] Latihan 01 & Kunci Jawaban
- [x] **Tahap 2: Type Narrowing (Penyempitan Tipe)**
  - [x] `typeof`, `in`, `instanceof`, Discriminated Union
  - [x] Latihan 02 & Kunci Jawaban
- [x] **Tahap 3: Class & OOP Dasar di TypeScript**
  - [x] `public`, `private`, `protected`, `readonly`
  - [x] Constructor shorthand
  - [x] Implements interface pada class & Inheritance
  - [x] Latihan 03 & Kunci Jawaban
- [x] **Tahap 4: Utility Types Populer**
  - [x] ⭐ `Partial`, ⭐ `Pick`, ⭐ `Omit`, `Readonly`, ⭐ `Record`
  - [x] Latihan 04 & Kunci Jawaban
- [x] **Tahap 5: Generics Dasar**
  - [x] Generic function & interface (`<T>`, `<T, U>`)
  - [x] Latihan 05 & Kunci Jawaban
- [x] **Tahap 6: Proyek Mini Menengah**
  - [x] Sistem Manajemen Inventaris & Task Manager Generik
  - [x] Latihan 06 & Kunci Jawaban

---

## 📂 Struktur Lengkap Repositori

```text
belajar-typescript/
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
├── 01-dasar/
│   ├── 01-perkenalan.ts
│   ├── 02-tipe-data.ts
│   ├── 03-function.ts
│   ├── 04-interface.ts
│   ├── 05-proyek-mini-buku.ts
│   └── latihan/
│       ├── latihan-01.ts
│       ├── jawaban-01.ts
│       ├── latihan-02.ts
│       ├── jawaban-02.ts
│       ├── latihan-03.ts
│       ├── jawaban-03.ts
│       ├── latihan-04.ts
│       ├── jawaban-04.ts
│       ├── latihan-05.ts
│       └── jawaban-05.ts
└── 02-menengah/
    ├── 01-union-intersection.ts
    ├── 02-type-narrowing.ts
    ├── 03-class-oop.ts
    ├── 04-utility-types.ts
    ├── 05-generics.ts
    ├── 06-proyek-mini-menengah.ts
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
        ├── jawaban-05.ts
        ├── latihan-06.ts
        └── jawaban-06.ts
```

---

## ⚡ Cara Menjalankan File

Gunakan perintah `npx tsx` di terminal:

```bash
# Menjalankan materi:
npx tsx 02-menengah/06-proyek-mini-menengah.ts

# Menjalankan latihan buatanmu sendiri:
npx tsx 02-menengah/latihan/latihan-06.ts

# Menjalankan kunci jawaban:
npx tsx 02-menengah/latihan/jawaban-06.ts
```

---

## 📖 Rangkuman Istilah Penting (Glossary Lengkap)

| Istilah | Penjelasan Sederhana | Analogi Sehari-hari |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript dengan pengaman tipe data otomatis sebelum kode dijalankan. | Buku resep yang diperiksa koki ahli sebelum memasak. |
| **Type Annotation** | Memberi label tipe pada variabel (`let nama: string`). | Menempelkan stiker label "Gula" pada toples dapur. |
| **Union Type (`|`)** | Variabel boleh bertipe A ATAU B (`string \| number`). | Pintu bioskop menerima tiket fisik ATAU tiket QR di HP. |
| **Intersection Type (`&`)** | Menggabungkan beberapa tipe jadi SATU (`TipeA & TipeB`). | Karyawan yang merangkap jabatan manajer (punya data karyawan + wewenang manajer). |
| **Type Narrowing** | Proses menyempitkan tipe union menjadi tipe spesifik menggunakan `typeof`, `in`, atau `instanceof`. | Memeriksa isi paket sebelum dicolok ke listrik atau dituang ke gelas. |
| **Access Modifiers** | Hak akses properti class: `public` (bebas), `private` (dalam class saja), `protected` (+ class turunan). | Restoran: Etalase umum (`public`), Brankas kasir (`private`), Resep keluarga (`protected`). |
| **Constructor Shorthand** | Mendeklarasikan dan menginisialisasi properti class langsung di parameter constructor. | Membeli paket furnitur instan siap pakai tanpa rakit manual. |
| **`Partial<T>`** | Mengubah SEMUA properti suatu tipe menjadi opsional (`?`). | Form "Edit Profil" (user hanya isi kolom yang ingin diubah). |
| **`Pick<T, K>`** | Mengambil HANYA sebagian properti yang dipilih dari tipe `T`. | Kartu nama yang hanya menampilkan nama & nomor HP. |
| **`Omit<T, K>`** | MEMBUANG properti tertentu dan mengambil sisanya. | Mengirim data user ke frontend tanpa menyertakan password. |
| **`Record<K, T>`** | Membuat Kamus / Map pasangan Key bertipe K dan Value bertipe T. | Kamus kontak telepon: Nama divisi -> Nama kepala bagian. |
| **Generics (`<T>`)** | Membuat function / interface / class yang fleksibel menerima berbagai tipe data dengan tetap menjaga keamanan tipe. | Kotak kargo universal berstiker transparan yang menyesuaikan isi barang di dalamnya. |
