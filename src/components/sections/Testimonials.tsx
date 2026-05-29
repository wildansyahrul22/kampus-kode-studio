import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Kampus Kode Studio berhasil menerjemahkan ide kompleks kami menjadi aplikasi mobile yang sangat user-friendly. Timnya responsif dan profesional.",
    author: "Budi Santoso",
    role: "CEO, FinTech Startup",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "Kualitas kode dan arsitektur sistem yang dibangun sangat solid. Sangat merekomendasikan untuk proyek skala enterprise yang butuh skalabilitas tinggi.",
    author: "Siti Rahma",
    role: "CTO, HealthTech",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote:
      "Proses delivery tepat waktu dan hasilnya melebihi ekspektasi. Pendekatan konsultatif mereka sangat membantu kami menemukan solusi terbaik.",
    author: "Ahmad Wijaya",
    role: "Founder, EduPlatform",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Testimoni Klien
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Apa Kata Mereka Tentang Kami
          </h3>
          <p className="text-slate-400">
            Kepuasan klien adalah prioritas utama. Lihat bagaimana solusi kami
            membantu mereka mencapai target bisnis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2 pl-4"
                >
                  <div className="p-1">
                    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
                      <CardContent className="p-8 flex flex-col h-full justify-between">
                        <div>
                          <Quote className="w-10 h-10 text-primary/40 mb-6" />
                          <p className="text-slate-200 text-lg leading-relaxed mb-8 italic">
                            "{testimonial.quote}"
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                          />
                          <div>
                            <div className="font-bold font-heading text-white">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-slate-400">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="position-static transform-none! bg-slate-800 text-white border-slate-700 hover:bg-slate-700 hover:text-white" />
              <CarouselNext className="position-static transform-none! bg-slate-800 text-white border-slate-700 hover:bg-slate-700 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
