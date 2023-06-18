interface Props extends BoxProps {
    children: any,
}

import { Box, Text, BoxProps } from "@chakra-ui/react"
import { motion, useAnimationControls } from 'framer-motion'

const UnderlineOnHover: React.FC<Props> = ({ children, ...otherProps }) => {
    const MotionBox = motion(Box)
    const control = useAnimationControls()
    return (
        <Box cursor={'pointer'} tabIndex={0} {...otherProps} >
            <Box
                onMouseEnter={() => { control.start({ width: '100%' }) }}
                onMouseLeave={() => { control.start({ width: '0%' }) }}
                width={'max-content'}>
                <Text>
                    {children}
                </Text>
                <MotionBox initial={{ width: '0%' }} height={.2} animate={control} bg="white"></MotionBox>
            </Box>
        </Box>
    )
}

export default UnderlineOnHover