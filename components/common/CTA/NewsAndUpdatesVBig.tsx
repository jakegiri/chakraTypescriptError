import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

const FormStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 35px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const InputStyle = styled.input`
  background-color: transparent;
  color: white;
  padding-left: 20px;
  flex-grow: 1;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #b88eeb;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #b88eeb;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #b88eeb;
  }
`;

//For screen min-width: 768px
export default function CTANewsAndUpdatesVBig() {
  return (
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      bgColor="purple.900"
      width="100%"
      py={{ md: "75px", lg: "94px", xl: "86px" }}
      pl="77px"
      pr="32px"
      borderRadius="20px"
      alignItems="center"
      justifyContent="space-around"
    >
      {/* CONTENT */}
      <Flex
        flexDirection="column"
        alignItems={{ base: "center", xl: "start" }}
        pb="32px"
      >
        <Text
          borderRadius="25px"
          bgColor="pink.900"
          color="white"
          fontSize="15px"
          p="5px 25px"
          mb={{ md: "19px", lg: "26", xl: "16px" }} //19 26 16
        >
          Subscribe To Our Email
        </Text>
        <Heading
          fontSize={{ md: "2xl", lg: "3xl", "3xl": "45size" }}
          color="white"
          mb="19px"
        >
          For Latest News & Updates
        </Heading>
        <Text color="rgba(255,255,255,0.75)">
          There are many variations of passages of Lorem Ipsum available but
        </Text>
      </Flex>
      <Box
        width={{ lg: "560px", "2xl": "600px", "3xl": "100%" }}
        maxWidth="667px"
        pl={{ xl: "77px", "2xl": "87px", "3xl": "147px" }}
      >
        <FormStyle>
          <InputStyle
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <Button bgColor="pink.900" m="10px">
            Subscribe
          </Button>
        </FormStyle>
      </Box>
    </Flex>
  );
}
