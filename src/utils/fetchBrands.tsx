const fetchBrands = async () => {
  const response = await fetch("https://makeup-api.up.railway.app/brands");
  const data = await response.json();

  return data;
};
export default fetchBrands;
