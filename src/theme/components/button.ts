import { Button } from "@mantine/core";

export const ButtonTheme = Button.extend({
  defaultProps: {
    size: "md",
    radius: "md",
  },
  vars: (theme, props) => {
    if (props.variant === "primary") {
      return {
        root: {
          "--button-bg": theme.colors.sky[6],
          "--button-hover": theme.colors.sky[7],
          "--button-color": theme.white,
        },
      };
    }
    return { root: {} };
  },
});
