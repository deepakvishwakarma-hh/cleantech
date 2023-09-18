import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Container,
  Stack,
  Image,
  useColorModeValue,
  Heading,
  NumberIncrementStepperProps,
} from "@chakra-ui/react";
import Layout from "~/components/Layout/main";
import { ProductCard } from "~/components/atoms/Card/Product";
import { products } from "~/components/cart/_data";
export default function Products() {
  console.log(products);
  return (
    <Layout>
      <Container pt={"20vh"} maxW={""} px={"5rem"} gap={10}>
        <Flex
          mb={2}
          alignItems={"center"}
          borderBottom={"2px gray solid"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"80px"} fontFamily={"heading"}>
            Shop all
          </Text>
          <Text maxW={"sm"} fontSize={"24px"} fontFamily={"heading"}>
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

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://customcleansolutions.com/wp-json/wp/v2/product?&_embed=wp:featuredmedia"
//   );
//   const AllProducts = await res.json();
//   return { props: { products: AllProducts } };
// };

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

function Product({ title, imageUrl, price }: any) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={imageUrl}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          {/* <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Recommended
          </Text> */}
          <Heading
            fontSize={"xl"}
            textAlign={"center"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
