import Image from "next/image";
import react from "react";
import { BiMoney } from "react-icons/bi";
import { BsFillAwardFill } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";

const Selling = () => {
  // Be close to nature using natural Products
  return (
    <div className="md:tab_mx mobile_mx lg:desktop_mx font-inter py-12">
      <h1 className="mt-12 lg:mt-24 text-center font-bold font-inter tracking-wider sm:text-lg md:text-xl lg:text-2xl">
        Buy from Retailers
      </h1>
      <div className="flex justify-center gap-x-6 mt-6  lg:gap-x-12 ">
        <div className="relative w-12 h-12 md:w-28 md:h-20 mt-0.5 md:mt-2">
          <Image
            alt="Brands Logo"
            className="h-full w-full cursor-pointer"
            src="https://www.freelogovectors.net/wp-content/uploads/2021/10/amazon-logo-freelogovectors.net_.png"
            layout="fill"
            objectFit="contain"
            width={400}
            height={350}
          />
        </div>
        <div className="relative w-12 h-12 md:w-28 md:h-20 ">
          <Image
            className="h-full w-full cursor-pointer"
            src="https://www.freelogovectors.net/wp-content/uploads/2018/05/flipkart-logo.png"
            layout="fill"
            objectFit="contain"
            width={400}
            height={350}
          />
        </div>
        <div className="relative w-12 h-12 md:w-28 md:h-20 ">
          <Image
            className="h-full w-full cursor-pointer"
            src="https://www.freelogovectors.net/svg08/myntra_logo-freelogovectors.net.svg"
            layout="fill"
            objectFit="contain"
            width={400}
            height={350}
          />
        </div>

        <div className="relative w-12 h-12 md:w-28 md:h-20 ">
          <Image
            className="h-full w-full cursor-pointer"
            src="https://www.freelogovectors.net/wp-content/uploads/2021/01/nykaa-logo-freelogovectors.net_.png"
            layout="fill"
            objectFit="contain"
            width={400}
            height={350}
          />
        </div>
      </div>
      <div className="mt-12  lg:mt-24 border text-xs font-bold font-inter justify-center items-center border-PB_darkBrown flex tracking-wide">
        <div className="border-r flex justify-center items-center py-3 border-PB_darkBrown w-full gap-x-2 px-2">
          <BiMoney className="inline text-[#985e2f] text-xl lg:text-2xl" />
          <h2 className="font-medium">
            <span className="font-bold">50% off</span> on your first order
          </h2>
        </div>
        <div className="border-r border-PB_darkBrown flex justify-center items-center py-3 w-full gap-x-2 px-2">
          <BsFillAwardFill className="inline text-[#985e2f] text-xl lg:text-2xl" />
          <h2>PREMIUM QUALITY</h2>
        </div>
        <div className="  flex justify-center items-center py-3 border-PB_darkBrown gap-x-2 px-2 w-full">
          <MdLocalShipping className="text-[#985e2f] text-xl lg:text-2xl inline" />
          <h2>SHIPPING TRACKING</h2>
        </div>
      </div>
    </div>
  );
};
export default Selling;
