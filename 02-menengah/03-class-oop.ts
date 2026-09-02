/**
 * ========================================================
 * TAHAP 3: CLASS & OOP DASAR DI TYPESCRIPT
 * File: 02-menengah/03-class-oop.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Access Modifiers: `public`, `private`, `protected`
 * 2. Constructor Shorthand (Cara cepat membuat properti class)
 * 3. Readonly Property pada Class
 * 4. Implements Interface pada Class (Menerapkan cetakan ke Class)
 */

console.log("=== BELAJAR TYPESCRIPT MENENGAH: TAHAP 3 (CLASS & OOP) ===");

// --------------------------------------------------------
// 1. ACCESS MODIFIERS (Hak Akses Properti/Method)
// --------------------------------------------------------
/**
 * ANALOGI ACCESS MODIFIERS:
 * Bayangkan sebuah "Restoran":
 * - `public` (Etalase Makanan): Siapa saja (orang luar/pelanggan) boleh melihat & mengakses langsung.
 * - `private` (Brankas Kasir): Hanya orang di dalam restoran itu sendiri yang bisa akses. Orang luar dilarang!
 * - `protected` (Resep Rahasia Keluarga): Boleh diakses oleh restoran utama DAN cabang keturunannya (class turunan/inheritance), tapi orang luar tetap tidak boleh.
 */

// --------------------------------------------------------
// 2. CONSTRUCTOR SHORTHAND (Fitur Keren TypeScript!)
// --------------------------------------------------------
/**
 * Di JavaScript biasa, kita harus deklarasi properti dulu, lalu isi `this.nama = nama` satu per satu.
 * Di TypeScript, kita cukup tulis access modifier (`public`/`private`/`protected`) langsung di dalam parameter constructor!
 */

class Karyawan {
  // TypeScript otomatis membuat properti id, nama, gaji, dan divisi:
  constructor(
    public readonly id: number,     // public & tidak bisa diubah nilainya (readonly)
    public nama: string,             // public: bebas dibaca/diubah dari luar
    private gaji: number,            // private: rahasia, hanya bisa diakses di dalam class ini
    protected divisi: string         // protected: bisa diakses class ini & class anaknya
  ) { }

  // Method public untuk menampilkan info umum:
  public perkenalkanDiri(): void {
    console.log(`Halo, nama saya ${this.nama} dari divisi ${this.divisi}.`);
  }

  // Method khusus untuk melihat gaji (Getter aman):
  public getInfoGaji(): string {
    return `Gaji ${this.nama}: Rp${this.gaji.toLocaleString("id-ID")}`;
  }

  // Method untuk menaikkan gaji secara aman:
  public naikkanGaji(persen: number): void {
    const kenaikan = (this.gaji * persen) / 100;
    this.gaji += kenaikan;
    console.log(`🎉 Gaji ${this.nama} berhasil dinaikkan ${persen}%!`);
  }
}

console.log("\n--- 1. Uji Coba Class Karyawan ---");
const budi = new Karyawan(1, "Budi Santoso", 8000000, "Engineering");

budi.perkenalkanDiri();
console.log(budi.getInfoGaji());

// Kita coba naikkan gaji:
budi.naikkanGaji(10);
console.log(budi.getInfoGaji());

/*
 ❌ CONTOH AKSES YANG DILARANG TYPESCRIPT:
 console.log(budi.gaji); 
 // ⛔ Error: Property 'gaji' is private and only accessible within class 'Karyawan'.

 budi.id = 999;
 // ⛔ Error: Cannot assign to 'id' because it is a read-only property.
*/

// --------------------------------------------------------
// 3. INHERITANCE (Pewarisan Class & Protected)
// --------------------------------------------------------
class Manajer extends Karyawan {
  constructor(id: number, nama: string, gaji: number, public tunjangan: number) {
    // Memanggil constructor parent (Karyawan) dengan divisi default "Manajemen"
    super(id, nama, gaji, "Manajemen");
  }

  public cetakLaporanDivisi(): void {
    // Boleh mengakses `this.divisi` karena bertipe 'protected':
    console.log(`[Laporan Manajer] Memimpin Divisi: ${this.divisi}`);
  }
}

console.log("\n--- 2. Uji Coba Inheritance (Class Manajer) ---");
const pakBambang = new Manajer(2, "Bambang Pamungkas", 20000000, 5000000);
pakBambang.perkenalkanDiri();
pakBambang.cetakLaporanDivisi();

// --------------------------------------------------------
// 4. IMPLEMENTS INTERFACE PADA CLASS
// --------------------------------------------------------
/**
 * Interface berfungsi sebagai "Kontrak Wajib".
 * Class yang menggunakan kata kunci `implements` WAJIB menyediakan semua properti & method dari interface tersebut!
 */

interface Kendaraan {
  merk: string;
  kecepatanMaksimal: number;
  jalankan(): void;
  rem(): void;
}

class MobilSport implements Kendaraan {
  constructor(public merk: string, public kecepatanMaksimal: number) { }

  jalankan(): void {
    console.log(`🏎️ ${this.merk} melaju kencang hingga ${this.kecepatanMaksimal} km/jam!`);
  }

  rem(): void {
    console.log(`🛑 ${this.merk} berhenti dengan aman.`);
  }
}

console.log("\n--- 3. Uji Coba Implements Interface ---");
const ferrari = new MobilSport("Ferrari 488", 330);
ferrari.jalankan();
ferrari.rem();

console.log("\n✅ Program Tahap 3 (Menengah) berhasil dijalankan!");
