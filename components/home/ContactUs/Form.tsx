import { Button, VStack } from "@chakra-ui/react";
import styled from "styled-components";

const formStyle = styled.form``;

const InputStyles = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 30px;
  padding-left: 30px;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #70798b;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #70798b;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #70798b;
  }
`;

const TextAreaStyles = styled.textarea`
  width: 100%;
  border-radius: 20px;
  padding-left: 30px;
  padding-top: 25px;
  height: 230px;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #70798b;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #70798b;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #70798b;
  }
`;

export default function Form() {
  return (
    <form>
      <VStack spacing="25px">
        <InputStyles type="text" name="name" placeholder="Your Name*" />
        <InputStyles type="email" name="email" placeholder="Your Email*" />
        <TextAreaStyles name="question" placeholder="Questions" />
      </VStack>
      <Button variant="brandSecondary" mt="38px" py="19px" boxShadow="mdPink">
        Send Message
      </Button>
    </form>
  );
}
