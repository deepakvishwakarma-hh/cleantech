import {
  Button,
  Text,
  Flex,
  Box,
  Center,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import useQuiz from "~/hooks/useQuiz";
import Layout from "~/components/Layout/step";
import categories from "~/quiz/categories.json";
import { localstorage, useLocalStorage } from "~/lib/localstorage";

const CategorySelection = () => {
  const quiz = useQuiz();
  const router = useRouter();
  const [storage] = useLocalStorage(localstorage);
  const [selected, setSelected] = useState<string[]>([]);
  const category = (categories as any)[(storage as any).usage as string];

  // this is for options
  const onClick = (title: string) => {
    if (selected.includes(title)) {
      setSelected((prev) => prev.filter((item) => item !== title));
    } else {
      setSelected((prev) => [...prev, title]);
    }
  };

  const handleSubmit = () => {
    quiz.select([...selected, "additional"]);
    router.push("question");
  };

  return (
    <Layout previous="usage">
      <Box bg="#FEF4EC" width={"100%"} minH={"100vh"}>
        <Center pt={"10rem"}>
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            gap={2}
            maxW={"1500px"}
          >
            <Text
              px={[2, 2, 1, 0]}
              fontSize={["2xl", "2xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
              mb={5}
            >
              Select an Application Category
            </Text>

            <SimpleGrid columns={[1, 1, 2, 4]} gap={5} px={5}>
              {category.map((title: string, index: number) => (
                <Boxes
                  key={index}
                  title={title}
                  selected={selected.includes(title)}
                  onClick={() => onClick(title)}
                />
              ))}
            </SimpleGrid>

            <Button
              isDisabled={!selected.length}
              onClick={handleSubmit}
              my={"3.5em"}
              mx={"auto"}
              px={20}
              py={8}
              fontSize={"xl"}
              variant="takequizsmall"
            >
              Next{" "}
            </Button>
          </Flex>
        </Center>
      </Box>
    </Layout>
  );
};

export default CategorySelection;

const Boxes = ({ title, onClick, selected }: any) => {
  return (
    <Grid
      cursor={"pointer"}
      rounded={"full"}
      onClick={onClick}
      templateColumns={"30px auto"}
      gap={2}
      alignItems={"center"}
      bg={"white"}
      p={2}
    >
      <GridItem as={Center}>
        <Box
          width={5}
          height={5}
          background={!selected ? "gray.100" : "gray.900"}
          rounded={"full"}
        ></Box>
      </GridItem>

      <GridItem>
        <Text
          textTransform={"capitalize"}
          fontSize={"lg"}
          fontFamily={"body"}
          pr={1}
        >
          {title}
        </Text>
      </GridItem>
    </Grid>
  );
};
