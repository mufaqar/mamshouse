import { Header } from "../src/components";
import "../styles/globals.css";
import store from "../src/store/store";
import { Provider } from "react-redux";
import React from "react";
export default function App({ Component, pageProps }) {
  return (
    <>
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
      </React.StrictMode>
    </>
  );
}
