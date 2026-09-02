/**
 * ========================================================
 * TAHAP 2: TYPE NARROWING (PENYEMPITAN TIPE)
 * File: 02-menengah/02-type-narrowing.ts
 * ========================================================
 *
 * Di tahap ini kita belajar:
 * 1. Apa itu Type Narrowing & kenapa sangat penting?
 * 2. `typeof` Guard (Pengecekan tipe primitif)
 * 3. `in` Operator Guard (Pengecekan keberadaan properti object)
 * 4. `instanceof` Guard (Pengecekan class / objek bawaan seperti Date)
 * 5. Discriminated Union (Pembeda tipe dengan properti penanda)
 */

console.log("=== BELAJAR TYPESCRIPT MENENGAH: TAHAP 2 (TYPE NARROWING) ===");

// --------------------------------------------------------
// 1. APA ITU TYPE NARROWING?
// --------------------------------------------------------
/**
 * ANALOGI TYPE NARROWING:
 * Bayangkan paket kiriman berlabel "Cairan ATAU Elektronik".
 * Sebelum membuka paket:
 * - Kamu tidak boleh langsung colok kabel ke listrik (bagaimana kalau isinya air?).
 * - Kamu tidak boleh langsung menuangnya ke gelas (bagaimana kalau isinya laptop?).
 *
 * Kamu harus MEMERIKSA isinya dulu:
 * - JIKA ternyata isinya Laptop -> baru aman dicolok charger.
 * - JIKA ternyata isinya Susu -> baru aman dituang ke gelas.
 *
 * Proses memeriksa dan memastikan tipe spesifik ini disebut TYPE NARROWING.
 */

// --------------------------------------------------------
// 2. `typeof` GUARD (Untuk Tipe Primitif)
// --------------------------------------------------------
function prosesInput(input: string | number): void {
  // Sebelum pengecekan: input adalah 'string | number'

  if (typeof input === "string") {
    // Di dalam blok ini, TypeScript TAHU PASTI bahwa input adalah 'string'
    console.log(`[typeof] Teks dalam huruf kapital: ${input.toUpperCase()}`);
  } else {
    // Di dalam blok else, TypeScript TAHU PASTI bahwa input adalah 'number'
    console.log(`[typeof] Angka dikali dua: ${input * 2}`);
  }
}

console.log("\n--- 1. Demo typeof Guard ---");
prosesInput("belajar typescript"); // Output: BELAJAR TYPESCRIPT
prosesInput(25);                  // Output: 50

// --------------------------------------------------------
// 3. `in` OPERATOR GUARD (Untuk Objek dengan Properti Berbeda)
// --------------------------------------------------------
type MemberGratis = {
  nama: string;
  lihatKonten: () => void;
};

type MemberVIP = {
  nama: string;
  lihatKonten: () => void;
  unduhVideo: () => void; // Hanya VIP yang punya properti ini
};

function layaniUser(user: MemberGratis | MemberVIP): void {
  console.log(`\nMelayani: ${user.nama}`);
  user.lihatKonten();

  // Kita cek apakah properti 'unduhVideo' ADA di dalam objek user:
  if ("unduhVideo" in user) {
    // TypeScript otomatis menyempitkan tipe user menjadi 'MemberVIP'
    user.unduhVideo();
  } else {
    console.log("Fitur unduh hanya untuk Member VIP.");
  }
}

console.log("\n--- 2. Demo 'in' Operator Guard ---");
const user1: MemberGratis = {
  nama: "Budi",
  lihatKonten: () => console.log("Menonton video streaming..."),
};

const user2: MemberVIP = {
  nama: "Siti",
  lihatKonten: () => console.log("Menonton video 4K..."),
  unduhVideo: () => console.log("Mengunduh video ke penyimpanan lokal..."),
};

layaniUser(user1);
layaniUser(user2);

// --------------------------------------------------------
// 4. `instanceof` GUARD (Untuk Class & Objek Bawaan)
// --------------------------------------------------------
function cetakTanggal(nilai: string | Date): void {
  if (nilai instanceof Date) {
    // TypeScript tahu nilai adalah objek Date
    console.log(`[Date Object] Tahun: ${nilai.getFullYear()}`);
  } else {
    // TypeScript tahu nilai adalah string
    console.log(`[String] Tanggal teks: ${nilai}`);
  }
}

console.log("\n--- 3. Demo instanceof Guard ---");
cetakTanggal(new Date()); // Objek Date asli
cetakTanggal("2026-09-02"); // String biasa

// --------------------------------------------------------
// 5. DISCRIMINATED UNION (Pola Paling Populer di Project Nyata!)
// --------------------------------------------------------
/**
 * Pola ini menggunakan satu properti penanda yang sama (misal `status: "sukses" | "gagal"`)
 * untuk membedakan bentuk objek.
 */

type ResponseSukses = {
  status: "sukses";
  data: string[];
};

type ResponseGagal = {
  status: "gagal";
  pesanError: string;
};

type APIResponse = ResponseSukses | ResponseGagal;

function handleResponse(res: APIResponse): void {
  if (res.status === "sukses") {
    // TypeScript tahu res memiliki properti 'data'
    console.log("✅ Data diterima:", res.data.join(", "));
  } else {
    // TypeScript tahu res memiliki properti 'pesanError'
    console.log("❌ Terjadi kegagalan:", res.pesanError);
  }
}

console.log("\n--- 4. Demo Discriminated Union ---");
handleResponse({ status: "sukses", data: ["Laptop", "Mouse", "Keyboard"] });
handleResponse({ status: "gagal", pesanError: "Koneksi internet terputus" });

console.log("\n✅ Program Tahap 2 (Menengah) berhasil dijalankan!");
