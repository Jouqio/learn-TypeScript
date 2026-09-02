/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 2 (02-menengah)
 * File: 02-menengah/latihan/latihan-02.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan Type Narrowing di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 02-menengah/latihan/jawaban-02.ts
 */

console.log("=== LATIHAN 02-MENENGAH: TAHAP 2 (TYPE NARROWING) ===");

// SOAL 1: `typeof` Guard
// Buatlah function `hitungKarakterAtauNilai(nilai: string | number): number`
// - Jika `nilai` berupa string, kembalikan jumlah panjang karakternya (.length).
// - Jika `nilai` berupa number, kembalikan angka tersebut dikalikan 10.
// Tulis kodemu di bawah:

function hitungKarakterAtauNilai(nilai: string | number): number {
  if (typeof nilai === "string") {
    return nilai.length;
  } else {
    return nilai * 10;
  }
}

console.log("jawaban 1a (string): " + hitungKarakterAtauNilai("TypeScript"));
console.log("jawaban 1b (number): " + hitungKarakterAtauNilai(7));


// SOAL 2: `in` Operator Guard
// Diberikan dua tipe kendaraan:
type Mobil = {
  merk: string;
  klakson: () => void;
};

type BurungMerpati = {
  nama: string;
  terbang: () => void;
};

// Buatlah function `lakukanAksi(subjek: Mobil | BurungMerpati): void`
// - Jika subjek memiliki method `terbang`, panggil `subjek.terbang()`.
// - Jika tidak, panggil `subjek.klakson()`.
// Tulis kodemu di bawah:

function lakukanAksi(subjek: Mobil | BurungMerpati): void {
  if ("terbang" in subjek) {
    subjek.terbang();
  } else {
    subjek.klakson();
  }
}

const avanza: Mobil = {
  merk: "Toyota",
  klakson: () => console.log("jawaban 2a: brum.. brum..!!")
}

const pipi: BurungMerpati = {
  nama: "Pipi",
  terbang: () => console.log("jawaban 2b: plak.. plak.. pipi sedang terbang!")
}

lakukanAksi(avanza);
lakukanAksi(pipi);


// SOAL 3: Discriminated Union
// Diberikan tipe transaksi pembayaran:
type PembayaranTunai = {
  metode: "tunai";
  jumlahBayar: number;
};

type PembayaranTransfer = {
  metode: "transfer";
  nomorRekening: string;
  jumlahBayar: number;
};

type Transaksi = PembayaranTunai | PembayaranTransfer;

// Buat function `prosesTransaksi(t: Transaksi): void`
// - Jika metode "tunai", cetak: "💵 Pembayaran Tunai diterima: Rp[jumlahBayar]"
// - Jika metode "transfer", cetak: "💳 Transfer dari Rekening [nomorRekening] diterima: Rp[jumlahBayar]"
// Tulis kodemu di bawah:

function prosesTransaksi(t: Transaksi): void {
  if (t.metode === "tunai") {
    console.log(`jawaban 3a: 💵 Pembayaran Tunai diterima: ${t.jumlahBayar}`)
  } else {
    console.log(`jawaban 3b: 💳 Transfer dari Rekening ${t.nomorRekening} diterima: Rp ${t.jumlahBayar.toLocaleString("id-ID")}`)
  }
}

prosesTransaksi({ metode: "tunai", jumlahBayar: 10000 })
prosesTransaksi({ metode: "transfer", jumlahBayar: 50000, nomorRekening: "123456789" })



