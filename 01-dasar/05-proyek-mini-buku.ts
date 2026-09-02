/**
 * ========================================================
 * 🎓 TAHAP 5: PROYEK MINI GABUNGAN (SISTEM PERPUSTAKAAN)
 * File: 01-dasar/05-proyek-mini-buku.ts
 * ========================================================
 *
 * Di file ini kita MENGGABUNGKAN SEMUA KONSEP yang sudah dipelajari:
 * 1. Tipe Data Dasar (string, number, boolean)
 * 2. Array (`Buku[]`)
 * 3. Interface (`Buku`)
 * 4. Function bertipe (Parameter, Return type, Optional `?`, dan `void`)
 */

console.log("=== 📚 PROYEK MINI: SISTEM MANAJEMEN BUKU PERPUSTAKAAN ===");

// --------------------------------------------------------
// 1. DEFINISI INTERFACE (Bentuk Data Buku)
// --------------------------------------------------------
interface Buku {
  id: number;
  judul: string;
  penulis: string;
  tahunTerbit: number;
  statusPinjam: boolean; // true = sedang dipinjam, false = tersedia di rak
  peminjam?: string;     // Optional: nama peminjam (hanya ada jika sedang dipinjam)
}

// --------------------------------------------------------
// 2. STATE / DATA PENYIMPANAN (Array of Buku)
// --------------------------------------------------------
let koleksiPerpustakaan: Buku[] = [
  {
    id: 1,
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    tahunTerbit: 2018,
    statusPinjam: false,
  },
  {
    id: 2,
    judul: "Atomic Habits",
    penulis: "James Clear",
    tahunTerbit: 2018,
    statusPinjam: true,
    peminjam: "Zakie",
  },
  {
    id: 3,
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    tahunTerbit: 2008,
    statusPinjam: false,
  },
];

// --------------------------------------------------------
// 3. FUNCTION: Menambah Buku Baru
// --------------------------------------------------------
function tambahBuku(
  id: number,
  judul: string,
  penulis: string,
  tahunTerbit: number
): void {
  const bukuBaru: Buku = {
    id,
    judul,
    penulis,
    tahunTerbit,
    statusPinjam: false,
  };

  koleksiPerpustakaan.push(bukuBaru);
  console.log(`✅ Sukses menambahkan buku baru: "${judul}"`);
}

// --------------------------------------------------------
// 4. FUNCTION: Meminjam Buku
// --------------------------------------------------------
function pinjamBuku(idBuku: number, namaPeminjam: string): boolean {
  for (const buku of koleksiPerpustakaan) {
    if (buku.id === idBuku) {
      if (buku.statusPinjam) {
        console.log(`⚠️ Maaf, buku "${buku.judul}" sedang dipinjam oleh ${buku.peminjam}.`);
        return false;
      }
      buku.statusPinjam = true;
      buku.peminjam = namaPeminjam;
      console.log(`🎉 Berhasil meminjamkan "${buku.judul}" kepada ${namaPeminjam}.`);
      return true;
    }
  }

  console.log(`❌ Buku dengan ID ${idBuku} tidak ditemukan!`);
  return false;
}

// --------------------------------------------------------
// 5. FUNCTION: Mengembalikan Buku
// --------------------------------------------------------
function kembalikanBuku(idBuku: number): void {
  for (const buku of koleksiPerpustakaan) {
    if (buku.id === idBuku) {
      buku.statusPinjam = false;
      delete buku.peminjam; // Menghapus data peminjam karena sudah kembali
      console.log(`✅ Buku "${buku.judul}" telah berhasil dikembalikan.`);
      return;
    }
  }
  console.log(`❌ Buku dengan ID ${idBuku} tidak ditemukan.`);
}

// --------------------------------------------------------
// 6. FUNCTION: Menampilkan Laporan Seluruh Buku
// --------------------------------------------------------
function cetakDaftarBuku(): void {
  console.log("\n========================================================");
  console.log("📋 DAFTAR BUKU DI PERPUSTAKAAN");
  console.log("========================================================");

  koleksiPerpustakaan.forEach((buku, index) => {
    const status = buku.statusPinjam
      ? `🔴 DIPINJAM (oleh: ${buku.peminjam})`
      : "🟢 TERSEDIA";

    console.log(
      `${index + 1}. [ID: ${buku.id}] "${buku.judul}" karya ${buku.penulis} (${buku.tahunTerbit}) -> ${status}`
    );
  });

  console.log("========================================================\n");
}

// --------------------------------------------------------
// 7. SIMULASI MENJALANKAN SISTEM
// --------------------------------------------------------

// Tampilkan data awal
console.log("\n--- Kondisi Awal ---");
cetakDaftarBuku();

// Tambah 1 buku baru
console.log("--- Menambah Buku ---");
tambahBuku(4, "Pemrograman TypeScript untuk Pemula", "Antigravity", 2024);

// Coba pinjam buku yang tersedia (ID: 1)
console.log("\n--- Transaksi Peminjaman ---");
pinjamBuku(1, "Budi");

// Coba pinjam buku yang sedang dipinjam (ID: 2)
pinjamBuku(2, "Siti");

// Kembalikan buku (ID: 2)
console.log("\n--- Transaksi Pengembalian ---");
kembalikanBuku(2);

// Tampilkan laporan akhir
console.log("\n--- Kondisi Akhir ---");
cetakDaftarBuku();

console.log("🎉 Selamat! Kamu telah berhasil membuat program TypeScript lengkap!");
