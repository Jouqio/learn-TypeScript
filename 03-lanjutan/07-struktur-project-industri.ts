/**
 * ========================================================
 * MATERI TAHAP 7: STRUKTUR PROJECT STANDAR INDUSTRI
 * File: 03-lanjutan/07-struktur-project-industri.ts
 * ========================================================
 * 
 * Di tahap ini kita belajar bagaimana developer profesional mengorganisasi
 * codebase TypeScript berskala besar di perusahaan:
 * 1. Prinsip Separation of Concerns (Pemisahan Tanggung Jawab)
 * 2. Anatomi 4 Folder Utama: `types/`, `services/`, `utils/`, `controllers/`
 * 3. Simulasi Alur Kerja End-to-End dalam Arsitektur Berlapis (Layered Architecture)
 */

console.log("=== BELAJAR TYPESCRIPT LANJUTAN: TAHAP 7 (STRUKTUR PROJECT INDUSTRI) ===");

// -----------------------------------------------------------------------------
// 1. KENAPA STRUKTUR FOLDER SANGAT KRUSIAL?
// -----------------------------------------------------------------------------
/**
 * 💡 MASALAH "SPAGHETTI CODE":
 * Di project pemula, sering kali validasi input, kalkulasi rumus, query database,
 * dan format response dicampur aduk dalam 1 fungsi atau 1 file raksasa.
 * Akibatnya: sulit diuji (untestable), sulit dirawat (unmaintainable), dan rawan bug.
 * 
 * 💡 SOLUSI INDUSTRI: SEPARATION OF CONCERNS (SoC)
 * Setiap bagian kode HANYA bertanggung jawab pada 1 tugas spesifik:
 * 
 * [ Client / User ]
 *        │ (Kirim Data Request)
 *        ▼
 * ┌──────────────┐ ── Validasi format input
 * │ Controllers  │ ── Menentukan status code & format respon
 * └──────┬───────┘
 *        │ (Panggil Logika Bisnis)
 *        ▼
 * ┌──────────────┐ ── Aturan bisnis (kalkulasi poin, stok, diskon)
 * │   Services   │ ── Mengelola transaksi data
 * └──────┬───────┘
 *        │ (Menggunakan)
 *        ├──► [ Utils ]  (Helper: format rupiah, buat ID acak, dll)
 *        └──► [ Types ]  (Interface, Union Type, Zod Schema)
 */


// -----------------------------------------------------------------------------
// 2. SIMULASI LAPISAN 1: `types/` (Kontrak Data & Skema)
// -----------------------------------------------------------------------------
namespace Types {
  export type RolePengguna = "member" | "vip" | "admin";

  export interface User {
    id: string;
    nama: string;
    role: RolePengguna;
    poinReward: number;
  }

  export interface OrderRequest {
    userId: string;
    totalBelanja: number;
  }

  export interface OrderResult {
    orderId: string;
    user: User;
    totalAwal: number;
    diskonNominal: number;
    totalAkhir: number;
    poinDiperoleh: number;
    waktuTransaksi: Date;
  }
}


// -----------------------------------------------------------------------------
// 3. SIMULASI LAPISAN 2: `utils/` (Fungsi Bantuan Murni / Pure Functions)
// -----------------------------------------------------------------------------
namespace Utils {
  /** Memformat angka menjadi mata uang Rupiah standar */
  export function formatRupiah(nominal: number): string {
    return "Rp" + nominal.toLocaleString("id-ID");
  }

