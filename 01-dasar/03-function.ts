/**
 * ========================================================
 * TAHAP 3: FUNCTION DENGAN TYPESCRIPT
 * File: 01-dasar/03-function.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Memberi tipe pada Parameter function (Input)
 * 2. Memberi tipe pada Return Value function (Output)
 * 3. Tipe `void` untuk function yang tidak mengembalikan nilai
 * 4. Optional Parameter (Parameter yang boleh kosong dengan tanda `?`)
 */

console.log("=== BELAJAR TYPESCRIPT: TAHAP 3 (FUNCTION) ===");

// --------------------------------------------------------
// 1. TIPE PADA PARAMETER & RETURN VALUE
// --------------------------------------------------------
/**
 * ANALOGI FUNCTION:
 * Bayangkan sebuah "Mesin Blender Jus":
 * - Corong Masuk (Parameter) = Kita tentukan HANYA menerima Buah (string).
 * - Pipa Keluar (Return Value) = Dijamin mengeluarkan Jus Siap Minum (string).
 *
 * Rumus penulisan function bertipe:
 * function namaFunction(param1: tipe1, param2: tipe2): tipeReturn {
 *     return hasil;
 * }
 */

function hitungLuasPersegi(sisi: number): number {
  return sisi * sisi;
}

const luas = hitungLuasPersegi(5);
console.log("\n[1] Luas Persegi (sisi 5):", luas); // Output: 25

/*
 ❌ CONTOH SALAH:
 hitungLuasPersegi("lima");
 // ⛔ Error: Argument of type 'string' is not assignable to parameter of type 'number'.
 // TypeScript menjaga agar kita tidak mengirim teks ke function yang butuh angka!
*/

// --------------------------------------------------------
// 2. TIPE `void` (Function Tanpa Return Value)
// --------------------------------------------------------
/**
 * Jika sebuah function hanya bertugas melakukan aksi (misal: console.log)
 * dan TIDAK mengembalikan data apa-apa (tidak pakai kata kunci `return`),
 * maka tipe return-nya adalah `void`.
 */

function sapaPengguna(nama: string): void {
  console.log(`Halo, selamat datang ${nama}!`);
}

console.log("\n[2] Memanggil Function Void:");
sapaPengguna("Zakie");

// --------------------------------------------------------
// 3. OPTIONAL PARAMETER (Tanda `?`)
// --------------------------------------------------------
/**
 * ANALOGI OPTIONAL PARAMETER:
 * Bayangkan memesan kopi di kasir:
 * - Nama Kopi (Wajib): "Americano"
 * - Catatan Tambahan (Opsional, boleh ada boleh tidak): "Less ice"
 *
 * Di TypeScript, kita tambahkan tanda `?` setelah nama parameter.
 * Contoh: `catatan?: string`
 */

function buatKopi(namaKopi: string, catatan?: string): string {
  if (catatan) {
    return `Pesanan: Kopi ${namaKopi} (Catatan: ${catatan})`;
  }
  return `Pesanan: Kopi ${namaKopi} (Standar tanpa catatan)`;
}

console.log("\n[3] Optional Parameter:");
// Kasus A: Memberikan semua parameter
const pesanan1 = buatKopi("Espresso", "Sedikit gula");
console.log("- Pesanan 1:", pesanan1);

// Kasus B: Melewatkan parameter opsional
const pesanan2 = buatKopi("Latte");
console.log("- Pesanan 2:", pesanan2);

// --------------------------------------------------------
// 4. FUNCTION DENGAN DUA PARAMETER & OPERASI MATEMATIKA
// --------------------------------------------------------
function hitungTotalBelanja(hargaBarang: number, jumlah: number): number {
  return hargaBarang * jumlah;
}

const total = hitungTotalBelanja(25000, 3);
console.log("\n[4] Total Belanja (Rp25.000 x 3): Rp" + total.toLocaleString("id-ID"));

console.log("\n✅ Program Tahap 3 berhasil dijalankan!");
