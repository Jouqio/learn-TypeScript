/**
 * ========================================================
 * TAHAP 1: KENALAN DENGAN TYPESCRIPT
 * File: 01-dasar/01-perkenalan.ts
 * ========================================================
 *
 * 1. APA ITU TYPESCRIPT?
 *    TypeScript adalah "pembungkus" JavaScript yang menambahkan sistem tipe data (Type System).
 *    Artinya, kita bisa menentukan jenis data apa yang boleh disimpan di sebuah variabel.
 *
 * 2. ANALOGI SEDERHANA:
 *    - JavaScript biasa = Toples dapur tanpa label. Kita bisa masukkan gula, garam,
 *      atau kecap tanpa ada yang mengingatkan kalau salah tuang.
 *    - TypeScript = Setiap toples diberi stiker label (misal: "GULA").
 *      Jika kita coba menuang kecap, ada "asisten dapur" (TypeScript Compiler)
 *      yang langsung mengingatkan sebelum terjadi kesalahan saat masak!
 *
 * 3. BAGAIMANA CARA KERJANYA?
 *    Kita menulis kode dengan ekstensi `.ts`. Kode ini kemudian diperiksa
 *    oleh TypeScript. Jika tidak ada error, kode ini akan diterjemahkan menjadi `.js`
 *    agar bisa dijalankan oleh browser atau Node.js.
 */

console.log("=== BELAJAR TYPESCRIPT: TAHAP 1 ===");

// --------------------------------------------------------
// CONTOH 1: Variabel dengan Type Annotation (Label Tipe)
// --------------------------------------------------------
// Format dasar: let namaVariabel: tipeData = nilaiAwal;

let namaSiswa: string = "Syauqi Nuzul Abdi";
let umurSiswa: number = 19;
let apakahLulus: boolean = true;

console.log("\n[Contoh 1] Data Siswa:");
console.log("Nama :", namaSiswa);
console.log("Umur :", umurSiswa, "tahun");
console.log("Lulus:", apakahLulus ? "Ya" : "Tidak");

// --------------------------------------------------------
// CONTOH 2: Apa yang terjadi jika kita mengubah nilai variabel?
// --------------------------------------------------------

// ✅ BENAR: Mengubah nilai sesuai tipe datanya
namaSiswa = "Muhammad Yusuf Saputra"; // Boleh, karena sesama string (teks)
umurSiswa = 20;           // Boleh, karena sesama number (angka)

console.log("\n[Contoh 2] Setelah data diubah:");
console.log("Nama Baru:", namaSiswa);
console.log("Umur Baru:", umurSiswa);

// --------------------------------------------------------
// CONTOH 3: Kode SALAH vs BENAR (Kekuatan TypeScript)
// --------------------------------------------------------
/*
 ❌ CONTOH SALAH (Jika baris di bawah dibuka comment-nya, TypeScript akan error):

 let saldoTabungan: number = 50000;
 saldoTabungan = "lima puluh ribu"; 
 // ⛔ Error: Type 'string' is not assignable to type 'number'.
 // TypeScript melarang kita mengisi toples "number" dengan data "string".
*/

// ✅ CONTOH BENAR:
let saldoTabungan: number = 50000;
saldoTabungan = 75000; // Tetap number
console.log("\n[Contoh 3] Saldo Tabungan:", saldoTabungan);

// --------------------------------------------------------
// KESIMPULAN TAHAP 1:
// - TypeScript membantu mencegah "salah tipe data" sedini mungkin.
// - Tipe data dasar yang kita gunakan di sini: string (teks), number (angka), boolean (true/false).
// --------------------------------------------------------
console.log("\n✅ Program Tahap 1 berhasil dijalankan dengan lancar!");
