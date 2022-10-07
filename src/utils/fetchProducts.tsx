const fetchproducts = async () => {
  const response = await fetch(
    "https://makeup-api.up.railway.app/products?_page=1&_limit=20"
  );
  const data = await response.json();

  return data;
};
export default fetchproducts;
