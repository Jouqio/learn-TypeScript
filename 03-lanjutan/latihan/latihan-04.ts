/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 4 (03-lanjutan)
 * File: 03-lanjutan/latihan/latihan-04.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi soal latihan Error Handling Type-Safe di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 03-lanjutan/latihan/jawaban-04.ts
 */

console.log("=== LATIHAN 03-LANJUTAN: TAHAP 4 (TYPE-SAFE ERROR HANDLING) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Custom Error Class
// -----------------------------------------------------------------------------
// Buatlah class `AutentikasiError` yang mewarisi class `Error` bawaan:
// - Properti tambahan `kode`: "PASSWORD_SALAH" | "USER_TIDAK_DITEMUKAN"
// - Panggil `super(pesan)` di dalam constructor
// Tulis kodemu di bawah:

type KodeErrorAuth = "PASSWORD_SALAH" | "USER_TIDAK_DITEMUKAN";

class AutentikasiError extends Error {
  constructor(pesan: string, public kode: KodeErrorAuth) {
    super(pesan);
    this.name = "AutentikasiError";
    Object.setPrototypeOf(this, new.target.prototype);
  }
}


// -----------------------------------------------------------------------------
// SOAL 2: Membuat Result Pattern Generics
// -----------------------------------------------------------------------------
// Definisikan generic type:
// 1. `Sukses<T>` = `{ berhasil: true, data: T }`
// 2. `Gagal<E>` = `{ berhasil: false, error: E }`
// 3. `Hasil<T, E = Error>` = `Sukses<T> | Gagal<E>`
// Tulis kodemu di bawah:

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
// Diberikan tipe User:
interface UserAkun {
  username: string;
  email: string;
  role: "admin" | "member";
}

// BUATLAH function `prosesLogin(usernameInput: string, passwordInput: string): Hasil<UserAkun, AutentikasiError>`
// Aturan:
// 1. Jika `usernameInput !== "syauqi"`, kembalikan Gagal dengan AutentikasiError ("User tidak terdaftar", "USER_TIDAK_DITEMUKAN").
// 2. Jika `passwordInput !== "rahasia123"`, kembalikan Gagal dengan AutentikasiError ("Password salah", "PASSWORD_SALAH").
// 3. Jika benar, kembalikan Sukses dengan data user ({ username: "syauqi", email: "syauqi@example.com", role: "admin" }).
// Tulis kodemu di bawah:

function prosesLogin(usernameInput: string, passwordInput: string): Hasil<UserAkun, AutentikasiError> {
  if (usernameInput !== "syauqi") {
    return {
      berhasil: false,
      error: new AutentikasiError("User tidak terdaftar", "USER_TIDAK_DITEMUKAN"),
    };
  }

  if (passwordInput !== "rahasia123") {
    return {
      berhasil: false,
      error: new AutentikasiError("Password salah", "PASSWORD_SALAH"),
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
// 1. Uji coba kasus user tidak ditemukan: `prosesLogin("budi", "123")`
// 2. Uji coba kasus password salah: `prosesLogin("syauqi", "salah123")`
// 3. Uji coba kasus login sukses: `prosesLogin("syauqi", "rahasia123")`
// 4. Periksa properti `berhasil` pada setiap pemanggilan dan cetak pesan ke console.
// Tulis kodemu di bawah:

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
