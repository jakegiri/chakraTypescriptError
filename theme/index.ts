import { extendTheme } from "@chakra-ui/react";
import { button } from "./components/button";
import { heading } from "./components/heading";
import { iconButton } from "./components/iconButton";
import { radii } from "./foundations/radius";
import { shadows } from "./foundations/shadows";
import { sizes } from "./foundations/sizes";
import { typography } from "./foundations/typography";
import { globalStyles } from "./globalStyles";

const theme = extendTheme({
  styles: globalStyles,
  radii,
  sizes,
  shadows,
  ...typography,
  // typography: typography,
  components: {
    IconButton: iconButton,
    Heading: heading,
    Button: button,
  },
});

export default theme;
