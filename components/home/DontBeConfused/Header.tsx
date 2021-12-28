import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";

export default function Header() {
  const isBreakingPointMd = useMediaQuery("(min-width: 768px)");

  const headingText = !isBreakingPointMd ? (
    <>
      You Don't Have To
      <br /> Be Confused And <br /> Frustrated
    </>
  ) : (
    <>
      You Don't Have To Be
      <br /> Confused And Frustrated
    </>
  );

  return (
    <Flex
      flexDirection="column"
      alignItems={{ base: "center", "3xl": "start" }}
    >
      <Text color="pink.900" fontSize="lg" pb="25px">
        No Room For Confusion
      </Text>
      <Heading
        as="h2"
        color="white"
        fontSize={{ base: "38px", md: "50px", lg: "65px", "3xl": "60px" }}
        lineHeight={{ base: "50px", md: "80px", lg: "80px" }}
        textAlign={{ base: "center", "3xl": "left" }}
        paddingBottom={{ base: "35px", md: "50px", "3xl": "40px" }}
      >
        {headingText}
      </Heading>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Button variant="purpleOutline" color="#BEA9DF" borderWidth="3px">
          Contact Us
        </Button>
        <Button mt={{ base: "20px", md: "0" }} ml={{ md: "50px" }}>
          Check All Blogs
        </Button>
      </Flex>
    </Flex>
  );
}
