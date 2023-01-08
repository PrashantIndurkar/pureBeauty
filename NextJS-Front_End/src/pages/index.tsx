import { useEffect } from "react";
import type { GetServerSideProps } from "next";

import Head from "next/head";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Selling from "../components/Selling";
import { closeBasket } from "../redux/features/modalSlice";

interface Props {
  categories: Category[];
}

const Home = ({ categories }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeBasket());
  }, []);
  return (
    <>
      <Head>
        {/* <html lang="en"> </html> */}
        <title>PureBeauty</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {/* products By Categories COMPONENT*/}
      {/* <ProductsByCategories categories={categories} /> */}
      {/* {console.log(categories)} */}

      {/* Banner Company */}
      {/* <Banner /> */}
      <Selling />
      {/* products By Brands */}
      {/* <ProductsByBrand /> */}
    </>
  );
};

export default Home;

// // SERVER Side props NEXT.js
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const categories = await fetchCategories();

//   return {
//     props: {
//       categories,
//     },
//   };
// };
