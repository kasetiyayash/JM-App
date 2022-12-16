import "../styles/globals.css";
import Menu from "@/components/Menu";
import { Provider } from 'react-redux'
import { store } from "@/store/store";
import { AnimatePresence } from 'framer-motion'

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-coverflow";
import Head from "next/head";
import Cursor from "@/components/Cursor";


function MyApp({ Component, pageProps,router }) {
  return (
    <>
      <Provider store={store}>
        <Cursor />
        {/* {router.pathname === '/' ? (
          <Component {...pageProps} />
        ) : ( */}
        <Menu>
          <Component {...pageProps} />
        </Menu>
        {/* )} */}
      </Provider>
    </>
  )
}

export default MyApp;
