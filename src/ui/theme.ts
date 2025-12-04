import type { MantineColorsTuple } from "@mantine/core";
import { createTheme } from "@mantine/core";

const graphite: MantineColorsTuple = [
  "#f9f9f9", // 0 (50)
  "#f3f3f3", // 1 (100)
  "#eaeaea", // 2 (200)
  "#d1d1d1", // 3 (300)
  "#a0a0a0", // 4 (400)
  "#767676", // 5 (500)
  "#616161", // 6 (600)
  "#4b4b4b", // 7 (700)
  "#383838", // 8 (800)
  "#272727", // 9 (900)
];

const stone: MantineColorsTuple = [
  "#f8f9fc", // 0
  "#f1f4f9", // 1
  "#e5eaf3", // 2
  "#ccd2dc", // 3
  "#9ba0a8", // 4
  "#72767c", // 5
  "#5e6166", // 6
  "#494b4f", // 7
  "#37383b", // 8
  "#262729", // 9
];

const slate: MantineColorsTuple = [
  "#f9f9fa", // 0
  "#f3f4f5", // 1
  "#e8eaec", // 2
  "#ced2d7", // 3
  "#99a0ab", // 4
  "#6c7686", // 5
  "#566274", // 6
  "#3e4c60", // 7
  "#2a3950", // 8
  "#172740", // 9
];

const sky: MantineColorsTuple = [
  "#f6fafe", // 0
  "#ecf5fd", // 1
  "#dcecfb", // 2
  "#b4d5f7", // 3
  "#5ca4ed", // 4
  "#0674e4", // 5
  "#015fbf", // 6
  "#014a94", // 7
  "#003870", // 8
  "#00274e", // 9
];

const lavender: MantineColorsTuple = [
  "#FAF8FF", // 0
  "#F5F2FF", // 1
  "#ede6ff", // 2
  "#d7caff", // 3
  "#aa8eff", // 4
  "#7648ff", // 5 (Brand Purple)
  "#6840e1", // 6
  "#5131ae", // 7
  "#3d2584", // 8
  "#2a1a5c", // 9
];

const ocean: MantineColorsTuple = [
  "#f7f9ff", // 0
  "#eff4fe", // 1
  "#e2eafd", // 2
  "#c0d2fb", // 3
  "#779ef7", // 4
  "#336cf3", // 5
  "#1f57d8", // 6
  "#1843a7", // 7
  "#12337f", // 8
  "#0d2358", // 9
];

const emerald: MantineColorsTuple = [
  "#F3FBF7", // 0
  "#E7F7EF", // 1
  "#D2F1E2", // 2
  "#9BE0BF", // 3
  "#17B76A", // 4
  "#018847", // 5
  "#01703B", // 6
  "#00572D", // 7
  "#004222", // 8
  "#002E18", // 9
];

const amber: MantineColorsTuple = [
  "#FFF8F4", // 0
  "#FFF1E8", // 1
  "#FFE5D3", // 2
  "#FFC69F", // 3
  "#FF791E", // 4
  "#BF5812", // 5
  "#9E480F", // 6
  "#7A380B", // 7
  "#5C2A09", // 8
  "#401D06", // 9
];

const gold: MantineColorsTuple = [
  "#fff9e9", // 0
  "#fff3d2", // 1
  "#ffe8aa", // 2
  "#ffca3a", // 3
  "#cd9700", // 4
  "#976f00", // 5
  "#7d5c00", // 6
  "#614700", // 7
  "#493500", // 8
  "#322500", // 9
];

const ruby: MantineColorsTuple = [
  "#FEF8F8", // 0
  "#FDF1F1", // 1
  "#FAE5E5", // 2
  "#F5C6C6", // 3
  "#E98282", // 4
  "#DB3636", // 5
  "#C60000", // 6
  "#9B0000", // 7
  "#780000", // 8
  "#560000", // 9
];

// 2. Create the Theme Instance
export const theme = createTheme({
  // Define the custom palettes
  colors: {
    graphite,
    stone,
    slate,
    sky,
    lavender,
    ocean,
    emerald,
    gold,
    amber,
    ruby,

    // OVERRIDE DEFAULTS (Aliasing)
    dark: slate, // Dark mode background
    gray: stone, // Borders, backgrounds, disabled text
    red: ruby, // Errors, danger buttons
    green: emerald, // Success states
    blue: ocean, // Info states, default links
    yellow: gold, // Warnings
    orange: amber, // Warnings / Accents
    cyan: sky, // Accents
    grape: lavender, // Accents
    violet: lavender, // (Mapped Slate here as it's the closest cool neutral)
  },
  primaryColor: "sky",
  primaryShade: 5,
  fontFamily: "Open Sans, sans-serif",
  fontFamilyMonospace: "Roboto Mono, monospace",
  headings: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
  },
  components: {
    Button: {
      defaultProps: {
        radius: "sm",
      },
    },
    TextInput: {
      defaultProps: {
        radius: "sm",
      },
    },
  },
});
