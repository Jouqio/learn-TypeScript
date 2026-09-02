/**
 * ========================================================
 * MATERI TAHAP 1: GENERICS LANJUTAN DI TYPESCRIPT
 * File: 03-lanjutan/01-generics-lanjutan.ts
 * ========================================================
 * 
 * Di tahap menengah (02-menengah/05-generics.ts), kita sudah belajar:
 * - Apa itu generic dasar `<T>`
 * - Generic function & generic interface
 * 
 * Di tahap lanjutan ini, kita mendalami:
 * 1. Generic Constraints (`extends`) -> Membatasi tipe generic
 * 2. Generic dengan Multiple Type Parameters & `keyof`
 * 3. Default Type Parameter pada Generic (`<T = DefaultType>`)
 * 4. Contoh Kasus Nyata di Dunia Kerja
 */

console.log("=== BELAJAR TYPESCRIPT LANJUTAN: TAHAP 1 (GENERICS LANJUTAN) ===");

// -----------------------------------------------------------------------------
// 1. GENERIC CONSTRAINTS (Membatasi Tipe Generic dengan `extends`)
// -----------------------------------------------------------------------------
/**
 * MASALAH PADA GENERIC POLOS:
 * Jika kita hanya menulis `<T>`, TypeScript menganggap T bisa berupa tipe APA SAJA (number, boolean, object, dll).
 * Akibatnya, kita TIDAK BISA mengakses properti tertentu seperti `.length` atau `.id` karena belum tentu tipe T memilikinya.
 * 
 * SOLUSI: GENERIC CONSTRAINTS (`T extends ...`)
 * Kita memberi syarat: "T boleh tipe apa saja, ASALKAN memenuhi bentuk (shape) interface tertentu".
 */

// Contoh 1A: Membatasi agar T harus memiliki properti 'length'
interface PunyaPanjang {
  length: number;
}

function cetakPanjang<T extends PunyaPanjang>(item: T): T {
  console.log(`- Panjang item: ${item.length}`);
  return item;
}

console.log("\n[1] Generic Constraints (extends PunyaPanjang):");
cetakPanjang("Halo TypeScript!");      // ✅ Boleh: string punya .length
cetakPanjang([10, 20, 30, 40]);         // ✅ Boleh: array punya .length
cetakPanjang({ length: 5, nama: "Tas" }); // ✅ Boleh: object custom punya .length
// cetakPanjang(12345);                 // ❌ ERROR: number tidak punya properti .length!

// Contoh 1B: Generic Constraint pada Pencarian Data Berdasarkan ID
interface PunyaId {
  id: number | string;
}

function cariItemById<T extends PunyaId>(daftar: T[], targetId: number | string): T | undefined {
  return daftar.find((item) => item.id === targetId);
}

interface Mahasiswa extends PunyaId {
  nama: string;
  jurusan: string;
}

const daftarMhs: Mahasiswa[] = [
  { id: 101, nama: "Syauqi", jurusan: "Informatika" },
  { id: 102, nama: "Majid", jurusan: "Sistem Informasi" },
  { id: 103, nama: "Asrini", jurusan: "Bisnis Digital" },
];

const mhsDitemukan = cariItemById(daftarMhs, 102);
console.log("\n[2] Generic Constraint cariItemById:");
console.log("- Mahasiswa ditemukan:", mhsDitemukan?.nama, `(${mhsDitemukan?.jurusan})`);


// -----------------------------------------------------------------------------
// 2. MULTIPLE TYPE PARAMETERS & `keyof` CONSTRAINT
// -----------------------------------------------------------------------------
/**
 * APA ITU `keyof`?
 * Operator `keyof` mengambil semua nama properti (key) dari sebuah tipe dan menjadikannya union literal.
 * Contoh: `keyof Mahasiswa` menghasilkan `"id" | "nama" | "jurusan"`.
 * 
 * KOMBINASI DUA TIPE DENGAN CONSTRAINT:
 * `<T, K extends keyof T>`
 * Artinya: T adalah tipe objek, dan K HANYA BOLEH berupa salah satu nama properti yang sah dari T!
 */

