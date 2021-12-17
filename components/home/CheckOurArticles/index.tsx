import { Box, Center, Heading, HStack, Text } from "@chakra-ui/react";
import LContainer from "../../common/Containers";

export default function CheckOurArticles() {
  return (
    <LContainer bg="grayGradient">
      <Center>
        <Heading>
          <Text color="pink.900" display="inline">
            Check{" "}
          </Text>
          Our Articles
        </Heading>
      </Center>
    </LContainer>
  );
}

function CardsForSmallScreen() {
  return (
    <HStack spacing="50px">
      <Box p="50px 39px 56px 39px">
        <Heading></Heading>
      </Box>
    </HStack>
  );
}

const featuredBlogsCards = [
  {
    heading: "Look out for these before ordering for a website",
    text: "There are many variations of passages Lorem available, but the majority have",
    date: "12 june 2019",
  },
  {
    heading: "Look out for these before ordering for a website",
    text: "There are many variations of passages Lorem available, but the majority have",
    date: "12 june 2019",
  },
  {
    heading: "Look out for these before ordering for a website",
    text: "There are many variations of passages Lorem available, but the majority have",
    date: "12 june 2019",
  },
];
