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
        <Box
          backgroundImage={
            "/imgs/1. Civilian Use and Residential Applications (2).jpg"
          }
        ></Box>
        <Center bg="#FEF4EC">
          <Flex maxW={"400px"} flexDir={"column"} alignItems={"center"} gap={5}>
            <Text
              fontSize={["3xl", "3xl", "4xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
            >
              Tell us about yourself
            </Text>
            <Text fontSize={"md"} fontFamily={"heading"} textAlign={"center"}>
              We’ll get to know you and personalize an effective plan for your
              body, lifestyle, and goals.
            </Text>
            <Button
              onClick={handleClickNext}
              px={20}
              py={8}
              fontSize={"xl"}
              variant="takequizsmall"
              mt={2}
            >
              Begin quiz{" "}
            </Button>
          </Flex>
        </Center>
      </MotionSipleGrid>
    </Layout>
  );
}
