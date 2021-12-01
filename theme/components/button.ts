export const button = {
  baseStyle: {
    borderRadius: "lg",
    color: "white",
    fontSize: "lg",
    fontWeight: "medium",
  },
  variants: {
    brandPrimary: {
      borderRadius: "lg",
      bgColor: "purple.900",
    },
    brandSecondary: {
      borderRadius: "lg",
      bgColor: "pink.900",
    },
  },
  sizes: {
    sm: { px: "30px", py: "12px", h: "auto" },
    md: { px: "40px", py: "15px", h: "auto" },
    lg: { px: "50px", py: "20px", h: "auto" },
  },
  defaultProps: {
    variant: "brandPrimary",
    size: "md",
  },
};
