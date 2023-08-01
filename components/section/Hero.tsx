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
      backgroundImage={
        "https://images.unsplash.com/photo-1603248322878-f0e0ac378588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
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
        >
          VERISAN™ Safe and Proven Disinfectant with Chlorine Dioxide Technology
        </Text>
        <Link passHref href={"/steps/quiz"}>
          <Button px={20} py={8} fontSize={"xl"} variant="takequizsmall" ml={2}>
            Take the quiz{" "}
          </Button>
        </Link>
        <UnderlineOnHoverBAC color={"white"} fontSize={["md", "lg"]}>
          Browse all products
        </UnderlineOnHoverBAC>
      </Container>
    </Box>
  );
};

export default Hero;
