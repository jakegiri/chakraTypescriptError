import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import styled from "styled-components";
import { LContainer } from "../../common/ui/Containers";
import Addresses from "./Addresses";
import Content from "./Content";
import Map from "./Map";

export default function ContactUs() {
  return (
    <LContainer bg="gray">
      <Flex flexWrap="wrap">
        {/*### CONTENT ####*/}
        <Box
          width={{ base: "100%", lg: "50%" }}
          pr={{ lg: "5.6%", xl: "7%", "2xl": "9.4%", "3xl": "9.8%" }}
        >
          <Content />
        </Box>
        {/*### MAP ####*/}
        <Box
          width={{ base: "100%", lg: "50%" }}
          display={{ base: "none", lg: "block" }}
          height="647px"
          pl="45px"
        >
          <PopupComponent borderRadius="20px">
            <Map borderRadius="20px" />
          </PopupComponent>
        </Box>
        {/*### ADDRESS ####*/}
        <Box flex="1" pt={{ base: "150px", lg: "130px" }}>
          <Addresses />
        </Box>
      </Flex>
    </LContainer>
  );
}

//#########################################################################
//#########################################################################
//#########################################################################
//#########################################################################

interface Props {
  children: ReactNode;
  bgColor?: string;
  borderRadius: string;
}

interface PopupBgCompStyledProps {
  bgColor?: string;
  borderRadius: string;
  topPos: number | undefined;
}

//########################################
//########################################

const PopupCompContainer = styled.div`
  position: relative;
  height: 100%;
`;

const PopupFrontCompStyled = styled.div`
  box-shadow: -15px 30px 50px 0 rgba(172, 175, 199, 0.3);
  height: 100%;
  margin-right: 83px;
`;

const PopupBgCompStyled = styled.div<PopupBgCompStyledProps>`
  position: absolute;
  top: -${(p) => p.topPos || 67}px;
  right: 0;
  height: 100%;
  width: calc(100% - 83px);
  background-color: ${(p) => p.bgColor ?? "#6001D3"};
  border-radius: ${(p) => p.borderRadius};
  z-index: 0;
`;

function PopupComponent({ children, bgColor, borderRadius }: Props) {
  const popupPositionCoordinates = useBreakpointValue({
    base: { top: 57, right: 70 },
    xl: { top: 67, right: 83 },
    "3xl": { top: 84, right: 99 },
  });

  return (
    <PopupCompContainer>
      <PopupBgCompStyled
        bgColor={bgColor}
        borderRadius={borderRadius}
        topPos={popupPositionCoordinates?.top}
      />
      <PopupFrontCompStyled id="testing">{children}</PopupFrontCompStyled>
    </PopupCompContainer>
  );
}
