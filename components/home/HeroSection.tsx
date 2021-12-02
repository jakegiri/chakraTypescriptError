import { Box, Heading, Text } from "@chakra-ui/layout";
import useMediaQuery from "../../lib/hooks/useMediaQuery";

export default function HeroSection() {
  const isMinWidth1280 = useMediaQuery("(min-width: 1280px)");

  const contentRendered = (
    <Box>
      {/* <Text fontSize="33px" textAlign="center" fontWeight="bold">
        Create Your Impactful Online Presence
      </Text> */}
      <Heading
        as="p"
        size="lg"
        textAlign={{ base: "center", xl: "left" }}
        mt="41px"
      >
        Create Your Impactful Online Presence
      </Heading>
      <Text display={{ base: "none", md: "block" }}>
        When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impenetrable.
      </Text>
    </Box>
  );
  return <Box px="20px">{contentRendered}</Box>;
}
