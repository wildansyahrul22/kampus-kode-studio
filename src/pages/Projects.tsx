import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

import { projects as allProjects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Semua Proyek | Kampus Kode Studio</title>
        <meta
          name="description"
          content="Jelajahi seluruh portofolio dan karya unggulan yang telah berhasil kami bangun di Kampus Kode Studio."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                  Portofolio <span className="text-primary">Proyek</span>
                </h1>
                <p className="text-lg text-slate-600">
                  Berikut adalah berbagai solusi digital inovatif yang telah
                  kami kembangkan untuk membantu klien mencapai tujuan bisnis
                  mereka.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Link to={`/projects/${project.slug}`}>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="gap-2 backdrop-blur-sm text-black hover:text-white bg-white/90"
                        >
                          <ExternalLink className="w-4 h-4" /> Detail
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <div className="text-sm font-medium text-secondary mb-2">
                      {project.category}
                    </div>
                    <h4 className="text-xl font-bold font-heading mb-3 text-slate-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
