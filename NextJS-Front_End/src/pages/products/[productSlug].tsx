import React from "react";
import { getAllStaticSlugProps } from "../../utils/getAllStaticSlugProps";
import { BsHandbag } from "react-icons/bs";
import { sanityClient, urlFor } from "../../../sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "product" && slug.current == $productSlug]
`;

const ProductDetails = ({ productSlug, getProductBySlug }: any) => {
  // console.log("product", getProductBySlug);
  return (
    <div className="flex justify-center items-center h-screen font-inter">
      <div className="flex flex-col items-center md:items-start md:flex-row my-10 justify-center md:gap-x-12 ">
        <div className="">
          <img
            src={urlFor(getProductBySlug[0].image[0]).url()}
            alt="product image"
            className="h-[40vh] md:h-[50vh] rounded-md w-fit object-contain"
          />
        </div>
        <div className="md:w-3/12 w-1/2 mt-4 flex flex-col md:gap-y-4">
          <h1 className="text-xl mb-2 font-inter md:text-2xl">
            {getProductBySlug[0].title}
          </h1>

          <h3 className="md:mb-4 mb-2 text-sm font-inter">
            Product Description: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Neque, doloremque! lorme ipsum dolor sit amet
            Lorem ipsum dolor sit amet,
          </h3>
          <h2 className="font-bold text-xl mb-4 md:mb-4">
            &#8377;{getProductBySlug[0].price}
          </h2>

          {/* ------------------------------ Buy Now BUTTON ---------------------------------- */}
          <button className="bg-PB_black text-sm md:text-base text-PB_white px-2 py-1 font-inter font-medium hover:bg-[#232324]">
            Buy now <BsHandbag className="ml-2 inline text-sm mb-0.5" />
          </button>

          <div className=" flex  mt-4">
            <input
              type="number"
              className="border text-xs md:text-sm px-1 flex-1 border-PB_black outline-none  py-1"
              placeholder="Enter Delivery Pincode"
            />
            <button className="border  ml-1 border-PB_black text-PB_black text-xs md:text-sm px-2 py-1 font-inter font-medium">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllStaticSlugProps();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const productSlug = context.params.productSlug;
  const getProductBySlug = await sanityClient.fetch(query, {
    productSlug,
  });

  return {
    props: {
      productSlug,
      getProductBySlug,
    },
  };
};

export default ProductDetails;
