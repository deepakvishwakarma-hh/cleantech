import { extendTheme } from '@chakra-ui/react'

// configuration components based on themes (varients custom props and default styles)
import { Button } from './configurations';

export const theme = extendTheme({
    components: {
        Button,
    },

    fonts: {
        heading: 'var(--font-lora)',
        body: 'var(--font-signika)',
    },

});