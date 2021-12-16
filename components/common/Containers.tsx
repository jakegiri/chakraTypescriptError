import { Box, Container } from "@chakra-ui/layout";

export default function LContainer({
  children,
  bg,
  noPadding,
  ...restProps
}: any) {
  // backgound properties
  let bgProps;
  switch (bg) {
    case "gray":
      bgProps = { bgColor: "gray.50" };
      break;
    case "grayGradient":
      bgProps = {
        bgImage: "linear-gradient(to bottom, white , #F3F4F6 200px)",
      };
    default:
      break;
  }

  //padding properties
  const padding = !noPadding && { base: "124px 20px", lg: "170px 50px" };

  return (
    <Box {...bgProps}>
      <Container maxW="container.2xl" p={padding} {...restProps}>
        {children}
      </Container>
    </Box>
  );
}
