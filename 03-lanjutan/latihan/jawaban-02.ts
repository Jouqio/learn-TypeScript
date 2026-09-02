/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 2 (03-lanjutan)
 * File: 03-lanjutan/latihan/jawaban-02.ts
 * ========================================================
 */

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 2 (CONDITIONAL & MAPPED TYPES) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Conditional Type Pengecek Array
// -----------------------------------------------------------------------------
type CekTipeArray<T> = T extends any[] ? "Ini Array" : "Bukan Array";

type TesArray1 = CekTipeArray<string[]>; // "Ini Array"
type TesArray2 = CekTipeArray<number>;   // "Bukan Array"

console.log("\n[1] Pengecekan Conditional Type (CekTipeArray):");
console.log("- string[] -> Tipe dikenali sebagai Array");
console.log("- number   -> Tipe dikenali sebagai Bukan Array");

// -----------------------------------------------------------------------------
// SOAL 2: Mapped Type Pengubah Tipe Nilai (UbahKeString)
// -----------------------------------------------------------------------------
type SemuaString<T> = {
  [K in keyof T]: string;
};

interface ProdukBarang {
  id: number;
  nama: string;
  harga: number;
  tersedia: boolean;
}

type ProdukDalamString = SemuaString<ProdukBarang>;

const produkTeks: ProdukDalamString = {
  id: "001",
  nama: "Kamera Mirrorless",
  harga: "12000000",
  tersedia: "true",
};

console.log("\n[2] Hasil Mapped Type SemuaString:");
console.log("- Produk dalam string:", produkTeks);

// -----------------------------------------------------------------------------
// SOAL 3: Mapped Type Pembuat Status Error (PesanErrorForm)
// -----------------------------------------------------------------------------
interface DataRegistrasi {
  namaLengkap: string;
  email: string;
  kataSandi: string;
  umur: number;
}

type PesanErrorForm<T> = {
  [K in keyof T]: string | null;
};

// -----------------------------------------------------------------------------
// SOAL 4: Uji Coba Implementasi
// -----------------------------------------------------------------------------
const errorFormUser: PesanErrorForm<DataRegistrasi> = {
  namaLengkap: null,
  email: "Format email tidak valid",
  kataSandi: "Minimal 8 karakter",
  umur: null,
};

console.log("\n[3] Hasil Mapped Type PesanErrorForm:");
console.log("- Error Nama Lengkap:", errorFormUser.namaLengkap ?? "Valid ✅");
console.log("- Error Email       :", errorFormUser.email ?? "Valid ✅");
console.log("- Error Kata Sandi  :", errorFormUser.kataSandi ?? "Valid ✅");
console.log("- Error Umur        :", errorFormUser.umur ?? "Valid ✅");

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-02.ts berjalan sukses!");
