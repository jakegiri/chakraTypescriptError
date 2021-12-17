import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import LContainer from "../../common/ui/Containers/LContainers";

export default function CheckOurArticles() {
  return (
    <LContainer bg="grayGradient" centerContent>
      <Heading mb="120px">
        <Text color="pink.900" display="inline">
          CHECK{" "}
        </Text>
        OUR ARTICLES
      </Heading>
      <CardsForSmallScreen />
      <Button variant="brandSecondary" mt="126px" boxShadow="mdPink">
        Check All Blogs
      </Button>
    </LContainer>
  );
}

function CardsForSmallScreen() {
  return (
    <VStack spacing="50px">
      {featuredBlogsCards.map(({ heading, text, date }) => (
        <Box
          p="50px 40px 56px 40px"
          border="1px solid #BDCEDF"
          bgColor="white"
          borderRadius="lg"
          boxShadow="0 20px 38px rgba(20, 107, 255, 0.1)"
        >
          <Text mb="29px">{date}</Text>
          <Heading mb="29px" size="sm">
            {heading}
          </Heading>
          <Text mb="38px">{text}</Text>
          <Button variant="brandSecondary">Read More</Button>
        </Box>
      ))}
    </VStack>
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
