import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, services } from "./config";
import IconContainerRound from "./IconContainerRound";

export default function CardsForSmallScreen() {
  return (
    <Stack
      width="100%"
      direction={{ base: "column", md: "row" }}
      spacing={{ base: "70px", md: "28px" }}
      justifyContent="center"
    >
      {services.map(({ heading, ui, description }, index) => (
        <Card key={heading}>
          <IconContainerRound
            bgColor={icons[index].color}
            boxShadow={icons[index].boxShadow}
          >
            <Box mr="-3px" mb="-3px">
              <FontAwesomeIcon
                icon={icons[index].icon}
                color="white"
                size="2x"
              />
            </Box>
          </IconContainerRound>
          <Heading mt={{ base: "30px", md: "48px" }}>{heading}</Heading>
          <Text mt="30px">{description}</Text>
          <IconButton
            aria-label="Read More"
            icon={<ArrowForwardIcon color="purple.900" />}
            mt="18px"
            h="45px"
            w="45px"
            bgColor="gray.50"
          ></IconButton>
        </Card>
      ))}
    </Stack>
  );
}

export function Card({ children, ...restProps }: any) {
  return (
    <Center
      width={{ base: "100%", md: "100%" }}
      py={{ base: "42px", md: "65px" }}
      bgColor="white"
      minWidth={{ md: "341px" }}
      maxWidth={{ base: "387px", md: "387px" }}
      borderRadius="md"
      border="1px solid #BDCEDF"
      {...restProps}
    >
      <Flex flexDirection="column" width="278px" alignItems="center">
        {children}
      </Flex>
    </Center>
  );
}
