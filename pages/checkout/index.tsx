import {
  Box,
  Text,
  Input,
  Stack,
  Select,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormHelperText,
  Flex,
  Grid,
  Container,
  Link,
  useColorModeValue as mode,
  Button,
} from "@chakra-ui/react";
import Layout from "~/components/Layout/step";

export default function Checkout() {
  return (
    <Layout previous="/">
      <Container maxW={"8xl"} pt={"5rem"}>
        <Grid templateColumns={["100%", "100%", "100%", "2fr 1fr"]}>
          <Box p={5}>
            <Text
              fontSize={"3xl"}
              fontFamily={"heading"}
              fontWeight={500}
              mb={5}
            >
              Delivery Information
            </Text>

            <SimpleGrid columns={[1, 1, 2]} gap={5}>
              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Firstname
                </FormLabel>
                <Input size={"lg"} type="email" />
              </FormControl>

              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Lastname
                </FormLabel>
                <Input size={"lg"} type="email" />
              </FormControl>

              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Address Line 1
                </FormLabel>
                <Input size={"lg"} type="email" />
              </FormControl>

              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Address Line 2
                </FormLabel>
                <Input size={"lg"} type="email" />
              </FormControl>
            </SimpleGrid>

            <FormControl my={5}>
              <FormLabel
                color="gray.500"
                textTransform={"uppercase"}
                letterSpacing={1}
                fontSize={"sm"}
              >
                City
              </FormLabel>
              <Input size={"lg"} type="email" />
            </FormControl>

            <SimpleGrid columns={[1, 1, 2, 3]} gap={5}>
              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Country
                </FormLabel>
                <Select size={"lg"} placeholder="Select Country">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  State
                </FormLabel>
                <Select size={"lg"} placeholder="Select Country">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Zip
                </FormLabel>
                <Input size={"lg"} type="email" />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={[1, 1, 2]} gap={5} my={5}>
              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Email
                </FormLabel>
                <Input size={"lg"} type="email" />
              </FormControl>

              <FormControl>
                <FormLabel
                  color="gray.500"
                  textTransform={"uppercase"}
                  letterSpacing={1}
                  fontSize={"sm"}
                >
                  Phone number
                </FormLabel>
                <Input size={"lg"} type="email" />
              </FormControl>
            </SimpleGrid>
          </Box>

          <Box>
            <Stack spacing="8" rounded="lg" padding="8" width="full">
              <Text
                fontSize={"2xl"}
                fontWeight={"medium"}
                fontFamily={"heading"}
                mb={10}
              >
                Order Details
              </Text>

              <Stack spacing="6">
                <OrderSummaryItem label="Subtotal" value={"597"} />
                <OrderSummaryItem label="Shipping + Tax">
                  <Link href="#" textDecor="underline">
                    Calculate shipping
                  </Link>
                </OrderSummaryItem>
                <OrderSummaryItem label="Coupon Code">
                  <Link href="#" textDecor="underline">
                    Add coupon code
                  </Link>
                </OrderSummaryItem>
                <Flex justify="space-between">
                  <Text fontSize="lg" fontWeight="semibold">
                    Total
                  </Text>
                  <Text fontSize="xl" fontWeight="extrabold">
                    {597}
                  </Text>
                </Flex>
              </Stack>
              <Button background={"black"} textColor={"white"} size="lg">
                Place Order
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
}

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text
        fontWeight="medium"
        fontFamily={"heading"}
        color={mode("gray.600", "gray.400")}
      >
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};
