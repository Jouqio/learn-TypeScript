/**
 * ========================================================
 * TAHAP 4: UTILITY TYPES YANG PALING SERING DIPAKAI
 * File: 02-menengah/04-utility-types.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Apa itu Utility Types?
 * 2. Partial<T>  -> Mengubah SEMUA properti jadi OPSIONAL (Cocok untuk fitur Update/Edit)
 * 3. Pick<T, K>   -> Mengambil HANYA properti tertentu
 * 4. Omit<T, K>   -> MEMBUANG properti tertentu & mengambil sisanya (Cocok menyembunyikan data sensitif)
 * 5. Readonly<T>    -> Mengunci SEMUA properti agar tidak bisa diubah (Hanya-Baca)
 * 6. Record<K, T> -> Membuat Dictionary / Map pasangan Key-Value bertipe
 */

console.log("=== BELAJAR TYPESCRIPT MENENGAH: TAHAP 4 (UTILITY TYPES) ===");

// Diberikan satu interface lengkap sebagai master template:
interface Pengguna {
  id: number;
  nama: string;
  email: string;
  passwordHash: string;
  role: "admin" | "member";
}

// --------------------------------------------------------
// 1. Partial<T> (Semua Properti Jadi Opsional)
// --------------------------------------------------------
/**
 * ANALOGI: Fitur "Edit Profil".
 * Pengguna tidak wajib mengubah nama, email, dan password sekaligus.
 * Mereka boleh HANYA mengubah nama saja, atau HANYA email saja.
 */

function updateProfil(id: number, dataUpdate: Partial<Pengguna>): void {
  console.log(`\n[1] ⭐ Partial<T> - Mengupdate User ID: ${id}`);
  console.log("Data yang diubah:", dataUpdate);
}

// Boleh hanya kirim 'nama' saja:
updateProfil(1, { nama: "Syauqi Nuzul A." });

// Boleh kirim 'email' dan 'role' saja:
updateProfil(2, { email: "syauqi@newemail.com", role: "admin" });

// --------------------------------------------------------
// 2. Pick<T, Keys> (Memilih HANYA Properti Tertentu)
// --------------------------------------------------------
/**
 * ANALOGI: "Kartu Nama Ringkas".
 * Dari data pengguna yang lengkap, kita hanya ingin mengambil `id` dan `nama` saja untuk ditampilkan di header web.
 */

type KartuNamaUser = Pick<Pengguna, "id" | "nama">;

const userHeader: KartuNamaUser = {
  id: 101,
  nama: "Jouqio",
};

console.log("\n[2] ⭐ Pick<T, K> - Data Ringkas User:", userHeader);

// --------------------------------------------------------
// 3. Omit<T, Keys> (Membuang Properti Tertentu)
// --------------------------------------------------------
/**
 * ANALOGI: "Kirim Data ke Publik / Frontend".
 * Kita ingin mengirim semua data user, TAPI properti rahasia seperti `passwordHash` WAJIB dibuang!
 */

type ProfilAman = Omit<Pengguna, "passwordHash">;

const dataKeFrontend: ProfilAman = {
  id: 101,
  nama: "Jouqio",
  email: "jouqio@example.com",
  role: "admin",
  // passwordHash otomatis dilarang di sini!
};

console.log("\n[3] ⭐ Omit<T, K> - Data Aman Tanpa Password:", dataKeFrontend);

// --------------------------------------------------------
// 4. Readonly<T> (Kunci Semua Properti Jadi Hanya-Baca)
// --------------------------------------------------------
/**
 * ANALOGI: "Dokumen Resmi Berstempel".
 * Sekali dibuat, tidak ada seorang pun yang boleh mengubah isinya.
 */

type KonfigurasiAplikasi = Readonly<{
  namaAplikasi: string;
  versi: string;
  port: number;
}>;

const configServer: KonfigurasiAplikasi = {
  namaAplikasi: "Portal Belajar TypeScript",
  versi: "2.1.0",
  port: 3000,
};

console.log("\n[4] Readonly<T> - Konfigurasi Server:", configServer);
/*
 ❌ SALAH:
 configServer.port = 8080;
 // ⛔ Error: Cannot assign to 'port' because it is a read-only property.
*/

// --------------------------------------------------------
// 5. Record<Keys, ValueType> (Dictionary / Kamus Data)
// --------------------------------------------------------
/**
 * ANALOGI: "Kamus Kontak Telepon".
 * Key adalah nama divisi ("IT", "HR", "Finance"),
 * Value adalah nama kepala divisi bertipe string.
 */

type Divisi = "IT" | "HR" | "Finance";
const kepalaDivisi: Record<Divisi, string> = {
  IT: "Pak Rahmat",
  HR: "Bu Sarah",
  Finance: "Pak Hendra",
};

console.log("\n[5] ⭐ Record<K, T> - Daftar Kepala Divisi:");
console.log("- Kepala IT     :", kepalaDivisi.IT);
console.log("- Kepala Finance:", kepalaDivisi.Finance);

console.log("\n✅ Program Tahap 4 (Menengah) berhasil dijalankan!");
