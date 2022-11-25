import React from "react";
import header1 from "../../public/header2.jpg";
import header2 from "../../public/header3.jpg";
import Image from "next/image";

// motion
import { motion } from "framer-motion";
import Link from "next/link";

// motion variants
const fadeVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      stiffness: 100,
    },
  },
};

const Header = () => {
  // Grow up your skin with natural Products
  // all Products are 100% natural, organic and vegan friendly.
  return (
    <header className="pt-10 md:tab_mx mobile_mx lg:desktop_mx xl:max-px-20 bg-PB_background">
      <div className="relative h-[90vh] flex justify-center items-center">
        <div className="w-1/2 text-center">
          <h1 className="text-5xl font-playfairDisplay z-10 font-light text-PB_black tracking-wide leading-normal ">
            Grow up Your Skin with{" "}
            <span className="text-PB_darkGreen font-black">
              Natural Products
            </span>
          </h1>
          <p className="text-sm pt-4 font-inter">
            All Products are 100% Natural, Organic and Vegan friendly.
          </p>
          {/* BUTTON */}
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/products">
              <a className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#c0cab4] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white transition duration-50000 ease-out border-2 border-PB_darkGreen group-hover:bg-PB_darkGreen"></span>
                <span className="font-inter font-medium text-sm relative text-PB_black group-hover:text-PB_white">
                  shop now
                </span>
              </a>
            </Link>
          </motion.div>
        </div>
        {/* Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
            },
          }}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeVariants}
            className="absolute top-[40%] right-0"
          >
            <img src={header2.src} alt="Header Image 1" className="h-[50vh]" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeVariants}
            className="h-fit w-fit bg-PB_white absolute top-14 left-14"
          >
            <img src={header1.src} className="h-[50vh]" alt="Header Image 2" />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
