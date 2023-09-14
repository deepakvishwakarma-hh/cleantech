import { Button } from "@chakra-ui/react";

// Define the type for the AppContext (replace with the actual type)
type AppContextType = {
  addItem: (cart: string, product: any, count: number) => void;
  removeItem: (cart: string, productId: string) => void;
  isAdded: (cart: string, productId: string) => boolean;
};

interface IAddToCartButtonProps {
  product: any; // Replace 'any' with the actual type of your product
  count?: number;
}

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  product,
  count,
}) => {
  // You can also define the function types explicitly here
  const addItem: AppContextType["addItem"] = (cart, product, count) => {
    // Your addItem logic here
  };

  const removeItem: AppContextType["removeItem"] = (cart, productId) => {
    // Your removeItem logic here
  };

  const isAdded: AppContextType["isAdded"] = (cart, productId) => {
    // Your isAdded logic here
    return false; // Example: Replace with your actual logic
  };

  return (
    <>
      {isAdded("cart", product.id) ? (
        <Button
          variant="outline"
          borderColor="gray.200"
          color="gray.500"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => removeItem("cart", product.id)}
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
          onClick={() => addItem("cart", product, (count = 1))}
        >
          Add to cart
        </Button>
      )}
    </>
  );
};
