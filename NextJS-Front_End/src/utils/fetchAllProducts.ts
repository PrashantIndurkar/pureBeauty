export const fetchAllProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllProducts`
  );
  const data = await response.json();
  const allProducts: Product[] = data.allProducts;

  return allProducts;
};
