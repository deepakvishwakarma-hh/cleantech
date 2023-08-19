import React from "react";

export default function Products({ products }: any) {
  return <div>{JSON.stringify(products)}</div>;
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://customcleansolutions.com/wp-json/wp/v2/product?&_embed=wp:featuredmedia"
  );
  const AllProducts = await res.json();
  return { props: { products: AllProducts } };
};
