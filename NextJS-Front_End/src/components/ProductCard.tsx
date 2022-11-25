import Image from "next/image";
import React from "react";
import { urlFor } from "../../sanity";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      
      <div className="flex text-center flex-col w-56 " key={product._id}>
        <a href={`/products/${product.slug.current}`}>
          <Image
            src={urlFor(product.image[0]).url()}
            className="h-12 w-56 object-contain hover:scale-125 transition duration-300 cursor-pointer"
            height={200}
            width={200}
          />
        </a>

        <h1 className="mt-4 text-sm ">{product.title}</h1>
        <p className="font-bold mt-4 text-lg">&#8377;{product.price}</p>

        <button className="mt-4 bg-PB_black hover:bg-[#1c1c1c] text-PB_white  align-middle w-full text-sm rounded-md py-1.5 font-medium">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
