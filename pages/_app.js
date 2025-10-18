import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const noFooterRoutes = ["/resume", "/404", "/cleanmode"];

  return (
    <>
      <Component {...pageProps} />
      {!noFooterRoutes.includes(router.pathname) && <Footer />}
      <Analytics />
    </>
  );
}

export default MyApp;
