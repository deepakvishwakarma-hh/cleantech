// //http://localhost:3000/blogs/25052 - test there
import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "~/components/Layout/blog";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

function convertToHumanReadable(timestamp: string) {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleString(undefined, options as any);
}

export default function PostDetails({ post }: any) {
  return (
    <Layout>
      <Box pb={10} pt={5}>
        <Button
          mb={2}
          as={Link}
          href={"/"}
          size={"md"}
          fontSize={15}
          fontWeight={400}
          variant={"unstyled"}
          display={"inline-flex"}
          leftIcon={<HiOutlineChevronLeft />}
        >
          Back to home
        </Button>

        <Heading
          mb={5}
          maxW={"4xl"}
          fontWeight={500}
          fontFamily={"heading"}
          dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
        />
        <Text mb={4} textTransform={"uppercase"} letterSpacing={"1px"}>
          Published On {convertToHumanReadable(post?.date)}
        </Text>
      </Box>

      <div
        className="blog-content-wrapper"
        dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const postResponse = await fetch(
    `https://cleansolutions.tech/wp-json/wp/v2/posts/${slug}?_embed`
  );
  const post = await postResponse.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await fetch(
    "https://cleansolutions.tech/wp-json/wp/v2/posts?_fields=id"
  );
  const postsData = await posts.json();
  const paths = postsData.map((post: any) => ({
    params: {
      slug: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

// import React from "react";

// export default function Hello() {
//   return <div>Hello</div>;
// }
