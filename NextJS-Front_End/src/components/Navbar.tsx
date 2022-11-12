import Link from "next/link";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="bg-PB_skin tab_mx mobile_mx desktop_mx h-[7vh] flex items-center justify-between border-b border-b-PB_lightBrown">
      <div>
        <Link href="/">
          <h1 className="text-xl font-playfairDisplay">
            Pure
            <Link href="/" className="font-semibold text-PB_darkBrown">
              <a>Beauty</a>
            </Link>
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-x-8 lg:gap-x-20 font-inter">
        <Link href="/">
          <a className="hover:text-PB_darkBrown  ">Home</a>
        </Link>
        <Link href="/products">
          <a className="hover:text-PB_darkBrown  ">Products</a>
        </Link>
        <Link href="/productsbybrand">
          <a className="hover:text-PB_darkBrown  ">Brands</a>
        </Link>
        <Link href="/productbytypes">
          <a className="hover:text-PB_darkBrown  ">Products Types</a>
        </Link>
      </div>
      <div className="hidden md:flex items-center relative">
        <div className="bg-PB_white pl-5 py-0.5 rounded-full flex items-center justify-between">
          <span className="text-sm">Cart</span>
          <span className="bg-PB_black rounded-full whitespace-normal text-PB_white ml-2  p-0.5 px-2">
            0
          </span>
        </div>
      </div>
      <div className="md:hidden">
        <HiMenuAlt2 className="h-6 w-6  cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
