import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="tab_mx mobile_mx desktop_mx my-12  bg-PB_background">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-6 md:gap-20 lg:gap-24 py-12">
        <Image
          className="h-80 md:h-96 lg:h-[30rem] object-contain s"
          src="https://images.unsplash.com/photo-1593034108065-b876d0c41f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
        <div className=" lg:w-4/12 ">
          <p className=" font-medium font-playfairDisplay text-lg md:text-xl lg:text-2xl tracking-wider leading-relaxed md:leading-10 lg:leading-[3rem]">
            WE ARE INTERESTED IN PROVIDING YOU ONLY QUALITY PRODUCTS
          </p>
          <ul className="my-6 space-y-3 font-semibold font-inter tracking-wide">
            <li>
              <IoCloseCircleSharp className="inline h-6 w-6 mr-3" /> NO SLS
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="inline h-6 w-6 mr-3" />
              NO SILICONE
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="inline h-6 w-6 mr-3" />
              NO PARABENS
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="inline h-6 w-6 mr-3" />
              NO SULFATES
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="inline h-6 w-6 mr-3" />
              NO ARTIFICIAL STUFF
            </li>
            <li>
              {" "}
              <IoCloseCircleSharp className="inline h-6 w-6 mr-3" />
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
