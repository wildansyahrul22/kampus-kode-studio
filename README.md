# Kampus Kode Studio

Company Profile Website — Kampus Kode Studio adalah software house yang bergerak di bidang **Software Development**, **Web Development**, **Mobile Application Development**, dan **IT Consulting**. Website ini menjadi representasi digital perusahaan yang menampilkan layanan, portofolio, teknologi, serta memudahkan calon klien untuk menghubungi kami.

---

## 🚀 Tech Stack

| Category        | Technology         |
| --------------- | ------------------ |
| Language        | TypeScript         |
| Frontend        | React 19           |
| Styling         | Tailwind CSS 4     |
| UI Components   | shadcn/ui          |
| Routing         | React Router v7    |
| Animation       | Framer Motion      |
| Forms           | React Hook Form    |
| Validation      | Zod                |
| SEO             | React Helmet Async |
| Icons           | Lucide React       |
| Build Tool      | Vite               |
| Linting         | ESLint             |
| Package Manager | npm                |

---

## 📄 Halaman

| Route             | Deskripsi                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `/`               | **Home** — One-page scroll dengan section: Hero, Company Overview, Services, Portfolio Preview, Tech Stack, Testimonials, Contact CTA |
| `/projects`       | **Portfolio** — Daftar semua proyek dalam grid layout                                                                                 |
| `/projects/:slug` | **Project Detail** — Halaman detail tiap proyek (objective, teknologi, informasi proyek)                                              |

---

## 📁 Project Structure

```
src/
├── assets/            # Static assets (images, icons)
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Home page sections (Hero, CompanyOverview, Services, Portfolio, TechStack, Testimonials, ContactCTA)
│   └── ui/            # shadcn/ui reusable components
├── data/              # Static data (projects, services)
├── lib/               # Utility functions
├── pages/             # Page components (Home, Projects, ProjectDetail)
├── App.tsx            # Root component with routing
├── main.tsx           # Entry point
└── index.css          # Global styles & Tailwind
```

---

## 🎨 Design

| Element    | Value     |
| ---------- | --------- |
| Primary    | `#0A1E5E` |
| Secondary  | `#2563EB` |
| Background | `#FFFFFF` |
| Text       | `#1E293B` |
| Heading    | Poppins   |
| Body       | Inter     |

---

## 🛠️ Getting Started

```bash
# Clone repository
git clone https://github.com/wildansyahrul22/kampus-kode-studio.git
cd kampus-kode-studio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🌿 Branch Strategy

| Branch      | Purpose               |
| ----------- | --------------------- |
| `main`      | Production-ready code |
| `develop`   | Integration branch    |
| `feature/*` | Feature development   |
