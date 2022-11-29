import Image from "next/image";
import React from "react";
import { urlFor } from "../../sanity";

import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/features/basketSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    toast.success(`${product.title} added to the cart`, {
      position: "top-right",
    });
  };

  return (
    <>
      <div className="flex text-center flex-col w-56 h-fit" key={product._id}>
        <a href={`/products/${product.slug.current}`}>
          <Image
            src={urlFor(product.image[0]).url()}
            className="h-12 w-56 object-contain hover:scale-125 transition duration-300 cursor-pointer"
            height={200}
            width={200}
          />
        </a>

        <div className="flex flex-col gap-y-3 justify-between mt-4">
          <h1 className="text-sm font-inter truncate ...">{product.title}</h1>
          <p className="font-bold mt-2 text-lg">&#8377;{product.price}</p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={addItemToBasket}
          className="mt-4 bg-PB_black hover:bg-[#1c1c1c] text-PB_white  align-middle w-full text-sm rounded-md py-1.5 font-medium "
        >
          Add to Cart
        </motion.button>
      </div>
    </>
  );
};

export default ProductCard;
