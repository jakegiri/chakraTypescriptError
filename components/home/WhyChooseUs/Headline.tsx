import { Heading, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Headline() {
  const headingSizes = useBreakpointValue({ md: "2xl" });

  return (
    <>
      <Text color="pink.900" fontSize="20px">
        Why Us
      </Text>
      <Heading mt={{ base: "20px", md: "35px" }} size={headingSizes}>
        An Exceptionally Unique Experience Tailored To You
      </Heading>
    </>
  );
}
