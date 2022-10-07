import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[40vh]   object-cover brightness-75 "
        src="https://images.unsplash.com/photo-1633793566189-8e9fe6f817fc"
        alt=""
      />
      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-PB_blue text-PB_white px-4 py-2 font-semibold hover:bg-PB_darkBlue transition duration-200">
        <a href="/products"> Browse all Products</a>
      </button>
    </div>
  );
};

export default Footer;
