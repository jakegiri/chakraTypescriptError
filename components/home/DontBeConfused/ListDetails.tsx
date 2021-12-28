import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import IconContainerRound from "./IconContainerRound";

//#####################################################################
//#####################################################################
//                     MAIN
//#####################################################################
//#####################################################################

export default function ListDetails() {
  const listSize = useBreakpointValue({ base: 2, "2xl": 3, "3xl": 2 });
  const articleHeadingSize = useBreakpointValue({ base: "xs", md: "sm" });

  const itemsList = items.slice(0, listSize);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent={{ md: "space-around" }}
      alignItems={{ base: "center" }}
      spacing={{ base: "65px", md: "none" }}
    >
      {itemsList.map((item, index) => (
        <Box as="article" maxWidth="307px" key={index}>
          <IconContainerRound bgColor="pink.900">
            <Text fontSize="xl" color="white">
              {index + 1}
            </Text>
          </IconContainerRound>
          <Heading
            as="h3"
            size={articleHeadingSize}
            color="white"
            mt={{ base: "21px" }}
          >
            {item.heading}
          </Heading>
          <Text color="gray.100" mt={{ base: "21px" }}>
            {item.description}
          </Text>
        </Box>
      ))}
    </Stack>
  );
}

//#####################################################################
//#####################################################################
//#####################################################################
//#####################################################################
const items = [
  {
    heading: "You Control The Thoughts That Create Your Life.",
    description:
      "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a  thousand unknown",
  },
  {
    heading: "Online Life & Weight Loss Coaching",
    description:
      "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a  thousand unknown",
  },
  {
    heading: "You Control The Thoughts That Create Your Life.",
    description:
      "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a  thousand unknown",
  },
];
