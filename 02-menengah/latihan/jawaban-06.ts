/**
 * ========================================================
 * 🔑 KUNCI JAWABAN: LATIHAN TAHAP 6 (02-menengah)
 * File: 02-menengah/latihan/jawaban-06.ts
 * ========================================================
 *
 * Jalankan file ini dengan:
 * npx tsx 02-menengah/latihan/jawaban-06.ts
 */

console.log("=== 🔑 KUNCI JAWABAN LATIHAN 02-MENENGAH: TAHAP 6 ===");

// 1. Interface Tugas
interface Tugas {
  id: number;
  judul: string;
  prioritas: "rendah" | "sedang" | "tinggi";
  selesai: boolean;
  catatan?: string;
}

// 2. Generic Class PengelolaTugas
class PengelolaTugas<T extends { id: number; selesai: boolean }> {
  private daftar: T[] = [];

  public tambah(tugas: T): void {
    this.daftar.push(tugas);
    console.log(`✅ Berhasil menambahkan item ID: ${tugas.id}`);
  }

  public tandaiSelesai(id: number): void {
    const tugas = this.daftar.find((item) => item.id === id);
    if (tugas) {
      tugas.selesai = true;
      console.log(`🎉 Tugas ID ${id} ditandai selesai!`);
    } else {
      console.log(`❌ Tugas ID ${id} tidak ditemukan.`);
    }
  }

  public ambilSemua(): T[] {
    return this.daftar;
  }
}

// 3. Utility Type Pick
type TugasRingkas = Pick<Tugas, "id" | "judul" | "selesai">;

// 4. Function Cetak Status
function cetakStatusTugas(tugas: Tugas): void {
  const status = tugas.selesai ? "🟢 [SELESAI]" : "🟡 [DALAM PROSES]";
  console.log(`${status} ${tugas.judul} (Prioritas: ${tugas.prioritas.toUpperCase()})`);
}

// 5. Simulasi Penggunaan
const taskManager = new PengelolaTugas<Tugas>();

taskManager.tambah({
  id: 1,
  judul: "Setup database PostgreSQL",
  prioritas: "tinggi",
  selesai: false,
});

taskManager.tambah({
  id: 2,
  judul: "Desain UI Dashboard",
  prioritas: "sedang",
  selesai: false,
});

console.log("\n--- Daftar Awal Tugas ---");
taskManager.ambilSemua().forEach(cetakStatusTugas);

console.log("\n--- Menandai Selesai ---");
taskManager.tandaiSelesai(1);

console.log("\n--- Daftar Akhir Tugas ---");
taskManager.ambilSemua().forEach(cetakStatusTugas);

console.log("\n🎉 SELAMAT! Kamu telah menuntaskan seluruh materi TypeScript Dasar & Menengah!");
