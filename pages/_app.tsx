import "../style/global.css";
import { theme } from "../theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PageTransitionEffect from "~/components/transition/effect";

// Nextjs/Fonts
const lora = Lora({ subsets: ["latin"] });
import { Lora, Signika } from "next/font/google";
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
          <Component {...pageProps} />
        </PageTransitionEffect>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
