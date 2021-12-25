import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/700.css";
import "@fontsource/roboto/700.css"; // for heading
import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import { useApollo } from "../lib/apollo/apolloClient";
import "../styles/globals.css";
import "../styles/swiper.scss";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
