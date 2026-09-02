/**
 * ========================================================
 * TAHAP 2: TIPE DATA DASAR (ARRAY & OBJECT)
 * File: 01-dasar/02-tipe-data.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Tipe Data Primitif: string, number, boolean
 * 2. Tipe Data Array (Daftar Data Sejenis)
 * 3. Tipe Data Object (Struktur Data Lengkap / Formulir)
 * 4. Masalah nyata JavaScript yang dicegah oleh TypeScript!
 */

console.log("=== BELAJAR TYPESCRIPT: TAHAP 2 (TIPE DATA) ===");

// --------------------------------------------------------
// 1. TIPE DATA PRIMITIF
// --------------------------------------------------------
let namaProduk: string = "Laptop Gaming";
let hargaProduk: number = 15000000;
let stokTersedia: boolean = true;

console.log("\n[1] Data Primitif Produk:");
console.log(`Produk: ${namaProduk}`);
console.log(`Harga : Rp${hargaProduk.toLocaleString("id-ID")}`);
console.log(`Ada Stok: ${stokTersedia ? "Tersedia" : "Habis"}`);

// --------------------------------------------------------
// 2. TIPE DATA ARRAY
// --------------------------------------------------------
/**
 * ANALOGI ARRAY:
 * Bayangkan sebuah "Rak Telur". Rak telur hanya boleh diisi telur (sejenis).
 * Jika kita mencoba meletakkan bola tenis di rak telur, TypeScript akan menolaknya.
 *
 * Cara penulisan tipe array:
 * - string[]  -> artinya: array yang isinya SEMUA harus berupa teks (string)
 * - number[]  -> artinya: array yang isinya SEMUA harus berupa angka (number)
 */

let daftarHobi: string[] = ["Membaca", "Ngoding", "Main Game"];
let daftarNilai: number[] = [85, 90, 87, 95];

// Kita bisa menambah data baru dengan .push() selama tipe datanya sama:
daftarHobi.push("Olahraga"); // ✅ BENAR, karena "Olahraga" adalah string
daftarNilai.push(100);       // ✅ BENAR, karena 100 adalah number

/*
 ❌ CONTOH SALAH PADA ARRAY:
 daftarHobi.push(12345); 
 // ⛔ Error: Argument of type 'number' is not assignable to parameter of type 'string'.
 // TypeScript menjaga agar array hobi tidak kemasukan angka secara tidak sengaja!
*/

console.log("\n[2] Data Array:");
console.log("- Daftar Hobi :", daftarHobi);
console.log("- Daftar Nilai:", daftarNilai);

// --------------------------------------------------------
// 3. TIPE DATA OBJECT (Struktur Data Lengkap)
// --------------------------------------------------------
/**
 * ANALOGI OBJECT:
 * Bayangkan sebuah "Formulir Pendaftaran KTP".
 * Di formulir sudah ada kolom baku:
 * - Nama (harus diisi huruf)
 * - Umur (harus diisi angka)
 * - Status Menikah (pilihan Ya/Tidak)
 *
 * Cara penulisan tipe object:
 * let namaObj: { properti1: tipe1; properti2: tipe2 } = { ... };
 */

let profilPengguna: {
  id: number;
  namaLengkap: string;
  email: string;
  isPremium: boolean;
} = {
  id: 101,
  namaLengkap: "Naufal Bau",
  email: "palji@example.com",
  isPremium: true,
};

console.log("\n[3] Data Object Pengguna:");
console.log("- ID     :", profilPengguna.id);
console.log("- Nama   :", profilPengguna.namaLengkap);
console.log("- Email  :", profilPengguna.email);
console.log("- Premium:", profilPengguna.isPremium ? "Member VIP" : "Member Biasa");

// --------------------------------------------------------
// 4. MASALAH NYATA YANG DICEGAH TYPESCRIPT
// --------------------------------------------------------
/**
 * Di JavaScript biasa, jika kita salah ketik nama properti (typo),
 * nilainya menjadi `undefined` dan bisa membuat aplikasi error/crash diam-diam.
 *
 * Di TypeScript, compiler langsung mendeteksi typo tersebut!
 */

/*
 ❌ CONTOH TYPO DI JAVASCRIPT:
 console.log(profilPengguna.emaill); // Salah ketik 'emaill' (dobel l)
 // Di JS: mencetak `undefined` (tanpa ada peringatan).
 // Di TS: ⛔ Error: Property 'emaill' does not exist on type '{ id: number; namaLengkap: string; email: string; isPremium: boolean; }'. Did you mean 'email'?
*/

console.log("\n✅ Program Tahap 2 selesai dieksekusi dengan sempurna!");