function ambilNilaiProperti<T, K extends keyof T>(objek: T, kunci: K): T[K] {
  return objek[kunci];
}

const profilPengguna = {
  username: "jouqio",
  email: "jouqio@example.com",
  level: "Senior",
  poin: 9500,
};

console.log("\n[3] Multiple Type Parameters dengan `keyof`:");
// TypeScript otomatis tahu return value-nya adalah string (karena 'username' bertipe string)
const username = ambilNilaiProperti(profilPengguna, "username");
console.log("- Username:", username);

// TypeScript otomatis tahu return value-nya adalah number (karena 'poin' bertipe number)
const poin = ambilNilaiProperti(profilPengguna, "poin");
console.log("- Poin    :", poin);

// ambilNilaiProperti(profilPengguna, "alamat"); // ❌ ERROR: 'alamat' bukan key dari profilPengguna!


// -----------------------------------------------------------------------------
// 3. DEFAULT TYPE PARAMETER PADA GENERIC (`<T = DefaultType>`)
// -----------------------------------------------------------------------------
/**
 * KENAPA BUTUH DEFAULT TYPE?
 * Sama seperti parameter function yang bisa memiliki nilai default: `function sapa(nama = "Tamu")`
 * Generic juga bisa memiliki Tipe Default!
 * Jika saat pemanggilan kita tidak menentukan tipe `<...>`, TypeScript akan memakai tipe default tersebut.
 */

// Contoh 3A: Generic Interface dengan Default Type
interface ResponServer<TData = { pesan: string }> {
  status: "sukses" | "gagal";
  kodeHttp: number;
  data: TData;
}

// Kasus 1: Menggunakan Tipe Default (tanpa menulis <...>)
// TData otomatis menjadi `{ pesan: string }`
const responStandar: ResponServer = {
  status: "sukses",
  kodeHttp: 200,
  data: {
    pesan: "Operasi default berhasil dijalankan",
  },
};

// Kasus 2: Menimpa Tipe Default dengan Tipe Spesifik
interface DataTransaksi {
  invoiceId: string;
  totalBayar: number;
}

const responTransaksi: ResponServer<DataTransaksi> = {
  status: "sukses",
  kodeHttp: 201,
  data: {
    invoiceId: "INV-2026-001",
    totalBayar: 250000,
  },
};

console.log("\n[4] Default Type Parameter pada Generic Interface:");
console.log("- Respon Standar  :", responStandar.data.pesan);
console.log("- Respon Transaksi:", responTransaksi.data.invoiceId, `(Rp${responTransaksi.data.totalBayar.toLocaleString("id-ID")})`);


// Contoh 3B: Generic Class dengan Default Type
class WadahPenyimpanan<T = string> {
  private koleksi: T[] = [];

  tambah(item: T): void {
    this.koleksi.push(item);
  }

  ambilSemua(): T[] {
    return this.koleksi;
  }
}

// Wadah default (string)
const wadahCatatan = new WadahPenyimpanan(); // T otomatis 'string'
wadahCatatan.tambah("Catatan 1: Belajar TypeScript");
wadahCatatan.tambah("Catatan 2: Pahami Generic Constraints");

// Wadah khusus (number)
const wadahNilai = new WadahPenyimpanan<number>(); // T ditentukan manual jadi 'number'
wadahNilai.tambah(90);
wadahNilai.tambah(98);

console.log("\n[5] Generic Class dengan Default Type:");
console.log("- Koleksi Catatan (string):", wadahCatatan.ambilSemua());
console.log("- Koleksi Nilai (number)  :", wadahNilai.ambilSemua());

console.log("\n✅ [BERHASIL] File 03-lanjutan/01-generics-lanjutan.ts selesai dipelajari & dieksekusi!");
