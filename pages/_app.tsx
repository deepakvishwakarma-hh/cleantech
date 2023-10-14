import "../style/global.css";
import { theme } from "../theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PageTransitionEffect from "~/components/transition/effect";
import ErrorBoundary from "~/components/ErrorBoundry";
// Nextjs/Fonts
const lora = Lora({ subsets: ["latin"] });
import { Lora, Signika } from "next/font/google";
import Script from "next/script";
const signika = Signika({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const exceptRoutes = [
    "/",
    "/recommendation",
    "/cart",
    "/test",
    "/steps/question",
  ];
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WHNVRJ2G');
      `}
      </Script>
      <style jsx global>
        {`
          :root {
            --font-lora: ${lora.style.fontFamily};
            --font-signika: ${signika.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider resetCSS theme={theme}>
        <PageTransitionEffect exceptRoutes={exceptRoutes}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </PageTransitionEffect>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
