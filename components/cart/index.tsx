import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Container,
  Text,
  Grid,
  GridItem,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import Link from "next/link";
import { useCart } from "~/hooks/useCart";

import { Button } from "@chakra-ui/react";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <Grid
      templateColumns={["100%", "100%", "100%", "3fr 1fr"]}
      bg="#FBF5F0"
      w={"full"}
      minH={"100vh"}
    >
      <GridItem pt={"5rem"} pb={["5rem", "5rem", "5rem", 0]} px={10}>
        <Text fontSize={"3xl"} fontFamily={"heading"} mb={10}>
          Shopping Cart
        </Text>
        <Flex flexDir={"column"} gap={5}>
          {cart.items.map((item) => (
            <CartItem key={item.product.id} {...item} />
          ))}

          {cart.items.length == 0 && (
            <Box
              p={5}
              maxW={"500px"}
              rounded={"md"}
              border="1px lightgray solid"
            >
              <Text fontFamily={"heading"} fontSize={"xl"}>
                You have no items in your cart Browse all products
              </Text>
              <Button
                mt={3}
                as={Link}
                href="/products"
                fontSize={"1rem"}
                variant={"takequizsmall"}
              >
                Browse all products
              </Button>
            </Box>
          )}
        </Flex>
      </GridItem>
      <GridItem
        minW={["auto", "auto", "auto", "400px"]}
        bg={"white"}
        pt={"5rem"}
      >
        <CartOrderSummary />
      </GridItem>
    </Grid>
  );
};
