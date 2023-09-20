// import useReport from "./useReportHook";

import { useLocalStorage } from "@mantine/hooks";
import { localstorage } from "~/lib/localstorage";
import { useCart } from "./useCart";
import { useEffect } from "react";
import { products } from "~/components/cart/_data";

// // Define TypeScript types
// type Question = {
//   name: string;
//   answer: string;
//   option: number;
// };

// type DataObject = {
//   name: string;
//   questions: Question[];
// };

// // Function to calculate ml value from questions with a fixed 1:10 ratio
// function calculateMlFromObjects(objects: DataObject[]): number {
//   let totalScore = 0;

//   // Iterate through each object
//   objects.forEach((object) => {
//     // Calculate the total score for questions in the object
//     object.questions.forEach((question) => {
//       totalScore += question.option;
//     });
//   });

//   // Calculate ml value based on the total score and fixed 1:10 ratio
//   const mlValue = totalScore * 10; // Assuming 1:10 ratio

//   return mlValue;
// }
// function calculateMlRequired(currentConcentrationMl: number): number {
//   // Example usage
//   const concentrationMl: number = 51; // Concentration of the concentrate in ml
//   const desiredMl: number = 1.02; // Desired concentration after dilution in ml (1.02 ml per gallon)
//   const volumeDesired: number = 2; // Desired volume of the diluted solution in ml
//   const dilutionFactor: number = concentrationMl / desiredMl;

//   // Calculate the required volume of the concentrated solution in ml
//   const requiredMl: number = volumeDesired / dilutionFactor;

//   return requiredMl;
// }

// export const useSuggestedProducts = () => {
//   const reportData = useReport();
//   const data = calculateMlFromObjects(reportData);
//   const requiredMl = calculateMlRequired(4500);

//   return { calculateMlFromObjects, Ml: data, requiredMl };
// };

const storageKeyMapping = {
  "3ml": "$20 - $50",
  "15ml": "$50 - $100",
  "30ml": "$100 - $200",
  "250ml": "$200 - $500",
  "32oz": "$500 - $1000",
};

export const useSuggestedProducts = () => {
  const [storage, setStorage]: any = useLocalStorage(localstorage);
  const spend = storage.annualSpent;
  const { addItem } = useCart();

  // Define price ranges for budgets
  const priceRanges: any = {
    "$20 - $50": [20, 50],
    "$50 - $100": [50, 100],
    "$100 - $200": [100, 200],
    "$200 - $500": [200, 500],
    "$500 - $1000": [500, 1000],
  };

  // Run this hook only once on component mount
  useEffect(() => {
    // Check if spend is a valid key in priceRanges
    if (!priceRanges.hasOwnProperty(spend)) {
      return;
    }

    // Find products that match the selected budget (spend)
    const [minPrice, maxPrice] = priceRanges[spend];

    const matchingProducts = products.filter((product) => {
      const productPrice = product.price;
      return productPrice >= minPrice && productPrice <= maxPrice;
    });

    // Add the matching products to the cart
    matchingProducts.forEach((product) => {
      addItem(product, 1); // Add each product to the cart with a quantity of 1
    });
  }, []); // Empty dependency array ensures this effect runs only once

  return { spend };
};
