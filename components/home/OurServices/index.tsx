import { Heading, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import Container1 from "../../common/Container1";
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
    <Container1
      pt={{ base: "124px", md: "200px" }}
      pb={{ base: "154px", md: "0" }}
      bgColor="gray.50"
    >
      <VStack spacing={{ base: "96px", md: "133px" }} width="100%">
        <Heading size={headingSize}>
          <Text display="inline" color="pink.900">
            Our
          </Text>{" "}
          Services
        </Heading>
        {cardsRendered}
      </VStack>
    </Container1>
  );
}
