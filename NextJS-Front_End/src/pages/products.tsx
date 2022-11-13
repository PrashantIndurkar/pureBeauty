import React, { useState } from "react";
import { fetchAllProducts } from "../utils/fetchAllProducts";
import { TbArrowNarrowRight, TbArrowNarrowLeft } from "react-icons/tb";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { urlFor } from "../../sanity";

interface allProductsProps {
  allProducts: Product[];
}

const Products = ({ allProducts }: allProductsProps) => {
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[40vh] md:h-[50vh] brightness-75 object-cover"
          src="https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-PB_white px-4 py-2 font-semibold text-xl md:text-2xl lg:text-3xl">
          All Our Products
        </h1>
      </div>
      {/* PRODUCTS LIST */}
      <div className=" my-12 grid grid-cols-1 md:grid-cols-2  justify-items-center items-center lg:justify-items-center lg:grid-cols-4 gap-y-8 lg:gap-y-20">
        {allProducts.map((product: Product) => {
          return (
            <div className="flex text-center flex-col w-56 " key={product._id}>
              <Image
                src={urlFor(product.image[0]).url()}
                className="h-12 w-56 object-contain hover:scale-125 transition duration-300 cursor-pointer"
                height={200}
                width={200}
              />
              <h1 className="mt-4 text-sm ">{product.title}</h1>
              <p className="font-bold mt-4 text-lg">&#8377;{product.price}</p>
              <button className="mt-4 bg-PB_black hover:bg-[#1c1c1c] text-PB_white w-full text-sm rounded-md py-1.5 font-medium">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
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
