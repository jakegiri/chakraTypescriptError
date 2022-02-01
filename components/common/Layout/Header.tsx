import { Center } from "@chakra-ui/layout";
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
import Logo from "../../Icebox/Logo";
import closeIcon from "../Icons/close.svg";
import hamburgerIcon from "../Icons/hamburger.svg";
import LContainer from "../ui/Containers/LContainers";
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

  //#########################
  //###### RETURN ###########
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
