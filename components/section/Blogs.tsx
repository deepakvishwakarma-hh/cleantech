import {
  Button,
  Container,
  SimpleGrid,
  Box,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import { PostsInterFace } from "types/blogs";

const Blogs = ({ posts }: { posts: PostsInterFace[] }) => {
  return (
    <Box background={"#FDF9F7"}>
      <Container maxW={"8xl"}>
        <Text
          pt={5}
          pb={10}
          fontSize={"2xl"}
          fontWeight={500}
          fontFamily={"heading"}
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

const Blog = ({ title, _embedded, excerpt, id }: PostsInterFace) => {
  const paragraph = excerpt.rendered.replace("[&#8230;]", "...");
  return (
    <Grid
      rounded={"md"}
      background={"white"}
      templateColumns={["auto", "auto", "auto", "1fr 2fr"]}
      overflow={"hidden"}
    >
      <GridItem minH={"250px"} position={"relative"}>
        {/* Aspect ratio is not fit on all responsive breakpoints */}
        <Image
          fill
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
            py={5}
            px={8}
            as={Link}
            size={"sm"}
            rounded={"full"}
            variant={"unstyle"}
            href={`/blogs/${id}`}
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
