export const button = {
  baseStyle: {
    borderRadius: "lg",
    color: "white",
    fontSize: "lg",
    fontWeight: "medium",
    maxWidth: "220px",
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
    pinkOutline: {
      borderRadius: "7px",
      borderWidth: "2px",
      borderColor: "pink.900",
      color: "pink.900",
    },
    purpleOutline: {
      // borderRadius: "7px",
      borderWidth: "2px",
      borderColor: "purple.900",
      color: "purple.900",
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
