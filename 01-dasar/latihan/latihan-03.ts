/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 3 (03-function)
 * File: 01-dasar/latihan/latihan-03.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan function di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 01-dasar/latihan/jawaban-03.ts
 */

console.log("=== LATIHAN TAHAP 3 ===");

// SOAL 1: Function Penjumlahan
// Buatlah function bernama `tambahAngka` yang menerima dua parameter:
// - `a` (tipe: number)
// - `b` (tipe: number)
// Dan mengembalikan nilai hasil penjumlahan (tipe return: number).
// Tulis kodemu di bawah:

function tambahAngka(a: number, b: number): number {
    return a + b;
}
const hasilTambah = tambahAngka(10, 5);


// SOAL 2: Function Void
// Buatlah function `cetakPengumuman` yang menerima parameter:
// - `judul` (tipe: string)
// Function ini tidak mengembalikan nilai (return type: void),
// melainkan hanya mencetak: "📢 PENGUMUMAN: [judul]" ke console.
// Tulis kodemu di bawah:

function cetakPengumuman(judul: string): void {
    console.log(`jawaban 2: 📢 PENGUMUMAN: ${judul}`);
}
const pengumuman = "besok ada ulangan";

// SOAL 3: Function dengan Optional Parameter
// Buatlah function `buatUndangan` yang menerima parameter:
// - `namaTamu` (tipe: string, wajib)
// - `gelar` (tipe: string, opsional dengan tanda `?`)
// Return value bertipe string.
// Jika ada `gelar`, hasilkan string: "Kepada Yth. [gelar] [namaTamu]"
// Jika tidak ada `gelar`, hasilkan string: "Kepada Yth. [namaTamu]"
// Tulis kodemu di bawah:

function buatUndangan(namaTamu: string, gelar?: string): string {
    if (gelar) {
        return `Kepada Yth. ${gelar} ${namaTamu}`;
    }
    return `Kepada Yth. ${namaTamu}`;
}

const undangan1 = buatUndangan("Sapri", "Pak");
const undangan2 = buatUndangan("Acha");

// SOAL 4: Uji Semua Function
// Panggil function-function di atas dan tampilkan hasilnya dengan console.log()!

console.log("jawaban 1: hasil penjumlahan 10 + 5: ", hasilTambah);
cetakPengumuman(pengumuman);
console.log("jawaban 3: " + undangan1);
console.log("jawaban 3: " + undangan2);

