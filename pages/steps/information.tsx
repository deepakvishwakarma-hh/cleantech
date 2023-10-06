import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { useLocalStorage } from "@mantine/hooks";
import { localstorage } from "~/lib/localstorage";
import { Text, Flex, Box, Center } from "@chakra-ui/react";

export default function Information() {
  const router = useRouter();
  const MotionBox = motion(Box);
  const [storage] = useLocalStorage(localstorage);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("annual-spent");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <Layout previous="surrounded">
      <MotionBox bg="lightblue" width={"100%"} height={"100vh"}>
        <Center height={"90%"}>
          <Flex flexDir={"column"} alignItems={"center"} gap={2}>
            <Text
              fontSize={["3xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
            >
              Eco-friendly and Affordable
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
                We want you to know that Clean Solutions is committed to
                reducing our environmental footprint. We eliminate more than 98%
                of petroleum plastics and shipping costs that buying gallons of
                conventional disinfectant would produce. Also, with each
                purchase, we donate to contribute to oceanic rehabilitation.
                Enjoy the only disinfectant you&apos;ll ever need. Our products
                typically cost 80% less than other leading brands.
              </Text>
            </Box>
          </Flex>
        </Center>
      </MotionBox>
    </Layout>
  );
}
