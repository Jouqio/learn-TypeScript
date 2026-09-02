/**
 * ========================================================
 * 🎓 TAHAP 6: PROYEK MINI TERPADU (SISTEM INVENTARIS & REPOSITORY)
 * File: 02-menengah/06-proyek-mini-menengah.ts
 * ========================================================
 *
 * Di file proyek mini ini kita MENGGABUNGKAN SEMUA KONSEP 02-MENENGAH:
 * 1. Interface & Discriminated Union ("buku" | "elektronik")
 * 2. Class & OOP (Constructor shorthand, private, public)
 * 3. Generics (<T extends Identifiable>)
 * 4. Utility Types (Partial<T> untuk update, Omit<T, K>, Record<K, T>)
 * 5. Type Narrowing (Pemeriksaan kategori item saat cetak detail)
 */

console.log("=== PROYEK MINI: SISTEM INVENTARIS GENERIK PERUSAHAAN ===");

// --------------------------------------------------------
// 1. INTERFACE DASAR & DISCRIMINATED UNIONS
// --------------------------------------------------------
interface Identifiable {
  id: number;
}

// Tipe Item 1: Buku
interface ItemBuku extends Identifiable {
  kategori: "buku";
  judul: string;
  penulis: string;
  stok: number;
}

// Tipe Item 2: Elektronik
interface ItemElektronik extends Identifiable {
  kategori: "elektronik";
  namaPerangkat: string;
  garansiTahun: number;
  stok: number;
}

// Union Type Item
type ItemInventaris = ItemBuku | ItemElektronik;

// --------------------------------------------------------
// 2. GENERIC REPOSITORY CLASS
// --------------------------------------------------------
/**
 * Class Generic `DataRepository<T>` bisa dipakai untuk menyimpan
 * data apa saja asalkan memiliki properti `id` (extends Identifiable).
 */
class DataRepository<T extends Identifiable> {
  // Private array untuk menyimpan data secara aman:
  private items: T[] = [];

  constructor(public readonly namaKoleksi: string) { }

  // Menambah item baru
  public tambah(item: T): void {
    this.items.push(item);
    console.log(`[${this.namaKoleksi}] ✅ Item ID ${item.id} berhasil ditambahkan.`);
  }

  // Mengambil semua item (Readonly agar tidak sengaja diubah langsung)
  public ambilSemua(): ReadonlyArray<T> {
    return this.items;
  }

  // Mencari item berdasarkan ID
  public cariBerdasarkanId(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  // Mengupdate item menggunakan Partial<T>
  public update(id: number, perubahan: Partial<T>): boolean {
    const item = this.cariBerdasarkanId(id);
    if (!item) {
      console.log(`[${this.namaKoleksi}] ❌ Item ID ${id} tidak ditemukan.`);
      return false;
    }

    // Menggabungkan data lama dengan data baru:
    Object.assign(item, perubahan);
    console.log(`[${this.namaKoleksi}] 📝 Item ID ${id} berhasil diperbarui.`);
    return true;
  }

  // Menghitung total stok
  public hitungTotalStok(this: DataRepository<ItemInventaris>): number {
    return this.items.reduce((total, item) => total + item.stok, 0);
  }
}

// --------------------------------------------------------
// 3. UTILITY FUNCTION DENGAN TYPE NARROWING
// --------------------------------------------------------
function cetakInfoItem(item: ItemInventaris): void {
  // Type Narrowing menggunakan properti pembeda 'kategori':
  if (item.kategori === "buku") {
    console.log(`- 📖 [BUKU] "${item.judul}" oleh ${item.penulis} (Stok: ${item.stok})`);
  } else {
    console.log(`- 💻 [ELEKTRONIK] "${item.namaPerangkat}" Garansi: ${item.garansiTahun} Tahun (Stok: ${item.stok})`);
  }
}

// --------------------------------------------------------
// 4. RECORD UTILITY (Pemetaan Lokasi Rak)
// --------------------------------------------------------
type KategoriLokasi = "buku" | "elektronik";
const lokasiRak: Record<KategoriLokasi, string> = {
  buku: "Lantai 2 - Rak Sastra & Sains",
  elektronik: "Lantai 1 - Gudang Utama",
};

// --------------------------------------------------------
// 5. SIMULASI SISTEM BERJALAN
// --------------------------------------------------------
console.log("\n--- Inisialisasi Repository ---");
const inventarisGudang = new DataRepository<ItemInventaris>("Gudang Pusat");

// Tambah Buku
inventarisGudang.tambah({
  id: 1,
  kategori: "buku",
  judul: "Design Patterns in TypeScript",
  penulis: "Erich Gamma",
  stok: 15,
});

// Tambah Elektronik
inventarisGudang.tambah({
  id: 2,
  kategori: "elektronik",
  namaPerangkat: "Monitor 4K 27 Inch",
  garansiTahun: 3,
  stok: 8,
});

// Tambah Buku Lagi
inventarisGudang.tambah({
  id: 3,
  kategori: "buku",
  judul: "Clean Code",
  penulis: "Robert C. Martin",
  stok: 20,
});

// Cetak Lokasi Rak
console.log("\n--- Informasi Lokasi Gudang (Record) ---");
console.log("Lokasi Rak Buku       :", lokasiRak.buku);
console.log("Lokasi Rak Elektronik :", lokasiRak.elektronik);

// Update Stok Buku menggunakan Partial<T>
console.log("\n--- Transaksi Update Stok (Partial<T>) ---");
inventarisGudang.update(1, { stok: 25 }); // Hanya update stok saja

// Menampilkan Seluruh Inventaris
console.log("\n--- Laporan Seluruh Item di Inventaris ---");
inventarisGudang.ambilSemua().forEach((item) => {
  cetakInfoItem(item);
});

// Total Stok
console.log("\nTotal Stok Keseluruhan Item:", inventarisGudang.hitungTotalStok(), "unit");

console.log("\n🎉 SELAMAT! Kamu telah menguasai seluruh materi TypeScript Menengah!");
