import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

import { projects as allProjects } from "@/data/projects";

const projects = allProjects.slice(0, 3);

export function PortfolioPreview() {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">
              Portofolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
              Karya Unggulan Kami
            </h3>
          </div>
          <Link to="/projects" className="hidden md:block">
            <Button variant="outline" className="flex gap-2 group">
              Lihat Semua Proyek
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
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

              <div className="p-6">
                <div className="text-sm font-medium text-secondary mb-2">
                  {project.category}
                </div>
                <h4 className="text-xl font-bold font-heading mb-3 text-slate-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
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

        <div className="mt-10 md:hidden flex justify-center">
          <Link to="/projects" className="w-full sm:w-auto">
            <Button variant="outline" className="gap-2 group w-full">
              Lihat Semua Proyek
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
