import React from "react";
import { Text, Flex, Container } from "@chakra-ui/react";
import Layout from "~/components/Layout/main";
import { ProductCard } from "~/components/atoms/Card/Product";
import { products } from "~/components/cart/_data";
export default function Products() {
  return (
    <Layout>
      <Container
        bg={"lightblue"}
        pt={["2rem", "2rem", "20vh"]}
        maxW={""}
        px={["2rem", "2rem", "5rem"]}
        gap={10}
      >
        <Flex
          mb={2}
          flexDirection={["column", "column", "column", "row"]}
          alignItems={["start", "start", "start", "center"]}
          borderBottom={"2px gray solid"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={["30px", "30px", "40px", "80px"]}
            fontFamily={"heading"}
          >
            Shop all
          </Text>
          <Text
            maxW={"sm"}
            fontSize={["18px", "18px", "18px", "24px"]}
            fontFamily={"heading"}
          >
            Full assortment of vitamins and supplements to support all your
            health needs.
          </Text>
        </Flex>
        <Flex flexWrap={"wrap"} gap={5}></Flex>

        <Flex flexWrap={"wrap"}>
          {products.map((product, index) => {
            // Rendering the Product component with the image URL and width
            return <ProductCard key={index} product={product} />;
          })}
        </Flex>
      </Container>
    </Layout>
  );
}
