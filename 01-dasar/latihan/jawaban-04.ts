/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 4
 * File: 01-dasar/latihan/jawaban-04.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 01-dasar/latihan/jawaban-04.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN TAHAP 4 ===");

// JAWABAN SOAL 1:
interface Buku {
  id: number;
  judul: string;
  penulis: string;
  halaman: number;
  sudahDibaca: boolean;
  sinopsis?: string;
}

// JAWABAN SOAL 2:
const buku1: Buku = {
  id: 1,
  judul: "Laskar Pelangi",
  penulis: "Andrea Hirata",
  halaman: 529,
  sudahDibaca: true,
  sinopsis: "Kisah perjuangan sepuluh anak di Belitung.",
};

const buku2: Buku = {
  id: 2,
  judul: "Bumi Manusia",
  penulis: "Pramoedya Ananta Toer",
  halaman: 535,
  sudahDibaca: false,
};

// JAWABAN SOAL 3:
function cetakRingkasanBuku(dataBuku: Buku): string {
  const status = dataBuku.sudahDibaca ? "Sudah Dibaca" : "Belum Dibaca";
  return `"${dataBuku.judul}" oleh ${dataBuku.penulis} (${dataBuku.halaman} halaman) - Status: ${status}`;
}

console.log("Jawaban 3a:", cetakRingkasanBuku(buku1));
console.log("Jawaban 3b:", cetakRingkasanBuku(buku2));

// JAWABAN SOAL 4:
const rakBuku: Buku[] = [buku1, buku2];
console.log(`\nJawaban 4 - Total buku di rak: ${rakBuku.length}`);
console.log("Daftar Buku:", rakBuku);

console.log("\n🎉 Hebat! Kamu sudah menguasai Interface!");
