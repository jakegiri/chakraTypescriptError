import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export function CardsForSmallScreen() {
  return (
    <VStack spacing="50px">
      {featuredBlogsCards.map(({ heading, text, date }, index) => (
        <Box
          p="50px 40px 56px 40px"
          border="1px solid #BDCEDF"
          bgColor="white"
          borderRadius="lg"
          boxShadow="0 20px 38px rgba(20, 107, 255, 0.1)"
          key={index}
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
