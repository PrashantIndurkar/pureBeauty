import "../styles/globals.css";
import type { AppType } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { store } from "../redux/app/store";
import { Provider } from "react-redux";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default MyApp;
