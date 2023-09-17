import { Button, Text, Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
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
  const [isLoading, setLoading] = useState(true);
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
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "87.5%",
            }}
          >
            <Image
              alt=""
              src={`/imgs/${image}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 700ms ease-in-out",
                filter: isLoading
                  ? "blur(16px) grayscale(100%)"
                  : "blur(0) grayscale(0)",
              }}
              onLoad={() => setLoading(false)}
              fill
            />
          </div>

          {/* <Image
            style={{ objectFit: "cover" }}
            src={`/imgs/${image}`}
            alt={title}
            fill
            quality={50}
            className={`
              duration-700 ease-in-out group-hover:opacity-75 w-full h-full
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
            onLoadingComplete={() => setLoading(false)}
          /> */}
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
