import { useSessionStorage } from "@mantine/hooks";
import { useEffect } from "react";

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
  product: Product; // Use the Product type for product
  count: number;
};

type Cart = {
  items: CartItem[];
};

type UseCartReturnType = {
  cart: Cart;
  addItem: (product: Product, count: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = (): UseCartReturnType => {
  // Initialize the cart with data from session storage or an empty cart if not found
  const [cart, setCart] = useSessionStorage<Cart>({
    key: "cart",
    defaultValue: { items: [] },
  });

  // Add an item to the cart
  const addItem = (product: Product, count: number) => {
    // Find the index of the product in the cart
    const index = cart.items.findIndex(
      (item) => item.product.id === product.id
    );

    // If the product is already in the cart, update the count
    if (index !== -1) {
      const updatedCart = [...cart.items];
      updatedCart[index].count += count;
      setCart({ items: updatedCart });
    } else {
      // If the product is not in the cart, add it
      const updatedCart = [...cart.items, { product, count }];
      setCart({ items: updatedCart });
    }
  };

  // Remove an item from the cart by productId
  const removeItem = (productId: string) => {
    const updatedCart = cart.items.filter(
      (item) => item.product.id !== productId
    );
    setCart({ items: updatedCart });
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart({ items: [] });
  };

  useEffect(() => {
    // Update session storage whenever the cart changes
    setCart(cart);
  }, [cart, setCart]);

  return {
    cart,
    addItem,
    removeItem,
    clearCart,
  };
};
