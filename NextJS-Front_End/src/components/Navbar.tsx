import Link from "next/link";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import {
  IoBagHandleOutline,
  IoBagRemoveOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../redux/features/modalSlice";
import { RootState } from "../redux/app/store";
import { urlFor } from "../../sanity";
import { basketItems } from "../redux/features/basketSlice";

const Navbar = () => {
  const isOpen = useSelector((state: RootState) => state.modal.open);
  const totalItems = useSelector(basketItems);
  const basketProducts = useSelector(
    (state: any) => state.basketProducts.items
  );
  console.log(basketProducts);
  const dispatch = useDispatch();
  return (
    <>
      <nav className=" md:tab_mx mobile_mx lg:desktop_mx h-[7vh] flex items-center justify-between shadow-sm bg-PB_white fixed w-full z-50 hover:h-[9vh] transition-all duration-300 ease-in-out">
        <div className="cursor-pointer">
          <Link href="/">
            <a className="text-xl font-playfairDisplay">
              Pure
              <span className="font-semibold text-PB_darkGreen">Beauty</span>
            </a>
          </Link>
        </div>
        <div className="hidden md:flex items-center text-xs font-medium gap-x-8 lg:gap-x-12 font-inter">
          <Link href="/">
            <a className="hover:text-PB_darkGreen  ">Home</a>
          </Link>
          <Link href="/products">
            <a className="hover:text-PB_darkGreen  ">Products</a>
          </Link>
          <Link href="/">
            <a className="hover:text-PB_darkGreen  ">About</a>
          </Link>
          <Link href="/">
            <a className="hover:text-PB_darkGreen  ">Contact</a>
          </Link>
          <div
            onClick={() => dispatch(setOpen())}
            className="flex justify-center items-center cursor-pointer  hover:text-[#353535]"
          >
            {isOpen ? (
              <IoBagRemoveOutline className="inline text-xl" />
            ) : (
              <IoBagHandleOutline className="inline text-xl" />
            )}
            <sup className="font-bold ml-0.5">{totalItems.length}</sup>
          </div>
        </div>
        <div className="md:hidden">
          <HiMenuAlt2 className="h-6 w-6  cursor-pointer" />
        </div>

        {/* modal */}
        {isOpen && (
          <div className="w-72 absolute bg-PB_white right-4 md:right-6 lg:right-16 h-fit max-h-[80vh] top-[8vh] rounded-lg shadow-lg p-4 overflow-scroll scrollbar-hide">
            <h1 className=" font-bold font-inter text-lg md:text-xl mb-4">
              My Cart
            </h1>
            {/* cart items */}
            <div className="relative space-y-4 ">
              <div className="flex h-24 w-full gap-x-4">
                {/* product image */}
                <div className="flex-shrink-0 h-full">
                  <img
                    src={urlFor(basketProducts[0].image[0]).url()}
                    className="w-max-full h-full rounded-lg "
                  ></img>
                </div>
                {/* product info */}
                <div className="flex w-fit  overflow-hidden break-words flex-col justify-between">
                  <h1 className="h-full w-fit  overflow-hidden text-xs font-semibold  break-words font-inter">
                    {basketProducts[0].title}
                  </h1>
                  <div className="flex mt-1 items-center space-x-1.5 ">
                    <AiFillMinusCircle className="text-lg cursor-pointer text-PB_lightBrown hover:text-PB_darkBrown transition duration-100" />
                    <h1 className="font-bold text-sm font-inter">1</h1>
                    <AiFillPlusCircle className="text-lg cursor-pointer text-PB_lightBrown transition duration-100 hover:text-PB_darkBrown" />
                  </div>
                </div>
                {/* product delete & price */}
                <div className="flex flex-col justify-between items-end ">
                  <IoCloseCircleOutline className="text-xl cursor-pointer text-PB_darkBrown hover:text-PB_darkBrown" />
                  <h1 className="font-bold text-sm">
                    &#8377;{basketProducts[0].price}
                  </h1>
                </div>
              </div>
            </div>
            <button className="bg-PB_black text-PB_white w-full py-1 rounded-lg mt-10 flex justify-center items-center align-middle hover:bg-[#161515] shadow-md transition duration-100">
              <span className="font-inter font-medium tracking-wide ">
                {" "}
                <BsHandbag className="mr-2 mb-1 inline " /> Place Order
              </span>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
