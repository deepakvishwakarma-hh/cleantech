import { type StepComp } from "./type"
import { motion } from 'framer-motion'
import UserInfoInput from "../atoms/inputs/UserInfoInput"
import { Text, Flex, Box, Center, } from "@chakra-ui/react"

const Email: StepComp = ({ next }) => {
    const MotionBox = motion(Box)
    return (
        <MotionBox bg="#FEF4EC" width={'100%'} height={'100vh'}>
            <Center height={'90%'}>
                <Flex flexDir={'column'} alignItems={'center'} gap={2}>
                    <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'}>What&apos;s your e-mail?</Text>
                    <Text fontSize={'md'} fontFamily={'body'} textAlign={'center'} mb={3} >We’ll use this to save your recommendation, so you can see it later.</Text>
                    <UserInfoInput type="email" onclick={next} />
                </Flex>
            </Center>
        </MotionBox>
    )
}
export default Email


