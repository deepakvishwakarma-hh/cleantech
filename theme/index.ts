import { extendTheme } from '@chakra-ui/react'

// configuration components based on themes (varients custom props and default styles)
import { Button, Text } from './configurations';

export const theme = extendTheme({
    components: {
        Button,
        Text
    },

    fonts: {
        heading: 'var(--font-lora)',
        body: 'var(--font-signika)',
    },

});