/**
 * ========================================================
 * KUNCI JAWABAN: LATIHAN TAHAP 7 (03-lanjutan)
 * File: 03-lanjutan/latihan/jawaban-07.ts
 * ========================================================
 */

console.log("=== KUNCI JAWABAN 03-LANJUTAN: TAHAP 7 (STRUKTUR PROJECT INDUSTRI) ===");

// -----------------------------------------------------------------------------
// SOAL 1: Bagian Types (Kontrak Data)
// -----------------------------------------------------------------------------
interface AkunPelajar {
  nis: string;
  nama: string;
  poinPelanggaran: number;
  status: "aktif" | "skorsing";
}

// -----------------------------------------------------------------------------
// SOAL 2: Bagian Utils (Fungsi Bantuan)
// -----------------------------------------------------------------------------
function formatStatusPelajar(status: "aktif" | "skorsing"): string {
  return status === "aktif" ? "🟢 SISWA AKTIF" : "🔴 DALAM MASA SKORSING";
}

// -----------------------------------------------------------------------------
// SOAL 3: Bagian Service (Logika Bisnis)
// -----------------------------------------------------------------------------
class KesiswaanService {
  private static databaseSiswa: AkunPelajar[] = [
    { nis: "NIS-1001", nama: "Ahmad Dani", poinPelanggaran: 10, status: "aktif" },
    { nis: "NIS-1002", nama: "Siti Rahma", poinPelanggaran: 0, status: "aktif" },
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
handleTambahPoin("NIS-1001", 30);

console.log("\n[2] Uji Coba Tambah Poin 2 (80 Poin Tambahan -> Melebihi 100):");
handleTambahPoin("NIS-1001", 80);

console.log("\n[3] Uji Coba NIS Tidak Ditemukan:");
handleTambahPoin("NIS-9999", 20);

console.log("\n✅ [BERHASIL] Kunci jawaban 03-lanjutan/latihan/jawaban-07.ts berjalan sukses!");
