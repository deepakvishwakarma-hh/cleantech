import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center } from "@chakra-ui/react";
import UserInfoInput from "~/components/atoms/inputs/UserInfoInput";
import { localstorage, useLocalStorage } from "~/lib/localstorage";

export default function Email() {
    const router = useRouter()
    const MotionBox = motion(Box);
    const [_, setStorage] = useLocalStorage(localstorage)
    const handleNextClick = (email: any) => {
        setStorage((prev: any) => { return { ...prev, email } })
        router.push('usage')
    };
    return (
        <Layout previous="age" >
            <MotionBox bg="#FEF4EC" width={"100%"} height={"100vh"}>
                <Center height={"90%"}>
                    <Flex flexDir={"column"} alignItems={"center"} gap={2}>
                        <Text fontSize={['3xl', '3xl', "4xl"]} fontFamily={"heading"} textAlign={"center"}>
                            What&apos;s your e-mail?
                        </Text>
                        <Text fontSize={"md"} fontFamily={"body"} textAlign={"center"} mb={3}>
                            We’ll use this to save your recommendation, so you can see it later.
                        </Text>
                        <UserInfoInput type="email" onclick={handleNextClick} />
                    </Flex>
                </Center>
            </MotionBox>
        </Layout >
    );
};
