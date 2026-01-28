import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import "@/styles/results.css";
import "@/styles/summary.css";
import { Header } from "@/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="appShell">
        <Header />
        <div className="appContent">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
