/**
 * ========================================================
 * MATERI TAHAP 2: CONDITIONAL & MAPPED TYPES
 * File: 03-lanjutan/02-conditional-mapped-types.ts
 * ========================================================
 * 
 * Di tahap ini kita belajar dua fitur "meta-programming" paling kuat di TypeScript:
 * 1. Conditional Types (`T extends U ? X : Y`) -> Percabangan logika pada tipe data.
 * 2. Mapped Types (`[K in keyof T]`) -> Looping/transformasi properti suatu tipe.
 */

console.log("=== BELAJAR TYPESCRIPT LANJUTAN: TAHAP 2 (CONDITIONAL & MAPPED TYPES) ===");

// -----------------------------------------------------------------------------
// 1. CONDITIONAL TYPES (Ternary Operator untuk Tipe Data)
// -----------------------------------------------------------------------------
/**
 * APA ITU CONDITIONAL TYPE?
 * Jika di JavaScript kita punya ternary operator pada nilai runtime:
 *   const hasil = kondisi ? nilaiBenar : nilaiSalah;
 * 
 * Maka di TypeScript kita punya Conditional Type pada tipe data:
 *   type HasilTipe = T extends Syarat ? TipeJikaBenar : TipeJikaSalah;
 * 
 * "extends" di sini bertindak sebagai pengecekan: "Apakah tipe T cocok/turunan dari Syarat?"
 */

// Contoh 1A: Conditional Type Paling Sederhana
type CekApakahString<T> = T extends string ? "Ya, ini Teks" : "Bukan Teks";

type Tes1 = CekApakahString<string>;  // Hasil tipe: "Ya, ini Teks"
type Tes2 = CekApakahString<number>;  // Hasil tipe: "Bukan Teks"
type Tes3 = CekApakahString<boolean>; // Hasil tipe: "Bukan Teks"

// Contoh 1B: Menentukan Tipe Return Function Secara Dinamis
// Jika argumen berupa boolean 'true', kembalikan number. Jika 'false', kembalikan string.
type TipeHasil<T extends boolean> = T extends true ? number : string;

function dapatkanNilai<T extends boolean>(pakaiAngka: T): TipeHasil<T> {
  if (pakaiAngka) {
    return 100 as TipeHasil<T>;
  } else {
    return "Seratus" as TipeHasil<T>;
  }
}

const hasilAngka = dapatkanNilai(true);  // Tipe otomatis: number
const hasilTeks = dapatkanNilai(false);  // Tipe otomatis: string

console.log("\n[1] Conditional Types Dasar:");
console.log("- Hasil Angka:", hasilAngka, typeof hasilAngka);
console.log("- Hasil Teks :", hasilTeks, typeof hasilTeks);

// Contoh 1C: Menghilangkan Tipe Null & Undefined (NonNullable)
type HapusNullUndefined<T> = T extends null | undefined ? never : T;

type DataKotor = string | number | null | undefined;
type DataBersih = HapusNullUndefined<DataKotor>; // Hasil tipe: string | number

const emailPengguna: DataBersih = "syauqi@example.com";
console.log("- Data Bersih:", emailPengguna);


// -----------------------------------------------------------------------------
// 2. MAPPED TYPES (Looping & Transformasi Tipe Data)
// -----------------------------------------------------------------------------
/**
 * APA ITU MAPPED TYPE?
 * Bayangkan Mapped Type seperti `Array.map()` tapi berjalan pada properti objek di tingkat tipe data.
 * 
 * Sintaks dasar:
 *   type TipeBaru<T> = {
 *     [K in keyof T]: TipeNilaiBaru;
 *   };
 * 
 * Di mana:
 * - `keyof T` = Mengambil semua nama properti (key) dari tipe T.
 * - `K in ...` = Melakukan iterasi (looping) satu per satu properti tersebut.
 */

interface ProfilUser {
  nama: string;
  umur: number;
  aktif: boolean;
}

// Contoh 2A: Mengubah SEMUA properti menjadi tipe boolean (Cocok untuk Form Dirty/Validation Flags)
type StatusForm<T> = {
  [K in keyof T]: boolean;
};

type FormUserStatus = StatusForm<ProfilUser>;
/**
 * Hasil Tipe FormUserStatus otomatis menjadi:
 * {
 *   nama: boolean;
 *   umur: boolean;
 *   aktif: boolean;
 * }
 */

const statusValidasiUser: FormUserStatus = {
  nama: true,
  umur: true,
  aktif: false,
};

console.log("\n[2] Mapped Types (Status Form Validation):");
console.log("- Status Validasi Form:", statusValidasiUser);


// -----------------------------------------------------------------------------
// 3. MEMAHAMI CARA KERJA UTILITY TYPES BAWAAN LEWAT MAPPED TYPES
// -----------------------------------------------------------------------------
/**
 * Di materi 02-menengah, kita sudah memakai `Partial<T>` dan `Readonly<T>`.
 * Sekarang kita bisa melihat bagaimana cara TypeScript membuatnya di balik layar!
 */

// Membuat Partial buatan kita sendiri:
type BikinOpsional<T> = {
  [K in keyof T]?: T[K]; // Menambahkan tanda tanya '?' pada setiap properti
};

// Membuat Readonly buatan kita sendiri:
type BikinHanyaBaca<T> = {
  readonly [K in keyof T]: T[K]; // Menambahkan modifier 'readonly'
};

interface ProdukToko {
  id: number;
  nama: string;
  harga: number;
}

// Penggunaan BikinOpsional (Custom Partial)
const drafProduk: BikinOpsional<ProdukToko> = {
  nama: "Headphone Bluetooth",
  // id dan harga boleh tidak diisi karena opsional
};

// Penggunaan BikinHanyaBaca (Custom Readonly)
const produkKunci: BikinHanyaBaca<ProdukToko> = {
  id: 1,
  nama: "Mouse Wireless",
  harga: 150000,
};
// produkKunci.harga = 200000; // ❌ ERROR: Cannot assign to 'harga' because it is a read-only property.

console.log("\n[3] Custom Mapped Types (BikinOpsional & BikinHanyaBaca):");
console.log("- Draf Produk      :", drafProduk);
console.log("- Produk Read-only :", produkKunci);


// -----------------------------------------------------------------------------
// 4. MENGGABUNGKAN CONDITIONAL TYPES + MAPPED TYPES (Contoh Kasus Riil)
// -----------------------------------------------------------------------------
/**
 * Kasus: Mengubah semua properti bertipe `Function` menjadi `boolean`, sedangkan tipe lainnya tetap.
 */

type FunctionToBoolean<T> = {
  [K in keyof T]: T[K] extends Function ? boolean : T[K];
};

interface AkunAdmin {
  id: number;
  nama: string;
  hapusUser: () => void;
  resetPassword: () => void;
}

type HakAksesAdmin = FunctionToBoolean<AkunAdmin>;
/**
 * Hasil Tipe HakAksesAdmin:
 * {
 *   id: number;
 *   nama: string;
 *   hapusUser: boolean;       <-- Berubah jadi boolean
 *   resetPassword: boolean;   <-- Berubah jadi boolean
 * }
 */

const permission: HakAksesAdmin = {
  id: 1,
  nama: "Super Admin",
  hapusUser: true,
  resetPassword: true,
};

console.log("\n[4] Gabungan Mapped + Conditional Types (Hak Akses):");
console.log("- Hak Akses Admin:", permission);

console.log("\n✅ [BERHASIL] File 03-lanjutan/02-conditional-mapped-types.ts selesai dipelajari & dieksekusi!");
