import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="tab_mx mobile_mx desktop_mx my-12  bg-PB_background">
      <div className="flex flex-col md:flex-row justify-center items-center py-12">
        <Image
          className=" object-contain"
          src="https://images.unsplash.com/photo-1593034108065-b876d0c41f59"
          alt=""
          width={500}
          height={500}
        />
        <div className="mt-8 lg:mt-0 md:w-4/12 ">
          <p className="font-medium font-playfairDisplay text-lg md:text-xl lg:text-2xl tracking-wide leading-relaxed md:leading-10 lg:leading-[3rem] text-center md:text-start">
            WE ARE INTERESTED IN PROVIDING YOU ONLY QUALITY PRODUCTS
          </p>
          <ul className="my-6 space-y-3 font-semibold font-inter tracking-wide">
            <li>
              <IoCloseCircleSharp className="bulletPoints" /> NO SLS
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="bulletPoints" />
              NO SILICONE
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="bulletPoints" />
              NO PARABENS
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="bulletPoints" />
              NO SULFATES
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="bulletPoints" />
              NO ARTIFICIAL STUFF
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="bulletPoints" />
              NO ALCOHOL
            </li>
          </ul>
          <button className=" bg-PB_blue text-PB_white px-4 py-2 font-semibold hover:bg-PB_darkBlue transition duration-150">
            <Link href="/products"> Buy Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
