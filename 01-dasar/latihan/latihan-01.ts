/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 1 (01-perkenalan)
 * File: 01-dasar/latihan/latihan-01.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi titik-titik (...) atau perbaiki kode di bawah ini sesuai instruksi!
 * Setelah mencoba sendiri, kamu bisa melihat kunci jawaban di:
 * -> 01-dasar/latihan/jawaban-01.ts
 */

console.log("=== LATIHAN TAHAP 1 ===");

// SOAL 1:
// Buatlah variabel bernama `namaKota` dengan tipe data `string`, 
// dan isi dengan nama kota tempat tinggalmu (misal: "Bandung" atau "Jakarta").
// Tulis kodemu di bawah ini:
// let namaKota: ... = ...;

let namaKota: string = "Bontang";
namaKota = "Samarinda";

// SOAL 2:
// Buatlah variabel bernama `jumlahSepatu` bertipe data `number` dengan nilai awal `2`.
// Lalu di baris berikutnya, ubah nilainya menjadi `4`.
// Tulis kodemu di bawah ini:
// let jumlahSepatu: ... = ...;
// jumlahSepatu = ...;

let jumlahSepatu: number = 2;
jumlahSepatu = 4;

// SOAL 3:
// Perhatikan kode di bawah ini. Kode ini error jika dijalankan.
// Perbaikilah agar nilai variabel `statusAktif` tetap bertipe boolean!
//
// let statusAktif: boolean = true;
// statusAktif = "tidak aktif"; // ❌ Kenapa ini salah? Perbaiki menjadi false!

let statusAktif: boolean = true;
statusAktif = false;


// SOAL 4:
// Tampilkan semua variabel di atas ke console menggunakan console.log().

console.log(`Jawaban 1: Nama Kota ${namaKota}`);
console.log(`Jawaban 2: Jumlah Sepatu ${jumlahSepatu}`);
console.log(`Jawaban 3: Status Aktif ${statusAktif}`);

