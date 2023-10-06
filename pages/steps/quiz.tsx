import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { SimpleGrid, Text, Button, Flex, Box, Center } from "@chakra-ui/react";

export default function Quiz() {
  const router = useRouter();
  const MotionSipleGrid = motion(SimpleGrid);
  const handleClickNext = () => {
    router.push("name");
  };
  return (
    <Layout previous="/">
      <MotionSipleGrid
        width={"100%"}
        height={"100vh"}
        columns={[1, 1, 1, 1, 2]}
      >
        <Box position={"relative"}>
          <Image
            fill
            alt="quiz"
            src={"/imgs/7.-Travel-and-Recreation-(On-The-Go)-(2).jpg"}
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Center bg="lightblue">
          <Flex maxW={"500px"} flexDir={"column"} alignItems={"center"} gap={5}>
            <Text
              fontSize={["3xl", "3xl", "4xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
            >
              Take this short quiz to discover a new personalized level of
              custom cleanliness.
            </Text>
            <Text fontSize={"md"} fontFamily={"heading"} textAlign={"center"}>
              VariSan is very versatile when it comes to sanitizingg just about
              anything. Its Low toxicity, low cost ans short dwell time
              outperform dozens of potentially harmfull common chemicals. With
              more eco-friendly and less toxic options, variSan is safer for you
              and for your environment
            </Text>
            <Button
              mt={2}
              px={20}
              py={8}
              fontSize={"xl"}
              variant="takequizsmall"
              onClick={handleClickNext}
            >
              Begin Quiz
            </Button>
          </Flex>
        </Center>
      </MotionSipleGrid>
    </Layout>
  );
}
