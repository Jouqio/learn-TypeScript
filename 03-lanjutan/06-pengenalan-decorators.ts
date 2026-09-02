/**
 * ========================================================
 * MATERI TAHAP 6: PENGENALAN DECORATORS DI TYPESCRIPT
 * File: 03-lanjutan/06-pengenalan-decorators.ts
 * ========================================================
 * 
 * Di tahap ini kita belajar konsep dasar Decorator di TypeScript:
 * 1. Apa itu Decorator & Analogi Sederhananya
 * 2. Kenapa Decorator Sangat Populer di Framework (NestJS, Angular, TypeORM)
 * 3. Class Decorator Dasar
 * 4. Method Decorator Dasar (Contoh: Otomatisasi Logging)
 */

console.log("=== BELAJAR TYPESCRIPT LANJUTAN: TAHAP 6 (PENGENALAN DECORATORS) ===");

// -----------------------------------------------------------------------------
// 1. APA ITU DECORATOR?
// -----------------------------------------------------------------------------
/**
 * 💡 ANALOGI:
 * Bayangkan kamu memiliki sebuah mobil standar (Class).
 * Jika kamu ingin menambahkan kemampuan GPS, Turbo, atau Dashcam (Fitur Tambahan),
 * kamu tidak perlu membongkar total mesin mobilnya.
 * Kamu cukup menempelkan stiker aksesori khusus di atasnya!
 * 
 * Di TypeScript, DECORATOR adalah sebuah fungsi khusus berawalan simbol `@`
 * yang digunakan untuk memodifikasi atau menambah fitur pada Class, Method, atau Properti
 * secara deklaratif dan bersih.
 */


// -----------------------------------------------------------------------------
// 2. KENAPA BANYAK DIPAKAI DI FRAMEWORK (NestJS / Angular / TypeORM)?
// -----------------------------------------------------------------------------
/**
 * Contoh di NestJS:
 *   @Controller('/users')
 *   export class UserController {
 *     @Get('/:id')
 *     getUserById(@Param('id') id: string) { ... }
 *   }
 * 
 * Decorator membuat kode backend menjadi sangat ekspresif, rapi, dan mudah dibaca!
 */


// -----------------------------------------------------------------------------
// 3. CONTOH 1: CLASS DECORATOR (Mendaftarkan Metadata Class)
// -----------------------------------------------------------------------------
/**
 * Class Decorator menerima target class dan context deklarasi.
 */

function ModulSistem(namaModul: string) {
  return function <T extends new (...args: any[]) => any>(target: T, context: ClassDecoratorContext) {
    console.log(`[DECORATOR CLASS] Mendaftarkan class '${String(context.name)}' ke dalam Modul: "${namaModul}"`);
  };
}

@ModulSistem("Autentikasi & Keamanan")
class LayananAuth {
  login(user: string): void {
    console.log(`-> User '${user}' berhasil login.`);
  }
}


// -----------------------------------------------------------------------------
// 4. CONTOH 2: METHOD DECORATOR (Logging Eksekusi Otomatis)
// -----------------------------------------------------------------------------
/**
 * Method Decorator membungkus pemanggilan method asli sehingga kita bisa
 * menambahkan kode sebelum (before) dan sesudah (after) method dijalankan.
 */

function CatatLog(originalMethod: any, context: ClassMethodDecoratorContext) {
  const namaMethod = String(context.name);

  // Return function pengganti yang membungkus method asli
  function replacementMethod(this: any, ...args: any[]) {
    console.log(`\n📢 [LOG START] Memanggil method: '${namaMethod}'`);
    console.log(`   - Parameter input :`, JSON.stringify(args));
    
    const waktuAwal = performance.now();
    // Jalankan method asli
    const hasil = originalMethod.call(this, ...args);
    const waktuAkhir = performance.now();

    console.log(`   - Return value    :`, JSON.stringify(hasil));
    console.log(`⏱️ [LOG END] Selesai dalam ${(waktuAkhir - waktuAwal).toFixed(3)} ms`);

    return hasil;
  }

  return replacementMethod;
}

// Menggunakan Method Decorator pada Class Kasir
class KasirToko {
  @CatatLog
  hitungTotalBelanja(hargaBarang: number, jumlah: number, diskonPersen: number = 0): number {
    const subtotal = hargaBarang * jumlah;
    const potongan = (subtotal * diskonPersen) / 100;
    return subtotal - potongan;
  }

  @CatatLog
  buatNomorNota(prefix: string): string {
    return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
  }
}


// -----------------------------------------------------------------------------
// 5. UJI COBA EKSEKUSI KODE
// -----------------------------------------------------------------------------
console.log("\n[1] Menguji Class Decorator:");
const auth = new LayananAuth();
auth.login("jouqio");

console.log("\n[2] Menguji Method Decorator (@CatatLog):");
const kasir = new KasirToko();

// Memanggil hitungTotalBelanja (Otomatis memicu log input, output, dan durasi eksekusi!)
const total1 = kasir.hitungTotalBelanja(50000, 3, 10);
console.log("-> Hasil Pembayaran 1: Rp", total1.toLocaleString("id-ID"));

const total2 = kasir.hitungTotalBelanja(150000, 2);
console.log("-> Hasil Pembayaran 2: Rp", total2.toLocaleString("id-ID"));

const nomorNota = kasir.buatNomorNota("INV-2026");
console.log("-> Nomor Nota:", nomorNota);

console.log("\n✅ [BERHASIL] File 03-lanjutan/06-pengenalan-decorators.ts selesai dipelajari & dieksekusi!");
