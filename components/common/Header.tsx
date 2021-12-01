import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/layout";
import {
  Collapse,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import useMediaQuery from "../../lib/hooks/useMediaQuery";
import { DesktopNav } from "./Nav/DesktopNav";
import { MobileNav } from "./Nav/MobileNav";

//#########################################################################
//#########################################################################
//#################        MAIN             ###############################
//#########################################################################
//#########################################################################

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const isMinWidth768 = useMediaQuery("(min-width:768px)");

  const hambergerRendered = (
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
    />
  );

  if (!isMinWidth768) {
    return (
      <MobileHeaderContainer isOpen={isOpen}>
        <Text color={useColorModeValue("gray.800", "white")}>Logo</Text>
        {hambergerRendered}
      </MobileHeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          justifyContent="space-between"
        >
          <Text color={useColorModeValue("gray.800", "white")}>Logo</Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </HeaderContainer>
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
  return (
    <Container maxW="container.2xl" h="88px" bgColor="white">
      <Flex
        bg="white"
        color={useColorModeValue("gray.600", "white")}
        h="88px"
        py={{ base: 2 }}
        align={"center"}
        justifyContent="space-between"
      >
        {children}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
}

function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <Container maxW="container.2xl" h="88px" bgColor="white">
      <Flex
        bg="white"
        color={useColorModeValue("gray.600", "white")}
        h="88px"
        py={{ base: 2 }}
        align={"center"}
      >
        {children}
      </Flex>
    </Container>
  );
}
