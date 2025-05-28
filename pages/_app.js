import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import PortfolioPasswordGate from "@/components/PortfolioPasswordGate";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const noFooterRoutes = ["/resume", "/404"];
  const isPortfolioRoute = router.pathname.startsWith("/portfolio");

  return (
    <>
      {isPortfolioRoute ? (
        <PortfolioPasswordGate>
          <Component {...pageProps} />
          {!noFooterRoutes.includes(router.pathname) && <Footer />}
        </PortfolioPasswordGate>
      ) : (
        <>
          <Component {...pageProps} />
          {!noFooterRoutes.includes(router.pathname) && <Footer />}
        </>
      )}
      <Analytics />
    </>
  );
}

export default MyApp;
