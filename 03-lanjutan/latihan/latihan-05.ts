/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 5 (03-lanjutan)
 * File: 03-lanjutan/latihan/latihan-05.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi soal latihan Validasi Runtime dengan Zod di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 03-lanjutan/latihan/jawaban-05.ts
 */

import { z } from "zod";

console.log("=== LATIHAN 03-LANJUTAN: TAHAP 5 (RUNTIME VALIDATION DENGAN ZOD) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Schema Validasi Produk dengan Zod
// -----------------------------------------------------------------------------
// Buatlah schema Zod bernama `ProdukSchema` dengan ketentuan:
// 1. `kodeProduk`: string, minimal 3 karakter, diawali huruf kapital (atau string biasa min 3)
// 2. `nama`: string, minimal 2 karakter
// 3. `harga`: number, positif (min 1000)
// 4. `kategori`: enum ["elektronik", "pakaian", "makanan"]
// 5. `stok`: number integer, default 0
// 6. `deskripsi`: string opsional
//
// Tulis kodemu di bawah:

const ProdukSchema = z.object({
    kodeProduk: z.string().min(3, "Kode produk minimal 3 karakter").regex(/^[A-Z]/, "Kode produk harus diawali huruf kapital"),
    nama: z.string().min(2, "Nama minimal 2 karakter"),
    harga: z.number().positive().int().min(1000, "Harga minimal Rp 1000"),
    kategori: z.enum(["elektronik", "pakaian", "makanan"]),
    stok: z.number().int("Stok harus berupa bilangan bulat").default(0),
    deskripsi: z.string().optional(),
});


// -----------------------------------------------------------------------------
// SOAL 2: Infer Tipe TypeScript dari Schema
// -----------------------------------------------------------------------------
// Buat tipe TypeScript `Produk` secara otomatis menggunakan `z.infer` dari `ProdukSchema`.
// Tulis kodemu di bawah:

type Produk = z.infer<typeof ProdukSchema>;


// -----------------------------------------------------------------------------
// SOAL 3: Fungsi Validasi Produk
// -----------------------------------------------------------------------------
// Buatlah function `validasiProduk(dataMentah: unknown)`:
// - Gunakan `ProdukSchema.safeParse(dataMentah)`
// - Jika valid: cetak "✅ Produk Valid: <nama> (Rp<harga>)"
// - Jika gagal: cetak "❌ Gagal Validasi: " beserta daftar pesan error-nya
// Tulis kodemu di bawah:

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
// 1. Uji dengan data produk valid.
// 2. Uji dengan data produk tidak valid (harga negatif, kategori salah, dll).
// Tulis kodemu di bawah:

console.log("\n[1] Uji Coba Produk Valid:");
const barang1 = {
    kodeProduk: "ELK-01",
    nama: "PC Rakitan",
    harga: 15000000,
    kategori: "elektronik",
    stok: 15,
    deskripsi: "PC Rakitan AMD Ryzen 5",
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


