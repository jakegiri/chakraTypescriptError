import { Box, Flex } from "@chakra-ui/react";
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
        {/* <Box width="100%" bgColor="white" mt={{ base: "95px", md: "136px" }}>
          CTA
        </Box> */}
      </Flex>
    </LContainer>
  );
}
