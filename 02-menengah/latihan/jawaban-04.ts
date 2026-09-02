/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 4 (02-menengah)
 * File: 02-menengah/latihan/jawaban-04.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 02-menengah/latihan/jawaban-04.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN 02-MENENGAH: TAHAP 4 ===");

interface Artikel {
  id: number;
  judul: string;
  konten: string;
  penulis: string;
  dilihat: number;
  terbit: boolean;
}

// JAWABAN SOAL 1 (Partial<T>):
function editArtikel(id: number, perubahan: Partial<Artikel>): void {
  console.log(`Jawaban 1 - Mengedit artikel ID ${id}:`, perubahan);
}

editArtikel(101, { judul: "Panduan Lengkap TypeScript 2026", terbit: true });

// JAWABAN SOAL 2 (Pick<T, K>):
type PreviewArtikel = Pick<Artikel, "id" | "judul" | "penulis">;

const ringkasan: PreviewArtikel = {
  id: 101,
  judul: "Mengenal Utility Types",
  penulis: "Syauqi",
};
console.log("Jawaban 2 (PreviewArtikel):", ringkasan);

// JAWABAN SOAL 3 (Omit<T, K>):
type InputArtikelBaru = Omit<Artikel, "id" | "dilihat">;

const draftBaru: InputArtikelBaru = {
  judul: "Tutorial Next.js & TypeScript",
  konten: "Isi konten tutorial framework modern...",
  penulis: "Jouqio",
  terbit: false,
};
console.log("Jawaban 3 (InputArtikelBaru):", draftBaru);

// JAWABAN SOAL 4 (Record<K, T>):
type TingkatMember = "bronze" | "silver" | "gold";

const diskonMember: Record<TingkatMember, number> = {
  bronze: 5,
  silver: 10,
  gold: 20,
};

console.log("Jawaban 4 (Diskon Member Gold):", diskonMember.gold + "%");

console.log("\n🎉 Luar biasa! Kamu sudah menguasai Utility Types di TypeScript!");
