import { Heading, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import LContainer from "../../common/Containers";
import { default as CardsForLargeScreen } from "./CardsForLargeScreen";
import CardsForSmallScreen from "./CardsForSmallScreen";

export default function OurServices() {
  const isMinWidth768px = useMediaQuery("(min-width: 768px)");
  const headingSize = useBreakpointValue({ md: "2xl" });
  console.log(isMinWidth768px);

  const cardsRendered = !isMinWidth768px ? (
    <CardsForSmallScreen />
  ) : (
    <CardsForLargeScreen />
  );

  return (
    <LContainer
      bg="gray"
      // pt={{ base: "124px", md: "200px" }}
      // pb={{ base: "154px", md: "0" }}
    >
      <VStack spacing={{ base: "96px", md: "73px" }} width="100%">
        <Heading size={headingSize}>
          <Text display="inline" color="pink.900">
            Our
          </Text>{" "}
          Services
        </Heading>
        {cardsRendered}
      </VStack>
    </LContainer>
  );
}
