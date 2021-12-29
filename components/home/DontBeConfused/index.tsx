import { Box, Center, Flex } from "@chakra-ui/react";
import NewsAndUpdateVSmall from "../../common/CTA/NewsAndUpdatesVSmall";
import { LContainer } from "../../common/ui/Containers";
import Header from "./Header";
import ListDetails from "./ListDetails";

export default function DontBeConfused(): JSX.Element {
  return (
    <LContainer bg="gray.500">
      <Flex as="section" flexWrap="wrap" justifyContent="space-between">
        <Box width={{ base: "100%", "3xl": "582px" }}>
          <Header />
        </Box>
        <Box
          width={{ base: "100%", "3xl": "50%" }}
          mt={{ base: "106px", md: "146px", "3xl": "0" }}
        >
          <ListDetails />
        </Box>
        <Center width="100%" mt={{ base: "95px", md: "136px" }}>
          <NewsAndUpdateVSmall />
        </Center>
      </Flex>
    </LContainer>
  );
}
