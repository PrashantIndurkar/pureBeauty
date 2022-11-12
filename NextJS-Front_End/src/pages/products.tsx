import React, { useState } from "react";
import { fetchAllProducts } from "../utils/fetchAllProducts";
import { TbArrowNarrowRight, TbArrowNarrowLeft } from "react-icons/tb";
import { GetServerSideProps } from "next";

interface allProductsProps {
  allProducts: Product[];
}

const Products = ({ allProducts }: allProductsProps) => {
  return (
    <>
      <div>
        {allProducts.map((product: Product) => {
          return (
            <div>
              <h1 className="mt-10">{product.title}</h1>
            </div>
          );
        })}
      </div>
      <ul>
        <li>
          <a href="" className="text-PB_blue cursor-pointer">
            {" "}
            1
          </a>
        </li>
      </ul>
      {/* <nav className="my-4 border-t border-PB_lightBrown px-4 flex items-center justify-between sm:px-0">
        <div className="-mt-px w-0 flex-1 flex">
          <a
            href="#"
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-PB_darkBlue hover:text-gray-700 hover:border-PB_blue"
          >
            <TbArrowNarrowLeft
              className="mr-3 h-5 w-5 text-PB_darkBlue"
              aria-hidden="true"
            />
            Previous
          </a>
        </div>
        <div className="hidden md:-mt-px md:flex">
          <a
            href="#"
            className="border-transparent text-PB_darkBlue hover:text-PB_blue hover:border-PB_darkBrown border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            1
          </a>
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
          <a
            href="#"
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-PB_darkBlue hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <TbArrowNarrowRight
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </nav> */}
    </>
  );
};

export default Products;

// Get Server Side Props NEXT.js

export const getServerSideProps: GetServerSideProps<
  allProductsProps
> = async () => {
  const allProducts = await fetchAllProducts();
  return {
    props: {
      allProducts,
    },
  };
};
