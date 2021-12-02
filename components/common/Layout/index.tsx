import { Container } from "@chakra-ui/layout";
import { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Container maxW="container.2xl">{/* <Footer /> */}</Container>
    </>
  );
}
