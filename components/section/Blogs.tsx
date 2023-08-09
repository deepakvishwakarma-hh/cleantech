interface Props {
  title: string;
  description: string;
  image: string;
  slug: string;
}

import { Button, Container, Divider, SimpleGrid } from "@chakra-ui/react";

import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { PostsInterFace } from "types/blogs";

const Blogs = ({ posts }: { posts: PostsInterFace[] }) => {
  console.log(posts);
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
          {posts.map((data, index) => (
            <Blog {...data} key={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Blogs;

const Blog = ({ title, _embedded, excerpt }: PostsInterFace) => {
  const paragraph = excerpt.rendered.replace("[&#8230;]", "...");
  return (
    <Grid
      templateColumns={["auto", "auto", "auto", "1fr 2fr"]}
      background={"white"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <GridItem>
        <Image
          src={_embedded?.["wp:featuredmedia"][0].link}
          alt={title.rendered}
        />
      </GridItem>
      <GridItem display={"flex"} flexDir={"column"} p={5}>
        <Text fontSize={"2xl"} mb={5} fontWeight={500} fontFamily={"heading"}>
          {title.rendered}
        </Text>
        <Text
          fontSize={"sm"}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></Text>
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
