/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 8 (03-lanjutan)
 * MINI PROJECT AKHIR: SISTEM BOOKING TIKET PESAWAT
 * File: 03-lanjutan/latihan/jawaban-08.ts
 * ========================================================
 */

import { z } from "zod";

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 8 (MINI PROJECT AKHIR) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Zod Schema untuk Booking Tiket Pesawat
// -----------------------------------------------------------------------------
const BookingTiketSchema = z.object({
  namaPenumpang: z.string().min(3, "Nama penumpang minimal 3 karakter"),
  nomorPaspor: z.string().min(8, "Nomor paspor minimal 8 digit").max(10, "Nomor paspor maksimal 10 digit"),
  kelasPenerbangan: z.enum(["EKONOMI", "BISNIS", "FIRST_CLASS"]),
  jumlahKursi: z.number().int().min(1, "Minimal 1 kursi").max(5, "Maksimal pesan 5 kursi"),
});

type BookingTiketInput = z.infer<typeof BookingTiketSchema>;

// -----------------------------------------------------------------------------
// SOAL 2: Discriminated Union Tiket Status
// -----------------------------------------------------------------------------
type StatusTiket =
  | { status: "TERKONFIRMASI"; kodeBooking: string; nomorKursi: string[] }
  | { status: "BATAL"; alasan: string };

// -----------------------------------------------------------------------------
// SOAL 3: Custom Error & Result Pattern
// -----------------------------------------------------------------------------
class KursiPenuhError extends Error {
  constructor(sisaKursi: number, diminta: number) {
    super(`Sisa kursi tidak mencukupi! Tersisa: ${sisaKursi}, Diminta: ${diminta}`);
    this.name = "KursiPenuhError";
  }
}

type HasilOperasi<T, E = Error> =
  | { sukses: true; data: T }
  | { sukses: false; error: E };

// -----------------------------------------------------------------------------
// SOAL 4: Service Pemesanan Tiket & Controller Handler
// -----------------------------------------------------------------------------
class TiketService {
  private static kuotaTersedia = 3;

  static pesanTiket(input: BookingTiketInput): HasilOperasi<StatusTiket, KursiPenuhError> {
    if (input.jumlahKursi > this.kuotaTersedia) {
      return {
        sukses: false,
        error: new KursiPenuhError(this.kuotaTersedia, input.jumlahKursi),
      };
    }

    this.kuotaTersedia -= input.jumlahKursi;

    const nomorKursi: string[] = [];
    for (let i = 1; i <= input.jumlahKursi; i++) {
      nomorKursi.push(`14${String.fromCharCode(64 + i)}`); // 14A, 14B, ...
    }

    return {
      sukses: true,
      data: {
        status: "TERKONFIRMASI",
        kodeBooking: "GA-" + Math.floor(1000 + Math.random() * 9000),
        nomorKursi,
      },
    };
  }
}

function handleBooking(inputData: unknown): void {
  const validasi = BookingTiketSchema.safeParse(inputData);

  if (!validasi.success) {
    console.log("❌ Validasi Input Gagal:");
    validasi.error.issues.forEach((i) => console.log(`   - ${i.path.join(".")}: ${i.message}`));
    return;
  }

  const hasil = TiketService.pesanTiket(validasi.data);
  if (hasil.sukses) {
    if (hasil.data.status === "TERKONFIRMASI") {
      console.log(`✅ Pemesanan Berhasil! Penumpang: ${validasi.data.namaPenumpang} (${validasi.data.kelasPenerbangan})`);
      console.log(`   Kode Booking : ${hasil.data.kodeBooking}`);
      console.log(`   Nomor Kursi  : ${hasil.data.nomorKursi.join(", ")}`);
    }
  } else {
    console.log(`❌ Pemesanan Gagal: ${hasil.error.message}`);
  }
}

// Uji Coba:
console.log("\n[1] Uji Coba Booking 1 (2 Kursi Bisnis):");
handleBooking({
  namaPenumpang: "Syauqi Nuzul",
  nomorPaspor: "A12345678",
  kelasPenerbangan: "BISNIS",
  jumlahKursi: 2,
});

console.log("\n[2] Uji Coba Booking 2 (3 Kursi - Kuota Sisa 1):");
handleBooking({
  namaPenumpang: "Budi Santoso",
  nomorPaspor: "B98765432",
  kelasPenerbangan: "EKONOMI",
  jumlahKursi: 3,
});

console.log("\n[3] Uji Coba Booking 3 (Data Tidak Valid):");
handleBooking({
  namaPenumpang: "A",
  nomorPaspor: "123",
  kelasPenerbangan: "VIP",
  jumlahKursi: 10,
});

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-08.ts berjalan sukses!");
