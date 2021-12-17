import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import blogImage1 from "../../../public/blogs/blogimage1.png";
import LContainer from "../../common/ui/Containers/LContainers";

export default function CheckOurArticles() {
  const isMinWidth992 = useMediaQuery("(min-width: 992px)");
  const headingSize = useBreakpointValue({ md: "2xl" });

  return (
    <LContainer bg="grayGradient" centerContent>
      <Heading mb="120px" size={headingSize}>
        <Text color="pink.900" display="inline">
          CHECK{" "}
        </Text>
        OUR ARTICLES
      </Heading>
      {!isMinWidth992 ? <CardsForSmallScreen /> : <CardsForLargeScreen />}
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

function CardsForLargeScreen() {
  const imageRendered = (
    <Box position="relative" width="100%" height="100%">
      <Image src={blogImage1} layout="fill" objectFit="cover" />
    </Box>
  );

  return (
    <HStack spacing="40px">
      {featuredBlogsCards.map(({ heading, text, date }) => (
        <Flex width="800px" bgColor="white" borderRadius="lg">
          <Box width="380px" borderRadius="lg" flexShrink="0">
            {imageRendered}
          </Box>
          <Box p="58px 70px 68px 60px">
            <Text>{date}</Text>
            <Heading mt="23px">{heading}</Heading>
            <Text mt="28px">{text}</Text>
            <Button mt="36px">Read More</Button>
          </Box>
        </Flex>
      ))}
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
