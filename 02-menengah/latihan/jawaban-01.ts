/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 1 (02-menengah)
 * File: 02-menengah/latihan/jawaban-01.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 02-menengah/latihan/jawaban-01.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN 02-MENENGAH: TAHAP 1 ===");

// 🎯 JAWABAN SOAL 1:
type HasilResponse = string | boolean;
let responServer: HasilResponse = true;
console.log("Jawaban 1a (boolean):", responServer);
responServer = "Berhasil memuat data";
console.log("Jawaban 1b (string) :", responServer);

// 🎯 JAWABAN SOAL 2:
type RoleUser = "admin" | "editor" | "viewer";
let roleSaya: RoleUser = "editor";
console.log("Jawaban 2 (Role User):", roleSaya);

// 🎯 JAWABAN SOAL 3:
type Akun = {
  username: string;
  email: string;
};

type AksesVIP = {
  levelVIP: number;
  kuotaDownload: number;
};

type MemberVIP = Akun & AksesVIP;

const memberBaru: MemberVIP = {
  username: "zakie_pro",
  email: "zakie@example.com",
  levelVIP: 2,
  kuotaDownload: 50,
};
console.log("Jawaban 3 (Member VIP):", memberBaru);

// 🎯 JAWABAN SOAL 4:
function tampilkanKodeDiskon(kode: string | number): string {
  if (typeof kode === "number") {
    return `KODE-ANGKA-${kode}`;
  }
  return `KODE-TEKS-${kode}`;
}

console.log("Jawaban 4a:", tampilkanKodeDiskon(12345));
console.log("Jawaban 4b:", tampilkanKodeDiskon("DISKONBESAR"));

console.log("\n🎉 Selamat! Kamu sudah memahami Union & Intersection Types!");
