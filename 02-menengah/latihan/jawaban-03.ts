/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 3 (02-menengah)
 * File: 02-menengah/latihan/jawaban-03.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 02-menengah/latihan/jawaban-03.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN 02-MENENGAH: TAHAP 3 ===");

// JAWABAN SOAL 1:
class AkunBank {
  constructor(
    public readonly nomorRekening: string,
    public namaPemilik: string,
    private saldo: number
  ) { }

  public setor(jumlah: number): void {
    if (jumlah <= 0) {
      console.log("Nominal setor harus lebih dari 0!");
      return;
    }
    this.saldo += jumlah;
    console.log(`Jawaban 1 - ✅ Setor Rp${jumlah.toLocaleString("id-ID")} berhasil.`);
  }

  public cekSaldo(): string {
    return `Saldo rekening ${this.nomorRekening} milik ${this.namaPemilik}: Rp${this.saldo.toLocaleString("id-ID")}`;
  }
}

// JAWABAN SOAL 2:
interface IProduk {
  id: number;
  nama: string;
  harga: number;
  tampilkanDetail(): void;
}

class ProdukElektronik implements IProduk {
  constructor(
    public id: number,
    public nama: string,
    public harga: number,
    public garansiBulan: number
  ) { }

  public tampilkanDetail(): void {
    console.log(`Jawaban 2 - 📱 [${this.nama}] Harga: Rp${this.harga.toLocaleString("id-ID")} (Garansi: ${this.garansiBulan} Bulan)`);
  }
}

// JAWABAN SOAL 3:
console.log("\n--- Uji Coba Objek ---");

// Uji AkunBank
const tabungan = new AkunBank("rek-109283", "Jouqio", 100000);
console.log(tabungan.cekSaldo());
tabungan.setor(500000);
console.log(tabungan.cekSaldo());

// Uji ProdukElektronik
const smartphone = new ProdukElektronik(1, "Smartphone Flagship", 12000000, 24);
smartphone.tampilkanDetail();

console.log("\n🎉 Mantap! Kamu sudah menguasai konsep Class & OOP di TypeScript!");
