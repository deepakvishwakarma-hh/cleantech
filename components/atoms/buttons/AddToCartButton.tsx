import { Button } from "@chakra-ui/react";
import { useCart } from "~/hooks/useCart";

interface IAddToCartButtonProps {
  product: any; // Replace 'any' with the actual type of your product
  count?: number;
}

export const AddToCartButton: React.FC<any> = ({ product, count }) => {
  const { addItem, removeItem, isAdded } = useCart(); // Use the useCart hook

  return (
    <>
      {isAdded(product.id) ? (
        <Button
          variant="outline"
          borderColor="gray.200"
          color="gray.500"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => removeItem(product.id)}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => addItem(product, (count = 1))}
        >
          Add to cart
        </Button>
      )}
    </>
  );
};
