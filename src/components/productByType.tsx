import Link from "next/link";
import React, { useEffect, useState } from "react";
import fetchProductType from "../utils/fetchProductType";
import Card from "./Card";
import { HiArrowSmRight } from "react-icons/hi";

const ProductsByType = () => {
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchProductType();

      setProductTypes(response);
    })();
  }, []);

  return (
    <div className="tab_mx mobile_mx desktop_mx text-center my-12 ">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold text-center lg:text-start">
          Shop by Product Types
        </h1>
        <Link href="/productbytypes">
          <a className="hidden lg:inline text-center  underline mr-6 font-medium text-PB_blue hover:text-PB_darkBlue transition duration-150">
            See all brands <HiArrowSmRight className="inline h-4 w-4" />
          </a>
        </Link>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2  justify-items-center lg:justify-items-stretch lg:grid-cols-4 gap-y-4">
        {productTypes.slice(0, 4).map((productType: any) => {
          return (
            <div className="flex items-center flex-col" key={productType.id}>
              <img
                src={productType.productTypeImg}
                className="h-80 cursor-pointer rounded-md w-64 hover:opacity-80 transition duration-200"
              />
              <h1 className="font-medium mt-4 text-center text-lg">
                {productType.productTypeName}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="my-12">
        <Link href="/productsbybrand">
          <a className="lg:hidden text-center  bg-PB_blue hover:bg-PB_darkBlue text-PB_white px-2 py-1 font-medium">
            See all brands
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductsByType;
