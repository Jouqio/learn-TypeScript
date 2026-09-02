/**
 * ========================================================
 * TAHAP 8: MINI PROJECT AKHIR TYPESCRIPT LANJUTAN ⭐
 * SISTEM ORDER & TRANSAKSI E-COMMERCE MODERN
 * File: 03-lanjutan/08-proyek-mini-lanjutan.ts
 * ========================================================
 * 
 * Proyek ini adalah bukti nyata penguasaan seluruh materi TypeScript Lanjutan:
 * 1. Zod Runtime Validation & Schema Type Inference (`z.infer`)
 * 2. Discriminated Union (Metode Pembayaran & State Transaksi)
 * 3. Custom Error Classes (`AppError`, `StokError`, `PaymentError`)
 * 4. Result / Either Pattern (Error Handling Type-Safe)
 * 5. Generics & Generic Constraints (`ApiResponse<T>`)
 * 6. Clean Layered Architecture (`Types`, `Utils`, `Services`, `Controllers`)
 */

import { z } from "zod";

console.log("=== MINI PROJECT AKHIR: SISTEM TRANSAKSI E-COMMERCE (03-LANJUTAN) ===");

// =============================================================================
// [LAPISAN 1: TYPES & SCHEMAS] (Kontrak Data, Zod Schema, Discriminated Unions)
// =============================================================================
namespace EcommerceTypes {
  // A. Schema Zod untuk Item Keranjang Belanja
  export const ItemPesananSchema = z.object({
    produkId: z.string().min(3, "ID Produk minimal 3 karakter"),
    nama: z.string().min(2, "Nama produk minimal 2 karakter"),
    hargaSatuan: z.number().min(1000, "Harga minimal Rp1.000"),
    kuantitas: z.number().int().min(1, "Kuantitas minimal 1 barang"),
  });

  // B. Schema Zod untuk Input Checkout dari Pengguna
  export const CheckoutInputSchema = z.object({
    pelangganId: z.string().min(3, "ID Pelanggan wajib diisi"),
    namaPelanggan: z.string().min(2, "Nama pelanggan minimal 2 karakter"),
    itemBelanja: z.array(ItemPesananSchema).min(1, "Keranjang belanja tidak boleh kosong"),
    metodeBayar: z.enum(["TRANSFER_BANK", "EWALLET", "QRIS"]),
    detailBayar: z.object({
      bankTujuan: z.enum(["BCA", "MANDIRI", "BRI"]).optional(),
      nomorEwallet: z.string().min(10, "Nomor e-wallet minimal 10 digit").optional(),
    }),
  });

  // C. Inferred TypeScript Types dari Zod Schema
  export type ItemPesanan = z.infer<typeof ItemPesananSchema>;
  export type CheckoutInput = z.infer<typeof CheckoutInputSchema>;

  // D. Discriminated Union: Metode Pembayaran Terverifikasi
  export type InfoPembayaran =
    | { metode: "TRANSFER_BANK"; bank: "BCA" | "MANDIRI" | "BRI"; nomorVirtualAccount: string }
    | { metode: "EWALLET"; provider: "GoPay" | "OVO" | "Dana"; nomorHp: string }
    | { metode: "QRIS"; qrString: string; masaBerlakuMenit: number };

  // E. Discriminated Union: Status Transaksi Order
  export type OrderState =
    | { status: "MENUNGGU_PEMBAYARAN"; batasWaktu: Date; infoBayar: InfoPembayaran }
    | { status: "BERHASIL_DIBAYAR"; tanggalLunas: Date; nomorResi: string }
    | { status: "DIBATALKAN"; alasan: string };

  // F. Objek Invoice Transaksi Lengkap
  export interface InvoiceOrder {
    invoiceId: string;
    pelangganId: string;
    namaPelanggan: string;
    daftarBarang: ItemPesanan[];
    totalHarga: number;
    ongkosKirim: number;
    totalTagihan: number;
    state: OrderState;
    dibuatPada: Date;
  }

  // G. Generic API Response Wrapper
  export interface ApiResponse<T> {
    kodeStatus: number;
    sukses: boolean;
    pesan: string;
    data?: T;
    errorDetail?: string[];
  }
}


// =============================================================================
// [LAPISAN 2: CUSTOM ERRORS & RESULT PATTERN]
// =============================================================================
namespace ErrorHandling {
  export class TokoError extends Error {
    constructor(
      public override message: string,
      public statusCode: number = 400,
      public kodeError: string = "BAD_REQUEST"
    ) {
      super(message);
      this.name = "TokoError";
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }

  export class StokTidakCukupError extends TokoError {
    constructor(namaProduk: string, stokTersisa: number) {
      super(`Stok untuk produk '${namaProduk}' tidak mencukupi (Sisa: ${stokTersisa})`, 409, "STOCK_OUT");
    }
  }

  export class MetodeBayarTidakValidError extends TokoError {
    constructor(alasan: string) {
      super(`Metode pembayaran tidak valid: ${alasan}`, 422, "PAYMENT_METHOD_INVALID");
    }
  }

