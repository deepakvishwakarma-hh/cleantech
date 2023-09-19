/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center, SimpleGrid, Button } from "@chakra-ui/react";
import { localstorage, useLocalStorage } from "~/lib/localstorage";

const __data = [
  {
    name: "$20 - $50",
    value: "3ml",
  },
  {
    name: "$50 - $100",
    value: "15ml",
  },
  {
    name: "$100 - $200",
    value: "30ml",
  },
  {
    name: "$200 - $500",
    value: "250ml",
  },
  {
    name: "$500 - $1000",
    value: "32oz",
  },
];

export default function AnnualSpent() {
  const router = useRouter();
  const [storage, setStorage]: any = useLocalStorage(localstorage);

  return (
    <Layout previous="surrounded">
      <Box bg="#FEF4EC" width={"100%"} minH={"100vh"}>
        <Center minH={"650px"} h={"100vh"}>
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            gap={2}
            maxW={"1000px"}
          >
            <Text
              px={[2, 2, 1, 0]}
              fontSize={["2xl", "2xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
              mb={5}
            >
              How much are you typically spending on these products annually?
            </Text>
            <Flex
              gap={3}
              flexWrap={"wrap"}
              justifyContent={"center"}
              px={5}
              alignItems={"center"}
              maxW={"3xl"}
            >
              {__data.map((item) => (
                <Button
                  px={10}
                  blockSize="auto"
                  display={"flex"}
                  fontWeight={400}
                  py={2}
                  whiteSpace="normal"
                  variant={"unstyled"}
                  border={"2px black solid"}
                  textTransform={"capitalize"}
                  fontSize={["md", "md", "md", "xl"]}
                  w={["full", "full", "full", "auto"]}
                  _hover={{ bg: "black", color: "white" }}
                  borderRadius={["md", "md", "md", "full"]}
                  flexDir={["column", "column", "column", "row"]}
                  outline={
                    storage.annualSpent == item.name
                      ? "2px solid blue"
                      : undefined
                  }
                  key={item.name}
                  onClick={() => {
                    setStorage({ ...storage, annualSpent: item.name });
                    router.push("usage");
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Center>
      </Box>
    </Layout>
  );
}
