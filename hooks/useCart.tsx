// Import the necessary dependencies
import superjson from "superjson";
import { useSessionStorage } from "@mantine/hooks";

// Define the types
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

type Cart = {
  items: CartItem[];
};

type UseCartReturnType = {
  cart: Cart;
  addItem: (product: Product, count: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  isAdded: (productId: string) => boolean;
  changeItemQuantity: (productId: string, newQuantity: number) => void;
  getTotalAmount: () => number; // Add the getTotalAmount function
};

const defaultValue = { items: [] };

export const useCart = (): UseCartReturnType => {
  const [cart, setCart] = useSessionStorage<Cart>({
    key: "cart1",
    defaultValue,
    serialize: superjson.stringify,
    deserialize: (str: string) =>
      str === undefined ? defaultValue : superjson.parse(str),
  });

  const addItem = (product: Product, count: number) => {
    const index = cart.items.findIndex(
      (item) => item.product.id === product.id
    );

    if (index !== -1) {
      const updatedCart = [...cart.items];
      updatedCart[index].count += count;
      setCart({ items: updatedCart });
    } else {
      const updatedCart = [...cart.items, { product, count }];
      setCart({ items: updatedCart });
    }
  };

  const removeItem = (productId: string) => {
    const updatedCart = cart.items.filter(
      (item) => item.product.id !== productId
    );
    setCart({ items: updatedCart });
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  const isAdded = (productId: string) => {
    return cart.items.some((item) => item.product.id === productId);
  };

  const changeItemQuantity = (productId: string, newQuantity: number) => {
    const updatedCart = cart.items.map((item) => {
      if (item.product.id === productId) {
        return { ...item, count: newQuantity };
      }
      return item;
    });
    setCart({ items: updatedCart });
  };

  // Add the getTotalAmount function to calculate the total amount in the cart
  const getTotalAmount = () => {
    return cart.items.reduce((total, item) => {
      return total + item.product.price * item.count;
    }, 0);
  };

  return {
    cart,
    addItem,
    removeItem,
    clearCart,
    isAdded,
    changeItemQuantity,
    getTotalAmount, // Add the getTotalAmount function
  };
};
