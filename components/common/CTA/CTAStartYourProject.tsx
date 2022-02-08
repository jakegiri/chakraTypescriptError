import {
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import CTABannerBg from "../../../assets/images/CTABannerBg.svg";

export default function CTAStartYourProject() {
  const headingSize = useBreakpointValue({
    base: "35size",
    md: "2xl",
    lg: "60size",
  });

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bgColor="purple.900"
      borderRadius="md"
      p={{
        base: "58px 0 48px 0",
        md: "88px 0 78px 0",
        lg: "106px 0 83px 0",
        xl: "183px 0 156px 0",
      }}
      bgImage={CTABannerBg}
      backgroundSize="cover"
    >
      <Text
        fontSize={{ base: "13px", md: "14" }}
        p={{ base: "1px 24px 1px 24px", md: "2px 29px 2px 29px" }}
        bgColor="yellow"
        color="gray.500"
        borderRadius="lg"
      >
        Subscribe To Our Email
      </Text>
      <Heading
        size={headingSize}
        color="white"
        textAlign="center"
        mt={{ base: "40px", md: "27px", lg: "40px" }}
      >
        Lets Get Started <br />
        Your Project
      </Heading>
      <Button
        variant="brandSecondary"
        mt={{ base: "35px", md: "27px", lg: "58px" }}
        p={{ base: "17px 55px", md: "15px 55px" }}
      >
        Start Now
      </Button>
    </Flex>
  );
}
