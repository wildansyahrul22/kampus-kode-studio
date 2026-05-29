export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  content?: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "fin-dash-pro",
    title: "FinDash Pro",
    category: "Web Application",
    description:
      "Platform dashboard finansial untuk mengelola transaksi, analisis cashflow, dan pelaporan pajak secara otomatis dengan integrasi bank API.",
    content: "FinDash Pro adalah solusi komprehensif bagi perusahaan menengah untuk melacak cashflow dan mengotomatiskan pelaporan pajak. Dikembangkan menggunakan React dan Node.js, aplikasi ini terintegrasi langsung dengan berbagai API Bank terkemuka di Indonesia, memberikan visibilitas finansial secara real-time.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Node.js", "Express"],
  },
  {
    slug: "edulearn-mobile",
    title: "EduLearn Mobile",
    category: "Mobile Application",
    description:
      "Aplikasi e-learning interaktif dengan fitur live class, gamifikasi, dan kuis real-time untuk siswa SMA seluruh Indonesia.",
    content: "EduLearn mengubah cara siswa SMA belajar di luar jam sekolah. Dibangun dengan Flutter agar berjalan optimal di iOS dan Android, aplikasi ini menggunakan Firebase dan WebRTC untuk mendukung kelas interaktif secara live, dengan latensi sangat rendah, bahkan pada koneksi yang tidak stabil.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Firebase", "WebRTC"],
  },
  {
    slug: "healthcare-erp",
    title: "HealthCare ERP",
    category: "Enterprise System",
    description:
      "Sistem ERP terintegrasi untuk manajemen rumah sakit meliputi rekam medis, inventaris obat, penjadwalan dokter, dan HRD.",
    content: "Dibangun untuk menangani ribuan transaksi data setiap hari, HealthCare ERP menggunakan arsitektur microservices dengan Rust dan PostgreSQL untuk menjamin keamanan dan kecepatan akses rekam medis. Frontend menggunakan Next.js yang mempermudah staf rumah sakit dalam menavigasi modul kompleks.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "PostgreSQL", "Rust", "GraphQL"],
  },
  {
    slug: "securepay-gateway",
    title: "SecurePay Gateway",
    category: "Fintech",
    description:
      "Payment gateway aggregator untuk UMKM dengan dukungan puluhan metode pembayaran lokal dan rekonsiliasi otomatis.",
    content: "Keamanan dan reliabilitas adalah inti dari SecurePay Gateway. Menggunakan Laravel dan Vue.js, platform ini berhasil membantu lebih dari 10.000 UMKM memproses pembayaran dengan rekonsiliasi otomatis yang mengurangi beban administratif hingga 80%.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Vue.js", "Laravel", "Redis"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
