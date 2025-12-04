import { ActionIcon } from "@mantine/core";

export const ActionIconTheme = ActionIcon.extend({
  vars: (theme, props) => {
    if (props.variant === "subtle") {
      return {
        root: {
          "--ai-color": theme.colors.slate[8],
        },
      };
    }
    return { root: {} };
  },
});
