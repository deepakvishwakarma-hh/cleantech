import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center } from "@chakra-ui/react";
import { localstorage, useLocalStorage } from "~/lib/localstorage";
import UserInfoInput from "~/components/atoms/inputs/UserInfoInput";

export default function Age() {
    const router = useRouter()
    const [_, setStorage] = useLocalStorage(localstorage)
    const handleNextClick = (age: any) => {
        setStorage((prev: any) => { return { ...prev, age } })
        router.push('email')
    };
    return (
        <Layout previous="welcome">
            <Box bg="#FEF4EC" width={"100%"} height={"100vh"}>
                <Center height={"90%"}>
                    <Flex flexDir={"column"} alignItems={"center"} gap={2}>
                        <Text
                            fontSize={"4xl"}
                            fontFamily={"heading"}
                            textAlign={"center"}
                            mb={5}>
                            How old are you?
                        </Text>
                        <UserInfoInput type="number" onclick={handleNextClick} />
                    </Flex>
                </Center>
            </Box>
        </Layout>
    );
};
