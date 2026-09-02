/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 2 (02-menengah)
 * File: 02-menengah/latihan/jawaban-02.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 02-menengah/latihan/jawaban-02.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN 02-MENENGAH: TAHAP 2 ===");

// JAWABAN SOAL 1:
function hitungKarakterAtauNilai(nilai: string | number): number {
  if (typeof nilai === "string") {
    return nilai.length;
  }
  return nilai * 10;
}

console.log("Jawaban 1a (string 'TypeScript'):", hitungKarakterAtauNilai("TypeScript")); // Output: 10
console.log("Jawaban 1b (number 7)           :", hitungKarakterAtauNilai(7));           // Output: 70

// JAWABAN SOAL 2:
type Mobil = {
  merk: string;
  klakson: () => void;
};

type BurungMerpati = {
  nama: string;
  terbang: () => void;
};

function lakukanAksi(subjek: Mobil | BurungMerpati): void {
  if ("terbang" in subjek) {
    subjek.terbang();
  } else {
    subjek.klakson();
  }
}

const avanza: Mobil = {
  merk: "Toyota Avanza",
  klakson: () => console.log("Jawaban 2a: 🚗 Tin.. Tin..!!"),
};

const dori: BurungMerpati = {
  nama: "Dori Si Burung",
  terbang: () => console.log("Jawaban 2b: 🕊️ Kepak.. kepak.. terbang tinggi!"),
};

lakukanAksi(avanza);
lakukanAksi(dori);

// JAWABAN SOAL 3:
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

function prosesTransaksi(t: Transaksi): void {
  if (t.metode === "tunai") {
    console.log(`Jawaban 3a: 💵 Pembayaran Tunai diterima: Rp${t.jumlahBayar.toLocaleString("id-ID")}`);
  } else {
    console.log(
      `Jawaban 3b: 💳 Transfer dari Rekening ${t.nomorRekening} diterima: Rp${t.jumlahBayar.toLocaleString("id-ID")}`
    );
  }
}

prosesTransaksi({ metode: "tunai", jumlahBayar: 50000 });
prosesTransaksi({ metode: "transfer", nomorRekening: "123-456-7890", jumlahBayar: 250000 });

console.log("\n🎉 Hebat! Kamu sudah menguasai Type Narrowing!");
