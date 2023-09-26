import Link from "next/link";
import { UnderlineOnHoverBAC } from "../atoms/buttons/Underline";
import { Container, Center, Text, Box, Button } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Box
      height={"100vh"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center center"}
      backgroundImage={"/imgs/hero.jpg"}
    >
      <Container
        gap={10}
        pt={"20vh"}
        as={Center}
        flexDirection={"column"}
        maxW={"container.md"}
      >
        <Text
          fontWeight={500}
          color={"white"}
          dropShadow={"2xl"}
          textAlign={"center"}
          fontFamily={"heading"}
          fontSize={["3xl", "4xl", "4xl", "5xl"]}
        >
          VERISAN™ Safe and Proven Disinfectant with Chlorine Dioxide Technology
        </Text>
        <Link passHref href={"/steps/quiz"} prefetch={true}>
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
