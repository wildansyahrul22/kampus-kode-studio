import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1930] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-6">
            <a href="#" className="flex items-center">
              <img
                src="/logo-kampus-kode-removebg.png"
                alt="Kampus Kode Studio Logo"
                className="h-20 w-auto rounded-xl bg-white px-2 py-1"
              />
            </a>
            <p className="text-sm leading-relaxed">
              Software house terpercaya yang memberikan solusi teknologi
              inovatif dan skalabel untuk membantu bisnis Anda berkembang di era
              digital.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#about"
                  className="text-sm hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-white transition-colors"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm hover:text-white transition-colors"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-sm hover:text-white transition-colors"
                >
                  Teknologi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Karir
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Layanan</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Backend & API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">
              Hubungi Kami
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+62 812 3456 7890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">hello@kampuskode.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Kampus Kode Studio. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
