import type { AppProps } from 'next/app'
import Layout from '~/components/Layout/main';

// Chakra Provider & Customized Theme
import { theme } from "../theme"
import { ChakraProvider } from '@chakra-ui/react'

// Nextjs/Fonts
import { Lora, Signika } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });
const signika = Signika({ subsets: ['latin'] });

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
        <Component {...pageProps} />
      </ChakraProvider>

    </>
  )
}

export default MyApp
