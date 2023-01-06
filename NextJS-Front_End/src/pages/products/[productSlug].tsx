import React from "react";
import { getAllStaticSlugProps } from "../../utils/getAllStaticSlugProps";
import { BsHandbag } from "react-icons/bs";
import { sanityClient, urlFor } from "../../../sanity";
import { groq } from "next-sanity";
import Link from "next/link";
import { motion } from "framer-motion";
import { addToBasket } from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const query = groq`*[_type == "product" && slug.current == $productSlug]
`;

const ProductDetails = ({ productSlug, getProductBySlug }: any) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(getProductBySlug[0]));
    toast.success(`${getProductBySlug[0]?.title} added to the cart`, {
      position: "top-right",
    });
  };
  // console.log("product", getProductBySlug);
  return (
    <>
      <Head>
        <title>Product Details - pureBeauty</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
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
            <h2 className="font-bold text-xl lg:text-2xl mt-4 mb-6 md:mb-4">
              &#8377;{getProductBySlug[0].price}
            </h2>

            {/* -----------------Buy Now BUTTON --------------- */}
            <div className="flex justify-between gap-x-6">
              <button className="bg-PB_black text-sm md:text-base text-PB_white px-2 py-1 font-inter font-medium hover:bg-[#232324] flex-1">
                <Link href="/checkout">
                  <motion.p
                    whileTap={{ scale: 0.95 }}
                    onClick={addItemToBasket}
                  >
                    Buy now <BsHandbag className="ml-2 inline text-sm mb-0.5" />
                  </motion.p>
                </Link>
              </button>
              <div className="flex justify-center items-center space-x-1.5">
                <motion.p whileTap={{ scale: 0.85 }}>
                  <AiFillMinusCircle className="text-2xl cursor-pointer text-PB_darkGreen hover:text-[#556b4c] transition duration-100" />
                </motion.p>

                <p className="font-bold text-lg font-inter">1</p>
                <motion.p whileTap={{ scale: 0.85 }}>
                  <AiFillPlusCircle className="text-2xl cursor-pointer text-PB_darkGreen transition duration-100 hover:text-[#556b4c]" />
                </motion.p>
              </div>
            </div>

            {/* <div className=" flex  mt-4">
              <input
                type="number"
                className="border text-xs md:text-sm px-1 flex-1 border-PB_black outline-none  py-1"
                placeholder="Enter Delivery Pincode"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="border  ml-1 border-PB_black text-PB_black text-xs md:text-sm px-2 py-1 font-inter font-medium"
              >
                Check
              </motion.button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

// export const getStaticPaths = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllStaticSlugProps`
//   );
//   const data = await response.json();
//   // // const paths;
//   const paths = data.allStaticSlugProps.map((index: any) => ({
//     params: { productSlug: index.slug.current },
//   }));

//   // console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: any) => {
//   const productSlug = context.params.productSlug;
//   // console.log("productSlug", productSlug);
//   const getProductBySlug = await sanityClient.fetch(query, {
//     productSlug,
//   });
//   // console.log("getProductBySlug", getProductBySlug);

//   return {
//     props: {
//       productSlug,
//       getProductBySlug,
//     },
//   };
// };

export const getServerSideProps = async (context: any) => {
  const productSlug = context.params.productSlug;
  // console.log("productSlug", productSlug);
  const getProductBySlug = await sanityClient.fetch(query, {
    productSlug,
  });
  console.log("getProductBySlug", getProductBySlug);

  return {
    props: {
      productSlug,
      getProductBySlug,
    },
  };
};

export default ProductDetails;
