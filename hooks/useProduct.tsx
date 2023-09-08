import QUIZV2 from "../quizv2.json";
import { localstorage } from "./useQuiz";
import { useSessionStorage } from "@mantine/hooks";

// Define the structure of your shopping cart.
interface ShoppingCartItem {
  category: string;
  question: string;
  selectedOption: string;
  score: number;
}

interface ShoppingCart {
  items: ShoppingCartItem[];
  totalScore: number;
}

// Initialize the shopping cart
const shoppingCart: ShoppingCart = {
  items: [],
  totalScore: 0,
};

// Function to add items to the shopping cart
const addToCart = (
  categoryName: string,
  questionIndex: number,
  selectedOptionName: string
) => {
  // Find the category in the QUIZ data
  const category = QUIZV2.find((item) => item.name === categoryName);

  if (category) {
    const question = category.question[questionIndex];
    if (question && question?.options[selectedOptionName]) {
      const itemToAdd: ShoppingCartItem = {
        category: categoryName,
        question: question.name,
        selectedOption: selectedOptionName,
        score: question?.options[selectedOptionName].value,
      };

      // Add the item to the cart
      shoppingCart.items.push(itemToAdd);

      // Update the total score
      shoppingCart.totalScore += itemToAdd.score;

      // You can also add additional logic here, such as checking for duplicate items, updating quantities, etc.
    }
  }
};

// Function to retrieve the current shopping cart
const getShoppingCart = (): ShoppingCart => {
  return shoppingCart;
};

// Example usage:
// Call addToCart when the user selects an option
// const categoryName = "transport and transit (delivery and travel)";
// const questionIndex = 0;
// const selectedOptionName = "Delivery Jobs";
// addToCart(categoryName, questionIndex, selectedOptionName);

// Call getShoppingCart to retrieve the current cart contents
// const cart = getShoppingCart();
// console.log(cart);

export { addToCart, getShoppingCart };
