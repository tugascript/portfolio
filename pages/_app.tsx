import type { AppProps } from "next/app";
import Footbar from "../components/layout/Footbar";
import Navbar from "../components/layout/Navbar";
import PreferencesContextProvider from "../components/PreferencesContext";
import ThemeType from "../components/ThemeType";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PreferencesContextProvider>
      <ThemeType>
        <Navbar />
        <Component {...pageProps} />
        <Footbar />
      </ThemeType>
    </PreferencesContextProvider>
  );
}

export default MyApp;
