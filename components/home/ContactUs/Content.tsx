import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Form from "./Form";

export default function Content() {
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    <Box>
      <Text as="h2" color="pink.900" mb="26px">
        Contact Us
      </Text>
      <Heading as="p" size={headingSize}>
        Get In Touch
      </Heading>
      <Text mt="29px" mb="44px">
        Your email address will not be published. <br /> Required fields are
        marked with asterisk *
      </Text>
      <Form />
    </Box>
  );
}
