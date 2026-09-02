/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 1 (03-lanjutan)
 * File: 03-lanjutan/latihan/jawaban-01.ts
 * ========================================================
 */

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 1 (GENERICS LANJUTAN) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Generic Constraints dengan Interface
// -----------------------------------------------------------------------------
interface ProdukBerharga {
  nama: string;
  harga: number;
}

function cariProdukTermahal<T extends ProdukBerharga>(daftar: T[]): T | undefined {
  if (daftar.length === 0) return undefined;

  let termahal = daftar[0];
  for (const item of daftar) {
    if (item.harga > termahal.harga) {
      termahal = item;
    }
  }
  return termahal;
}

// -----------------------------------------------------------------------------
// SOAL 2: Multiple Type Parameters & `keyof`
// -----------------------------------------------------------------------------
function ambilDaftarNilai<T, K extends keyof T>(daftar: T[], kunci: K): T[K][] {
  return daftar.map((item) => item[kunci]);
}

// -----------------------------------------------------------------------------
// SOAL 3: Generic Interface dengan Default Type Parameter
// -----------------------------------------------------------------------------
interface Laporan<TData = Record<string, string>> {
  judul: string;
  tanggal: Date;
  ringkasan: TData;
}

// -----------------------------------------------------------------------------
// SOAL 4: Uji Coba Implementasi
// -----------------------------------------------------------------------------
interface Gadget extends ProdukBerharga {
  garansiBulan: number;
}

const daftarGadget: Gadget[] = [
  { nama: "Laptop Gaming", harga: 18000000, garansiBulan: 24 },
  { nama: "Smartphone Flagship", harga: 14000000, garansiBulan: 12 },
  { nama: "Smartwatch", harga: 3500000, garansiBulan: 12 },
];

console.log("\n[1] Hasil cariProdukTermahal:");
const produkTermahal = cariProdukTermahal(daftarGadget);
console.log("- Produk Termahal:", produkTermahal?.nama, `(Rp${produkTermahal?.harga.toLocaleString("id-ID")})`);

console.log("\n[2] Hasil ambilDaftarNilai (key: 'harga'):");
const daftarHarga = ambilDaftarNilai(daftarGadget, "harga");
console.log("- Daftar Harga:", daftarHarga);

console.log("\n[3] Hasil ambilDaftarNilai (key: 'nama'):");
const daftarNama = ambilDaftarNilai(daftarGadget, "nama");
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

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-01.ts berjalan sukses!");
