import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center } from "@chakra-ui/react";

export default function Information2() {
  const router = useRouter();
  const MotionBox = motion(Box);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("name");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <Layout previous="quiz">
      <MotionBox bg="lightblue" width={"100%"} height={"100vh"}>
        <Center height={"90%"}>
          <Flex flexDir={"column"} alignItems={"center"} gap={2}>
            <Text
              fontSize={["3xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
            >
              Take this short quiz <br /> to discover a new personalized level{" "}
              <br />
              of custom cleanliness.
            </Text>
            <Box
              px={5}
              rounded={"lg"}
              overflow={"hidden"}
              width={["100%", "100%", "700px"]}
            >
              <Text
                mt={5}
                fontSize={["lg", "xl", "xl"]}
                fontFamily={"body"}
                textAlign={"center"}
              >
                VeriSan Is very versatile when it comes to sanitizing just about
                anything. Its Low toxicity, low cost, and short dwell time
                outperform dozens of potentially harmful common chemicals. With
                more eco-friendly and less toxic options, VeriSan is safer for
                you and for your environment.
              </Text>
            </Box>
          </Flex>
        </Center>
      </MotionBox>
    </Layout>
  );
}
