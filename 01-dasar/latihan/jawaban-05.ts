/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 5 (PROYEK MINI)
 * File: 01-dasar/latihan/jawaban-05.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 01-dasar/latihan/jawaban-05.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN TAHAP 5 ===");

// 1. Interface MenuMakanan
interface MenuMakanan {
  id: number;
  nama: string;
  harga: number;
  kategori: string;
  diskon?: number; // Opsional dalam persen
}

// 2. Daftar Menu Restoran
const daftarMenu: MenuMakanan[] = [
  {
    id: 1,
    nama: "Nasi Goreng Spesial",
    harga: 25000,
    kategori: "Makanan",
    diskon: 10, // Diskon 10%
  },
  {
    id: 2,
    nama: "Ayam Bakar Madu",
    harga: 30000,
    kategori: "Makanan",
  },
  {
    id: 3,
    nama: "Es Teh Manis",
    harga: 5000,
    kategori: "Minuman",
  },
];

// 3. Function Menghitung Harga Akhir
function hitungHargaAkhir(menu: MenuMakanan): number {
  if (menu.diskon && menu.diskon > 0) {
    const potongan = (menu.harga * menu.diskon) / 100;
    return menu.harga - potongan;
  }
  return menu.harga;
}

// 4. Function Mencetak Struk Menu
function tampilkanStruk(menu: MenuMakanan): void {
  const hargaBayar = hitungHargaAkhir(menu);

  console.log("---------------------------------------");
  console.log(`Item    : ${menu.nama} [${menu.kategori}]`);
  console.log(`Harga   : Rp${menu.harga.toLocaleString("id-ID")}`);
  if (menu.diskon) {
    console.log(`Diskon  : ${menu.diskon}%`);
  }
  console.log(`TOTAL   : Rp${hargaBayar.toLocaleString("id-ID")}`);
}

// 5. Uji Coba Mencetak Struk untuk Semua Menu
console.log("\n🧾 STRUK PESANAN RESTORAN:");
daftarMenu.forEach((item) => {
  tampilkanStruk(item);
});
console.log("---------------------------------------");

console.log("\n🎉 SELAMAT! Kamu telah menyelesaikan seluruh rangkaian materi dan latihan TypeScript!");
