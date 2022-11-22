import "../styles/globals.css";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-coverflow";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Menu />
        <div className="md:ml-24 md:mt-6 font-sec">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
