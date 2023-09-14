import { Button } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Define the type for the AppContext (replace with the actual type)
type AppContextType = {
  addItem: (wishlist: string, product: any) => void;
  removeItem: (wishlist: string, productId: string) => void;
  isAdded: (wishlist: string, productId: string) => boolean;
};

interface IAddToWishlistButtonProps {
  product: any; // Replace 'any' with the actual type of your product
}

export const AddToWishlistButton: React.FC<IAddToWishlistButtonProps> = ({
  product,
}) => {
  // You can also define the function types explicitly here
  const addItem: AppContextType["addItem"] = (wishlist, product) => {
    // Your addItem logic here
  };

  const removeItem: AppContextType["removeItem"] = (wishlist, productId) => {
    // Your removeItem logic here
  };

  const isAdded: AppContextType["isAdded"] = (wishlist, productId) => {
    // Your isAdded logic here
    return false; // Example: Replace with your actual logic
  };

  return (
    <>
      {isAdded("wishlist", product.id) ? (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: "transparent" }}
          rounded="full"
          title="Remove from Wishlist"
          onClick={() => removeItem("wishlist", product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: "transparent" }}
          rounded="full"
          title="Add to Wishlist"
          onClick={() => addItem("wishlist", product)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};
