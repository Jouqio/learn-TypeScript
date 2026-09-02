/**
 * ========================================================
 * TAHAP 5: GENERICS DASAR DI TYPESCRIPT
 * File: 02-menengah/05-generics.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Apa itu Generics & Masalah apa yang diselesaikan?
 * 2. Generic Function Sederhana (`<T>`)
 * 3. Generic Interface (Wrapper Response API)
 * 4. Generic dengan Multiple Types (`<T, U>`)
 */

console.log("=== BELAJAR TYPESCRIPT MENENGAH: TAHAP 5 (GENERICS) ===");

// --------------------------------------------------------
// 1. KENAPA PERLU GENERICS?
// --------------------------------------------------------
/**
 * ANALOGI GENERICS:
 * Bayangkan sebuah "Kotak Kargo Universal Berstiker Transparan":
 * - Jika kamu memasukkan Buku ke dalam kotak, kotaknya otomatis bertipe `Kotak<Buku>`, dan saat diambil dijamin isinya adalah Buku.
 * - Jika kamu memasukkan Laptop, kotaknya otomatis menjadi `Kotak<Laptop>`.
 *
 * Tanpa Generics:
 * - Kita harus bikin function `bungkusBuku()`, `bungkusLaptop()`, `bungkusSepatu()` satu per satu (duplikasi kode).
 * - ATAU kita pakai `any`, tapi kita kehilangan fitur keamanan tipe data dari TypeScript!
 *
 * Huruf `<T>` adalah singkatan dari "Type" (variabel untuk tipe data).
 */

// --------------------------------------------------------
// 2. GENERIC FUNCTION SEDERHANA
// --------------------------------------------------------
// Function ini menerima data bertipe T, dan mengembalikan data yang tipenya SAMA persis (T):
function bungkusItem<T>(item: T): { isi: T; waktuDibuat: Date } {
  return {
    isi: item,
    waktuDibuat: new Date(),
  };
}

// Kasus A: Membungkus Teks (T otomatis jadi 'string')
const paketTeks = bungkusItem("Buku Panduan TypeScript");
console.log("\n[1] Generic Function (String):");
console.log("- Isi Paket:", paketTeks.isi.toUpperCase()); // Method string aman dipanggil!

// Kasus B: Membungkus Angka (T otomatis jadi 'number')
const paketAngka = bungkusItem(100000);
console.log("\n[2] Generic Function (Number):");
console.log("- Isi Paket:", paketAngka.isi.toLocaleString("id-ID")); // Method number aman dipanggil!

// --------------------------------------------------------
// 3. GENERIC INTERFACE (Sangat Populer untuk Response API!)
// --------------------------------------------------------
/**
 * Di aplikasi web, format response dari backend biasanya selalu sama:
 * Ada status, pesan, dan data utama.
 * TAPI tipe data utamanya bisa berbeda-beda tergantung endpoint!
 */

interface ApiResponse<T> {
  sukses: boolean;
  pesan: string;
  data: T; // Data bisa berupa User, Produk, Daftar Buku, dll.
}

// Data User
type User = {
  id: number;
  nama: string;
};

// Data Produk
type Produk = {
  kode: string;
  harga: number;
};

// Response Endpoint Profil User:
const responseUser: ApiResponse<User> = {
  sukses: true,
  pesan: "Data user berhasil diambil",
  data: { id: 1, nama: "Syauqi Nuzul Abdi" },
};

// Response Endpoint Produk:
const responseProduk: ApiResponse<Produk> = {
  sukses: true,
  pesan: "Data produk ditemukan",
  data: { kode: "PRD-001", harga: 75000 },
};

console.log("\n[3] Generic Interface ApiResponse<T>:");
console.log("- Response User  :", responseUser.data.nama);
console.log("- Response Produk:", responseProduk.data.kode, "-> Rp" + responseProduk.data.harga);

// --------------------------------------------------------
// 4. GENERIC DENGAN DUA TIPE (<T, U>)
// --------------------------------------------------------
// Function untuk menggabungkan dua data berbeda menjadi sepasang (Pair/Tuple)
function gabungPasangan<T, U>(pertama: T, kedua: U): { awal: T; akhir: U } {
  return {
    awal: pertama,
    akhir: kedua,
  };
}

const pasanganData = gabungPasangan("Ranking", 1);
console.log("\n[4] Generic Dua Tipe <T, U>:", pasanganData);

console.log("\n✅ Program Tahap 5 (Menengah) berhasil dijalankan!");
