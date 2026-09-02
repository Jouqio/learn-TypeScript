/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 3 (03-lanjutan)
 * File: 03-lanjutan/latihan/latihan-03.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi soal latihan Discriminated Union di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 03-lanjutan/latihan/jawaban-03.ts
 */

console.log("=== LATIHAN 03-LANJUTAN: TAHAP 3 (DISCRIMINATED UNION) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Membuat Discriminated Union untuk Sistem Pengiriman Notifikasi
// -----------------------------------------------------------------------------
// Buat 3 interface dengan tag pembeda `channel`:
// 1. `NotifikasiEmail`:
//    - `channel`: "email"
//    - `alamatEmail`: string
//    - `subjek`: string
//    - `pesan`: string
// 2. `NotifikasiSms`:
//    - `channel`: "sms"
//    - `nomorTelepon`: string
//    - `pesan`: string
// 3. `NotifikasiPush`:
//    - `channel`: "push"
//    - `deviceId`: string
//    - `judul`: string
//    - `pesan`: string
//
// Gabungkan ketiganya menjadi type `PesanNotifikasi`.
// Tulis kodemu di bawah:

interface notifikasiEmail {
    channel: "email"
    alamatEmail: string
    subjek: string
    pesan: string
}

interface notifikasiSms {
    channel: "sms"
    nomorTelepon: string
    pesan: string
}

interface notifikasiPush {
    channel: "push"
    deviceId: string
    judul: string
    pesan: string
}

type PesanNotifikasi = notifikasiEmail | notifikasiSms | notifikasiPush;


// -----------------------------------------------------------------------------
// SOAL 2: Function Pengirim Notifikasi dengan Type-Safe Switch
// -----------------------------------------------------------------------------
// BUATLAH function `kirimNotifikasi(notif: PesanNotifikasi): string`
// Gunakan `switch (notif.channel)`:
// - Jika "email": kembalikan `[EMAIL] Mengirim ke <alamatEmail> - Subjek: <subjek>`
// - Jika "sms": kembalikan `[SMS] Mengirim ke <nomorTelepon> - Pesan: <pesan>`
// - Jika "push": kembalikan `[PUSH] Mengirim ke device <deviceId> - Judul: <judul>`
// Tulis kodemu di bawah:

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
// 1. Buat 3 objek notifikasi (1 email, 1 SMS, 1 push notification).
// 2. Panggil `kirimNotifikasi` untuk masing-masing objek dan cetak outputnya ke console.
// Tulis kodemu di bawah:

const notif1: PesanNotifikasi = {
    channel: "email",
    alamatEmail: "jouqio@example.com",
    subjek: "Pemberitahuan Deposit",
    pesan: "Deposit Anda sebesar Rp500.000 berhasil diterima",
};

const notif2: PesanNotifikasi = {
    channel: "sms",
    nomorTelepon: "+628892174691",
    pesan: "Kode verifikasi Anda: 849201",
};

const notif3: PesanNotifikasi = {
    channel: "push",
    deviceId: "ANDR-001",
    judul: "Pesanan Baru!",
    pesan: "Pesanan #INV-2023-456 sudah dikonfirmasi",
};

console.log("\n[1] hasil notifikasi:");
console.log(kirimNotifikasi(notif1));
console.log(kirimNotifikasi(notif2));
console.log(kirimNotifikasi(notif3));



