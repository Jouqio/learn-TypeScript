/**
 * ========================================================
 * TAHAP 4: INTERFACE (CETAKAN BENTUK OBJECT)
 * File: 01-dasar/04-interface.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Apa itu Interface dan kenapa kita butuh Interface?
 * 2. Cara membuat Interface untuk Object Custom
 * 3. Optional Property dalam Interface (tanda `?`)
 * 4. Menggunakan Interface sebagai tipe Parameter Function
 */

console.log("=== BELAJAR TYPESCRIPT: TAHAP 4 (INTERFACE) ===");

// --------------------------------------------------------
// 1. KENAPA PERLU INTERFACE?
// --------------------------------------------------------
/**
 * ANALOGI INTERFACE:
 * Bayangkan sebuah "Cetakan Kue" atau "Template Formulir":
 * - Daripada kita menggambar ulang kolom formulir setiap kali ada pendaftar baru,
 *   kita cukup membuat satu cetakan master bernama `Murid`.
 * - Setiap data murid baru wajib mengikuti bentuk cetakan tersebut!
 */

// --------------------------------------------------------
// 2. CARA MEMBUAT INTERFACE
// --------------------------------------------------------
// Kita buat cetakan bernama `Murid` (Gunakan huruf kapital di awal):
interface Murid {
  nisn: number;
  nama: string;
  kelas: string;
  alamat?: string; // Tanda `?` artinya alamat bersifat OPSIONAL (boleh tidak diisi)
}

// --------------------------------------------------------
// 3. MENGGUNAKAN INTERFACE PADA OBJECT
// --------------------------------------------------------

// Murid 1: Mengisi semua data termasuk alamat
const murid1: Murid = {
  nisn: 1001,
  nama: "Rizky Ramadhan",
  kelas: "10 IPA 1",
  alamat: "Jl. Merdeka No. 45",
};

// Murid 2: Tanpa alamat (karena opsional, tetap valid)
const murid2: Murid = {
  nisn: 1002,
  nama: "Annisa Putri",
  kelas: "10 IPA 2",
};

console.log("\n[1] Data Murid Menggunakan Interface:");
console.log("- Murid 1:", murid1);
console.log("- Murid 2:", murid2);

// --------------------------------------------------------
// 4. MENGGUNAKAN INTERFACE DI DALAM FUNCTION
// --------------------------------------------------------
/**
 * Interface sangat ampuh jika dipadukan dengan function.
 * Function cukup meminta parameter bertipe `Murid`.
 */

function tampilkanKartuPelajar(siswa: Murid): void {
  console.log("\n=========================");
  console.log("💳 KARTU PELAJAR");
  console.log("=========================");
  console.log(`NISN  : ${siswa.nisn}`);
  console.log(`Nama  : ${siswa.nama}`);
  console.log(`Kelas : ${siswa.kelas}`);
  console.log(`Alamat: ${siswa.alamat ? siswa.alamat : "(Belum diisi)"}`);
  console.log("=========================");
}

tampilkanKartuPelajar(murid1);
tampilkanKartuPelajar(murid2);

// --------------------------------------------------------
// 5. ARRAY OF INTERFACE (Daftar Banyak Objek)
// --------------------------------------------------------
// Kita bisa membuat array yang berisi kumpulan objek `Murid`:
const daftarSiswa: Murid[] = [murid1, murid2];

console.log(`\n[2] Total siswa terdaftar: ${daftarSiswa.length} orang`);

console.log("\n✅ Program Tahap 4 berhasil dijalankan dengan lancar!");
