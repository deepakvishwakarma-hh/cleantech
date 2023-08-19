import {
  Container,
  Center,
  Text,
  Box,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
const HowItWorks = () => {
  return (
    <Box py={["2rem", "2rem", "2rem", "6rem"]} bg={"white"}>
      <Container maxWidth={"container.xl"}>
        <Text
          fontWeight={500}
          fontFamily={"heading"}
          fontSize={["3xl", "4xl", "4xl", "5xl"]}
          textAlign={"center"}
        >
          Benefits of Products
        </Text>

        <Flex
          gap={[10, 10, 10]}
          overflowX={["scroll", "scroll", "scroll", "scroll", "hidden"]}
          justifyContent={"space-between"}
          py={[5, 5, 10, 20]}
        >
          <Element
            title="Effectiveness"
            image="/images/happy.png"
            discription="Swiftly eradicates microorganisms, a highly effective cleaner."
          />
          <Element
            title="Long Lasting Protection"
            image="/images/long-lasting.png"
            discription="Eliminates and maintains effectively with lasting results."
          />
          <Element
            title="Cost Efficient"
            image="/images/cost-effective.png"
            discription="Efficiently eliminates contaminants, saves time and costs"
          />
        </Flex>
        <Divider maxWidth={["100%", "100%", "500px"]} margin={"auto"} />

        <Center flexDirection={"column"} py={10}>
          <Text
            fontWeight={400}
            fontFamily={"heading"}
            fontSize={["2xl", "2xl", "3xl"]}
            textAlign={"center"}
          >
            Let&apos;s get started
          </Text>
          <Link passHref href={"/steps/quiz"}>
            <Button
              px={20}
              py={8}
              fontSize={"xl"}
              variant="takequizsmall"
              mt={10}
            >
              Take the quiz
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
};

export default HowItWorks;

interface Props {
  image: string;
  title: string;
  discription: string;
}

const Element: React.FC<Props> = ({ image, title, discription }) => {
  const responsiveWidth = ["90vw", "372px", "372px"];
  return (
    <Box width={responsiveWidth}>
      <Box
        borderRadius={"100%"}
        width={responsiveWidth}
        height={responsiveWidth}
        bgImage={image}
        bgSize={"cover"}
        bgPosition={"center"}
      ></Box>
      <Text
        textAlign={"center"}
        fontSize={"  lg"}
        letterSpacing={4}
        mt={25}
        mb={3}
      >
        {title}
      </Text>
      <Text
        textAlign={"center"}
        fontSize={["xl", "2xl", "3xl"]}
        fontFamily={"heading"}
      >
        {discription}
      </Text>
    </Box>
  );
};
