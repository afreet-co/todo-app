import "../styles/global.css";
import Head from "next/head";
import { AppContextProvider } from "../contexts/AppContext";

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next Tail GhPage TS</title>{" "}
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-32x32.png`}
        />
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
};

export default Application;
