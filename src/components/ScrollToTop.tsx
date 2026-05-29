import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Timeout memastikan eksekusi dilakukan setelah transisi atau render awal selesai,
    // dan behavior 'instant' menghindari animasi scroll saat berpindah halaman
    // (karena ada konfigurasi scroll-behavior: smooth di css)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, [pathname]);

  return null;
}
