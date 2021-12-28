import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function IconContainerRound({
  children,
  bgColor,
  boxShadow,
}: {
  children: ReactNode;
  bgColor: string;
  boxShadow?: string;
}) {
  return (
    <Center
      h={{ base: "50px", md: "70px" }}
      w={{ base: "50px", md: "70px" }}
      borderRadius="full"
      bgColor={bgColor}
      flexShrink="0"
      boxShadow={boxShadow}
    >
      {children}
    </Center>
  );
}
