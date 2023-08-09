import { GetStaticProps } from "next";
import React from "react";

export default function PostDetails({ post }: any) {
  return <div>{JSON.stringify(post)}</div>;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const postResponse = await fetch(
    `https://customcleansolutions.com/wp-json/wp/v2/posts/${slug}?_embed`
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
    "https://customcleansolutions.com/wp-json/wp/v2/posts?_fields=id"
  );
  const postsData = await posts.json();

  const paths = postsData.map((post: any) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};
