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
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon.ico`}
        />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-32x32.png`}
        />
        <link
          rel="apple-touch-icon"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/site.webmanifest`}
        />
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
};

export default Application;
