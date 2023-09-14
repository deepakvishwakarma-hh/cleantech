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

export const ProductCard = ({ product }: any) => {
  const imageUrl = product._embedded["wp:featuredmedia"][0].source_url;
  const imageWidth =
    product._embedded["wp:featuredmedia"][0].media_details.width;
  const productName = product.title.rendered;
  const productDescription = product.excerpt.rendered;
  const productPrice = 99;

  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <AddToWishlistButton product={product} />
      <CardBody>
        <Link href={`/products/${product.slug}`}>
          <Box
            bg={`center / contain no-repeat url(${imageUrl})`}
            borderRadius="lg"
            boxSize="200px"
            mx="auto"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{getSubstring(productName, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">$ </Text>
              <Text fontSize="lg">{productPrice}</Text>
            </Flex>
          </Flex>
          <Text
            fontSize="sm"
            dangerouslySetInnerHTML={{
              __html:
                getSubstring(productDescription, 30) ||
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
