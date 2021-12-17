export const heading = {
  baseStyle: {
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  sizes: {
    xs: { fontSize: "lg", lineHeight: "30px" },
    sm: { fontSize: "xl", lineHeight: "40px" },
    md: { fontSize: "2xl", lineHeight: "45px" },
    lg: { fontSize: "3xl", lineHeight: "47px" },
    xl: { fontSize: "4xl", lineHeight: "55px" },
    "2xl": { fontSize: "5xl", lineHeight: "65px" },
    "3xl": { fontSize: "6xl", lineHeight: "80px" },
    "4xl": { fontSize: "7xl", lineHeight: "95px" },
  },
  defaultProps: { size: "md" },
};

/*


  return (
    <LContainer bg="grayGradient" centerContent>
      <Heading mb="50px" size={headingSize}>
        <Text color="pink.900" display="inline">
          CHECK{" "}
        </Text>
        OUR ARTICLES
      </Heading>
      <Button bgColor="none" mb="126px" borderColor="mdPink" borderWidth="2px">
        CHECK ALL BLOGS
      </Button>
      {!isMinWidth992 ? <CardsForSmallScreen /> : <CardsForLargeScreen />}
    </LContainer>
  );

*/
