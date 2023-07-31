import { Button, Text, Box, Grid, GridItem, Flex } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  handleNext: () => void;
}

const CategoryIntroduction: React.FC<Props> = ({
  title,
  description,
  handleNext,
}) => {
  return (
    <Box w={"100%"} h={"100vh"}>
      <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} h={"full"}>
        <GridItem
          bgImage={
            "https://images.unsplash.com/photo-1635846650676-55b9ba247172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
          }
        ></GridItem>
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
    </Box>
  );
};

export default CategoryIntroduction;
