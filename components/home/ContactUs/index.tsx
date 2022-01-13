import { Box, Flex } from "@chakra-ui/react";
import { LContainer } from "../../common/ui/Containers";
import Addresses from "./Addresses";
import Content from "./Content";

export default function ContactUs() {
  return (
    <LContainer bg="gray">
      <Flex flexWrap="wrap">
        <Box width={{ base: "100%", lg: "50%" }}>
          <Content />
        </Box>
        <Box
          width={{ base: "100%", lg: "50%" }}
          display={{ base: "none", lg: "block" }}
        >
          <div>two</div>
        </Box>
        <Box flex="1" pt={{ base: "150px", lg: "130px" }}>
          <Addresses />
        </Box>
      </Flex>
    </LContainer>
  );
}
