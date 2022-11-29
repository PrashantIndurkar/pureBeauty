import toast from "react-hot-toast";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { urlFor } from "../../sanity";
import { removeFromBasket } from "../redux/features/basketSlice";
import { motion } from "framer-motion";

interface Props {
  items: Product[];
  id: string;
}

const BasketItemCard = ({ items, id }: Props) => {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    toast.error(`${items[0]?.title} Removed From cart`, {
      position: "bottom-right",
    });
  };
  return (
    <div className="relative space-y-4 py-4">
      <div className="flex h-24 w-full gap-x-4">
        {/* product image */}
        <div className="flex-shrink-0 h-full w-fit">
          <img
            src={urlFor(items[0]?.image[0]).url()}
            className="w-max-full h-full rounded-lg "
          ></img>
        </div>
        {/* product info */}
        <div className="flex w-fit  overflow-hidden break-words flex-col justify-between flex-1">
          <h1 className="h-full w-fit  overflow-hidden text-xs font-semibold  break-words font-inter leading-relaxed tracking-wide">
            {items[0]?.title}
          </h1>
          <div className="flex mt-1 items-center space-x-1.5 ">
            <motion.p whileTap={{ scale: 0.85 }}>
              <AiFillMinusCircle className="text-lg cursor-pointer text-PB_darkGreen hover:text-[#556b4c] transition duration-100" />
            </motion.p>

            <h1 className="font-bold text-sm font-inter">1</h1>
            <motion.p whileTap={{ scale: 0.85 }}>
              <AiFillPlusCircle className="text-lg cursor-pointer text-PB_darkGreen transition duration-100 hover:text-[#556b4c]" />
            </motion.p>
          </div>
        </div>
        {/* product delete & price */}
        <div className="flex flex-col justify-between items-end ">
          <motion.p whileTap={{ scale: 0.85 }}>
            <IoCloseCircleOutline
              onClick={removeItemFromBasket}
              // onClick={removeItemFromBasket}
              className="text-xl cursor-pointer text-PB_darkBrown hover:text-PB_darkBrown"
            />
          </motion.p>
          <h1 className="font-bold text-sm">&#8377;{items[0]?.price}</h1>
        </div>
      </div>
    </div>
  );
};
export default BasketItemCard;
