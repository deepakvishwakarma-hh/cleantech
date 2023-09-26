import { extendTheme } from '@chakra-ui/react'

// configuration components based on themes (varients custom props and default styles)
import { Button, Text } from './configurations';

export const theme = extendTheme({
    components: {
        Button,
        Text
    },
    colors: {
        "primary": "#6984C2",
        "secondary": "#515B68",
        "lightgray": "#F1F3F5",
        "lightblue": "#ECF2FF"
    },

    fonts: {
        heading: 'var(--font-lora)',
        body: 'var(--font-signika)',
    },

});