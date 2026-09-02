/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 6 (03-lanjutan)
 * File: 03-lanjutan/latihan/jawaban-06.ts
 * ========================================================
 */

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 6 (PENGENALAN DECORATORS) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Class Decorator Logger
// -----------------------------------------------------------------------------
function EntitasBasisData(namaTabel: string) {
  return function <T extends new (...args: any[]) => any>(target: T, context: ClassDecoratorContext) {
    console.log(`[DB MAPPING] Class '${String(context.name)}' dipetakan ke tabel: '${namaTabel}'`);
  };
}

// -----------------------------------------------------------------------------
// SOAL 2: Membuat Method Decorator Pengubah String ke Huruf Kapital (KapitalkanOutput)
// -----------------------------------------------------------------------------
function KapitalkanOutput(originalMethod: any, context: ClassMethodDecoratorContext) {
  function replacementMethod(this: any, ...args: any[]) {
    const hasil = originalMethod.call(this, ...args);
    if (typeof hasil === "string") {
      return hasil.toUpperCase();
    }
    return hasil;
  }
  return replacementMethod;
}

// -----------------------------------------------------------------------------
// SOAL 3: Menggunakan Decorator pada Class
// -----------------------------------------------------------------------------
@EntitasBasisData("users")
class UserEntity {
  @KapitalkanOutput
  formatNama(depan: string, belakang: string): string {
    return `${depan} ${belakang}`;
  }
}

console.log("\n[1] Uji Coba Eksekusi Decorator:");
const user = new UserEntity();
const namaLengkap = user.formatNama("syauqi", "nuzul");
console.log("- Hasil formatNama (Otomatis Kapital):", namaLengkap);

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-06.ts berjalan sukses!");
