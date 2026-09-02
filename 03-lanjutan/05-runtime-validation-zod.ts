/**
 * ========================================================
 * MATERI TAHAP 5: RUNTIME VALIDATION DENGAN ZOD ⭐
 * File: 03-lanjutan/05-runtime-validation-zod.ts
 * ========================================================
 * 
 * ⭐ KENAPA MATERI INI SANGAT PENTING DI DUNIA KERJA?
 * Zod adalah library validasi standar industri nomor 1 di ekosistem modern
 * (digunakan luas di Next.js Server Actions, tRPC, NestJS, Express, React Hook Form).
 * 
 * Di tahap ini kita belajar:
 * 1. Mengapa TypeScript Saja TIDAK CUKUP? (Compile-Time vs Runtime)
 * 2. Apa itu Zod & Konsep Single Source of Truth
 * 3. Membuat Schema Zod & Type Inference (`z.infer`)
 * 4. Validasi Aman dengan `safeParse()`
 * 5. Format Pesan Error Zod yang Rapi
 */

import { z } from "zod";

console.log("=== BELAJAR TYPESCRIPT LANJUTAN: TAHAP 5 (RUNTIME VALIDATION DENGAN ZOD) ===");

// -----------------------------------------------------------------------------
// 1. COMPILE-TIME VS RUNTIME: KENAPA TYPESCRIPT SAJA TIDAK CUKUP?
// -----------------------------------------------------------------------------
/**
 * 💡 ILUSTRASI MASALAH:
 * TypeScript adalah "Satpam di Gerbang Masuk Kantor" (Compile-Time).
 * Tetapi saat aplikasi berjalan di produksi (Runtime), satpam tersebut pulang!
 * 
 * Jika ada data masuk dari:
 * - Request Body API / Frontend Form (JSON)
 * - Response API Pihak Ketiga (misal: Payment Gateway, Midtrans, Stripe)
 * - Environment Variables (.env)
 * - Database Query
 * 
 * Data tersebut bisa saja memiliki format SALAH, 'null', atau disusupi tipe berbahaya,
 * dan TypeScript biasa TIDAK BISA mendeteksinya saat aplikasi sedang menyala.
 * 
 * 💡 SOLUSI: ZOD (Runtime Schema Validation)
 * Zod memeriksa keaslian data secara langsung saat runtime, dan jika valid,
 * TypeScript langsung memberikan jaminan tipe yang 100% akurat.
 */


// -----------------------------------------------------------------------------
// 2. MEMBUAT SCHEMA ZOD & TYPE INFERENCE (`z.infer`)
// -----------------------------------------------------------------------------
/**
 * Konsep: "Definisikan Schema Zod Sekali Saja, Tipe TypeScript Otomatis Mengikuti!"
 */

// A. Definisikan Schema Validasi
const UserRegistrasiSchema = z.object({
  username: z
    .string()
    .min(3, "Username minimal 3 karakter")
    .max(20, "Username maksimal 20 karakter"),
  email: z.string().email("Format email tidak valid"),
  umur: z.number().int().min(18, "Usia minimal harus 18 tahun"),
  role: z.enum(["member", "admin", "moderator"]).default("member"),
  hobi: z.array(z.string()).min(1, "Minimal miliki 1 hobi"),
  alamat: z
    .object({
      kota: z.string(),
      kodePos: z.string().length(5, "Kode pos harus tepat 5 digit"),
    })
    .optional(), // Properti opsional
});

// B. Infer Tipe TypeScript Otomatis dari Schema di atas (Tidak perlu tulis interface manual!)
type UserRegistrasi = z.infer<typeof UserRegistrasiSchema>;


// -----------------------------------------------------------------------------
// 3. VALIDASI DENGAN `safeParse()` (Pola Mirip Result Pattern!)
// -----------------------------------------------------------------------------
/**
 * Zod memiliki dua metode validasi:
 * 1. `schema.parse(data)` -> Melempar `throw ZodError` jika gagal (harus di-try-catch).
 * 2. `schema.safeParse(data)` -> Mengembalikan objek Result `{ success: true, data }` atau `{ success: false, error }`.
 *    (Metode ini sangat disukai karena type-safe dan tidak membuat server crash!)
 */

function prosesRegistrasi(inputDariLuar: unknown): void {
  const hasil = UserRegistrasiSchema.safeParse(inputDariLuar);

  if (!hasil.success) {
    console.log("❌ Validasi Gagal!");
    // Mengambil rincian error yang rapi
    const daftarError = hasil.error.format();
    console.log("- Rincian Pesan Error:", hasil.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`));
  } else {
    // Di blok ini, 'hasil.data' dijamin 100% valid dan bertipe 'UserRegistrasi'
    console.log("✅ Validasi Berhasil!");
    console.log("- Data User Valid:", hasil.data.username, `(${hasil.data.email}) - Role: ${hasil.data.role}`);
  }
}


// -----------------------------------------------------------------------------
// 4. SIMULASI DATA MASUK DARI REQUEST RUNTIME
// -----------------------------------------------------------------------------
console.log("\n[1] Percobaan Validasi Data Valid:");
const dataMasukBenar = {
  username: "syauqi",
  email: "syauqi@example.com",
  umur: 24,
  hobi: ["Coding", "Belajar", "Olahraga", "Membaca", "Berenang"],
  alamat: {
    kota: "Jakarta",
    kodePos: "12345",
  },
};
prosesRegistrasi(dataMasukBenar);

console.log("\n[2] Percobaan Validasi Data Tidak Valid (Format Salah & Kurang Data):");
const dataMasukSalah = {
  username: "ab", // ❌ Terlalu pendek (< 3 karakter)
  email: "bukan-email", // ❌ Bukan email
  umur: 15, // ❌ Kurang dari 18 tahun
  hobi: [], // ❌ Array kosong (< 1)
  alamat: {
    kota: "Bandung",
    kodePos: "123", // ❌ Bukan 5 digit
  },
};
prosesRegistrasi(dataMasukSalah);

console.log("\n✅ [BERHASIL] File 03-lanjutan/05-runtime-validation-zod.ts selesai dipelajari & dieksekusi!");
