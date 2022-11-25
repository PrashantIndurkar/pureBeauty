import Link from "next/link";
import React, { useEffect, useState } from "react";
// import fetchProductType from "../utils/fetchProductType";
import { HiArrowSmRight } from "react-icons/hi";

interface productByCategoriesProps {
  categories: Category[];
}

const ProductByCategories = ({ categories }: productByCategoriesProps) => {
  return (
    <div className="tab_mx mobile_mx desktop_mx text-center my-12 ">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold text-center lg:text-start ml-2">
          Buy Products By Categories
        </h1>
        <Link href="/productByCategories">
          <a className="hidden lg:inline text-center  underline mr-6 font-medium text-PB_blue hover:text-PB_darkBlue transition duration-150">
            See all Categories <HiArrowSmRight className="inline h-4 w-4" />
          </a>
        </Link>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2  justify-items-center lg:justify-items-stretch lg:grid-cols-4 gap-y-4">
        {categories.map((category) => {
          return (
            <div className="flex items-center flex-col" key={category._id}>
              <img
                src={category.image[0]?.asset.url}
                className="h-80 cursor-pointer rounded-md w-64 hover:opacity-80 transition duration-200"
              />
              <h1 className="font-medium mt-4 text-center text-lg">
                {category.title}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="my-12">
        <Link href="/productsbybrand">
          <a className="lg:hidden text-center  bg-PB_blue hover:bg-PB_darkBlue text-PB_white px-2 py-1 font-medium">
            See all Categories
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductByCategories;
