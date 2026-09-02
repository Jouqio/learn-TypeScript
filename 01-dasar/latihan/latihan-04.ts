/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 4 (04-interface)
 * File: 01-dasar/latihan/latihan-04.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan interface di bawah ini sesuai petunjuk soal.
 * Kunci jawaban tersedia di:
 * -> 01-dasar/latihan/jawaban-04.ts
 */

console.log("=== LATIHAN TAHAP 4 ===");

// SOAL 1: Membuat Interface `Buku`
// Buatlah sebuah interface bernama `Buku` dengan spesifikasi:
// - `id`: number
// - `judul`: string
// - `penulis`: string
// - `halaman`: number
// - `sudahDibaca`: boolean
// - `sinopsis`: string (opsional dengan tanda `?`)
// Tulis interface-mu di bawah:

interface Buku {
    id: number;
    judul: string;
    penulis: string;
    halaman: number;
    sudahDibaca: boolean;
    sinopsis?: string;
}

// SOAL 2: Membuat Objek Berdasarkan Interface `Buku`
// Buatlah 2 variabel bertipe `Buku`:
// 1. `buku1`: Isi semua data termasuk `sinopsis`.
// 2. `buku2`: Isi tanpa `sinopsis`.
// Tulis kodemu di bawah:

const buku1: Buku = {
    id: 1,
    judul: "Atomic Habits",
    penulis: "James Clear",
    halaman: 320,
    sudahDibaca: true,
    sinopsis: "Kisah tentang membentuk kebiasaan yang baik",
};

const buku2: Buku = {
    id: 2,
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    halaman: 330,
    sudahDibaca: false,
    sinopsis: "Kisah tentang filsafat stoa dalam konteks modern"
};

// SOAL 3: Function Menerima Interface
// Buatlah function `cetakRingkasanBuku` yang menerima parameter `dataBuku: Buku`
// dan mengembalikan string berformat:
// `"[judul]" oleh [penulis] ([halaman] halaman) - Status: [Sudah Dibaca / Belum Dibaca]`
// Tulis kodemu di bawah:

function cetakRingkasanBuku(dataBuku: Buku) {
    const status = dataBuku.sudahDibaca ? "Sudah Dibaca" : "Belum Dibaca";
    return `"${dataBuku.judul}" oleh ${dataBuku.penulis} (${dataBuku.halaman} halaman) - Status: ${status}`
}
console.log("jawaban soal 3a:", cetakRingkasanBuku(buku1));
console.log("jawaban soal 3b:", cetakRingkasanBuku(buku2));


// SOAL 4: Array of Buku
// Buatlah array `rakBuku` bertipe `Buku[]` yang berisi `buku1` dan `buku2`.
// Lalu tampilkan ke console.

const rakBuku: Buku[] = [buku1, buku2];
console.log("jawaban soal 4: Total Buku di Rak: ", rakBuku.length);
console.log("List Buku: ", rakBuku);
