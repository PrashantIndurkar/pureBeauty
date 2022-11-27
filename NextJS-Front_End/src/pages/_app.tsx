import "../styles/globals.css";
import type { AppType } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { store } from "../redux/app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Toaster
        gutter={24}
        containerStyle={{
          top: 60,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          style: {
            fontFamily: "inter",
            fontSize: "0.8rem",
            fontWeight: 500,
          },

          success: {
            iconTheme: {
              primary: "#66815b",
              secondary: "white",
            },
          },
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default MyApp;
