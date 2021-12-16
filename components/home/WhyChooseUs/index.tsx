import { Box, Flex, Text } from "@chakra-ui/react";
import LContainer from "../../common/Containers";
import Description from "./Description";
import Headline from "./Headline";
import ImageSection from "./Image";

export function WhyChooseUs() {
  return (
    <LContainer
      bg="gray"
      // pt={{ base: "126px", md: "206px" }}
      // pb={{ base: "124px", "2xl": "271px" }}
    >
      <Flex>
        <Box>
          <Headline />
          <Text mt={{ base: "35px", md: "35px" }} maxW="556px">
            We are idea generators, goal seekers, challenge-thirsty
            professionals, creators of unique Internet projects. We deliver
            unconventional solutions each project is a meaningful adventure, in
            which we become partners with our clients, on the road to perfection
          </Text>
          <Description />
        </Box>
        <Box
          width="100%"
          alignItems="stretch"
          display={{ base: "none", "2xl": "block" }}
        >
          <ImageSection />
        </Box>
      </Flex>
    </LContainer>
  );
}
