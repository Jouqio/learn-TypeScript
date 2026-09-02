/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 1 (03-lanjutan)
 * File: 03-lanjutan/latihan/latihan-01.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi soal latihan Generics Lanjutan di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 03-lanjutan/latihan/jawaban-01.ts
 */

console.log("=== LATIHAN 03-LANJUTAN: TAHAP 1 (GENERICS LANJUTAN) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Generic Constraints dengan Interface
// -----------------------------------------------------------------------------
// Diberikan interface `ProdukBerharga`:
interface ProdukBerharga {
  nama: string;
  harga: number;
}

// BUATLAH generic function `cariProdukTermahal<T extends ProdukBerharga>(daftar: T[]): T | undefined`
// Function ini menerima array bertipe T (yang wajib memiliki properti `harga` dan `nama`),
// dan mengembalikan objek dengan harga tertinggi dari array tersebut.
// (Jika array kosong, kembalikan undefined).
// Tulis kodemu di bawah:

function cariProdukTermahal<T extends ProdukBerharga>(daftar: T[]): T | undefined {
  if (daftar.length === 0) return undefined;
  let termahal = daftar[0];
  for (let i = 1; i < daftar.length; i++) {
    if (daftar[i].harga > termahal.harga) {
      termahal = daftar[i];
    }
  }
  return termahal;
}


// -----------------------------------------------------------------------------
// SOAL 2: Multiple Type Parameters & `keyof`
// -----------------------------------------------------------------------------
// BUATLAH generic function `ambilDaftarNilai<T, K extends keyof T>(daftar: T[], kunci: K): T[K][]`
// Function ini menerima:
// 1. `daftar`: Array dari objek bertipe T
// 2. `kunci`: Salah satu key yang sah dari objek T
// Function mengembalikan array baru berisi nilai dari properti `kunci` pada setiap elemen array.
// Contoh: ambilDaftarNilai([{ nama: "Andi", umur: 20 }, { nama: "Budi", umur: 25 }], "nama") -> ["Andi", "Budi"]
// Tulis kodemu di bawah:

function ambilDaftarNilai<T, K extends keyof T>(daftar: T[], kunci: K): T[K][] {
  return daftar.map(item => item[kunci]);
}

// -----------------------------------------------------------------------------
// SOAL 3: Generic Interface dengan Default Type Parameter
// -----------------------------------------------------------------------------
// BUATLAH generic interface `Laporan<TData = Record<string, string>>` yang memiliki:
// - `judul`: string
// - `tanggal`: Date
// - `ringkasan`: TData
// Tulis kodemu di bawah:

interface Laporan<TData = Record<string, string>> {
  judul: string;
  tanggal: Date;
  ringkasan: TData;
}


// -----------------------------------------------------------------------------
// SOAL 4: Uji Coba Implementasi
// -----------------------------------------------------------------------------
// 1. Buat array `daftarGadget` yang berisi 3 objek (nama, harga, garansiBulan).
// 2. Panggil `cariProdukTermahal(daftarGadget)` dan cetak hasilnya.
// 3. Panggil `ambilDaftarNilai(daftarGadget, "harga")` dan cetak hasilnya.
// 4. Buat objek `laporanSederhana` (menggunakan default type parameter) dan `laporanKompleks` (menggunakan custom type parameter).
// Tulis kodemu di bawah:

interface Laptop extends ProdukBerharga {
  garansiBulan: number;
}

const daftarLaptop: Laptop[] = [
  { nama: "Laptop A", harga: 10000000, garansiBulan: 12 },
  { nama: "Laptop B", harga: 20000000, garansiBulan: 24 },
  { nama: "Laptop C", harga: 30000000, garansiBulan: 36 },
];

console.log("\n[1] Hasil cariProdukTermahal:");
const produkTermahal = cariProdukTermahal(daftarLaptop);
console.log("- Produk Termahal:", produkTermahal?.nama, `(Rp${produkTermahal?.harga.toLocaleString("id-ID")})`);

console.log("\n[2] Hasil ambilDaftarNilai (key: 'harga'):");
const daftarHarga = ambilDaftarNilai(daftarLaptop, "harga");
console.log("- Daftar Harga:", daftarHarga);

console.log("\n[3] Hasil ambilDaftarNilai (key: 'nama'):");
const daftarNama = ambilDaftarNilai(daftarLaptop, "nama");
console.log("- Daftar Nama:", daftarNama);

console.log("\n[4] Penggunaan Generic Interface Laporan:");
// Laporan dengan default type parameter: Record<string, string>
const laporanSederhana: Laporan = {
  judul: "Laporan Harian Kasir",
  tanggal: new Date(),
  ringkasan: {
    status: "Normal",
    catatan: "Semua transaksi lancar",
  },
};
console.log("- Laporan Sederhana:", laporanSederhana.judul, "->", laporanSederhana.ringkasan);

// Laporan dengan custom type parameter
interface RincianKeuangan {
  totalOmzet: number;
  jumlahTransaksi: number;
}

const laporanKeuangan: Laporan<RincianKeuangan> = {
  judul: "Laporan Finansial Bulanan",
  tanggal: new Date(),
  ringkasan: {
    totalOmzet: 45000000,
    jumlahTransaksi: 320,
  },
};
console.log("- Laporan Keuangan:", laporanKeuangan.judul, `-> Omzet: Rp${laporanKeuangan.ringkasan.totalOmzet.toLocaleString("id-ID")}`);



