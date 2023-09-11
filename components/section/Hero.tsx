import { UnderlineOnHoverBAC } from "../atoms/buttons/Underline";
import { Container, Center, Text, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
const Hero = () => {
  return (
    <Box
      height={"100vh"}
      bgPosition={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      backgroundImage={"/imgs/surface-clean.png"}
    >
      <Container
        pt={"20vh"}
        as={Center}
        flexDirection={"column"}
        maxW={"container.md"}
        gap={10}
      >
        <Text
          fontWeight={500}
          fontFamily={"heading"}
          fontSize={["3xl", "4xl", "4xl", "5xl"]}
          textAlign={"center"}
          color={"white"}
          dropShadow={"2xl"}
        >
          <Text display={"inline"} color={"#9f7200"}>
            VERISAN™
          </Text>{" "}
          Safe and Proven Disinfectant with Chlorine Dioxide Technology
        </Text>
        <Link passHref href={"/steps/quiz"}>
          <Button px={20} py={8} fontSize={"xl"} variant="takequizsmall" ml={2}>
            Take the quiz
          </Button>
        </Link>
        <Link passHref href={"/products"}>
          <UnderlineOnHoverBAC color={"white"} fontSize={["md", "lg"]}>
            Browse all products
          </UnderlineOnHoverBAC>
        </Link>
      </Container>
    </Box>
  );
};

export default Hero;
