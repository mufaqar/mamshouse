import { Header } from "../src/components";
import "../styles/globals.css";
import store from "../src/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
