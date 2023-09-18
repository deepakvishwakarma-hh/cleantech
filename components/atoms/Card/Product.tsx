"use client";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { AddToCartButton } from "../buttons/AddToCartButton";
import { Rating } from "./Rating";
import { AddToWishlistButton } from "../buttons/AddToWishlistButton";
import { getSubstring } from "utils";
import { products } from "~/components/cart/_data";
type Type = (typeof products)[0];
export const ProductCard = ({ product }: { product: Type }) => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <AddToWishlistButton product={product} />
      <CardBody>
        <Link href={`/products/`}>
          <Box
            bg={`center / contain no-repeat url(${product.imageUrl})`}
            borderRadius="lg"
            boxSize="200px"
            mx="auto"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products`}>
              <Heading size="sm">{getSubstring(product.label, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">$ </Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text
            fontSize="sm"
            dangerouslySetInnerHTML={{
              __html:
                getSubstring(product.description, 30) ||
                "Provides impact-resistant c...",
            }}
          ></Text>
          <Rating
            rating={{
              count: 100,
              rate: 5,
            }}
          />

          <AddToCartButton product={product} />
        </Stack>
      </CardBody>
    </Card>
  );
};
