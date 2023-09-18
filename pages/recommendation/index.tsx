import Hero from "~/components/section/RecommendationHero";
import {
  Box,
  GridItem,
  Text,
  Container,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

import Blogs from "~/components/section/Blogs";

import Product from "~/components/atoms/Product";
import Aspect from "~/theme/aspects";
import Link from "next/link";
import Logo from "~/components/atoms/Logo";
import Footer from "~/components/Layout/secondary/footer";
import { PostsInterFace } from "types/blogs";
import { products } from "~/components/cart/_data";
import { shuffleAndSelectProducts } from "utils";

export default function Recommendation({ posts }: { posts: PostsInterFace[] }) {
  const responsiveHeight = [
    Aspect.mobile.layout.header.height,
    Aspect.mobile.layout.header.height,
    Aspect.desktop.layout.header.height,
  ];
  return (
    <>
      <Center
        top={0}
        left={0}
        width={"100%"}
        position={"absolute"}
        height={responsiveHeight}
      >
        <Link href="/">
          <Logo />
        </Link>
      </Center>

      <Hero />

      <Box background={"#FDF9F7"}>
        <Container maxW={"8xl"}>
          <Text
            fontSize={"2xl"}
            fontFamily={"heading"}
            pt={10}
            pb={5}
            fontWeight={500}
          >
            Recommended Products
          </Text>
          <GridItem
            as={SimpleGrid}
            columns={[1, 1, 2, 3, 4]}
            flexWrap={"wrap"}
            gap={5}
          >
            {shuffleAndSelectProducts(products, 4).map((pro, i) => (
              <Product description={""} {...pro} key={i} />
            ))}
            {/*            
            <Product />

            <Product />
            <Product /> */}
          </GridItem>
        </Container>
      </Box>
      <Blogs posts={posts} />
      <Footer />
    </>
  );
}

{
  /* <Container
        top={0}
        as={Flex}
        maxWidth={""}
        left={0}
        zIndex={999}
        width={"100%"}
        position={"absolute"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        pointerEvents={"none"}
        height={responsiveHeight}
      ></Container> */
}

export const getStaticProps = async () => {
  const posts = await fetch(
    "https://customcleansolutions.com/wp-json/wp/v2/posts?&_embed=wp:featuredmedia&_fields=title,_links,_embedded,excerpt,id"
  );
  const AllPosts = await posts.json();
  return { props: { posts: AllPosts } };
};
