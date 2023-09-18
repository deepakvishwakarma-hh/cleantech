import {
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { products } from "../cart/_data";
type Type = (typeof products)[0];

function Product({
  imageUrl,
  currency,
  label,
  price,
  size,
  description,
}: Type) {
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
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Recommended
          </Text>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            {label}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${price}
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

export default Product;
