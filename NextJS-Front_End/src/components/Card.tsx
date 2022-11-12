import React from "react";

const Card = (brand: any) => {
  return (
    <div className="w-48 bg-PB_skin flex flex-col items-center">
      <div className="h-48  rounded-md w-full bg-PB_black"></div>
      <div className="mt-5">
        <div className="flex justify-between text-lg  mb-2">
          <h1 className="font-medium ">brand</h1>
          <p className="font-semibold"></p>
        </div>
        <p className="text-sm">
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
          in. */}
        </p>
      </div>
      {/* <button className="bg-PB_lightBrown w-full py-2 text-PB_white font-medium rounded-md hover:bg-PB_darkBrown transition duration-200">Add To Cart</button> */}
    </div>
  );
};

export default Card;
