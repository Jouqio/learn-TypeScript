/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 6 (03-lanjutan)
 * File: 03-lanjutan/latihan/latihan-06.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi soal latihan Decorators di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 03-lanjutan/latihan/jawaban-06.ts
 */

console.log("=== LATIHAN 03-LANJUTAN: TAHAP 6 (PENGENALAN DECORATORS) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Class Decorator Logger
// -----------------------------------------------------------------------------
// Buatlah Class Decorator `EntitasBasisData(namaTabel: string)`:
// Decorator ini mencetak pesan ke console saat class didefinisikan:
// `[DB MAPPING] Class '<nama_class>' dipetakan ke tabel: '<namaTabel>'`
// Tulis kodemu di bawah:


function EntitasBasisData(namaTabel: string) {
    return function <T extends new (...args: any[]) => any>(target: T, context: ClassDecoratorContext) {
        console.log(`[DB MAPPING] Class '${String(context.name)}' dipetakan ke tabel: '${namaTabel}'`);
    };
}


// -----------------------------------------------------------------------------
// SOAL 2: Membuat Method Decorator Pengubah String ke Huruf Kapital (KapitalkanOutput)
// -----------------------------------------------------------------------------
// Buatlah Method Decorator `KapitalkanOutput`:
// Method decorator ini membungkus method yang me-return string,
// lalu mengubah nilai return tersebut menjadi HURUF BESAR (toUpperCase()).
// Tulis kodemu di bawah:

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
// 1. Buat class `UserEntity` yang di-decorate dengan `@EntitasBasisData("users")`
// 2. Berikan method `formatNama(depan: string, belakang: string): string` yang di-decorate dengan `@KapitalkanOutput`.
// 3. Buat instance `UserEntity`, panggil method `formatNama("syauqi", "nuzul")`, dan cetak hasilnya.
// Tulis kodemu di bawah:

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
console.log(" Hasil formatNama (Otomatis Kapital):", namaLengkap);
