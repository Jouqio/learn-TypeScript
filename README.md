# Belajar TypeScript: Panduan Lengkap Pemula, Menengah, hingga Mahir

Repositori materi dan latihan TypeScript bertahap, santai, dan interaktif dari nol hingga mahir.

---

## Checklist Progres Belajar

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

### 🟢 Bagian 3: 03-Lanjutan (Completed ✅)
- [x] **Tahap 1: Generics Lanjutan**
  - [x] Generic constraints (`extends`)
  - [x] Generic dengan multiple type parameters & `keyof`
  - [x] Default type parameter pada generic (`<T = string>`)
  - [x] Latihan 01 & Kunci Jawaban
- [x] **Tahap 2: Conditional & Mapped Types**
  - [x] Conditional type (`T extends U ? X : Y`)
  - [x] Mapped type (looping tipe dengan `keyof`)
  - [x] Latihan 02 & Kunci Jawaban
- [x] **Tahap 3: Discriminated Union (Union Type dengan "Tag")**
  - [x] Tagged union pattern di real-world project (⭐)
  - [x] Handling response API (success/error)
  - [x] Latihan 03 & Kunci Jawaban
- [x] **Tahap 4: Error Handling yang Type-Safe**
  - [x] Custom Error class di TypeScript
  - [x] Result / Either type pattern
  - [x] Latihan 04 & Kunci Jawaban
- [x] **Tahap 5: Runtime Validation dengan Zod**
  - [x] Compile-time vs Runtime validation (⭐)
  - [x] Schema validation & type inference dengan Zod
  - [x] Latihan 05 & Kunci Jawaban
- [x] **Tahap 6: Pengenalan Decorators (Konsep Dasar)**
  - [x] Konsep Decorator & penggunaannya di framework (NestJS/Angular)
  - [x] Class decorator & method decorator dasar
  - [x] Latihan 06 & Kunci Jawaban
- [x] **Tahap 7: Struktur Project Standar Industri**
  - [x] Pola folder industri (`types/`, `services/`, `utils/`, `controllers/`)
  - [x] Separation of concerns di TypeScript
- [x] **Tahap 8: Mini Project Akhir (Sistem Order & Transaksi Sederhana)**
  - [x] Integrasi discriminated union, custom error, Zod, generics, & arsitektur folder
  - [x] Latihan 08 & Kunci Jawaban

---

## Struktur Lengkap Repositori

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
│       ├── ...
│       ├── latihan-05.ts
│       └── jawaban-05.ts
├── 02-menengah/
│   ├── 01-union-intersection.ts
│   ├── 02-type-narrowing.ts
│   ├── 03-class-oop.ts
│   ├── 04-utility-types.ts
│   ├── 05-generics.ts
│   ├── 06-proyek-mini-menengah.ts
│   └── latihan/
│       ├── latihan-01.ts
│       ├── jawaban-01.ts
│       ├── ...
│       ├── latihan-06.ts
│       └── jawaban-06.ts
└── 03-lanjutan/
    ├── 01-generics-lanjutan.ts
    ├── 02-conditional-mapped-types.ts
    ├── 03-discriminated-union.ts
    ├── 04-type-safe-error-handling.ts
    ├── 05-runtime-validation-zod.ts
    ├── 06-pengenalan-decorators.ts
    ├── 07-struktur-project-industri.ts
    ├── 08-proyek-mini-lanjutan.ts
    └── latihan/
        ├── latihan-01.ts
        ├── jawaban-01.ts
        ├── ...
        ├── latihan-08.ts
        └── jawaban-08.ts
```

---

## Cara Menjalankan File

Gunakan perintah `npx tsx` di terminal:

```bash
# Menjalankan materi mini project akhir lanjutan:
npx tsx 03-lanjutan/08-proyek-mini-lanjutan.ts

# Menjalankan latihan buatanmu sendiri:
npx tsx 03-lanjutan/latihan/latihan-08.ts

# Menjalankan kunci jawaban:
npx tsx 03-lanjutan/latihan/jawaban-08.ts
```

---

## Rangkuman Istilah Penting (Glossary Lengkap)

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
| **Generic Constraints (`extends`)** | Membatasi tipe generic agar wajib memiliki bentuk atau properti tertentu (`<T extends PunyaPanjang>`). | Syarat masuk wahana permainan: Pengunjung bebas asal tinggi badan minimal 120 cm. |
| **`keyof` Operator** | Menghasilkan union dari semua nama properti (key) sebuah tipe objek (`keyof User`). | Daftar menu resmi restoran (hanya boleh memesan yang terdaftar di buku menu). |
| **Default Type Parameter** | Nilai fallback untuk generic jika tidak didefinisikan secara eksplisit (`<T = string>`). | Mode default aplikasi foto (otomatis filter natural jika user tidak memilih filter). |
| **Conditional Type** | Percabangan logika tipe menggunakan ternary (`T extends U ? X : Y`). | Lampu indikator meteran listrik: jika daya > batas atas -> menyala merah, jika aman -> menyala hijau. |
| **Mapped Type** | Transformasi tipe dengan looping properti objek (`[K in keyof T]`). | Cetakan kue seragam: mengubah semua jenis bahan kue menjadi bentuk bintang. |
| **Discriminated Union** | Pola union objek dengan satu properti pembeda unik / Tag (`status: "loading" \| "success"`). | Kategori tiket konser (VIP, Festival, Tribune): stiker gelang warna membedakan akses pintu masuk. |
| **Exhaustive Checking (`never`)** | Memastikan semua kemungkinan union sudah ditangani di switch-case agar tidak ada yang terlewat. | Checklist inspeksi pesawat: tombol tidak boleh dinyalakan sebelum semua item dicentang. |
| **Custom Error Class** | Class turunan dari `Error` dengan metadata khusus seperti status HTTP dan kode error. | Surat tilang resmi polisi yang mencantumkan pasal pelanggaran dan nominal denda spesifik. |
| **Result / Either Pattern** | Pola return nilai yang mengembalikan objek sukses (`Ok`) atau gagal (`Err`) tanpa melempar exception crash. | Paket kurir berstempel: penerima wajib membuka segel untuk melihat isi barang atau surat retur. |
| **Runtime Validation (Zod)** | Validasi struktur data mentah saat aplikasi sedang berjalan di server/browser. | Petugas bea cukai bandara yang membongkar dan memeriksa barang bawaan penumpang secara langsung. |
| **`z.infer` (Type Inference)** | Menghasilkan tipe data TypeScript otomatis langsung dari skema validasi Zod. | Cetak biru bangunan yang sekaligus otomatis menjadi daftar sertifikasi material bangunan. |
| **Decorators (`@`)** | Fungsi khusus untuk menambah metadata atau memodifikasi class & method secara deklaratif. | Memasang kamera dashcam atau GPS pada mobil tanpa membongkar mesin internal. |
| **Separation of Concerns (SoC)** | Memisahkan kode program berdasarkan tanggung jawabnya (`types/`, `services/`, `utils/`, `controllers/`). | Restoran profesional: Pelayan menerima pesanan (`controller`), Koki memasak (`service`), Pisau & alat dapur (`utils`), Buku resep (`types`). |
| **Layered Architecture** | Pola arsitektur bertingkat dari pintu masuk request hingga manipulasi data bisnis. | Alur bank: Teller di loket depan -> Bagian brankas & sistem keuangan pusat. |
