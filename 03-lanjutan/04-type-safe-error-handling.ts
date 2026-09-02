/**
 * ========================================================
 * MATERI TAHAP 4: ERROR HANDLING YANG TYPE-SAFE
 * File: 03-lanjutan/04-type-safe-error-handling.ts
 * ========================================================
 * 
 * Di tahap ini kita belajar dua teknik penanganan error modern:
 * 1. Custom Error Classes (Berorientasi Objek & Terstruktur)
 * 2. Result / Either Pattern (Error Handling Type-Safe Terinspirasi dari Rust & Go)
 * 3. Mengapa Result Pattern Jauh Lebih Aman dibanding `try-catch` Polos
 */

console.log("=== BELAJAR TYPESCRIPT LANJUTAN: TAHAP 4 (TYPE-SAFE ERROR HANDLING) ===");

// -----------------------------------------------------------------------------
// 1. MASALAH PADA `try-catch` & `throw` BIASA DI TYPESCRIPT
// -----------------------------------------------------------------------------
/**
 * KENAPA `try-catch` POLOS KURANG AMAN?
 * 1. Fungsi yang melakukan `throw new Error()` TIDAK menampakkan tipe error di signature-nya.
 *    Contoh: `function cariUser(id: string): User` -> Tidak ada petunjuk bahwa function ini bisa melempar error!
 * 2. Di dalam blok `catch (error)`, variabel `error` selalu bertipe `unknown` (atau `any`).
 * 3. Programmer sering LUPA membungkus fungsi dengan `try-catch`, menyebabkan aplikasi CRASH di runtime.
 */


// -----------------------------------------------------------------------------
// 2. TEKNIK 1: CUSTOM ERROR CLASSES
// -----------------------------------------------------------------------------
/**
 * Dengan membuat class turunan dari `Error`, kita bisa menambahkan metadata
 * seperti `kodeStatus` (HTTP Status) dan `kodeError` spesifik.
 */

class AppError extends Error {
  constructor(
    public override message: string,
    public statusCode: number = 500,
    public kodeError: string = "INTERNAL_SERVER_ERROR"
  ) {
    super(message);
    this.name = this.constructor.name; // Menyesuaikan nama class error
    Object.setPrototypeOf(this, new.target.prototype); // Memperbaiki prototype chain
  }
}

