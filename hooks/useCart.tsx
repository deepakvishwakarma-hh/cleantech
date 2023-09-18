import { products } from "~/components/cart/_data";
import QUIZV2 from "../quizv2.json";

// Define the structure of your shopping cart.
// interface ShoppingCartItem {
//   category: string;
//   question: string;
//   selectedOption: string;
//   score: number;
// }

// interface ShoppingCart {
//   items: ShoppingCartItem[];
//   totalScore: number;
// }

// // Initialize the shopping cart
// const shoppingCart: ShoppingCart = {
//   items: [],
//   totalScore: 0,
// };

// // Function to add items to the shopping cart
// const addToCart = (
//   categoryName: string,
//   questionIndex: number,
//   selectedOptionName: string
// ) => {
//   // Find the category in the QUIZ data
//   const category = QUIZV2.find((item) => item.name === categoryName);

//   if (category) {
//     const question = category.question[questionIndex] as any;
//     if (question && question?.options[selectedOptionName]) {
//       const itemToAdd: ShoppingCartItem = {
//         category: categoryName,
//         question: question.name,
//         selectedOption: selectedOptionName,
//         score: question?.options[selectedOptionName].value,
//       };

//       // Add the item to the cart
//       shoppingCart.items.push(itemToAdd);

//       // Update the total score
//       shoppingCart.totalScore += itemToAdd.score;

//       // You can also add additional logic here, such as checking for duplicate items, updating quantities, etc.
//     }
//   }
// };

// // Function to retrieve the current shopping cart
// const getShoppingCart = (): ShoppingCart => {
//   return shoppingCart;
// };

// // Example usage:
// // Call addToCart when the user selects an option
// // const categoryName = "transport and transit (delivery and travel)";
// // const questionIndex = 0;
// // const selectedOptionName = "Delivery Jobs";
// // addToCart(categoryName, questionIndex, selectedOptionName);

// // Call getShoppingCart to retrieve the current cart contents
// // const cart = getShoppingCart();
// // console.log(cart);

// export { addToCart, getShoppingCart };
import { useEffect, useState } from "react";

// Define a type for the product data
type Product = {
  size: string;
  price: number;
  currency: string;
  label: string;
  imageUrl: string;
};

// Define a type for the report data
type ReportData = {
  name: string;
  questions: {
    name: string;
    answer: string;
    option: number;
  }[];
};

// Define a type for suggested products
type SuggestedProduct = {
  product: Product;
  score: number;
};

// Define a function to calculate the score for a report
function calculateReportScore(reportData: ReportData): number {
  // Implement your scoring logic here based on the report data
  let totalScore = 0;
  for (const question of reportData.questions) {
    totalScore += question.option; // Use the option value as a score for now
  }
  return totalScore;
}

export function useSuggestedProducts(
  reportData: ReportData[]
): SuggestedProduct[] {
  const calculatedProducts: SuggestedProduct[] = reportData.map((report) => {
    // Create a custom mapping logic here based on report data
    const matchingProduct = determineMatchingProduct(report);

    return {
      product: matchingProduct || products[0],
      score: calculateReportScore(report),
    };
  });

  calculatedProducts.sort((a, b) => b.score - a.score);

  return calculatedProducts;
}
