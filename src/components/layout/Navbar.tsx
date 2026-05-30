import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/logo-kampus-kode-removebg.png"
                alt="Kampus Kode Studio Logo"
                className="h-16 md:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <a
                href="https://wa.me/620123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90 font-semibold px-5 py-4"
                >
                  Konsultasi Gratis
                </Button>
              </a>
            </div>

            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-700 hover:bg-slate-100"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  }
                />
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[340px] p-0 flex flex-col"
                >
                  {/* Mobile menu header */}
                  <div className="flex items-center px-5 gap-4 py-4 border-b border-slate-100">
                    <img
                      src="/logo-kampus-kode-removebg.png"
                      alt="Kampus Kode Studio"
                      className="h-10 w-auto"
                    />
                    <h4 className="font-medium text-lg">Kampus Kode</h4>
                  </div>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col flex-1 px-4 py-6 gap-1 overflow-y-auto">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 px-3 py-3 rounded-lg transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                  <div className="p-5 border-t border-slate-100 bg-slate-50 mt-auto">
                    <a
                      href="https://wa.me/620123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full h-11 bg-primary text-white font-semibold shadow-md shadow-primary/20">
                        Konsultasi Gratis
                      </Button>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
