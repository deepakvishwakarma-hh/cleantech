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
import Image from "next/image";
import { useRouter } from "next/router";
import useQuiz from "~/hooks/useQuiz";
import Layout from "~/components/Layout/step";
import categories from "~/quiz/categories.json";
import { StoragePathGeneration } from "~/lib/functions";
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
    // path generation
    const STG = StoragePathGeneration(selected);
    // store selected categories by user
    quiz.select([...selected]);
    // store generated path
    quiz.path(STG);

    // push to question with query parameters
    router.push({
      pathname: "question",
      query: {
        idx: 0,
        itd: true,
        cpd: false,
        ctgr: selected.at(0),
      },
    });
  };

  return (
    <Layout previous="usage">
      <Box bg="lightblue" width={"100%"} minH={"100vh"}>
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

            <SimpleGrid columns={[1, 1, 2, 3, 4]} gap={5} px={5}>
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

import icons from "../../quiz/categories-with-logo.json";

const Boxes = ({ title, onClick, selected }: any) => {
  const iconUrl = `/sub/${(icons as any)[title]}`;
  return (
    <Grid
      background={selected ? "primary" : "white"}
      color={selected ? "white" : "black"}
      cursor={"pointer"}
      rounded={"full"}
      onClick={onClick}
      templateColumns={"30px auto"}
      gap={2}
      alignItems={"center"}
      px={5}
      py={2}
    >
      <GridItem>
        <Image
          style={{ marginBottom: "0px" }}
          src={iconUrl}
          alt={iconUrl}
          width={50}
          height={50}
        />
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