  // Result / Either Pattern
  export type Result<T, E = TokoError> =
    | { success: true; data: T }
    | { success: false; error: E };

  export function ok<T>(data: T): Result<T, never> {
    return { success: true, data };
  }

  export function err<E>(error: E): Result<never, E> {
    return { success: false, error };
  }
}


// =============================================================================
// [LAPISAN 3: UTILS] (Fungsi Bantuan Murni)
// =============================================================================
namespace EcommerceUtils {
  export function formatRupiah(angka: number): string {
    return "Rp" + angka.toLocaleString("id-ID");
  }

  export function buatNomorInvoice(): string {
    const timestamp = Date.now().toString().slice(-6);
    const acak = Math.floor(100 + Math.random() * 900);
    return `INV-${timestamp}-${acak}`;
  }
}


// =============================================================================
// [LAPISAN 4: SERVICES] (Logika Bisnis & Pengolahan Data)
// =============================================================================
namespace EcommerceServices {
  // Mock Database Stok Barang di Gudang
  const inventoryGudang: Record<string, number> = {
    "PRD-001": 20, // Mouse Gaming
    "PRD-002": 5,  // Keyboard Mekanikal
    "PRD-003": 1,  // Monitor 4K
  };

  export class OrderService {
    /** Validasi ketersediaan stok semua item */
    private static periksaDanKurangiStok(items: EcommerceTypes.ItemPesanan[]): ErrorHandling.Result<boolean> {
      for (const item of items) {
        const stokSaatIni = inventoryGudang[item.produkId] ?? 0;
        if (stokSaatIni < item.kuantitas) {
          return ErrorHandling.err(new ErrorHandling.StokTidakCukupError(item.nama, stokSaatIni));
        }
      }

      // Potong stok jika semua aman
      for (const item of items) {
        inventoryGudang[item.produkId] = (inventoryGudang[item.produkId] ?? 0) - item.kuantitas;
      }
      return ErrorHandling.ok(true);
    }

    /** Menghasilkan Info Pembayaran Type-Safe */
    private static buatInfoBayar(
      metode: string,
      detail: EcommerceTypes.CheckoutInput["detailBayar"]
    ): ErrorHandling.Result<EcommerceTypes.InfoPembayaran> {
      if (metode === "TRANSFER_BANK") {
        if (!detail.bankTujuan) {
          return ErrorHandling.err(new ErrorHandling.MetodeBayarTidakValidError("Bank tujuan wajib dipilih"));
        }
        return ErrorHandling.ok({
          metode: "TRANSFER_BANK",
          bank: detail.bankTujuan,
          nomorVirtualAccount: "8800" + Math.floor(10000000 + Math.random() * 90000000),
        });
      } else if (metode === "EWALLET") {
        if (!detail.nomorEwallet) {
          return ErrorHandling.err(new ErrorHandling.MetodeBayarTidakValidError("Nomor HP e-wallet wajib diisi"));
        }
        return ErrorHandling.ok({
          metode: "EWALLET",
          provider: "GoPay",
          nomorHp: detail.nomorEwallet,
        });
      } else if (metode === "QRIS") {
        return ErrorHandling.ok({
          metode: "QRIS",
          qrString: "00020101021226540015ID.LINKAJA.WWW0118936009180000018151520458125303360",
          masaBerlakuMenit: 30,
        });
      }

      return ErrorHandling.err(new ErrorHandling.MetodeBayarTidakValidError("Metode tidak dikenali"));
    }

