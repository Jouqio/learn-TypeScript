/**
 * ========================================================
 * MATERI TAHAP 3: DISCRIMINATED UNION (TAGGED UNION) ⭐
 * File: 03-lanjutan/03-discriminated-union.ts
 * ========================================================
 * 
 * ⭐ KENAPA MATERI INI SANGAT PENTING?
 * Discriminated Union adalah salah satu pola (pattern) desain arsitektur data
 * yang PALING SERING dipakai di frontend (React/Vue/Next.js) dan backend (Node.js/NestJS).
 * 
 * Di tahap ini kita belajar:
 * 1. Masalah Union Biasa vs Solusi Discriminated Union
 * 2. Struktur Discriminated Union (Komponen "Discriminant / Tag")
 * 3. Contoh Kasus Nyata: Manajemen State Response API (Idle, Loading, Success, Error)
 * 4. Contoh Kasus Nyata: Sistem Metode Pembayaran Multi-Channel
 * 5. Fitur Sakti: Exhaustive Checking dengan tipe `never`
 */

console.log("=== BELAJAR TYPESCRIPT LANJUTAN: TAHAP 3 (DISCRIMINATED UNION) ===");

// -----------------------------------------------------------------------------
// 1. APA ITU DISCRIMINATED UNION?
// -----------------------------------------------------------------------------
/**
 * ANALOGI:
 * Bayangkan sebuah bandara yang menerima 3 jenis kendaraan: Mobil, Helikopter, dan Kapal Cepat.
 * Jika semua kendaraan dicampur tanpa stiker pengenal ("Tag"), petugas darat akan bingung:
 * "Apakah kendaraan ini punya baling-baling? Apakah punya jangkar? Apakah punya roda?"
 * 
 * Dengan menempelkan stiker Tag wajib `jenis: "mobil" | "helikopter" | "kapal"`,
 * petugas cukup membaca stikernya sekali, lalu langsung tahu cara menanganinya dengan aman!
 * 
 * SYARAT DISCRIMINATED UNION:
 * 1. Kumpulan beberapa interface/type objek.
 * 2. Memiliki SATU properti yang sama persis namanya (misal: `status`, `tipe`, `kind`).
 * 3. Nilai dari properti tersebut adalah Literal Type unik (misal: "sukses", "gagal", "loading").
 */


// -----------------------------------------------------------------------------
// 2. CONTOH KASUS 1: STATE RESPONSE API (Frontend & Backend State)
// -----------------------------------------------------------------------------

interface StateIdle {
  status: "idle"; // Discriminant / Tag
}

interface StateLoading {
  status: "loading"; // Discriminant / Tag
  waktuMulai: Date;
}

interface StateSuccess<T> {
  status: "success"; // Discriminant / Tag
  data: T;
  pesan: string;
}

interface StateError {
  status: "error"; // Discriminant / Tag
  pesanError: string;
  kodeHttp: number;
}

// Gabungkan semua state menjadi Discriminated Union:
type ApiState<T> = StateIdle | StateLoading | StateSuccess<T> | StateError;

// Tipe data profil user
interface UserProfil {
  id: number;
  nama: string;
  email: string;
}

// Function perender state:
function renderApiState(state: ApiState<UserProfil>): string {
  switch (state.status) {
    case "idle":
      return "[IDLE] Siap mengambil data...";
    
    case "loading":
      return `[LOADING] Sedang memuat sejak ${state.waktuMulai.toLocaleTimeString()}...`;
    
    case "success":
      // Di dalam blok ini, TypeScript 100% yakin 'state.data' ADA!
      return `[SUCCESS] User: ${state.data.nama} (${state.data.email})`;
    
    case "error":
      // Di dalam blok ini, TypeScript 100% tahu ada 'state.pesanError' dan 'state.kodeHttp'
      return `[ERROR ${state.kodeHttp}] Gagal memuat data: ${state.pesanError}`;
  }
}

