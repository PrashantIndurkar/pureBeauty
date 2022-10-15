import React, { useState } from "react";
import fetchproducts from "../utils/fetchProducts";
import { TbArrowNarrowRight, TbArrowNarrowLeft } from "react-icons/tb";
import { GetServerSideProps } from "next";

const Products = ({ productsData }: any) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  return (
    <>
      <div>
        {productsData.map((product: any) => {
          return (
            <div>
              <h1 className="mt-10">{product.name}</h1>
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req } = context;
  const response = await fetch(
    `https://makeup-api.up.railway.app/products?_page=1&_limit=20`
  );
  const data = await response.json();

  return {
    props: {
      productsData: data,
    },
  };
};
