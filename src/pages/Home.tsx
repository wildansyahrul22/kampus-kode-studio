import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { ServicesHighlight } from "@/components/sections/ServicesHighlight";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Kampus Kode Studio | Software House Terpercaya di Indonesia
        </title>
        <meta
          name="description"
          content="Kampus Kode Studio adalah mitra teknologi terbaik Anda. Kami membantu startup, UMKM, dan perusahaan menengah mengubah ide menjadi produk digital yang inovatif dan scalable."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow">
          <HeroSection />
          <CompanyOverview />
          <ServicesHighlight />
          <PortfolioPreview />
          <TechStack />
          <Testimonials />
          <ContactCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
