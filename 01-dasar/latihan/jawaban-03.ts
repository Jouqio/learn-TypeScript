/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 3
 * File: 01-dasar/latihan/jawaban-03.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 01-dasar/latihan/jawaban-03.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN TAHAP 3 ===");

// JAWABAN SOAL 1:
function tambahAngka(a: number, b: number): number {
  return a + b;
}
const hasilTambah = tambahAngka(15, 25);
console.log("Jawaban 1 - Hasil Penjumlahan 15 + 25:", hasilTambah);

// JAWABAN SOAL 2:
function cetakPengumuman(judul: string): void {
  console.log(`Jawaban 2 - PENGUMUMAN: ${judul}`);
}
cetakPengumuman("Besok libur nasional!");

// JAWABAN SOAL 3:
function buatUndangan(namaTamu: string, gelar?: string): string {
  if (gelar) {
    return `Kepada Yth. ${gelar} ${namaTamu}`;
  }
  return `Kepada Yth. ${namaTamu}`;
}

const undangan1 = buatUndangan("Budi Santoso", "Dr.");
const undangan2 = buatUndangan("Siti Rahma");

console.log("Jawaban 3a (Ada gelar)   :", undangan1);
console.log("Jawaban 3b (Tanpa gelar) :", undangan2);

console.log("\n🎉 Mantap! Kamu sudah menguasai Function di TypeScript!");
