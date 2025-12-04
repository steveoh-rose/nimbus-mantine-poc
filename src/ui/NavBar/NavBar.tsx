import {
  Avatar,
  Box,
  Group,
  HoverCard,
  ActionIcon,
  Text,
  UnstyledButton,
  Indicator,
  Title,
  ThemeIcon,
} from "@mantine/core";
import { NavItem } from "./NavItem";
import { ConsoleConnectLogo } from "@/ui/NavBar/ConsoleConnectLogo";
import { People } from "@console/nimbus-assets/icons/brand"; // Assuming this works or use an SVG
import { ChevronDown, Help, Search } from "@console/nimbus-assets/icons/app";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <Box component="nav" className={styles.navbar}>
      <Group justify="space-between" h="100%">
        <Group gap="xl">
          <UnstyledButton component="a" href="/">
            <ConsoleConnectLogo style={{ width: 40, height: 40 }} />
          </UnstyledButton>

          <Group gap="xl" visibleFrom="sm">
            {["Dashboard", "Solutions", "Marketplace", "Community"].map(
              (item) => (
                <HoverCard
                  key={item}
                  openDelay={50}
                  closeDelay={100}
                  shadow="md"
                  withArrow
                  arrowSize={12}
                  position="bottom-start"
                >
                  <HoverCard.Target>
                    <Group gap={4} style={{ cursor: "pointer" }}>
                      <Text fw={500} c="fg.default">
                        {item}
                      </Text>
                      <ChevronDown width={16} color="var(--fg-muted)" />
                    </Group>
                  </HoverCard.Target>

                  <HoverCard.Dropdown p="lg" style={{ minWidth: 300 }}>
                    <NavItem type={item} />
                  </HoverCard.Dropdown>
                </HoverCard>
              )
            )}
          </Group>
        </Group>

        {/* RIGHT SIDE: Icons & Profile */}
        <Group gap="md">
          <ActionIcon variant="subtle" color="gray" radius="xl" size="lg">
            <Search width={20} />
          </ActionIcon>

          <ActionIcon variant="subtle" color="gray" radius="xl" size="lg">
            <Help width={20} />
          </ActionIcon>

          {/* USER PROFILE CARD */}
          <HoverCard
            openDelay={0}
            closeDelay={200}
            position="bottom-end"
            shadow="lg"
            withArrow
          >
            <HoverCard.Target>
              {/* WRAPPER FOR GRADIENT RING
                 Mantine doesn't have `_after` props. We use a wrapping Box for the ring.
              */}
              <Box
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: 3, // Space for the ring
                  borderRadius: "9999px",
                  cursor: "pointer",
                  // The gradient logic via background
                  background: "transparent",
                  transition: "all 0.2s ease",
                }}
                // We use sx or className for hover styles usually,
                // but here is inline hover logic via data attributes if needed,
                // or easier: just rely on the component being clean.
                // For the "Ring on Hover":
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, var(--mantine-color-ruby-4), var(--mantine-color-lavender-5))";
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Indicator
                  color="ruby"
                  offset={4}
                  withBorder
                  position="top-end"
                  size={12}
                >
                  <Avatar
                    src="src/assets/avatar.svg"
                    alt="Alex Price"
                    radius="xl"
                    size="md"
                    style={{ border: "2px solid var(--bg-panel)" }}
                  />
                </Indicator>
              </Box>
            </HoverCard.Target>

            <HoverCard.Dropdown p="lg" style={{ minWidth: 300 }}>
              <Group align="flex-start" gap="md">
                {/* Profile Icon */}
                <ThemeIcon
                  size={40}
                  radius="md"
                  variant="light"
                  color="lavender"
                >
                  <People width={24} height={24} />
                </ThemeIcon>

                <Box>
                  <Title order={4} mb={4}>
                    Account
                  </Title>
                  <Text size="sm" c="dimmed" lh={1.4}>
                    Manage your preferences and history.
                  </Text>
                </Box>
              </Group>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </Group>
    </Box>
  );
};
