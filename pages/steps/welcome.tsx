import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { useLocalStorage } from "@mantine/hooks";
import { localstorage } from "~/lib/localstorage";
import { Text, Flex, Box, Center } from "@chakra-ui/react";

export default function Welcome() {
    const router = useRouter()
    const MotionBox = motion(Box);
    const [storage] = useLocalStorage(localstorage);

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('age')
        }, 2000);
        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <Layout previous="name">
            <MotionBox bg="#FEF4EC" width={"100%"} height={"100vh"}>
                <Center height={"90%"}>
                    <Flex flexDir={"column"} alignItems={"center"} gap={2}>
                        <Text fontSize={"4xl"} fontFamily={"heading"} textAlign={"center"}>
                            Welcome {(storage as typeof localstorage['defaultValue']).name}
                        </Text>
                    </Flex>
                </Center>
            </MotionBox>
        </Layout>
    );
};
