import "../styles/globals.css";
import type { AppType } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
