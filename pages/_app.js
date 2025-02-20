import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define the routes where the Footer should not be displayed
  const noFooterRoutes = ["/resume", "/404"];

  return (
    <>
      <Component {...pageProps} />
      {!noFooterRoutes.includes(router.pathname) && <Footer />}
      <Analytics />
    </>
  );
}

export default MyApp;
