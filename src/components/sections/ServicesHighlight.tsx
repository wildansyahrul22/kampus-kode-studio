import { motion } from "framer-motion";
import { Smartphone, Globe, Server, PenTool, Lightbulb } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Mobile Development",
    description:
      "Pengembangan aplikasi iOS dan Android native-like dengan performa tinggi menggunakan Flutter.",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Web Development",
    description:
      "Pembuatan aplikasi web responsif dan interaktif dengan React, Next.js, dan SvelteKit.",
    icon: Globe,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Backend Development",
    description:
      "Arsitektur REST API & Microservices yang scalable dan aman menggunakan Node.js dan Rust.",
    icon: Server,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "UI/UX Design",
    description:
      "Desain antarmuka modern, intuitif, dan user-friendly yang berfokus pada pengalaman pengguna.",
    icon: PenTool,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "IT Consulting",
    description:
      "Konsultasi teknologi untuk transformasi digital, efisiensi operasional, dan arsitektur sistem.",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesHighlight() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">
            Layanan Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            Solusi Komprehensif untuk Kebutuhan Digital Anda
          </h3>
          <p className="text-lg text-slate-600">
            Dari desain antarmuka hingga arsitektur backend skala enterprise,
            kami menyediakan layanan end-to-end untuk memastikan kesuksesan
            produk digital Anda.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={index === 4 ? "lg:col-span-1 lg:col-start-2" : ""}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-slate-100 group overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-colors duration-500"></div>
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-heading">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