    /** Proses Pembuatan Order Utama */
    static buatOrder(input: EcommerceTypes.CheckoutInput): ErrorHandling.Result<EcommerceTypes.InvoiceOrder> {
      // 1. Cek stok
      const cekStok = this.periksaDanKurangiStok(input.itemBelanja);
      if (!cekStok.success) {
        return ErrorHandling.err(cekStok.error);
      }

      // 2. Buat instruksi pembayaran
      const infoBayarHasil = this.buatInfoBayar(input.metodeBayar, input.detailBayar);
      if (!infoBayarHasil.success) {
        return ErrorHandling.err(infoBayarHasil.error);
      }

      // 3. Kalkulasi harga total
      const totalHarga = input.itemBelanja.reduce((acc, curr) => acc + curr.hargaSatuan * curr.kuantitas, 0);
      const ongkosKirim = 20000;
      const totalTagihan = totalHarga + ongkosKirim;

      // 4. Susun Invoice dengan State Awal "MENUNGGU_PEMBAYARAN"
      const batasBayar = new Date();
      batasBayar.setHours(batasBayar.getHours() + 24);

      const invoice: EcommerceTypes.InvoiceOrder = {
        invoiceId: EcommerceUtils.buatNomorInvoice(),
        pelangganId: input.pelangganId,
        namaPelanggan: input.namaPelanggan,
        daftarBarang: input.itemBelanja,
        totalHarga,
        ongkosKirim,
        totalTagihan,
        state: {
          status: "MENUNGGU_PEMBAYARAN",
          batasWaktu: batasBayar,
          infoBayar: infoBayarHasil.data,
        },
        dibuatPada: new Date(),
      };

      return ErrorHandling.ok(invoice);
    }
  }
}


// =============================================================================
// [LAPISAN 5: CONTROLLERS] (Entry Point API & Validasi Input Zod)
// =============================================================================
namespace EcommerceControllers {
  export class CheckoutController {
    static handleCheckout(requestBody: unknown): EcommerceTypes.ApiResponse<EcommerceTypes.InvoiceOrder> {
      // 1. Validasi Runtime dengan Zod
      const validasi = EcommerceTypes.CheckoutInputSchema.safeParse(requestBody);

      if (!validasi.success) {
        return {
          kodeStatus: 400,
          sukses: false,
          pesan: "Data checkout tidak valid!",
          errorDetail: validasi.error.issues.map((i) => `[${i.path.join(".")}] ${i.message}`),
        };
      }

      // 2. Panggil Service Bisnis
      const hasilOrder = EcommerceServices.OrderService.buatOrder(validasi.data);

      if (!hasilOrder.success) {
        return {
          kodeStatus: hasilOrder.error.statusCode,
          sukses: false,
          pesan: hasilOrder.error.message,
          errorDetail: [hasilOrder.error.kodeError],
        };
      }

      // 3. Response Berhasil
      return {
        kodeStatus: 201,
        sukses: true,
        pesan: "Invoice pesanan berhasil diterbitkan",
        data: hasilOrder.data,
      };
    }
  }
}


// =============================================================================
// [UJI COBA SKENARIO DUNIA NYATA]
// =============================================================================

console.log("\n=================================================================");
console.log("SKENARIO 1: Checkout Berhasil (Transfer Bank BCA)");
console.log("=================================================================");
const payloadSukses = {
  pelangganId: "CUST-101",
  namaPelanggan: "Syauqi Nuzul Abdi",
  itemBelanja: [
    { produkId: "PRD-001", nama: "Mouse Gaming RGB", hargaSatuan: 250000, kuantitas: 2 },
    { produkId: "PRD-002", nama: "Keyboard Mekanikal TKL", hargaSatuan: 600000, kuantitas: 1 },
  ],
  metodeBayar: "TRANSFER_BANK",
  detailBayar: { bankTujuan: "BCA" },
};

const respon1 = EcommerceControllers.CheckoutController.handleCheckout(payloadSukses);
console.log(`[HTTP ${respon1.kodeStatus}] ${respon1.pesan}`);
if (respon1.sukses && respon1.data) {
  console.log(`- No. Invoice : ${respon1.data.invoiceId}`);
  console.log(`- Pelanggan   : ${respon1.data.namaPelanggan}`);
  console.log(`- Total Bayar : ${EcommerceUtils.formatRupiah(respon1.data.totalTagihan)} (Termasuk Ongkir)`);
  if (respon1.data.state.status === "MENUNGGU_PEMBAYARAN" && respon1.data.state.infoBayar.metode === "TRANSFER_BANK") {
    console.log(`- Rekening VA : ${respon1.data.state.infoBayar.bank} - ${respon1.data.state.infoBayar.nomorVirtualAccount}`);
  }
}

console.log("\n=================================================================");
console.log("SKENARIO 2: Checkout Gagal Validasi Zod (Data Kosong / Format Salah)");
console.log("=================================================================");
const payloadSalah = {
  pelangganId: "C", // ❌ Terlalu pendek
  namaPelanggan: "", // ❌ Kosong
  itemBelanja: [],   // ❌ Keranjang kosong
  metodeBayar: "BITCOIN", // ❌ Bukan enum yang didukung
  detailBayar: {},
};
const respon2 = EcommerceControllers.CheckoutController.handleCheckout(payloadSalah);
console.log(`[HTTP ${respon2.kodeStatus}] ${respon2.pesan}`);
console.log("- Rincian Error Zod:", respon2.errorDetail);

console.log("\n=================================================================");
console.log("SKENARIO 3: Checkout Gagal karena Stok Habis (Custom Error)");
console.log("=================================================================");
const payloadStokHabis = {
  pelangganId: "CUST-102",
  namaPelanggan: "Budi Santoso",
  itemBelanja: [
    { produkId: "PRD-003", nama: "Monitor 4K Ultrawide", hargaSatuan: 7500000, kuantitas: 5 }, // ❌ Stok hanya ada 1
  ],
  metodeBayar: "QRIS",
  detailBayar: {},
};
const respon3 = EcommerceControllers.CheckoutController.handleCheckout(payloadStokHabis);
console.log(`[HTTP ${respon3.kodeStatus}] ${respon3.pesan}`);
console.log("- Kode Error Bisnis:", respon3.errorDetail);

console.log("\n🎉 SELAMAT! Seluruh materi TypeScript Lanjutan (Tahap 1 - 8) Berhasil Dikuasai!");
