/**
 * ========================================================
 * 📘 TAHAP 1: UNION & INTERSECTION TYPES
 * File: 02-menengah/01-union-intersection.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Union Types (`|` / ATAU) -> Variabel bisa bertipe A ATAU B
 * 2. Literal Union -> Membatasi nilai variabel ke beberapa kata kunci tertentu
 * 3. Intersection Types (`&` / DAN) -> Menggabungkan beberapa tipe menjadi SATU
 * 4. Contoh Salah vs Benar
 */

console.log("=== 🚀 BELAJAR TYPESCRIPT MENENGAH: TAHAP 1 ===");

// --------------------------------------------------------
// 1. UNION TYPES (`|` / ATAU)
// --------------------------------------------------------
/**
 * 🎟️ ANALOGI UNION TYPE:
 * Bayangkan pintu masuk bioskop:
 * Penonton boleh menunjukkan tiket berbentuk "Kertas Fisik" ATAU "QR Code di HP".
 * Kedua-duanya sama-sama diterima!
 *
 * Simbol: `|` (pipa vertikal / vertical bar)
 */

// Contoh 1: Variabel yang bisa berisi angka ATAU teks
let nomorIdentitas: string | number;

nomorIdentitas = "ID-99214"; // ✅ Boleh (string)
console.log("\n[1] Union Type (string | number):");
console.log("- ID (string):", nomorIdentitas);

nomorIdentitas = 12345678;  // ✅ Boleh juga (number)
console.log("- ID (number):", nomorIdentitas);

/*
 ❌ CONTOH SALAH PADA UNION:
 nomorIdentitas = true; 
 // ⛔ Error: Type 'boolean' is not assignable to type 'string | number'.
 // Karena boolean bukan string ataupun number!
*/

// Contoh 2: Literal Union (Membatasi Nilai yang Diizinkan)
// Sangat berguna untuk status (misal status pesanan: hanya boleh 3 kata ini)
type StatusPesanan = "menunggu" | "diproses" | "selesai";

let statusOrder: StatusPesanan = "menunggu";
statusOrder = "selesai"; // ✅ Boleh

/*
 ❌ SALAH:
 statusOrder = "dibatalkan"; 
 // ⛔ Error: Type '"dibatalkan"' is not assignable to type 'StatusPesanan'.
 // TypeScript mencegah salah ketik nama status!
*/

console.log("\n[2] Literal Union Status Pesanan:", statusOrder);

// --------------------------------------------------------
// 2. INTERSECTION TYPES (`&` / DAN)
// --------------------------------------------------------
/**
 * 👔 ANALOGI INTERSECTION TYPE:
 * Bayangkan seorang "Karyawan Senior yang dipromosikan jadi Manajer":
 * - Dia punya data sebagai "Karyawan Biasa" (Nama, NIP, Gaji).
 * - DAN dia juga punya hak sebagai "Manajer" (Departemen yang dibawahi, Limit Approval).
 * - Saat digabung (`&`), profilnya wajib memuat SEMUA data karyawan + data manajer!
 *
 * Simbol: `&` (ampersand / AND)
 */

type Orang = {
  nama: string;
  umur: number;
};

type Pekerja = {
  posisi: string;
  gaji: number;
};

// Menggabungkan Orang & Pekerja menjadi tipe baru:
type KaryawanLengkap = Orang & Pekerja;

const karyawan1: KaryawanLengkap = {
  nama: "Budi Santoso", // dari Orang
  umur: 28,             // dari Orang
  posisi: "Frontend Developer", // dari Pekerja
  gaji: 12000000,       // dari Pekerja
};

console.log("\n[3] Intersection Type (Orang & Pekerja):");
console.log(karyawan1);

/*
 ❌ CONTOH SALAH PADA INTERSECTION:
 const karyawanKurang: KaryawanLengkap = {
   nama: "Siti",
   umur: 25,
   posisi: "Designer"
   // ⛔ Error: Property 'gaji' is missing!
   // Intersection (&) mewajibkan SEMUA properti dari kedua belah pihak harus diisi!
 };
*/

// --------------------------------------------------------
// 3. PENGGUNAAN PADA FUNCTION
// --------------------------------------------------------
function formatHarga(harga: number | string): string {
  // Jika tipe number, kita format jadi Rupiah
  if (typeof harga === "number") {
    return `Rp${harga.toLocaleString("id-ID")}`;
  }
  // Jika tipe string, kita kembalikan apa adanya
  return harga;
}

console.log("\n[4] Function dengan Parameter Union:");
console.log("- Format number:", formatHarga(50000));
console.log("- Format string:", formatHarga("Gratis"));

console.log("\n✅ Program Tahap 1 (Menengah) berhasil dijalankan!");
