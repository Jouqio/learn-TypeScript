/**
 * ========================================================
 * LATIHAN MANDIRI: TAHAP 6 (PROYEK MINI MENENGAH)
 * File: 02-menengah/latihan/latihan-06.ts
 * ========================================================
 *
 * STUDI KASUS: Sistem Manajemen Tugas / Task Manager Karyawan
 *
 * Petunjuk Soal:
 * 1. Buat interface `Tugas`:
 *    - `id`: number
 *    - `judul`: string
 *    - `prioritas`: "rendah" | "sedang" | "tinggi" (Literal Union)
 *    - `selesai`: boolean
 *    - `catatan`: string (opsional `?`)
 *
 * 2. Buat generic class `PengelolaTugas<T extends { id: number; selesai: boolean }>`:
 *    - Properti private: `daftar: T[] = []`
 *    - Method `tambah(tugas: T): void`
 *    - Method `tandaiSelesai(id: number): void`
 *    - Method `ambilSemua(): T[]`
 *
 * 3. Buat utility type `TugasRingkas` menggunakan `Pick<Tugas, "id" | "judul" | "selesai">`.
 *
 * 4. Buat function `cetakStatusTugas(tugas: Tugas): void` untuk mencetak info status tugas.
 *
 * Kunci jawaban tersedia di:
 * -> 02-menengah/latihan/jawaban-06.ts
 */

console.log("=== LATIHAN 02-MENENGAH: TAHAP 6 (TASK MANAGER) ===");

// Tulis kodemu di bawah ini:

//1. interface Tugas

interface Tugas {
    id: number;
    judul: string;
    prioritas: "rendah" | "sedang" | "tinggi";
    selesai: boolean;
    catatan?: string;
}

//2. generic class PengelolaTugas<T extends { id: number; selesai: boolean }>

class PengelolaTugas<T extends { id: number; selesai: boolean }> {
    private daftar: T[] = [];

    public tambah(tugas: T): void {
        this.daftar.push(tugas);
        console.log(`[Gudang Pusat] ✅ Item ID ${tugas.id} berhasil ditambahkan.`);
    }

    public tandaiSelesai(id: number): void {
        const tugas = this.daftar.find((t) => t.id === id);
        if (tugas) {
            tugas.selesai = true;
            console.log(`[Gudang Pusat] ✅ Item ID ${tugas.id} berhasil ditandai selesai.`);
        }
    }

    public ambilSemua(): T[] {
        return this.daftar;
    }
}

//3. utility type TugasRingkas menggunakan Pick<Tugas, "id" | "judul" | "selesai">

type TugasRingkas = Pick<Tugas, "id" | "judul" | "selesai">

//4. Buat function `cetakStatusTugas(tugas: Tugas): void` untuk mencetak info status tugas.

function cetakStatusTugas(tugas: Tugas): void {
    console.log(`[Gudang Pusat] 📝 ID: ${tugas.id}, Judul: ${tugas.judul}, Status: ${tugas.selesai ? "Selesai" : "Belum Selesai"}`);
}

//5. Simulasi Penggunaan

const taskManager = new PengelolaTugas<Tugas>();
taskManager.tambah({
    id: 1,
    judul: "Belajar TypeScript",
    prioritas: "rendah",
    selesai: false,
    catatan: "Belajar TypeScript dari video"
});

taskManager.tambah({
    id: 2,
    judul: "Belajar Nodejs",
    prioritas: "rendah",
    selesai: false,
    catatan: "Belajar Nodejs dari video"
});

taskManager.tambah({
    id: 3,
    judul: "Belajar Java",
    prioritas: "rendah",
    selesai: false,
    catatan: "Belajar Java dari video"
})

type TugasPrioritas = {
    tugas: Tugas,
    prioritas: "rendah" | "sedang" | "tinggi"
}

type TugasRingkas = Pick<Tugas, "id" | "judul" | "selesai">

const tugas1: TugasPrioritas = {
    tugas: {
        id: 1,
        judul: "Belajar TypeScript",
        prioritas: "rendah",
        selesai: false,
        catatan: "Belajar TypeScript dari video"
    },
    prioritas: "rendah"
}

console.log("\n--- Daftar Awal Tugas ---");
taskManager.ambilSemua().forEach(cetakStatusTugas);

console.log("\n--- Menandai Selesai ---");
taskManager.tandaiSelesai(1);

console.log("\n--- Daftar Akhir Tugas ---");
taskManager.ambilSemua().forEach(cetakStatusTugas);




