import type { AppProps } from 'next/app'

// Chakra Provider & Customized Theme
import { theme } from "../theme"
import { ChakraProvider } from '@chakra-ui/react'

// Nextjs/Fonts
import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        :root {
          --font-rubik: ${lora.style.fontFamily};
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
