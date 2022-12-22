import React from "react";
// import header1 from "../../public/header2.jpg";
import header2 from "../../public/header3.jpg";
import header1 from "../../public/header3.png";
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
    <header className="pt-10 md:tab_mx mobile_mx lg:desktop_mx xl:max-px-20 ">
      <Image
        src={header1}
        className="object-cover brightness-[.80] bg-[#eceae3]"
        layout="fill"
      />
      <div className="relative h-[90vh] flex justify-center items-center">
        <div className="text-center">
          <h1 className="lg:text-[5rem] leading-snug md:text-[3rem]  text-[2rem] font-inter  font-bold text-PB_white ">
            Grow up Your Skin with <br />
            <span className="text-[#ffffff] font-bold">Natural Products</span>
          </h1>
          <p className="text-sm pt-4 font-inter mb-8 text-[#d5d2d2] leading-relaxed">
            *All Products are %100
            <span className="font-semibold "> Natural, Organic and Vegan </span>
            friendly .
          </p>
          {/* BUTTON */}
          <Link href="/products">
            <a
              href="#_"
              className="border border-PB_white rounded-full font-inter font-medium text-sm text-PB_white py-2 px-5 hover:text-[#e2ece2] hover:border-[#e2ece2] "
            >
              Shop Now
            </a>
          </Link>
        </div>
        {/* Images */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </header>
  );
};

export default Header;
