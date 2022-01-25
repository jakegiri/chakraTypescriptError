import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

//##################################################################
//##################################################################
export default function Addresses() {
  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      // justifyContent={{ lg: "space-between" }}
      sx={{ gap: { base: "65px", lg: "72px", "2xl": "116px" } }}
      flexWrap="wrap"
    >
      <Box flex="1" flexBasis={{ lg: "415px" }}>
        <AddressContainer icon={faMapMarkerAlt} heading="Address">
          <Text>
            Patricia C. Amedee 4401 Street Grapevine Nashville, Some street new
            and so on
          </Text>
        </AddressContainer>
      </Box>
      <Box flex="1" flexBasis={{ lg: "297px" }}>
        <AddressContainer icon={faPhoneAlt} heading="Our Phone">
          <Text>
            <span style={{ whiteSpace: "nowrap" }}>+91 690-160-7548</span>
            <br />
            <span style={{ whiteSpace: "nowrap" }}>+91 372-897-4372</span>
          </Text>
        </AddressContainer>
      </Box>
      <Box flex="1" flexBasis={{ lg: "322px" }}>
        <AddressContainer icon={faEnvelope} heading="Our Email">
          <Text>
            info@yourdomain.com
            <br />
            info@Phloxshop.com
          </Text>
        </AddressContainer>
      </Box>
    </Flex>
  );
}

//###################################################################
//###################################################################
//                  SUB-MODULES
//###################################################################
//###################################################################
interface AddressContainerProps {
  icon: any;
  heading: string;
  children: ReactNode;
  iconBg?: "pink" | "purple" | "white";
}

function AddressContainer(props: AddressContainerProps) {
  let iconBgColor = "white";
  let iconColor = "white";
  switch (props.iconBg) {
    case "purple":
      iconBgColor = "purple.900";
      break;
    case "pink":
      iconBgColor = "pink.900";
      break;
    case "white":
    default:
      iconBgColor = "white";
      iconColor = "#6001D3";
      break;
  }

  return (
    <Flex alignItems="center" maxWidth="415px">
      <Center
        h={{ base: "75px", lg: "120px" }}
        borderRadius="md"
        bgColor={iconBgColor}
        flex={{ base: "0 0 75px", lg: "0 0 120px" }}
      >
        <FontAwesomeIcon icon={props.icon} size="2x" color={iconColor} />
      </Center>
      <Flex flexDir="column" ml="28px">
        <Heading size="sm">{props.heading}</Heading>
        <Box>{props.children}</Box>
      </Flex>
    </Flex>
  );
}
