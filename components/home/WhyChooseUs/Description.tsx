import { EmailIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/layout";

const attributes = [
  {
    heading: "First Working Process",
    description:
      "We are idea generators, goal seekers, challenge-thirsty professionals creators of unique Internet projects.",
  },
  {
    heading: "Dedicated Team",
    description:
      "We are idea generators, goal seekers, challenge-thirsty solutionscreators of unique Internet projects.",
  },
  {
    heading: "24/7 Hours Support",
    description:
      "We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects.",
  },
];

export default function Description() {
  return (
    <VStack
      spacing={{ base: "22px", md: "58px" }}
      maxW="556px"
      mt={{ base: "32px", md: "58px" }}
      alignItems={{ base: "start", md: "" }}
    >
      {attributes.map(({ heading, description }, index) => (
        <Flex key={index}>
          <Icon />
          <Box pl={{ base: "18px", md: "30px" }}>
            <Heading fontSize={{ base: 20, md: "25" }}>{heading}</Heading>
            <Text textAlign="left">{description}</Text>
          </Box>
        </Flex>
      ))}
    </VStack>
  );
}

const Icon = () => (
  <Center
    h={{ base: "50px", md: "90px" }}
    w={{ base: "50px", md: "90px" }}
    borderRadius="full"
    bgColor="pink.900"
    flexShrink="0"
    boxShadow="xsPink"
  >
    <EmailIcon color="white" w={{ base: "18px", md: "33px" }} h="auto" />
  </Center>
);
