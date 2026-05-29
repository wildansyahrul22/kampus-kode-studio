import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-100 via-white to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 w-fit"
              style={{ color: "#0A58F5" }}
            >
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Software House Terpercaya di Indonesia
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 leading-tight">
              Membangun Solusi Digital Modern untuk{" "}
              <span
                className="text-transparent bg-clip-text bg-linear-to-r"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0B1930, #0A58F5)",
                }}
              >
                Bisnis Masa Depan
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              Kampus Kode Studio adalah mitra teknologi terbaik Anda. Kami
              membantu startup, UMKM, dan perusahaan menengah mengubah ide
              menjadi produk digital yang inovatif dan scalable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/6281279106175"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="gap-2 w-full text-base">
                  Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-base border-slate-300"
                >
                  Lihat Portofolio
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-slate-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Client avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">50+</span> Klien Puas
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract visual representation of digital solutions */}
            <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square bg-linear-to-tr from-primary/5 to-secondary/10 rounded-3xl overflow-hidden border border-white/50 shadow-md backdrop-blur-3xl flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>

              <div className="relative z-10 w-full h-full rounded-2xl bg-white shadow-sm overflow-hidden border border-slate-100 flex flex-col">
                {/* Mockup Header */}
                <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mockup Body */}
                <div className="p-6 flex-1 bg-slate-50/30 flex flex-col gap-4">
                  <div className="w-1/3 h-6 bg-slate-200 rounded-md animate-pulse"></div>
                  <div className="flex gap-4">
                    <div className="w-full h-32 bg-blue-50 rounded-xl border border-blue-100"></div>
                    <div className="w-full h-32 bg-indigo-50 rounded-xl border border-indigo-100"></div>
                  </div>
                  <div className="w-full h-24 bg-slate-100 rounded-xl mt-auto"></div>
                </div>
              </div>
            </div>

            {/* Floating badge — sibling of the card, outside overflow-hidden */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold text-xl">
                🚀
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">
                  Cepat & Skalabel
                </div>
                <div className="text-xs text-slate-500">
                  Kualitas Enterprise
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