console.log("\n[1] Penanganan State API dengan Discriminated Union:");
console.log(renderApiState({ status: "idle" }));
console.log(renderApiState({ status: "loading", waktuMulai: new Date() }));
console.log(renderApiState({
  status: "success",
  pesan: "Data profil ditemukan",
  data: { id: 1, nama: "Syauqi Nuzul", email: "syauqi@example.com" },
}));
console.log(renderApiState({
  status: "error",
  pesanError: "Koneksi ke database terputus",
  kodeHttp: 500,
}));


// -----------------------------------------------------------------------------
// 3. CONTOH KASUS 2: TRANSAKSI MULTI-CHANNEL & EXHAUSTIVE CHECKING (`never`)
// -----------------------------------------------------------------------------
/**
 * 💡 APA ITU EXHAUSTIVE CHECKING?
 * Fitur untuk memastikan SEMUA kemungkinan union type telah ditangani di switch-case.
 * Jika di masa depan ada anggota union baru yang lupa ditangani,
 * TypeScript akan LANGSUNG melempar error saat coding (compile-time)!
 */

interface BayarTransferBank {
  metode: "transfer_bank"; // Tag
  namaBank: "BCA" | "Mandiri" | "BRI" | "BNI";
  nomorRekeningTujuan: string;
}

interface BayarKartuKredit {
  metode: "kartu_kredit"; // Tag
  nomorKartuMasked: string; // Misal: "**** **** **** 1234"
  namaBankPenerbit: string;
}

interface BayarEWallet {
  metode: "ewallet"; // Tag
  provider: "GoPay" | "OVO" | "Dana" | "ShopeePay";
  nomorHp: string;
}

interface BayarQris {
  metode: "qris"; // Tag
  qrString: string;
  kadaluarsaMenit: number;
}

// Union Type Pembayaran
type TransaksiPembayaran = BayarTransferBank | BayarKartuKredit | BayarEWallet | BayarQris;

// Helper untuk Exhaustive Checking
function penangananKasusTakTerduga(item: never): never {
  throw new Error(`Ada metode pembayaran yang belum ditangani: ${JSON.stringify(item)}`);
}

function prosesPembayaran(trx: TransaksiPembayaran, nominal: number): void {
  console.log(`\nMemproses Pembayaran Rp${nominal.toLocaleString("id-ID")}:`);

  switch (trx.metode) {
    case "transfer_bank":
      console.log(`-> Silakan transfer ke Bank ${trx.namaBank} No. Rek: ${trx.nomorRekeningTujuan}`);
      break;

    case "kartu_kredit":
      console.log(`-> Memotong tagihan dari kartu ${trx.nomorKartuMasked} (${trx.namaBankPenerbit})`);
      break;

    case "ewallet":
      console.log(`-> Mengirim push notifikasi bayar ke ${trx.provider} (${trx.nomorHp})`);
      break;

    case "qris":
      console.log(`-> Scan kode QRIS (${trx.qrString}), berlaku selama ${trx.kadaluarsaMenit} menit`);
      break;

    default:
      // Jika semua case di atas lengkap, 'trx' di sini bertipe 'never'.
      // Tapi jika ada tipe baru yang belum di-case, baris ini akan MERAH (Compile Error)!
      return penangananKasusTakTerduga(trx);
  }
}

console.log("\n[2] Memproses Berbagai Metode Pembayaran:");
prosesPembayaran({
  metode: "transfer_bank",
  namaBank: "BCA",
  nomorRekeningTujuan: "8801234567",
}, 500000);

prosesPembayaran({
  metode: "ewallet",
  provider: "GoPay",
  nomorHp: "081234567890",
}, 75000);

prosesPembayaran({
  metode: "qris",
  qrString: "00020101021226580016ID.CO.QRIS.WWW...",
  kadaluarsaMenit: 15,
}, 35000);

console.log("\n✅ [BERHASIL] File 03-lanjutan/03-discriminated-union.ts selesai dipelajari & dieksekusi!");
