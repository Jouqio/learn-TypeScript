/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 5 (03-lanjutan)
 * File: 03-lanjutan/latihan/jawaban-05.ts
 * ========================================================
 */

import { z } from "zod";

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 5 (RUNTIME VALIDATION DENGAN ZOD) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Schema Validasi Produk dengan Zod
// -----------------------------------------------------------------------------
const ProdukSchema = z.object({
  kodeProduk: z.string().min(3, "Kode produk minimal 3 karakter"),
  nama: z.string().min(2, "Nama produk minimal 2 karakter"),
  harga: z.number().min(1000, "Harga minimal Rp1.000"),
  kategori: z.enum(["elektronik", "pakaian", "makanan"]),
  stok: z.number().int("Stok harus bilangan bulat").min(0, "Stok tidak boleh negatif").default(0),
  deskripsi: z.string().optional(),
});

// -----------------------------------------------------------------------------
// SOAL 2: Infer Tipe TypeScript dari Schema
// -----------------------------------------------------------------------------
type Produk = z.infer<typeof ProdukSchema>;

// -----------------------------------------------------------------------------
// SOAL 3: Fungsi Validasi Produk
// -----------------------------------------------------------------------------
function validasiProduk(dataMentah: unknown): void {
  const hasil = ProdukSchema.safeParse(dataMentah);

  if (hasil.success) {
    console.log(`✅ Produk Valid: ${hasil.data.nama} (Rp${hasil.data.harga.toLocaleString("id-ID")}) - Kategori: ${hasil.data.kategori} - Stok: ${hasil.data.stok}`);
  } else {
    console.log("❌ Gagal Validasi:");
    hasil.error.issues.forEach((issue) => {
      console.log(`   - [${issue.path.join(".") || "root"}]: ${issue.message}`);
    });
  }
}

// -----------------------------------------------------------------------------
// SOAL 4: Uji Coba Fungsi Validasi
// -----------------------------------------------------------------------------
console.log("\n[1] Uji Coba Produk Valid:");
const barang1 = {
  kodeProduk: "ELK-01",
  nama: "Keyboard Mekanikal RGB",
  harga: 450000,
  kategori: "elektronik",
  stok: 15,
  deskripsi: "Switch biru dengan lampu RGB dinamis",
};
validasiProduk(barang1);

console.log("\n[2] Uji Coba Produk Tidak Valid:");
const barang2 = {
  kodeProduk: "A",            // ❌ Kurang dari 3 karakter
  nama: "X",                  // ❌ Kurang dari 2 karakter
  harga: 500,                 // ❌ Di bawah batas minimal 1000
  kategori: "kendaraan",      // ❌ Bukan enum yang sah
  stok: -5,                   // ❌ Stok bernilai negatif
};
validasiProduk(barang2);

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-05.ts berjalan sukses!");
