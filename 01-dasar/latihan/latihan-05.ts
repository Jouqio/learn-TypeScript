/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 5 (PROYEK MINI GABUNGAN)
 * File: 01-dasar/latihan/latihan-05.ts
 * ========================================================
 *
 * STUDI KASUS: Sistem Kasir Restoran Sederhana
 *
 * Petunjuk:
 * 1. Buat interface `MenuMakanan`:
 *    - `id`: number
 *    - `nama`: string
 *    - `harga`: number
 *    - `kategori`: string (misal: "Makanan", "Minuman")
 *    - `diskon`: number (opsional `?`, dalam persen, misal 10)
 *
 * 2. Buat array `daftarMenu: MenuMakanan[]` dengan 3 menu awal.
 *
 * 3. Buat function `hitungHargaAkhir(menu: MenuMakanan): number`:
 *    - Jika ada diskon, kembalikan harga setelah dipotong diskon.
 *    - Jika tidak ada diskon, kembalikan harga normal.
 *
 * 4. Buat function `tampilkanStruk(menu: MenuMakanan): void`:
 *    - Mencetak nama menu, harga asli, diskon (jika ada), dan total bayar.
 *
 * Kunci jawaban tersedia di:
 * -> 01-dasar/latihan/jawaban-05.ts
 */

console.log("=== LATIHAN TAHAP 5: KASIR RESTORAN ===");

// Tulis kodemu di bawah ini:

//1. Buat Interface MenuMakanan
interface MenuMakanan {
    id: number;
    nama: string;
    harga: number;
    kategori: string;
    diskon?: number;
}

//2. Buat array daftarMenu: MenuMakanan[]
const daftarMenu: MenuMakanan[] = [
    {
        id: 1,
        nama: "Nasi Goreng",
        harga: 20000,
        kategori: "Makanan",
        diskon: 10
    },
    {
        id: 2,
        nama: "Es Teh",
        harga: 5000,
        kategori: "Minuman"
    },
    {
        id: 3,
        nama: "Kopi Susu",
        harga: 15000,
        kategori: "Minuman",
        diskon: 5
    }
];

//3. Function menghitung harga akhir
function hitungHargaAkhir(menu: MenuMakanan): number {
    if (menu.diskon && menu.diskon > 0) {
        const potongan = menu.harga * menu.diskon / 100;
        return menu.harga - potongan;
    }
    return menu.harga;
}

//4. Cetak struk
function tampilkanStruk(menu: MenuMakanan): void {
    const hargaBayar = hitungHargaAkhir(menu);
    console.log(`---------------------------------------`);
    console.log(`Nama Menu: ${menu.nama} [${menu.kategori}]`);
    console.log(`Harga Asli: Rp${menu.harga.toLocaleString('id-ID')}`);
    if (menu.diskon)
        console.log(`Diskon: ${menu.diskon + '%'}`);
    else
        console.log(`Diskon: Tidak ada`);
    console.log(`Total Bayar: Rp${hargaBayar.toLocaleString('id-ID')}`);
}

//5. Cetak daftar menu dan struk
console.log("=== Struk Pesanan Restoran ===");

daftarMenu.forEach((menu) => {
    tampilkanStruk(menu);
});

console.log("---------------------------------------");





