import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

const FormStyle = styled.form`
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: "20px";
  max-width: 500px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

const InputStyle = styled.input`
  padding-left: 5px;
  background-color: transparent;
  color: white;
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

export default function NewsAndUpdateVSmall() {
  return (
    <Center
      padding="66px 18px 61px 18px"
      width="100%"
      maxWidth="660px"
      boxShadow="mdPurple"
      bgColor="purple.900"
      flexDirection="column"
      borderRadius="lg"
    >
      <Text pb="27px" color="rgba(255,255,255,0.5)">
        For Latest News And Updates
      </Text>
      <Heading pb="44px" size="35size" color="white">
        Subscribe Now
      </Heading>
      <Box alignSelf="stretch" textAlign="center">
        <FormStyle>
          <InputStyle
            type="email"
            name="email"
            placeholder="&nbsp;&nbsp;&nbsp;Enter you email"
          />
          <Button
            borderRadius="0 5px 5px 0"
            bgColor="pink.900"
            px="11px"
            flexGrow="0"
            borderLeft="2px solid #6001D3"
          >
            Subscribe
          </Button>
        </FormStyle>
      </Box>
    </Center>
  );
}
