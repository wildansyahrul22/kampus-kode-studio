import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-blue-50/50 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-100/40 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-linear-to-br from-primary to-slate-900 rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden relative">
          {/* Abstract background shapes inside card */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Siap Memulai Proyek <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
                Transformasi Digital Anda?
              </span>
            </h2>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Diskusikan ide dan kebutuhan bisnis Anda bersama tim ahli kami.
              Dapatkan sesi konsultasi gratis untuk menemukan solusi digital
              terbaik.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/6281279106175" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-slate-100 w-full h-14 px-8 text-base font-bold shadow-lg shadow-white/10"
                >
                  Jadwalkan Konsultasi <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="https://wa.me/6281279106175" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 hover:text-white w-full h-14 px-8 text-base bg-transparent"
                >
                  Hubungi via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
