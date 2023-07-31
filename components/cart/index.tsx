import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Container,
  Text,
  Grid,
  GridItem,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";

export const Cart = () => (
  <Grid
    templateColumns={["100%", "100%", "100%", "3fr 1fr"]}
    bg="#FBF5F0"
    w={"full"}
    minH={"100vh"}
  >
    <GridItem pt={"5rem"} px={10}>
      <Text fontSize={"3xl"} fontFamily={"heading"} mb={10}>
        Shopping Cart
      </Text>
      <Flex flexDir={"column"} gap={5}>
        {cartData.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Flex>
    </GridItem>
    <GridItem minW={["auto", "auto", "auto", "400px"]} bg={"white"} pt={"5rem"}>
      <CartOrderSummary />
    </GridItem>
  </Grid>
);
