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
      h={{ base: "75px", md: "97px" }}
      w={{ base: "75px", md: "97px" }}
      borderRadius="full"
      bgColor={bgColor}
      flexShrink="0"
      boxShadow={boxShadow}
    >
      {children}
    </Center>
  );
}
