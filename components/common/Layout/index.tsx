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
      <Footer withCTABanner={urlPathName === "/"} />
    </>
  );
}
