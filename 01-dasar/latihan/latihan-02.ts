/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 2 (02-tipe-data)
 * File: 01-dasar/latihan/latihan-02.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan di bawah ini sesuai petunjuk soal.
 * Kunci jawaban tersedia di:
 * -> 01-dasar/latihan/jawaban-02.ts
 */

console.log("=== LATIHAN TAHAP 2 ===");

// SOAL 1: Array String
// Buatlah variabel `buahFavorit` dengan tipe data array of string (`string[]`).
// Isi dengan 3 nama buah, misalnya: "Apel", "Jeruk", "Mangga".
// Kemudian tambahkan 1 buah baru ("Pisang") menggunakan method .push().
// Tulis kodemu di bawah:

let buahFavorit: string[] = ["semangka", "anggur", "mangga"];
buahFavorit.push("mangga");

console.log("jawaban 1: BUAH FAVORIT", buahFavorit);


// SOAL 2: Array Number
// Buatlah variabel `suhuMingguan` bertipe `number[]` berisi suhu selama 5 hari:
// [28, 29, 30, 29, 31].
// Tulis kodemu di bawah:

let suhuMingguan: number[] = [28, 29, 30, 29, 31];

console.log("jawaban 2: SUHU MINGGUAN ", suhuMingguan);


// SOAL 3: Object dengan Tipe Eksplisit
// Buatlah variabel `dataMobil` yang berupa object dengan struktur:
// - merk: string
// - tahunRilis: number
// - sudahMatik: boolean
// Lalu isi nilainya sesuai data mobil impianmu (misal: "Toyota", 2023, true).
// Tulis kodemu di bawah:

let dataMobil: {
    merk: string,
    tahunRilis: number,
    sudahMatik: boolean
} = {
    merk: "Toyota",
    tahunRilis: 2023,
    sudahMatik: true
};

console.log("jawaban 3: DATA MOBIL", dataMobil);


// SOAL 4: Deteksi & Perbaiki Kesalahan
// Perhatikan kode di bawah ini. Mengapa TypeScript protes?
// Perbaiki nilainya agar tidak error!
//
// let keranjangBelanja: string[] = ["Beras", "Minyak", "Gula"];
// keranjangBelanja.push(15000); // ❌ Kenapa baris ini error? Perbaiki agar yang dimasukkan adalah string!

let keranjangBelanja: string[] = ["Beras", "Minyak", "Gula"];
keranjangBelanja.push("Bolu");

console.log("jawaban 4: KERANJANG BELANJA", keranjangBelanja);


