/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 7 (03-lanjutan)
 * File: 03-lanjutan/latihan/latihan-07.ts
 * ========================================================
 *
 * Petunjuk:
 * Lengkapi latihan pemisahan tanggung jawab (Separation of Concerns) di bawah ini.
 * Kunci jawaban tersedia di:
 * -> 03-lanjutan/latihan/jawaban-07.ts
 */

console.log("=== LATIHAN 03-LANJUTAN: TAHAP 7 (STRUKTUR PROJECT INDUSTRI) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Bagian Types (Kontrak Data)
// -----------------------------------------------------------------------------
// Buat interface `AkunPelajar`:
// - `nis`: string
// - `nama`: string
// - `poinPelanggaran`: number
// - `status`: "aktif" | "skorsing"
// Tulis kodemu di bawah:


interface AkunPelajar {
    nis: string;
    nama: string;
    poinPelanggaran: number;
    status: "aktif" | "skorsing";
}


// -----------------------------------------------------------------------------
// SOAL 2: Bagian Utils (Fungsi Bantuan)
// -----------------------------------------------------------------------------
// Buat function `formatStatusPelajar(status: "aktif" | "skorsing"): string`:
// - Jika "aktif" -> "🟢 SISWA AKTIF"
// - Jika "skorsing" -> "🔴 DALAM MASA SKORSING"
// Tulis kodemu di bawah:


function formatStatusPelajar(status: "aktif" | "skorsing"): string {
    return status === "aktif" ? "🟢 SISWA AKTIF" : "🔴 DALAM MASA SKORSING";
}


// -----------------------------------------------------------------------------
// SOAL 3: Bagian Service (Logika Bisnis)
// -----------------------------------------------------------------------------
// Buat class `KesiswaanService`:
// 1. Memiliki database lokal (array `AkunPelajar` berisi minimal 2 siswa).
// 2. Method `catatPelanggaran(nis: string, poin: number): AkunPelajar`:
//    - Cari pelajar berdasarkan NIS. Jika tidak ada, lempar error `Siswa tidak ditemukan`.
//    - Tambahkan poin pelanggaran.
//    - Jika total poin >= 100, ubah status menjadi `"skorsing"`.
//    - Kembalikan data siswa yang telah diperbarui.
// Tulis kodemu di bawah:


class KesiswaanService {
    private static databaseSiswa: AkunPelajar[] = [
        { nis: "NIM-202512042", nama: "Syauqi Nuzul Abdi", poinPelanggaran: 10, status: "aktif" },
        { nis: "NIM-202512046", nama: "Muhammad Yusuf Saputra", poinPelanggaran: 0, status: "aktif" },
    ];

    static catatPelanggaran(nis: string, poin: number): AkunPelajar {
        const siswa = this.databaseSiswa.find((s) => s.nis === nis);
        if (!siswa) {
            throw new Error(`Siswa dengan NIS '${nis}' tidak ditemukan!`);
        }

        siswa.poinPelanggaran += poin;

        // Aturan Bisnis: Jika poin mencapai 100 atau lebih, siswa diskors
        if (siswa.poinPelanggaran >= 100) {
            siswa.status = "skorsing";
        }

        return { ...siswa };
    }
}


// -----------------------------------------------------------------------------
// SOAL 4: Bagian Controller (Penanganan Request) & Uji Coba
// -----------------------------------------------------------------------------
// Buat function `handleTambahPoin(nis: string, poin: number)`:
// - Panggil `KesiswaanService.catatPelanggaran(nis, poin)`.
// - Cetak output terformat dengan `formatStatusPelajar()`.
// - Uji coba:
//   1. Tambah 30 poin ke siswa (status tetap aktif).
//   2. Tambah 80 poin lagi ke siswa yang sama (total >= 100, status jadi skorsing).
// Tulis kodemu di bawah:


function handleTambahPoin(nis: string, poin: number): void {
    try {
        const dataHasil = KesiswaanService.catatPelanggaran(nis, poin);
        console.log(`\n[UPDATE KESISWAAN] Siswa: ${dataHasil.nama} (${dataHasil.nis})`);
        console.log(`- Poin Pelanggaran : ${dataHasil.poinPelanggaran} / 100`);
        console.log(`- Status Siswa     : ${formatStatusPelajar(dataHasil.status)}`);
    } catch (err) {
        console.log(`\n[ERROR KESISWAAN] ${(err as Error).message}`);
    }
}

console.log("\n[1] Uji Coba Tambah Poin 1 (30 Poin):");
handleTambahPoin("NIM-202512042", 30);

console.log("\n[2] Uji Coba Tambah Poin 2 (80 Poin Tambahan -> Melebihi 100):");
handleTambahPoin("NIM-202512046", 80);

console.log("\n[3] Uji Coba NIS Tidak Ditemukan:");
handleTambahPoin("NIM-99999999", 20);

