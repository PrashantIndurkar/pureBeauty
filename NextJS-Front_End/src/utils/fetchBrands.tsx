const fetchBrands = async () => {
  const response = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand"
  );
  const data = await response.json();

  return data;
};
export default fetchBrands;
