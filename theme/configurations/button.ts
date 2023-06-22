import type { StyleFunctionProps } from '@chakra-ui/styled-system'




const Button = {
    baseStyle: {
    },
    sizes: {
        xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
        },
    },
    variants: {
        'straight': {
            textTransform: 'uppercase',
            fontSize: 'sm',
            letterSpacing: '2px',
            px: 4,
            fontWeight: 400,
        },
        'takequizsmall': {
            background: 'black',
            borderRadius: 'full',
            height: '44px',
            px: 10,
            py: 5,
            color: 'white',
            fontWeight: 400,
            transition: '.5s',
            willChange: 'color',
            '&:hover': {
                background: 'white',
                color: 'black',

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
    defaultProps: {

        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
    },
}
export default Button