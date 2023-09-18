export const validateEmail = (email: string) => {
  return email.includes("@");
};

export const getSubstring = (text: string, substringEnd: number): string => {
  return text?.length > substringEnd
    ? `${text?.substring(0, substringEnd)}...`
    : text;
};

interface Product {
  size: string;
  price: number;
  currency: string;
  label: string;
  imageUrl: string;
}

export function shuffleAndSelectProducts(
  products: Product[],
  count: number
): Product[] {
  // Shuffle the products array
  const shuffledProducts = [...products].sort(() => Math.random() - 0.5);

  // Select the first 'count' products from the shuffled array
  const selectedProducts = shuffledProducts.slice(0, count);

  // Display the selected products (you can modify this part according to your needs)
  selectedProducts.forEach((product, index) => {
    console.log(`Product ${index + 1}:`);
    console.log(`Size: ${product.size}`);
    console.log(`Price: ${product.price} ${product.currency}`);
    console.log(`Label: ${product.label}`);
    console.log(`Image URL: ${product.imageUrl}`);
    console.log("\n");
  });

  return selectedProducts;
}
