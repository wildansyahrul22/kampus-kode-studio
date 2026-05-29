import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Proyek Tidak Ditemukan</h1>
            <p className="text-slate-600 mb-8">
              Maaf, proyek yang Anda cari tidak tersedia.
            </p>
            <Link to="/projects">
              <Button>Kembali ke Daftar Proyek</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Kampus Kode Studio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow pt-24 pb-20 md:pt-32 md:pb-28">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Portofolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-primary text-white hover:bg-primary/90">
                  {project.category}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                {project.description}
              </p>

              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                <div className="md:col-span-2 prose prose-lg prose-slate max-w-none">
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                    Tentang Proyek
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.content || project.description}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-fit">
                  <h4 className="font-bold font-heading text-slate-900 mb-4">
                    Informasi Proyek
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-500 mb-1">
                          Teknologi
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-white border-slate-200 text-slate-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
