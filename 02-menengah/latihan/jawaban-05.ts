/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 5 (02-menengah)
 * File: 02-menengah/latihan/jawaban-05.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 02-menengah/latihan/jawaban-05.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN 02-MENENGAH: TAHAP 5 ===");

// JAWABAN SOAL 1:
function ambilElemenPertama<T>(daftar: T[]): T | undefined {
  return daftar[0];
}

const buahPertama = ambilElemenPertama<string>(["Apel", "Mangga", "Jeruk"]);
const angkaPertama = ambilElemenPertama<number>([100, 200, 300]);

console.log("Jawaban 1a (String):", buahPertama);
console.log("Jawaban 1b (Number):", angkaPertama);

// JAWABAN SOAL 2:
interface HasilOperasi<T> {
  waktu: Date;
  status: "berhasil" | "gagal";
  payload: T;
}

// JAWABAN SOAL 3:
const hasilNilai: HasilOperasi<number> = {
  waktu: new Date(),
  status: "berhasil",
  payload: 95,
};

const hasilPesan: HasilOperasi<string> = {
  waktu: new Date(),
  status: "berhasil",
  payload: "Database query sukses dijalankan.",
};

console.log("\nJawaban 3a (Payload Number):", hasilNilai);
console.log("Jawaban 3b (Payload String):", hasilPesan);

console.log("\n🎉 Luar biasa! Kamu sudah memahami konsep Generics di TypeScript!");
