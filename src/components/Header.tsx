import React from "react";
import vector from "../../public/Vector.png";

import product1 from "../../public/product1.svg";
import product2 from "../../public/product2.svg";
import product3 from "../../public/product3.svg";

const Header = () => {
  return (
    <header className="tab_mx mobile_mx desktop_mx  bg-PB_background">
      <div className="h-[93vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfairDisplay text-center mb-6 md:mb-14 w-4/6 lg:w-2/4">
          Grow up your skin with natural Products
        </h1>
        {/* div for md */}
        <div className="flex flex-col md:flex-row  items-center md:w-full overflow-hidden justify-center ">
          <div className="hidden md:inline w-4/12 ">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus culpa alias, aliquam nulla deleniti et voluptates quae
              laudantium fugit ipsam.
            </h1>
            <div className="flex gap-x-4 mt-12">
              <img
                src={product2.src}
                alt="bestSellingProduct"
                className="h-20 cursor-pointer"
              />
              <div>
                <h1 className="cursor-pointer">Sun Skin</h1>
                <p className="text-PB_lightBrown font-bold">$12.0</p>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-0 lg:w-1/2 flex">
            <img
              src={vector.src}
              alt="makeup"
              className="h-56  sm:h-64 lg:h-80"
            />
          </div>
          <div className="flex flex-col gap-y-4 mt-10 ">
            <h2 className="font-semibold tracking-wide text-lg">
              Best selling Products
            </h2>
            <div className="flex gap-x-4 ">
              <img
                src={product1.src}
                alt="bestSellingProduct"
                className="h-20 cursor-pointer"
              />
              <div>
                <h1 className="cursor-pointer">Sun Skin</h1>
                <p className="text-PB_lightBrown font-bold">$12.0</p>
              </div>
            </div>
            <div className="flex gap-x-4 cursor-pointer">
              <img
                src={product3.src}
                alt="bestSellingProduct"
                className="h-20"
              />
              <div>
                <h1 className="cursor-pointer">Curology cream</h1>
                <p className="text-PB_lightBrown font-bold">$20.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
