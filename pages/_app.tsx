import '../style/global.css'
import { theme } from "../theme"
import "slick-carousel/slick/slick.css";
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from '@chakra-ui/react'

// Nextjs/Fonts
const lora = Lora({ subsets: ['latin'] });
import { Lora, Signika } from 'next/font/google';
const signika = Signika({ subsets: ['latin'] });

import Effects from '~/components/transition/effect';

function MyApp({ Component, pageProps }: AppProps) {
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
        <Effects>
          <Component {...pageProps} />
        </Effects>

      </ChakraProvider>
    </>
  )
}

export default MyApp
