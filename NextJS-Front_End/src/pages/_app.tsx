import "../styles/globals.css";
import type { AppType } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { store } from "../redux/app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => [setProgress(40)]);
    router.events.on("routeChangeComplete", () => [setProgress(100)]);
  });
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
      <LoadingBar
        color="#66815b"
        onLoaderFinished={() => setProgress(0)}
        waitingTime={500}
        height={3}
        progress={progress}
        transitionTime={150}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default MyApp;
