import { Box, useBreakpointValue } from "@chakra-ui/react";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import CTAStartYourProject from "../CTA/CTAStartYourProject";
import { LContainer } from "../ui/Containers";

interface Props {
  withCTABanner?: boolean;
}

export default function Footer({ withCTABanner = false }: Props) {
  const isMinWidth768 = useMediaQuery("(min-width: 768px)");
  const screenPagePadding = useBreakpointValue({ base: "20px", lg: "50px" });
  console.log(isMinWidth768);

  const CTARendered = (
    <Box
      position="absolute"
      top="-31%"
      width={`calc(100% - ${screenPagePadding} - ${screenPagePadding})`}
    >
      <CTAStartYourProject />
    </Box>
  );

  return (
    <LContainer bg="gray.500" h="100%" position="relative">
      {withCTABanner && CTARendered}
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
  return <p>im a small screen footer</p>;
};

const ContentForLgScreen = () => {
  return <p>im a small large footer</p>;
};
