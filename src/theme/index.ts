import { createTheme } from "@mantine/core";
import { colors } from "@/theme/foundations/colors";
import { components } from "@/theme/components";

// 2. Create the Theme Instance
export const theme = createTheme({
  // Define the custom palettes
  colors,
  components,
  primaryColor: "sky",
  primaryShade: 5,
  fontFamily: "Open Sans, sans-serif",
  fontFamilyMonospace: "Roboto Mono, monospace",
  headings: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
  },
});
