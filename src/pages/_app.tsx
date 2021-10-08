import "../styles/global.css";
import Head from "next/head";
import { AppContextProvider } from "../contexts/AppContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Todo app</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-32x32.png`}
        />
      </Head>
      <AppContextProvider>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </AppContextProvider>
    </>
  );
};

export default Application;
