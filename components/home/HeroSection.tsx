import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import { useRef } from "react";
import useMediaQuery from "../../lib/hooks/useMediaQuery";
import heroImage1 from "../../public/heroImage1.png";
import heroImage2 from "../../public/heroImage2.png";
import Container1 from "../common/Container1";

export default function HeroSection() {
  return (
    <Container1 bgColor={{ base: "gray.50", md: "white" }}>
      <Flex
        h="calc(100vh - 88px)"
        flexDirection={{ base: "column", md: "row" }}
      >
        <ContentRedered />
        <ImageRendered />
      </Flex>
    </Container1>
  );
}

//######################################################################
//######################################################################
//                          SUBMODULES
//                    First half && 2nd half
//######################################################################
//######################################################################

const ContentRedered = () => {
  const bottomPadding = `${88 / 2}px`;

  const buttonsRendered = (
    <Flex width="100%" justifyContent={{ base: "center", md: "start" }}>
      <Button
        display={{ base: "none", md: "block" }}
        variant="brandSecondary"
        flex="1"
        boxShadow="lgPink"
      >
        Contact Us
      </Button>
      <Button
        ml={{ md: "30px" }}
        flex={{ md: "1" }}
        boxShadow="lgPurple"
        py="4"
      >
        Get Quote
      </Button>
    </Flex>
  );

  return (
    <Center pr={{ "2xl": "65px" }}>
      <VStack spacing="39px" alignItems="start" pb={{ md: bottomPadding }}>
        <HeadingTextRendering />
        <Text display={{ base: "none", md: "block" }}>
          When, while lovely valley teems with vapour around meand <br />{" "}
          meridian teems with vapour around meand
        </Text>
        {buttonsRendered}
      </VStack>
    </Center>
  );
};

const ImageRendered = () => {
  const isMinWidth1366 = useMediaQuery("(min-width: 1366px)");
  const imageSrc = !isMinWidth1366 ? heroImage2 : heroImage1;

  return (
    <Box
      position="relative"
      flex="1"
      my={{ base: "35px", "2xl": "30px" }}
      mx={{ base: "10px", md: "0" }}
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src={imageSrc}
        layout="fill"
        objectFit={!isMinWidth1366 ? "contain" : "contain"}
      />
    </Box>
  );
};

//######################################################################
//######################################################################
//                          SUBMODULES -- remainings
//######################################################################
//######################################################################

const HeadingTextRendering = () => {
  const headingSize = useBreakpointValue({
    base: "lg",
    md: "3xl",
    lg: "4xl",
    xl: "3xl",
    "2xl": "4xl",
  });
  const headingRef = useRef<HTMLParagraphElement>(null);
  const isMinWidth1366 = useMediaQuery("(min-width: 1366px)");
  console.log(isMinWidth1366);
  let mainTextRending = (
    <span>
      Create Your Impactful <br /> Online Presence
    </span>
  );
  if (isMinWidth1366) {
    mainTextRending = (
      <span>
        Create Your <br /> Impactful <br /> Online Presence
      </span>
    );
  }

  const heading = (
    <Heading
      ref={headingRef}
      as="p"
      size={headingSize}
      textAlign={{ base: "center", xl: "left" }}
      mt="41px"
    >
      {mainTextRending}
    </Heading>
  );

  return heading;
};
