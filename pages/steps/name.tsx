import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center } from "@chakra-ui/react";
import { localstorage, useLocalStorage } from "~/lib/localstorage";
import UserInfoInput from "~/components/atoms/inputs/UserInfoInput";

export default function Name() {
  const router = useRouter();
  const MotionBox = motion(Box);
  const [_, setStorage] = useLocalStorage(localstorage);
  const handleClickNext = (name: string) => {
    setStorage((prev: any) => {
      return { ...prev, name };
    });
    router.push("welcome");
  };

  return (
    <Layout previous={"information-2"}>
      <MotionBox bg="lightblue" width={"100%"} height={"100vh"}>
        <Center height={"90%"}>
          <Flex maxW={"400px"} flexDir={"column"} alignItems={"center"} gap={2}>
            <Text
              fontSize={["3xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
            >
              What&apos;s your first name?
            </Text>
            <Text
              fontSize={"md"}
              fontFamily={"body"}
              textAlign={"center"}
              mb={3}
            >
              We’ll use this to personalize your experience. Think: daily
              vitamin packs.
            </Text>
            <UserInfoInput type="string" onclick={handleClickNext} />
            {/* <WhyWeAsk /> */}
          </Flex>
        </Center>
      </MotionBox>
    </Layout>
  );
}
