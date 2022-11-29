import { useEffect, useState } from "react";

import Link from "next/link";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { urlFor } from "../../sanity";
import { basketItems, removeFromBasket } from "../redux/features/basketSlice";
import emptyCart from "/public/undraw_Gift_box_re_vau4.png";
import BasketItemCard from "./BasketItemCard";

// }
const BasketItems = () => {
  const items = useSelector(basketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      // console.log("item ------->", item);
      // console.log("results ======>", results);
      return results;
      // console.log("results =====>", results._id);
      // console.log("item =====>:", item);
    }, {} as { [key: string]: Product[] });
    setGroupedItemsInBasket(groupedItems);
    // console.log("groupedItems", groupedItems);
    // console.log("--------------------------------------");
  }, [items]);

  return (
    <>
      {items.length > 0 ? (
        <>
          <div className="divide-y divide-PB_green mb-2">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <BasketItemCard key={key} items={items} id={key} />
            ))}
          </div>

          <button className="bg-PB_black text-PB_white w-full py-1 rounded-lg mt-6 flex justify-center items-center align-middle hover:bg-[#161515] shadow-md transition duration-100">
            <Link href="checkout">
              <a className="font-inter font-medium tracking-wide">
                <BsHandbag className="mr-2 mb-1 inline" /> Place Order
              </a>
            </Link>
          </button>
        </>
      ) : (
        <div className="mb-6">
          <img src={emptyCart.src} className="h-fit w-fit" alt="" />
          <h1 className="text-center font-semibold font-inter mt-4 text-xl text-PB_black">
            Your Cart is Empty
          </h1>
        </div>
      )}
    </>
  );
};

export default BasketItems;
