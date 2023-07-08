import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const Text = {
    baseStyle: {
    },
    variants: {
        'responsive-h1': {

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