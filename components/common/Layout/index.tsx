import { Container } from "@chakra-ui/layout";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
  urlPathName: string;
}

export default function Layout({ children, urlPathName }: Props) {
  return (
    <>
      <Header />
      {children}
      <Container maxW="container.2xl">
        <Footer withCTABanner={urlPathName === "/"} />
      </Container>
    </>
  );
}
