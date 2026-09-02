/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 2 (03-lanjutan)
 * File: 03-lanjutan/latihan/latihan-02.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi soal latihan Conditional & Mapped Types di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 03-lanjutan/latihan/jawaban-02.ts
 */

console.log("=== LATIHAN 03-LANJUTAN: TAHAP 2 (CONDITIONAL & MAPPED TYPES) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Conditional Type Pengecek Array
// -----------------------------------------------------------------------------
// BUATLAH Conditional Type `CekTipeArray<T>`:
// - Jika T adalah array (`any[]`), tipenya adalah "Ini Array"
// - Jika T bukan array, tipenya adalah "Bukan Array"
// Tulis kodemu di bawah:

type CekTipeArray<T> = T extends any[] ? "Ini Array" : "Bukan Array";

const tesArray1: CekTipeArray<string[]> = "Ini Array";
const tesArray2: CekTipeArray<number> = "Bukan Array";
console.log("\n[1] Hasil CekTipeArray:");
console.log(" string[] ->", tesArray1);
console.log(" number   ->", tesArray2);

// -----------------------------------------------------------------------------
// SOAL 2: Mapped Type Pengubah Tipe Nilai (UbahKeString)
// -----------------------------------------------------------------------------
// BUATLAH Mapped Type `SemuaString<T>`:
// Mengubah SEMUA nilai properti pada tipe T menjadi tipe `string`.
// Contoh: { id: number; umur: number; aktif: boolean } -> { id: string; umur: string; aktif: string }
// Tulis kodemu di bawah:


type SemuaString<T> = {
  [K in keyof T]: string;
};

interface ProdukToko {
  id: number;
  nama: string;
  harga: number;
  tersedia: boolean;
}

type ProdukDalamString = SemuaString<ProdukToko>;

const produkTeks: ProdukDalamString = {
  id: "1",
  nama: "King",
  harga: "100000",
  tersedia: "true",
};

console.log("\n[2] Hasil SemuaString:");
console.log("ProdukDalamString:", produkTeks);

// -----------------------------------------------------------------------------
// SOAL 3: Mapped Type Pembuat Status Error (PesanErrorForm)
// -----------------------------------------------------------------------------
// Diberikan interface data registrasi user:
interface DataRegistrasi {
  namaLengkap: string;
  email: string;
  kataSandi: string;
  umur: number;
}

// BUATLAH Mapped Type `PesanErrorForm<T>`:
// Setiap properti pada tipe T diubah nilainya menjadi: `string | null`
// (Artinya: jika ada error isinya pesan string, jika valid isinya null).
// Tulis kodemu di bawah:


type PesanErrorForm<T> = {
  [P in keyof T]: string | null;
};


// -----------------------------------------------------------------------------
// SOAL 4: Uji Coba Implementasi
// -----------------------------------------------------------------------------
// 1. Buat variabel `errorFormUser` bertipe `PesanErrorForm<DataRegistrasi>`:
//    - `namaLengkap`: null (valid)
//    - `email`: "Format email tidak valid"
//    - `kataSandi`: "Minimal 8 karakter"
//    - `umur`: null (valid)
// 2. Cetak `errorFormUser` ke console.
// Tulis kodemu di bawah:

const errorFormUser: PesanErrorForm<DataRegistrasi> = {
  namaLengkap: null,
  email: "Format email tidak valid",
  kataSandi: "Minimal 8 karakter",
  umur: null,
};

console.log("\n[3] Hasil PesanErrorForm:");
console.log("- Error Nama Lengkap:", errorFormUser.namaLengkap ?? "Valid ✅");
console.log("- Error Email       :", errorFormUser.email ?? "Valid ✅");
console.log("- Error Kata Sandi  :", errorFormUser.kataSandi ?? "Valid ✅");
console.log("- Error Umur        :", errorFormUser.umur ?? "Valid ✅");
