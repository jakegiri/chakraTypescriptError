import { Box, Container } from "@chakra-ui/layout";

// interface Props {
//   children: ReactNode;
//   ...restProps;
// }

export default function ({ children, ...restProps }: any) {
  return (
    <Box {...restProps}>
      <Container maxW="container.2xl" px={{ base: "20px", lg: "50px" }}>
        {children}
      </Container>
    </Box>
  );
}
