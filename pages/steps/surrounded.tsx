import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center } from "@chakra-ui/react";
import { localstorage, useLocalStorage } from "~/lib/localstorage";
import { Button } from "@chakra-ui/react";

import { useState } from "react";

export default function SurroundedProducts() {
  const [index, setIndex] = useState(0);
  const [selectedItems, setSeletedItems] = useState<string[]>([]);

  const router = useRouter();
  const MotionBox = motion(Box);
  const [_, setStorage]: any = useLocalStorage(localstorage);

  const handleBack = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      router.push("email");
    }
  };
  const handleNext = () => {
    if (index !== 2) {
      setIndex(index + 1);
    } else {
      setStorage((prev: any) => {
        return { ...prev, surrounded: selectedItems };
      });
      router.push("usage");
    }
  };
  return (
    <Layout previous="welcome">
      <MotionBox bg="#FEF4EC" width={"100%"} height={"100vh"}>
        <Center height={"90%"}>
          <Flex maxW={"700px"} flexDir={"column"} alignItems={"center"} gap={2}>
            <Text
              fontSize={["3xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
            >
              How many products do you typically keep around?
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

            <Flex flexWrap={"wrap"} gap={2} justifyContent={"center"} px={5}>
              {cleaningProducts.at(index)?.map((name) => (
                <Button
                  px={5}
                  py={1}
                  key={name}
                  blockSize="auto"
                  display={"flex"}
                  fontWeight={400}
                  whiteSpace="normal"
                  variant={"unstyled"}
                  border={"1.5px lightgray solid"}
                  textTransform={"capitalize"}
                  fontSize={"18px"}
                  w={["full", "full", "full", "auto"]}
                  sx={
                    selectedItems.includes(name)
                      ? { bg: "black", color: "white" }
                      : undefined
                  }
                  borderRadius={["md", "md", "md", "full"]}
                  flexDir={["column", "column", "column", "row"]}
                  onClick={() => {
                    if (!selectedItems.includes(name)) {
                      setSeletedItems([...selectedItems, name]);
                    } else {
                      setSeletedItems([
                        ...selectedItems.filter((n) => n !== name),
                      ]);
                    }
                  }}
                >
                  {name}
                </Button>
              ))}
            </Flex>
            <Flex gap={2} mt={5}>
              <Button
                _hover={{
                  bg: "#00000033",
                }}
                onClick={handleBack}
                bg="none"
              >
                <FiChevronLeft size={20} />
              </Button>
              <Flex gap={3} alignItems={"center"} px={2}>
                {[1, 2, 3].map((i) => (
                  <Button
                    size={"sm"}
                    bg={index + 1 == i ? "#00000033" : "none"}
                    rounded={"full"}
                    onClick={() => {
                      setIndex(i - 1);
                    }}
                    key={i}
                  >
                    {i}
                  </Button>
                ))}
              </Flex>
              <Button
                _hover={{
                  bg: "#00000033",
                }}
                onClick={handleNext}
                bg="none"
              >
                <FiChevronRight size={20} />
              </Button>
            </Flex>
          </Flex>
        </Center>
      </MotionBox>
    </Layout>
  );
}

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const cleaningProducts = [
  [
    "Ammonia",
    "Chlorine bleach",
    "Isopropyl alcohol",
    "Room deodorizer",
    "Soft surface cleaner",
    "Spray disinfectant",
    "Vinegar",
  ],
  [
    "Aerosol foam spray",
    "Air freshener",
    "Carpet deodorizer",
    "Floor cleaner",
    "Food contact surface cleaner",
    "Fruit and vegetable wash",
    "Pet or Litter Deodorizer",
  ],
  [
    "Antiseptic wash",
    "Body Deodorant",
    "Drinking Water Treatment",
    "Hand sanitizer",
    "Hydrogen peroxide",
    "Mouthwash",
    "Topical skin treatments",
    "Fungicide (Mold deactivator)",
    "Preventative Plant spray",
    "Insecticide",
    "Insect repellent",
    "Virucide",
  ],
];
