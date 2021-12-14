import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/700.css";
import "@fontsource/roboto/700.css"; // for heading
import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
import "../styles/swiper.css";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
