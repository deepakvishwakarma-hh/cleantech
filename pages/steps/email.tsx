import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center } from "@chakra-ui/react";
import UserInfoInput from "~/components/atoms/inputs/UserInfoInput";
import { localstorage, useLocalStorage } from "~/lib/localstorage";

interface EmailProps {}

export default function Email(props: EmailProps) {
  const router = useRouter();
  const MotionBox = motion(Box);
  const [_, setStorage] = useLocalStorage(localstorage);

  const handleNextClick = (email: string) => {
    if (validateEmail(email)) {
      setStorage((prev: any) => {
        return { ...prev, email };
      });
      router.push("surrounded");
    } else {
      // Handle invalid email input
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    // Basic email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <Layout previous="welcome">
      <MotionBox bg="lightblue" width={"100%"} height={"100vh"}>
        <Center height={"90%"}>
          <Flex maxW={"400px"} flexDir={"column"} alignItems={"center"} gap={2}>
            <Text
              fontSize={["3xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
            >
              What&apos;s your e-mail?
            </Text>
            <Text
              fontSize={"md"}
              fontFamily={"body"}
              textAlign={"center"}
              mb={3}
            >
              We’ll use this to save your recommendation, so you can see it
              later.
            </Text>
            <UserInfoInput type="email" onclick={handleNextClick} />
          </Flex>
        </Center>
      </MotionBox>
    </Layout>
  );
}
