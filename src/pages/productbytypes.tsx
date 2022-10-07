import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import fetchProductType from "../utils/fetchProductType";

const productsbytypes = ({ productTypeData }: any) => {
  const [productTypes, setProductTypes] = useState(productTypeData);
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[40vh] md:h-[50vh] brightness-75  object-cover"
          src="https://images.unsplash.com/photo-1586220742613-b731f66f7743"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-PB_white px-4 py-2 font-semibold text-xl md:text-2xl lg:text-3xl">
          Products By Types
        </h1>
      </div>
      <div>
        <ul className="flex gap-x-4 tab_mx mobile_mx desktop_mx my-4 items-center ">
          <li>
            <a href="/">Home</a>
          </li>
          <BiChevronRight className="inline h-4 w-4" />
          <li>
            <a href="/productbytypes" className=" text-PB_darkBlue">
              Product Types
            </a>
          </li>
        </ul>
      </div>
      <div className="my-4 lg:my-12 grid grid-cols-1 lg:gap-y-24 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 justify-items-center py-12">
        {productTypes.map((productType: any) => {
          return (
            <div className="cursor-pointer" key={productType.id}>
              <img
                src={productType.productTypeImg}
                className="h-80 cursor-pointer rounded-md w-60"
              />
              <h1 className="font-medium mt-4 lg:mt-8 text-center text-lg">
                {productType.productTypeName}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default productsbytypes;

export const getStaticProps = async () => {
  const response = await fetchProductType();

  return {
    props: {
      productTypeData: response,
    },
  };
};
