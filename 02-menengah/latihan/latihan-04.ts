/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 4 (02-menengah)
 * File: 02-menengah/latihan/latihan-04.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan Utility Types di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 02-menengah/latihan/jawaban-04.ts
 */

console.log("=== LATIHAN 02-MENENGAH: TAHAP 4 (UTILITY TYPES) ===");

// Diberikan master interface sebuah artikel blog:
interface Artikel {
  id: number;
  judul: string;
  konten: string;
  penulis: string;
  dilihat: number;
  terbit: boolean;
}

// SOAL 1: Partial<T>
// Buatlah function `editArtikel(id: number, perubahan: Partial<Artikel>): void`
// Function ini menerima perubahan data artikel (yang bersifat opsional semua).
// Cetak ke console: "Mengedit artikel ID [id]:", lalu tampilkan objek perubahannya.
// Tulis kodemu di bawah:

function editArtikel(id: number, perubahan: Partial<Artikel>): void {
  console.log(`"jawaban 1: Mengedit artikel ID ${id}:"`, perubahan);
}

editArtikel(101, { judul: "Panduan Lengkap TypeScript 2026", terbit: true });

// SOAL 2: Pick<T, K>
// Buat tipe alias `PreviewArtikel` yang HANYA mengambil properti `id`, `judul`, dan `penulis` dari `Artikel`.
// Lalu buat satu variabel `ringkasan` dengan tipe `PreviewArtikel`.
// Tulis kodemu di bawah:

type PreviewArtikel = Pick<Artikel, "id" | "judul" | "penulis">;

const ringkasan: PreviewArtikel = {
  id: 101,
  judul: "Mengenal Utility Types",
  penulis: "Syauqi Nuzul Abdi",
};

console.log("jawaban 2: PreviewArtikel", ringkasan);

// SOAL 3: Omit<T, K>
// Buat tipe alias `InputArtikelBaru` yang MEMBUANG properti `id` dan `dilihat` dari `Artikel`
// (karena id dan jumlah dilihat biasanya diisi otomatis oleh database).
// Buat satu variabel `draftBaru` dengan tipe `InputArtikelBaru`.
// Tulis kodemu di bawah:


type InputArtikelBaru = Omit<Artikel, "id" | "dilihat">;

const draftBaru: InputArtikelBaru = {
  judul: "Tutorial Next.js & TypeScript",
  konten: "Isi konten tutorial framework modern...",
  penulis: "Jouqio",
  terbit: false,
};

console.log("jawaban 3: InputArtikelBaru", draftBaru);


// SOAL 4: Record<K, T>
// Buat tipe role: `type TingkatMember = "bronze" | "silver" | "gold";`
// Buat variabel `diskonMember: Record<TingkatMember, number>` yang memetakan:
// - bronze: 5 (diskon 5%)
// - silver: 10 (diskon 10%)
// - gold: 20 (diskon 20%)
// Tulis kodemu di bawah:

type TingkatMember = "bronze" | "silver" | "gold";

const diskonMember: Record<TingkatMember, number> = {
  bronze: 10,
  silver: 20,
  gold: 50,
};

console.log("jawaban 4: diskonMember", diskonMember);


// SOAL 5: Uji Coba Semua
// Panggil function dan cetak variabel-variabel di atas ke console.
console.log("jawaban 5: prank", "\n" + "=".repeat(80));


