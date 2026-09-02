/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 3 (03-lanjutan)
 * File: 03-lanjutan/latihan/jawaban-03.ts
 * ========================================================
 */

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 3 (DISCRIMINATED UNION) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Discriminated Union untuk Sistem Pengiriman Notifikasi
// -----------------------------------------------------------------------------
interface NotifikasiEmail {
  channel: "email"; // Discriminant / Tag
  alamatEmail: string;
  subjek: string;
  pesan: string;
}

interface NotifikasiSms {
  channel: "sms"; // Discriminant / Tag
  nomorTelepon: string;
  pesan: string;
}

interface NotifikasiPush {
  channel: "push"; // Discriminant / Tag
  deviceId: string;
  judul: string;
  pesan: string;
}

type PesanNotifikasi = NotifikasiEmail | NotifikasiSms | NotifikasiPush;

// -----------------------------------------------------------------------------
// SOAL 2: Function Pengirim Notifikasi dengan Type-Safe Switch
// -----------------------------------------------------------------------------
function kirimNotifikasi(notif: PesanNotifikasi): string {
  switch (notif.channel) {
    case "email":
      return `[EMAIL] Mengirim ke ${notif.alamatEmail} - Subjek: "${notif.subjek}"`;

    case "sms":
      return `[SMS] Mengirim ke ${notif.nomorTelepon} - Pesan: "${notif.pesan}"`;

    case "push":
      return `[PUSH] Mengirim ke device ${notif.deviceId} - Judul: "${notif.judul}"`;
  }
}

// -----------------------------------------------------------------------------
// SOAL 3: Uji Coba Implementasi
// -----------------------------------------------------------------------------
const notif1: PesanNotifikasi = {
  channel: "email",
  alamatEmail: "syauqi@example.com",
  subjek: "Tagihan Bulanan Anda",
  pesan: "Tagihan bulan ini telah terbit sebesar Rp150.000",
};

const notif2: PesanNotifikasi = {
  channel: "sms",
  nomorTelepon: "+628123456789",
  pesan: "Kode OTP rahasia Anda adalah: 849201",
};

const notif3: PesanNotifikasi = {
  channel: "push",
  deviceId: "DEV-ANDROID-9921",
  judul: "Flash Sale Dimulai!",
  pesan: "Diskon hingga 80% untuk produk pilihan hari ini.",
};

console.log("\n[1] Hasil Pengiriman Notifikasi:");
console.log("-", kirimNotifikasi(notif1));
console.log("-", kirimNotifikasi(notif2));
console.log("-", kirimNotifikasi(notif3));

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-03.ts berjalan sukses!");
