import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Inovasi Teknologi",
  "Kolaborasi Tim",
  "Integritas Tinggi",
  "Kualitas Enterprise",
];

export function CompanyOverview() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Tim Kampus Kode Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold font-heading text-primary">
                    2+
                  </div>
                  <div className="text-sm text-slate-600 font-medium leading-tight">
                    Tahun Pengalaman di Industri Digital
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">
                Tentang Perusahaan
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                Partner Digital Inovatif untuk Skala Bisnis Anda
              </h3>
            </div>

            <p className="text-lg text-slate-600">
              Kampus Kode Studio adalah perusahaan teknologi yang berfokus pada{" "}
              <strong>
                Software Development, Web Development, Mobile Application
                Development, dan IT Consulting
              </strong>
              .
            </p>

            <p className="text-slate-600">
              Kami percaya bahwa teknologi harus menjadi akselerator pertumbuhan
              bisnis, bukan beban. Oleh karena itu, kami memberikan solusi
              kustom yang dirancang khusus untuk memecahkan masalah unik setiap
              klien dengan pendekatan modern, efisien, dan berkelanjutan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
