import { useEffect } from 'react'
import { type StepComp } from "./type"
import { motion } from 'framer-motion'
import { Text, Flex, Box, Center } from "@chakra-ui/react"

const WelcomeUser: StepComp = ({ next }) => {
    const MotionBox = motion(Box)

    useEffect(() => {
        const timeout = setTimeout(next, 2000)
        return () => clearTimeout(timeout)
    }, [next])

    return (
        <MotionBox bg="#FEF4EC" width={'100%'} height={'100vh'}>
            <Center height={'90%'}>
                <Flex flexDir={'column'} alignItems={'center'} gap={2}>
                    <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'}>Welcome Deepak</Text>
                </Flex>
            </Center>
        </MotionBox>
    )
}
export default WelcomeUser

