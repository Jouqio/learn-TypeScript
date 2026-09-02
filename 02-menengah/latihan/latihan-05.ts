/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 5 (02-menengah)
 * File: 02-menengah/latihan/latihan-05.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan Generics di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 02-menengah/latihan/jawaban-05.ts
 */

console.log("=== LATIHAN 02-MENENGAH: TAHAP 5 (GENERICS) ===");

// SOAL 1: Generic Function Pengambil Elemen Pertama
// Buatlah generic function `ambilElemenPertama<T>(daftar: T[]): T | undefined`
// Function ini menerima array bertipe T, dan mengembalikan elemen pertama dari array tersebut.
// Tulis kodemu di bawah:

function ambilElemenPertama<T>(daftar: T[]): T | undefined {
    return daftar[0];
}

const buahPertama = ambilElemenPertama<string>(['jeruk', 'apel', 'pisang']);
const angkaPertama = ambilElemenPertama<number>([1, 2, 3, 4, 5]);
console.log('jawaban 1a: (String) ' + buahPertama);
console.log('jawaban 1b: (Number)' + angkaPertama);


// SOAL 2: Generic Interface Hasil Operasi
// Buatlah generic interface `HasilOperasi<T>` yang memiliki properti:
// - `waktu`: Date
// - `status`: "berhasil" | "gagal"
// - `payload`: T
// Tulis kodemu di bawah:

interface HasilOperasi<T> {
    waktu: Date;
    status: "berhasil" | "gagal";
    payload: T;
}


// SOAL 3: Menggunakan Generic Interface
// Buat 2 variabel bertipe `HasilOperasi`:
// 1. `hasilNilai`: dengan payload berupa number (misal 95).
// 2. `hasilPesan`: dengan payload berupa string (misal "Operasi selesai").
// Tulis kodemu di bawah:

const hasilNilai: HasilOperasi<number> = {
    waktu: new Date(),
    status: "berhasil",
    payload: 95,
};

console.log("jawaban 3a: (Number)", hasilNilai);

const hasilPesan: HasilOperasi<string> = {
    waktu: new Date(),
    status: "berhasil",
    payload: "Operasi selesai",
};

console.log("jawaban 3b: (String)", hasilPesan);


// SOAL 4: Uji Coba Function & Objek
// Panggil `ambilElemenPertama` untuk array string dan array number, lalu tampilkan ke console.

console.log("jawaban 4: Uji Coba Function & Objek");
console.log("jawaban 4a: (String)", ambilElemenPertama<string>(['jeruk', 'apel', 'pisang']));
console.log("jawaban 4b: (Number)", ambilElemenPertama<number>([1, 2, 3, 4, 5]));

