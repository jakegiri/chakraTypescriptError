import { Center, HStack, Text } from "@chakra-ui/layout";
import {
  Collapse,
  Flex,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import LContainer from "../Containers";
import closeIcon from "../Icons/close.svg";
import hamburgerIcon from "../Icons/hamburger.svg";
import { DesktopNav } from "./Nav/DesktopNav";
import { MobileNav } from "./Nav/MobileNav";

//#########################################################################
//#########################################################################
//#################        MAIN             ###############################
//#########################################################################
//#########################################################################

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const isMinWidth992 = useMediaQuery("(min-width:992px)");

  const hambergerRendered = (
    <Center onClick={onToggle} width="50px">
      {isOpen ? (
        <div style={{ transform: "rotate(45deg)" }}>
          <Image src={closeIcon} width="50px" height="50px" color="#081420" />
        </div>
      ) : (
        <Image src={hamburgerIcon} width="33px" height="26px" color="#081420" />
      )}
    </Center>
  );
  if (!isMinWidth992) {
    return (
      <MobileHeaderContainer isOpen={isOpen}>
        <Logo />
        {hambergerRendered}
      </MobileHeaderContainer>
    );
  } else {
    return (
      <DesktopHeaderContainer>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </DesktopHeaderContainer>
    );
  }
}

//######################################################################
//######################################################################
//##############            MODULES             ########################
//######################################################################
//######################################################################

function Logo() {
  return (
    <HStack spacing="12px">
      <Center
        bgColor="purple.900"
        w="38px"
        h="38px"
        borderRadius="sm"
        boxShadow="-5px 10px 30px 0 rgba(96,1,211,0.3)"
      >
        <Text fontSize="20px" fontWeight="bold" color="white">
          L
        </Text>
      </Center>
      <Text
        color="black"
        fontSize={{ base: "27px", md: "30px" }}
        fontWeight="bold"
      >
        Loustrous
      </Text>
    </HStack>
  );
}

function MobileHeaderContainer({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  const containerPadding = useBreakpointValue({ base: "gray", md: null });
  return (
    <LContainer noPadding h="88px" bg={containerPadding}>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        h="88px"
        align={"center"}
        justifyContent="space-between"
      >
        {children}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </LContainer>
  );
}

function DesktopHeaderContainer({ children }: { children: ReactNode }) {
  return (
    <LContainer noPadding>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        h="88px"
        align={"center"}
      >
        {children}
      </Flex>
    </LContainer>
  );
}