  /** Menghasilkan ID unik acak dengan prefix tertentu */
  export function buatIdUnik(prefix: string): string {
    const angkaAcak = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${angkaAcak}`;
  }
}


// -----------------------------------------------------------------------------
// 4. SIMULASI LAPISAN 3: `services/` (Jantung Logika Bisnis)
// -----------------------------------------------------------------------------
namespace Services {
  // Database tiruan (Mock Database)
  const databaseUser: Types.User[] = [
    { id: "USR-001", nama: "Syauqi Nuzul", role: "vip", poinReward: 250 },
    { id: "USR-002", nama: "Budi Santoso", role: "member", poinReward: 50 },
  ];

  export class OrderService {
    /** Mencari user berdasarkan ID */
    static temukanUser(id: string): Types.User | undefined {
      return databaseUser.find((u) => u.id === id);
    }

    /** Memproses transaksi, menghitung diskon berdasarkan role, dan memberi poin */
    static prosesOrder(request: Types.OrderRequest): Types.OrderResult {
      const user = this.temukanUser(request.userId);
      if (!user) {
        throw new Error(`User dengan ID '${request.userId}' tidak ditemukan!`);
      }

      // Aturan Bisnis Diskon:
      // VIP dapat diskon 15%, Member biasa dapat diskon 5%
      let persentaseDiskon = 0;
      if (user.role === "vip") {
        persentaseDiskon = 15;
      } else if (user.role === "member") {
        persentaseDiskon = 5;
      }

      const diskonNominal = (request.totalBelanja * persentaseDiskon) / 100;
      const totalAkhir = request.totalBelanja - diskonNominal;

      // Aturan Bisnis Poin: Setiap Rp10.000 belanja dapat 1 poin
      const bonusPoin = Math.floor(totalAkhir / 10000);
      user.poinReward += bonusPoin;

      return {
        orderId: Utils.buatIdUnik("ORD"),
        user: { ...user },
        totalAwal: request.totalBelanja,
        diskonNominal,
        totalAkhir,
        poinDiperoleh: bonusPoin,
        waktuTransaksi: new Date(),
      };
    }
  }
}


// -----------------------------------------------------------------------------
// 5. SIMULASI LAPISAN 4: `controllers/` (Pintu Gerbang Request & Response)
// -----------------------------------------------------------------------------
namespace Controllers {
  export class OrderController {
    /** Menerima input dari client, memanggil service, dan memformat hasil */
    static handleBuatOrder(body: unknown): { status: number; payload: any } {
      try {
        // Validasi input sederhana
        if (typeof body !== "object" || body === null) {
          return { status: 400, payload: { pesan: "Request body tidak valid" } };
        }

        const dataInput = body as Partial<Types.OrderRequest>;
        if (!dataInput.userId || typeof dataInput.totalBelanja !== "number") {
          return { status: 400, payload: { pesan: "Field userId dan totalBelanja wajib diisi" } };
        }

        // Panggil Service
        const hasil = Services.OrderService.prosesOrder({
          userId: dataInput.userId,
          totalBelanja: dataInput.totalBelanja,
        });

        // Kembalikan Response Sukses (HTTP 201 Created)
        return {
          status: 201,
          payload: {
            sukses: true,
            orderId: hasil.orderId,
            pelanggan: hasil.user.nama,
            role: hasil.user.role.toUpperCase(),
            rincian: {
              totalKotor: Utils.formatRupiah(hasil.totalAwal),
              potonganDiskon: Utils.formatRupiah(hasil.diskonNominal),
              totalBayar: Utils.formatRupiah(hasil.totalAkhir),
              rewardPoinBaru: `+${hasil.poinDiperoleh} poin (Total: ${hasil.user.poinReward})`,
            },
          },
        };
      } catch (err) {
        return {
          status: 404,
          payload: { sukses: false, pesan: (err as Error).message },
        };
      }
    }
  }
}


// -----------------------------------------------------------------------------
// 6. UJI COBA ALUR PROGRAM
// -----------------------------------------------------------------------------
console.log("\n[1] Simulasi Request 1: Order oleh Pelanggan VIP (USR-001)");
const respon1 = Controllers.OrderController.handleBuatOrder({
  userId: "USR-001",
  totalBelanja: 200000,
});
console.log(`HTTP ${respon1.status}:`, JSON.stringify(respon1.payload, null, 2));

console.log("\n[2] Simulasi Request 2: Order oleh Pelanggan Member Reguler (USR-002)");
const respon2 = Controllers.OrderController.handleBuatOrder({
  userId: "USR-002",
  totalBelanja: 100000,
});
console.log(`HTTP ${respon2.status}:`, JSON.stringify(respon2.payload, null, 2));

console.log("\n[3] Simulasi Request 3: Order dengan User Tidak Ditemukan");
const respon3 = Controllers.OrderController.handleBuatOrder({
  userId: "USR-999",
  totalBelanja: 50000,
});
console.log(`HTTP ${respon3.status}:`, JSON.stringify(respon3.payload, null, 2));

console.log("\n✅ [BERHASIL] File 03-lanjutan/07-struktur-project-industri.ts selesai dipelajari & dieksekusi!");
