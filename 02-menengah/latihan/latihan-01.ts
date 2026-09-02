/**
 * ========================================================
 * 📝 LATIHAN MANDIRI: TAHAP 1 (02-menengah)
 * File: 02-menengah/latihan/latihan-01.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan union & intersection di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 02-menengah/latihan/jawaban-01.ts
 */

console.log("=== 📝 LATIHAN 02-MENENGAH: TAHAP 1 ===");

// 🎯 SOAL 1: Union Type
// Buatlah tipe data bernama `HasilResponse` yang bisa bernilai `string` ATAU `boolean`.
// Lalu buat variabel `responServer` dengan tipe tersebut dan uji dengan nilai `true`, lalu ubah menjadi "Berhasil".
// Tulis kodemu di bawah:


// 🎯 SOAL 2: Literal Union (Role Pengguna)
// Buat tipe alias `RoleUser` yang hanya boleh bernilai: "admin", "editor", atau "viewer".
// Buat variabel `roleSaya` bertipe `RoleUser` dengan nilai salah satu role di atas.
// Tulis kodemu di bawah:


// 🎯 SOAL 3: Intersection Type (&)
// Diberikan dua tipe dasar:
type Akun = {
  username: string;
  email: string;
};

type AksesVIP = {
  levelVIP: number;
  kuotaDownload: number;
};

// Gabungkan `Akun` dan `AksesVIP` menjadi satu tipe bernama `MemberVIP` menggunakan operator intersection (&).
// Lalu buat satu objek variabel `memberBaru` bertipe `MemberVIP` dengan data lengkap!
// Tulis kodemu di bawah:


// 🎯 SOAL 4: Function dengan Union Type
// Buat function `tampilkanKodeDiskon` yang menerima parameter `kode: string | number`.
// Jika `kode` berupa number, return: "KODE-ANGKA-[kode]"
// Jika `kode` berupa string, return: "KODE-TEKS-[kode]"
// Tulis kodemu di bawah:

