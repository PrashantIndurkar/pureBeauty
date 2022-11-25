import React from "react";
import { fetchAllProducts } from "../../utils/fetchAllProducts";
import { GetStaticProps } from "next";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";

interface allProductsProps {
  allProducts: Product[];
}

const Products = ({ allProducts }: allProductsProps) => {
  return (
    <>
      <div className="pt-10 relative">
        <img
          className="w-full h-[40vh] md:h-[50vh] brightness-75 object-cover"
          src="https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-PB_white px-4 py-2 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Our Products
        </h1>
      </div>
      <div className="my-4 font-medium md:tab_mx mobile_mx lg:desktop_mx xl:max-px-20">
        <ul className="flex gap-x-2 text-sm">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>/ Products</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* PRODUCTS LIST */}
      <div className="lg:flex my-12">
        {/* <div className="bg-PB_background w-1/4 h-fit mx-8">
          <h1 className="ml-4 font-bold lg:text-xl mt-2">Filters</h1>
          <div className="m-4">
            <div>
              <h1 className="mb-2 font-semibold">Make up</h1>
              <div className="flex items-center mb-2 ml-3">
                <input
                  id="lipstick-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-PB_darkBlue "
                />
                <label
                  htmlFor="lipstick-checkbox"
                  className="ml-2 text-sm  text-PB_black"
                >
                  Lipstick
                </label>
              </div>
              <div className="flex items-center ml-3">
                <input
                  id="eyes-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-PB_darkBlue "
                />
                <label
                  htmlFor="eyes-checkbox"
                  className="ml-2 text-sm  text-gray-900 dark:text-gray-300"
                >
                  Eyes
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="mb-2 font-semibold">Brushes</h1>
              <div className="flex items-center mb-2 ml-3">
                <input
                  id="face-brush-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-PB_darkBlue "
                />
                <label
                  htmlFor="face-brush-checkbox"
                  className="ml-2 text-sm  text-gray-900 dark:text-gray-300"
                >
                  Face Brushes
                </label>
              </div>
              <div className="flex items-center ml-3">
                <input
                  id="eye-brush-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-PB_darkBlue "
                />
                <label
                  htmlFor="eye-brush-checkbox"
                  className="ml-2 text-sm  text-gray-900 dark:text-gray-300"
                >
                  Eye Brushes
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="mb-2 font-semibold">Skin Care</h1>
              <div className="flex items-center mb-2 ml-3">
                <input
                  id="sun-screen-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-PB_darkBlue "
                />
                <label
                  htmlFor="sun-screen-checkbox"
                  className="ml-2 text-sm  text-gray-900 dark:text-gray-300"
                >
                  Sun Screen
                </label>
              </div>
              <div className="flex items-center ml-3">
                <input
                  id="moisturizer-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-PB_darkBlue "
                />
                <label
                  htmlFor="moisturizer-checkbox"
                  className="ml-2 text-sm  text-gray-900 dark:text-gray-300"
                >
                  Moisturizer
                </label>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 justify-items-center items-center lg:justify-items-center lg:grid-cols-4 gap-y-8 lg:gap-y-20">
          {allProducts.map((product: Product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

// Get Server Side Props NEXT.js

export const getStaticProps: GetStaticProps<allProductsProps> = async () => {
  const allProducts = await fetchAllProducts();
  return {
    props: {
      allProducts,
    },
  };
};
