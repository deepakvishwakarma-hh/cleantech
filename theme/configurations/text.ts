import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const Text = {
    baseStyle: {
    },
    variants: {
        'responsive-h1': {
            fontSize: {
                base: '2em', // 480px
                sm: '2em', // 480px
                md: '2.625em', // 768px
                lg: '2.625em', // 992px
                xl: '2.5em', // 1280px
                '2xl': '3.75em', // 1536px
            }
        },

        // 4. We can override existing variants
        solid: (props: StyleFunctionProps) => ({
            bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        // 5. We can add responsive variants
        sm: {
            bg: 'teal.500',
            fontSize: 'md',
        },
    },

}
export default Text