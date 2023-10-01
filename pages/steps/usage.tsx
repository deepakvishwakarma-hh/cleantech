/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center, SimpleGrid } from "@chakra-ui/react";
import { localstorage, useLocalStorage } from "~/lib/localstorage";

export const usage__data = [
  {
    alt: "alt",
    name: "low",
    title: "Civilian Use and Residential Applications",
    discription: "Home and Garden",
    src: "/icons/1.civilian_use_and_residential_applications__home_and_garden.png",
  },
  {
    alt: "alt",
    name: "medium",
    title: "Commercial and Retail Applications ",
    discription: "At Work and for use in Public Spaces",
    src: "/icons/10-Commercial-and-Retail-Applications--At-Work-and-for-use-in-Public-Spaces-.png",
  },
  {
    alt: "alt",
    name: "high",
    title: "Professional and Industrial Application",
    discription:
      "Large-Scale Operations or Fields That Require Special Licensing",
    src: "/icons/27-Other-Industrial-Processes--Miscellaneous-.png",
  },
];

export default function Usage() {
  const router = useRouter();
  const [storage, setStorage] = useLocalStorage(localstorage);
  const handleClick = (usage: string) => {
    setStorage((prev: any) => {
      return { ...prev, usage };
    });
    router.push("ctgr-selection");
  };

  return (
    <Layout previous="annual-spent">
      <Box bg="lightblue" width={"100%"} minH={"100vh"}>
        <Center minH={"650px"} h={"100vh"}>
          <Flex
            gap={2}
            maxW={"1000px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              px={[2, 2, 1, 0]}
              fontSize={["2xl", "2xl", "3xl", "4xl"]}
              fontFamily={"heading"}
              textAlign={"center"}
              mb={5}
            >
              Select your usage so that we can design your further process
              accordingly
            </Text>
            <SimpleGrid
              width={"full"}
              p={[2, 2, 0]}
              gap={10}
              height={["auto", "auto", "350px"]}
              columns={[1, 1, 3]}
            >
              {usage__data.map((data, i) => (
                <Boxes
                  key={i}
                  {...data}
                  selected={
                    data.title ===
                    (storage as (typeof localstorage)["defaultValue"]).usage
                  }
                  onclick={() => {
                    handleClick(data.name);
                  }}
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Center>
      </Box>
    </Layout>
  );
}

const Boxes = ({
  src,
  alt,
  title,
  discription,
  selected,
  onclick,
}: {
  src: string;
  alt: string;
  title: string;
  discription: string;
  selected: boolean;
  onclick: any;
}) => {
  return (
    <Flex
      border={selected ? "2px black solid" : "2px white solid"}
      onClick={onclick}
      flexDirection={["row", "row", "column"]}
      bg="white"
      rounded={"md"}
      padding={[2, 2, 10]}
    >
      <Center w={["100px", "100px", "auto"]} height={["100%", "100%", "50%"]}>
        <img alt={alt} src={src} style={{ margin: "auto" }} />
      </Center>
      <Center
        alignItems={["start", "start", "center"]}
        height={["100%", "100%", "50%"]}
        flexDirection="column"
        gap={[0, 0, 2]}
      >
        <Text
          textTransform={"capitalize"}
          fontSize={["lg", "lg", "xl"]}
          textAlign={["left", "left", "center"]}
          fontFamily={"body"}
        >
          {title}
        </Text>
        <Text
          fontSize={["sm", "sm", "md"]}
          textAlign={["left", "left", "center"]}
          fontFamily={"heading"}
        >
          {discription}
        </Text>
      </Center>
    </Flex>
  );
};
