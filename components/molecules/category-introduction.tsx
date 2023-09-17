import { Button, Text, Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
interface Props {
  title: string;
  image: string;
  description: string;
  handleNext: () => void;
}

const CategoryIntroduction: React.FC<Props> = ({
  title,
  description,
  handleNext,
  image,
}) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      w={"100%"}
      h={"100vh"}
    >
      <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} h={"full"}>
        <GridItem
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
          position={"relative"}
        >
          <Image
            style={{ objectFit: "cover" }}
            src={`/imgs/${image}`}
            alt={title}
            fill
            quality={50}
          />
        </GridItem>
        <GridItem
          as={Flex}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box maxW={"500px"}>
            <Text
              fontSize={"4xl"}
              textTransform={"capitalize"}
              fontFamily={"heading"}
              textAlign={"center"}
              mb={5}
            >
              {title}
            </Text>
            <Text fontSize={"md"} textAlign={"center"} mb={5}>
              {description}
            </Text>
            <Button
              variant={"unstyled"}
              border={"2px black solid"}
              display={"flex"}
              py={7}
              px={10}
              fontWeight={400}
              borderRadius={"full"}
              textTransform={"capitalize"}
              _hover={{ bg: "black", color: "white" }}
              mx={"auto"}
              onClick={handleNext}
            >
              Next →
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </MotionBox>
  );
};

export default CategoryIntroduction;
