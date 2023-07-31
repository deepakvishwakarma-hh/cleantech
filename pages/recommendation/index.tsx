import Hero from "~/components/section/RecommendationHero";
import { Box, Grid, GridItem, Text, Flex, Container } from "@chakra-ui/react";

import Aspect from "~/theme/aspects";
import Link from "next/link";
import Logo from "~/components/atoms/Logo";
import Footer from "~/components/Layout/secondary/footer";

export default function Recommendation() {
  const responsiveHeight = [
    Aspect.mobile.layout.header.height,
    Aspect.mobile.layout.header.height,
    Aspect.desktop.layout.header.height,
  ];
  return (
    <>
      <Center
        top={0}
        left={0}
        width={"100%"}
        position={"absolute"}
        height={responsiveHeight}
      >
        <Link href="/">
          <Logo />
        </Link>
      </Center>

      <Container
        top={0}
        as={Flex}
        maxWidth={""}
        left={0}
        zIndex={999}
        width={"100%"}
        position={"absolute"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        pointerEvents={"none"}
        height={responsiveHeight}
      ></Container>
      <Hero />

      <Grid
        background={"#FDF9F7"}
        templateColumns={["1fr", "1fr", "1fr", "1fr 3fr"]}
        p={5}
        gap={5}
        px={10}
      >
        <GridItem>
          <Text as={"h1"} fontFamily={"heading"} fontSize={"2xl"} mb={2}>
            Our Products
          </Text>
          <Text fontFamily={"body"}>
            Nutrient-rich powders to target your health goals and diet gaps as
            needed.
          </Text>
        </GridItem>
        <GridItem as={Flex} flexWrap={"wrap"} gap={5}>
          <Product />
          <Product />
          <Product />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}

import {
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
function Product() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Recommended
          </Text>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
