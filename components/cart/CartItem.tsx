import {
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { getSubstring } from "utils";
import { useCart } from "~/hooks/useCart";

type Product = {
  id: string;
  size: string;
  price: number;
  currency: string;
  label: string;
  imageUrl: string;
  description: string;
};

type CartItem = {
  product: Product;
  count: number;
};

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props: CartItem) => {
  const {
    product: { currency, description, imageUrl, id, label, price, size },
    count,
  } = props;
  const p = price * count;
  // Access the cart and its functions using the useCart hook
  const { removeItem, changeItemQuantity } = useCart();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={label}
        description={getSubstring(description, 100)}
        image={imageUrl}
        isGiftWrapping={true}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect
          value={count}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value, 10); // Convert the string to a number
            if (!isNaN(newQuantity)) {
              // Check if it's a valid number
              // Call changeItemQuantity to update the quantity
              changeItemQuantity(id, newQuantity);
            }
          }}
        />
        <PriceTag price={p} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => {
            // Call removeItem from useCart to remove the item from the cart
            removeItem(id);
            // props.onClickDelete?.(); // Optional callback
          }}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link
          fontSize="sm"
          textDecor="underline"
          onClick={() => {
            // Call removeItem from useCart to remove the item from the cart
            removeItem(id);
          }}
        >
          Delete
        </Link>
        <QuantitySelect
          value={count}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value, 10); // Convert the string to a number
            if (!isNaN(newQuantity)) {
              // Check if it's a valid number
              // Call changeItemQuantity to update the quantity
              changeItemQuantity(id, newQuantity);
            }
          }}
        />
        <PriceTag key={count} price={p} currency={currency} />
      </Flex>
    </Flex>
  );
};
