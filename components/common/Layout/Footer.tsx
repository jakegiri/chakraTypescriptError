import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import Logo from "../../Icebox/Logo";
import CTAStartYourProject from "../CTA/CTAStartYourProject";
import { LContainer } from "../ui/Containers";

interface Props {
  withCTABanner?: boolean;
}

export default function Footer({ withCTABanner = false }: Props) {
  const isMinWidth768 = useMediaQuery("(min-width: 768px)");
  const screenPagePadding = useBreakpointValue({ base: "20px", lg: "50px" });
  console.log(isMinWidth768);

  return (
    <LContainer
      noTopPadding
      background="linear-gradient(#F3F4F6 20%, #081420 0%)"
      h="100%"
      position="relative"
    >
      {withCTABanner && <CTAStartYourProject />}
      {!isMinWidth768 ? <ContentForSmScreen /> : <ContentForLgScreen />}
    </LContainer>
  );
}

//###########################################################
//###########################################################
//##########           SUBCOMPONENTS           ##############
//###########################################################
//###########################################################

const ContentForSmScreen = () => {
  return (
    <Flex mt="73px" flexDirection="column" alignItems="center">
      <Logo color="white" />
      <Text mt="16px" color="gray.100">
        Achieve your marketing &amp; business goals
      </Text>
    </Flex>
  );
};

const ContentForLgScreen = () => {
  return <p>im a small large footer</p>;
};
