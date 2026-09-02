/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 2
 * File: 01-dasar/latihan/jawaban-02.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 01-dasar/latihan/jawaban-02.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN TAHAP 2 ===");

// JAWABAN SOAL 1:
let buahFavorit: string[] = ["Apel", "Jeruk", "Mangga"];
buahFavorit.push("Pisang");
console.log("Jawaban 1 - Buah Favorit:", buahFavorit);

// JAWABAN SOAL 2:
let suhuMingguan: number[] = [28, 29, 30, 29, 31];
console.log("Jawaban 2 - Suhu Mingguan:", suhuMingguan);

// JAWABAN SOAL 3:
let dataMobil: {
  merk: string;
  tahunRilis: number;
  sudahMatik: boolean;
} = {
  merk: "Toyota Supra",
  tahunRilis: 2023,
  sudahMatik: true,
};
console.log("Jawaban 3 - Data Mobil:", dataMobil);

// JAWABAN SOAL 4:
// Array `keranjangBelanja` bertipe string[], jadi tidak boleh di-push angka (15000).
// Yang dimasukkan harus berupa string (misal nama barang "Telur").
let keranjangBelanja: string[] = ["Beras", "Minyak", "Gula"];
keranjangBelanja.push("Telur"); // ✅ Benar: Diisi teks/string
console.log("Jawaban 4 - Keranjang Belanja:", keranjangBelanja);

console.log("\n🎉 Luar biasa! Kamu berhasil menuntaskan Latihan Tahap 2!");
