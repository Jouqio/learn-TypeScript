/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 3 (02-menengah)
 * File: 02-menengah/latihan/latihan-03.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan Class & OOP di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 02-menengah/latihan/jawaban-03.ts
 */

console.log("=== LATIHAN 02-MENENGAH: TAHAP 3 (CLASS & OOP) ===");

// SOAL 1: Class dengan Constructor Shorthand & Private
// Buatlah class `AkunBank` yang memiliki:
// - `nomorRekening`: string (public readonly)
// - `pemilik`: string (public)
// - `saldo`: number (private)
// Gunakan constructor shorthand!
//
// Tambahkan 2 method:
// 1. `setor(jumlah: number): void` -> menambah saldo dan cetak: "Setor Rp[jumlah] berhasil."
// 2. `cekSaldo(): string` -> return string: "Saldo rekening [nomorRekening] milik [pemilik]: Rp[saldo]"
// Tulis kodemu di bawah:

class AkunBank {
  constructor(
    public readonly nomorRekening: string,
    public namaPemilik: string,
    private saldo: number
  ) { }

  setor(jumlah: number): void {
    if (jumlah <= 0) {
      console.log("Jumlah setoran harus lebih besar dari 0.");
      return;
    }
    this.saldo += jumlah;
    console.log(`jawaban 1: Setor Rp${jumlah.toLocaleString("id-ID")} berhasil.`);
  }

  public cekSaldo(): string {
    return `Saldo rekening ${this.nomorRekening} milik ${this.namaPemilik}: Rp${this.saldo.toLocaleString("id-ID")}`;
  }
}


// SOAL 2: Implements Interface pada Class
// Diberikan interface produk:
interface IProduk {
  id: number;
  nama: string;
  harga: number;
  tampilkanDetail(): void;
}

// Buatlah class `ProdukElektronik` yang meng-implements interface `IProduk`.
// Tambahkan properti tambahan: `garansiBulan: number` (public).
// Method `tampilkanDetail(): void` harus mencetak nama, harga, dan masa garansi.
// Tulis kodemu di bawah:

class ProdukElektronik implements IProduk {
  constructor(
    public readonly id: number,
    public nama: string,
    public harga: number,
    public garansiBulan: number
  ) { }

  public tampilkanDetail(): void {
    console.log(`jawaban 2: Nama: ${this.nama}, Harga: Rp${this.harga.toLocaleString('id-ID')}, Garansi: ${this.garansiBulan} bulan`);
  }
}


// SOAL 3: Uji Coba Objek
// 1. Buat instance objek dari `AkunBank`, lakukan setor uang, lalu panggil method `cekSaldo()`.
// 2. Buat instance objek dari `ProdukElektronik` dan panggil `tampilkanDetail()`.
// Tulis kodemu di bawah:

//uji akun bank
const tabungan = new AkunBank("123456789", "Syauqi Nuzul Abdi", 100000);
console.log("cek saldo:" + tabungan.cekSaldo());
tabungan.setor(50000);
console.log("setor:" + tabungan.cekSaldo());
console.log("jawaban 3: " + tabungan.cekSaldo());

//uji produk elektronik
const headset = new ProdukElektronik(1, "Headset", 100000, 1);
headset.tampilkanDetail();



