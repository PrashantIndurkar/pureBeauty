import Link from "next/link";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoBagHandleOutline, IoBagRemoveOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { closeBasket, openBasket } from "../redux/features/modalSlice";
import { RootState } from "../redux/app/store";
import { basketItems } from "../redux/features/basketSlice";
import BasketItems from "./BasketItems";

// TODO COMPONENT ----------------------------------------
const Navbar = () => {
  const isOpen = useSelector((state: RootState) => state.modal.open);
  const totalItems = useSelector(basketItems);
  // const basketProducts = useSelector(
  //   (state: any) => state.basketProducts.items
  // );
  const dispatch = useDispatch();
  return (
    <>
      <nav className=" md:tab_mx mobile_mx lg:desktop_mx h-[8vh] flex items-center justify-between bg-[#fefdfb]  fixed w-full z-50 hover:h-[10vh] transition-all duration-300 ease-in-out">
        <div className="cursor-pointer">
          <Link
            href="/"
            className="text-xl font-playfairDisplay text-PB_black tracking-wide"
            legacyBehavior
          >
            <>
              Pure
              <span className="font-semibold font-inter text-PB_darkGreen">
                Beauty
              </span>
            </>
          </Link>
        </div>
        <div className="hidden md:flex items-center text-xs font-medium gap-x-8 lg:gap-x-12 font-inter text-PB_black  tracking-wide">
          <Link href="/" className="hover:text-PB_darkGreen ">
            Home
          </Link>
          <Link href="/products" className="hover:text-PB_darkGreen ">
            Products
          </Link>
          <Link href="/" className="hover:text-PB_darkGreen  ">
            About
          </Link>
          <Link href="/" className="hover:text-PB_darkGreen  ">
            Contact
          </Link>
          <div className="relative flex justify-center items-center cursor-pointer  hover:text-[#353535]">
            {isOpen ? (
              <div onClick={() => dispatch(closeBasket())}>
                <IoBagRemoveOutline className="inline text-xl" />
              </div>
            ) : (
              <IoBagHandleOutline
                onClick={() => dispatch(openBasket())}
                className="inline text-xl "
              />
            )}
            {totalItems.length > 0 && (
              <div className="absolute -top-1.5 -right-5 w-5 flex justify-center items-center h-5 bg-PB_green px-1 rounded-full ">
                <h1
                  className="font-semibold text-[10px] text-PB_darkGreen
            "
                >
                  {totalItems.length}
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <HiMenuAlt2 className="h-6 w-6  cursor-pointer" />
        </div>
      </nav>
      <div>
        {/* modal */}
        {isOpen && (
          <div className="w-72 fixed bg-PB_white right-4 md:right-6 lg:right-16 h-fit max-h-[80vh] top-[8vh] rounded-lg shadow-lg p-4 overflow-scroll scrollbar-hide z-30">
            <h1 className=" font-extrabold text-PB_black font-inter text-lg md:text-xl mb-4 ">
              My Cart
            </h1>
            {/* cart items */}
            <BasketItems />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
