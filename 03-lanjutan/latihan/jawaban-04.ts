/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 4 (03-lanjutan)
 * File: 03-lanjutan/latihan/jawaban-04.ts
 * ========================================================
 */

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 4 (TYPE-SAFE ERROR HANDLING) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Custom Error Class
// -----------------------------------------------------------------------------
type KodeAuthError = "PASSWORD_SALAH" | "USER_TIDAK_DITEMUKAN";

class AutentikasiError extends Error {
  constructor(pesan: string, public kode: KodeAuthError) {
    super(pesan);
    this.name = "AutentikasiError";
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// -----------------------------------------------------------------------------
// SOAL 2: Membuat Result Pattern Generics
// -----------------------------------------------------------------------------
type Sukses<T> = {
  berhasil: true;
  data: T;
};

type Gagal<E> = {
  berhasil: false;
  error: E;
};

type Hasil<T, E = Error> = Sukses<T> | Gagal<E>;

// -----------------------------------------------------------------------------
// SOAL 3: Fungsi Login dengan Result Pattern
// -----------------------------------------------------------------------------
interface UserAkun {
  username: string;
  email: string;
  role: "admin" | "member";
}

function prosesLogin(usernameInput: string, passwordInput: string): Hasil<UserAkun, AutentikasiError> {
  if (usernameInput !== "syauqi") {
    return {
      berhasil: false,
      error: new AutentikasiError(`Pengguna '${usernameInput}' tidak ditemukan`, "USER_TIDAK_DITEMUKAN"),
    };
  }

  if (passwordInput !== "rahasia123") {
    return {
      berhasil: false,
      error: new AutentikasiError("Kombinasi password tidak cocok", "PASSWORD_SALAH"),
    };
  }

  return {
    berhasil: true,
    data: {
      username: "syauqi",
      email: "syauqi@example.com",
      role: "admin",
    },
  };
}

// -----------------------------------------------------------------------------
// SOAL 4: Uji Coba Implementasi
// -----------------------------------------------------------------------------
console.log("\n[1] Uji Coba Fungsi Login:");

// Kasus A: User Tidak Ditemukan
const tesLogin1 = prosesLogin("budi", "123456");
if (tesLogin1.berhasil) {
  console.log(`- Login 1 Sukses: Selamat datang, ${tesLogin1.data.username}`);
} else {
  console.log(`- Login 1 Gagal : [${tesLogin1.error.kode}] ${tesLogin1.error.message}`);
}

// Kasus B: Password Salah
const tesLogin2 = prosesLogin("syauqi", "salah123");
if (tesLogin2.berhasil) {
  console.log(`- Login 2 Sukses: Selamat datang, ${tesLogin2.data.username}`);
} else {
  console.log(`- Login 2 Gagal : [${tesLogin2.error.kode}] ${tesLogin2.error.message}`);
}

// Kasus C: Login Berhasil
const tesLogin3 = prosesLogin("syauqi", "rahasia123");
if (tesLogin3.berhasil) {
  console.log(`- Login 3 Sukses: Selamat datang, ${tesLogin3.data.username} (${tesLogin3.data.role.toUpperCase()})`);
} else {
  console.log(`- Login 3 Gagal : [${tesLogin3.error.kode}] ${tesLogin3.error.message}`);
}

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-04.ts berjalan sukses!");
