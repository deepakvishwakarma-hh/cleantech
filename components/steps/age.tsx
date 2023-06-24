import { type StepComp } from "./type"
import UserInfoInput from "../atoms/inputs/UserInfoInput"
import { Text, Flex, Box, Center, } from "@chakra-ui/react"

const Age: StepComp = ({ next }) => {
    return (
        <Box bg="#FEF4EC" width={'100%'} height={'100vh'}>
            <Center height={'90%'}>
                <Flex flexDir={'column'} alignItems={'center'} gap={2}>
                    <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'} mb={5} >How old are you?</Text>
                    <UserInfoInput type="number" onclick={next} />
                </Flex>
            </Center>
        </Box>
    )
}
export default Age


