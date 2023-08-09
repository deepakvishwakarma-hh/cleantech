interface Props {
  title: string;
  description: string;
  image: string;
  slug: string;
}

import { Button, Container, Divider, SimpleGrid } from "@chakra-ui/react";

import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";

const Blogs = () => {
  return (
    <Box background={"#FDF9F7"}>
      <Container maxW={"8xl"}>
        <Text
          fontSize={"2xl"}
          fontFamily={"heading"}
          pt={5}
          pb={10}
          fontWeight={500}
        >
          Recommended Blogs
        </Text>

        <SimpleGrid gap={5}>
          {blogData.map((data) => (
            <Blog {...data} key={data.title} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Blogs;

const Blog = ({ title, description, image, slug }: Props) => {
  return (
    <Grid
      templateColumns={["auto", "auto", "auto", "1fr 2fr"]}
      background={"white"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <GridItem>
        <Image src={image} alt={title} />
      </GridItem>
      <GridItem display={"flex"} flexDir={"column"} p={5}>
        <Text fontSize={"2xl"} mb={5} fontWeight={500} fontFamily={"heading"}>
          {title}
        </Text>
        <Text fontSize={"sm"}>{description}</Text>
        <Box mt={[5, 5, 5, "auto"]}>
          <Button
            px={8}
            py={5}
            size={"sm"}
            rounded={"full"}
            variant={"unstyle"}
            border={"1px black solid"}
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            Read More
          </Button>
        </Box>
      </GridItem>
    </Grid>
  );
};

const blogData = [
  {
    title: "10 Tips for Healthy Eating",
    description:
      "Discover some essential tips for maintaining a balanced and healthy diet. Learn about the importance of nutrient-rich foods, portion control, and mindful eating.",
    image:
      "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    slug: "10-tips-for-healthy-eating",
  },
  {
    title: "Exploring the Wonders of Nature",
    description:
      "Embark on a journey to explore the beauty and mysteries of the natural world. From lush forests to breathtaking mountains, immerse yourself in the awe-inspiring landscapes that our planet has to offer.",
    image:
      "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    slug: "exploring-the-wonders-of-nature",
  },
  {
    title: "Mastering the Art of Photography",
    description:
      "Learn the basics of photography and take your skills to the next level. Whether you're using a smartphone or a professional camera, discover techniques to capture stunning images and tell visual stories.",
    image:
      "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    slug: "mastering-the-art-of-photography",
  },
  {
    title: "Traveling on a Budget: Your Ultimate Guide",
    description:
      "Discover how to travel and experience new places without breaking the bank. Uncover money-saving tips for flights, accommodations, and activities, making your dream adventures a reality.",
    image:
      "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    slug: "traveling-on-a-budget-guide",
  },
  {
    title: "The Importance of Mental Health",
    description:
      "Explore the significance of mental health and ways to maintain a positive mindset. From self-care practices to seeking professional support, prioritize your mental well-being and lead a fulfilling life.",
    image:
      "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    slug: "importance-of-mental-health",
  },
];
