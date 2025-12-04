import { Button, Drawer, Stack } from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { Check } from "@console/nimbus-assets/icons/app"; // Keeping your existing icon
import { useLocation, useNavigate } from "react-router";

const PAGES = [
  { path: "/", label: "Dashboard" },
  { path: "/service", label: "Service" },
  { path: "/order", label: "Order" },
];

const NavItem = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? "light" : "subtle"}
      color={isActive ? "blue" : "gray"}
      fullWidth
      justify="space-between"
      styles={{
        label: { fontWeight: isActive ? 600 : 400 },
      }}
      rightSection={isActive && <Check width={16} height={16} />}
    >
      {label}
    </Button>
  );
};

export const AdminPanel = () => {
  // Mantine's standard hook for booleans
  const [opened, { toggle, close }] = useDisclosure(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Mantine's hook handles "mod" (Cmd on Mac, Ctrl on Windows) automatically
  useHotkeys([["mod+/", toggle]]);

  const handleNavigation = (path: string) => {
    navigate(path);
    // Optional: close();
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Pages"
      position="right"
      size="xs"
      padding="md"
    >
      <Stack gap="xs">
        {PAGES.map((page) => (
          <NavItem
            key={page.path}
            label={page.label}
            isActive={location.pathname === page.path}
            onClick={() => handleNavigation(page.path)}
          />
        ))}
      </Stack>
    </Drawer>
  );
};
