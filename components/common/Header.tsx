import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Center, Container, HStack, Text } from "@chakra-ui/layout";
import {
  Collapse,
  Flex,
  IconButton,
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
  const isMinWidth992 = useMediaQuery("(min-width:992px)");

  const hambergerRendered = (
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
    />
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
  return (
    <Container maxW="container.2xl" h="88px" bgColor="white">
      <Flex
        bg="white"
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
    </Container>
  );
}

function DesktopHeaderContainer({ children }: { children: ReactNode }) {
  return (
    <Container maxW="container.2xl" bgColor="white">
      <Flex
        bg="white"
        color={useColorModeValue("gray.600", "white")}
        h="88px"
        align={"center"}
      >
        {children}
      </Flex>
    </Container>
  );
}