class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} tidak ditemukan`, 404, "NOT_FOUND");
  }
}

class SaldoKurangError extends AppError {
  constructor(sisaSaldo: number, nominalDibutuhkan: number) {
    super(
      `Saldo tidak mencukupi. Sisa: Rp${sisaSaldo.toLocaleString("id-ID")}, Dibutuhkan: Rp${nominalDibutuhkan.toLocaleString("id-ID")}`,
      400,
      "INSUFFICIENT_FUNDS"
    );
  }
}

console.log("\n[1] Contoh Custom Error Class:");
const errContoh = new NotFoundError("Akun Pengguna #404");
console.log(`- Nama Error : ${errContoh.name}`);
console.log(`- Status Code: ${errContoh.statusCode}`);
console.log(`- Kode Error : ${errContoh.kodeError}`);
console.log(`- Pesan      : ${errContoh.message}`);


// -----------------------------------------------------------------------------
// 3. TEKNIK 2: RESULT / EITHER TYPE PATTERN (⭐ STANDAR INDUSTRI MODERN)
// -----------------------------------------------------------------------------
/**
 * POLA RESULT (Menggabungkan Discriminated Union + Generics):
 * Alih-alih melempar (`throw`) error yang bisa membuat aplikasi crash,
 * fungsi MENGEMBALIKAN sebuah objek Result:
 * - Jika Sukses: `{ success: true, data: T }`
 * - Jika Gagal : `{ success: false, error: E }`
 * 
 * Keuntungan Luar Biasa:
 * 1. Pemanggil fungsi DIPAKSA oleh TypeScript untuk mengecek `.success` sebelum mengakses `.data`.
 * 2. Tidak ada kejutan runtime crash akibat exception yang tidak tertangkap.
 */

// Definisi Result Type:
type Ok<T> = {
  success: true;
  data: T;
};

type Err<E> = {
  success: false;
  error: E;
};

type Result<T, E = AppError> = Ok<T> | Err<E>;

// Helper functions untuk membuat Result dengan ringkas:
function ok<T>(data: T): Ok<T> {
  return { success: true, data };
}

function err<E>(error: E): Err<E> {
  return { success: false, error };
}


// -----------------------------------------------------------------------------
// 4. CONTOH KASUS NYATA: SISTEM PENARIKAN SALDO DENGAN RESULT PATTERN
// -----------------------------------------------------------------------------

interface AkunBank {
  id: string;
  pemilik: string;
  saldo: number;
}

interface BuktiPenarikan {
  nomorReferensi: string;
  nominalTarik: number;
  sisaSaldo: number;
  waktu: Date;
}

function tarikUang(akun: AkunBank, jumlah: number): Result<BuktiPenarikan, AppError> {
  if (jumlah <= 0) {
    return err(new AppError("Jumlah penarikan harus lebih dari 0", 400, "INVALID_AMOUNT"));
  }

  if (akun.saldo < jumlah) {
    return err(new SaldoKurangError(akun.saldo, jumlah));
  }

  // Kurangi saldo
  akun.saldo -= jumlah;

  const bukti: BuktiPenarikan = {
    nomorReferensi: "WD-" + Math.floor(100000 + Math.random() * 900000),
    nominalTarik: jumlah,
    sisaSaldo: akun.saldo,
    waktu: new Date(),
  };

  return ok(bukti);
}

// Simulasi Uji Coba:
const dompetSaya: AkunBank = {
  id: "ACC-001",
  pemilik: "Syauqi Nuzul",
  saldo: 500000,
};

console.log("\n[2] Simulasi Penarikan Saldo dengan Result Pattern:");

// Percobaan 1: Penarikan Berhasil
console.log("\n-> Percobaan 1: Tarik Rp200.000");
const hasil1 = tarikUang(dompetSaya, 200000);

if (hasil1.success) {
  // Di blok ini TypeScript 100% tahu 'hasil1.data' ada!
  console.log(`✅ Penarikan Sukses! Ref: ${hasil1.data.nomorReferensi}`);
  console.log(`   Sisa Saldo: Rp${hasil1.data.sisaSaldo.toLocaleString("id-ID")}`);
} else {
  // Di blok ini TypeScript 100% tahu 'hasil1.error' ada!
  console.log(`❌ Gagal: [${hasil1.error.kodeError}] ${hasil1.error.message}`);
}

// Percobaan 2: Penarikan Melebihi Saldo (Gagal Terkontrol)
console.log("\n-> Percobaan 2: Tarik Rp400.000 (Saldo saat ini Rp300.000)");
const hasil2 = tarikUang(dompetSaya, 400000);

if (hasil2.success) {
  console.log(`✅ Penarikan Sukses! Sisa Saldo: Rp${hasil2.data.sisaSaldo.toLocaleString("id-ID")}`);
} else {
  console.log(`❌ Gagal: [${hasil2.error.kodeError}] ${hasil2.error.message}`);
}

// Percobaan 3: Penarikan Tidak Valid
console.log("\n-> Percobaan 3: Tarik Rp -50.000 (Nominal Negatif)");
const hasil3 = tarikUang(dompetSaya, -50000);

if (hasil3.success) {
  console.log(`✅ Penarikan Sukses!`);
} else {
  console.log(`❌ Gagal: [${hasil3.error.kodeError}] ${hasil3.error.message}`);
}

console.log("\n✅ [BERHASIL] File 03-lanjutan/04-type-safe-error-handling.ts selesai dipelajari & dieksekusi!");
