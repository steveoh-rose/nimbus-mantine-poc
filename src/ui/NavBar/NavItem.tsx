import { Box, Group, Stack, Text, Title } from "@mantine/core";
import {
  Community,
  MarketPlace,
  Services,
  Software,
} from "@console/nimbus-assets/icons/brand";

const DashboardMenu = () => {
  return (
    <Stack gap="md">
      <Group gap="md" align="flex-start" wrap="nowrap">
        <Software width={80} height={80} />
        <Box>
          <Title order={4} mb={4}>
            Dashboard
          </Title>
          <Text size="sm" c="dimmed" lh={1.5}>
            Home to all of your services, tools and information.
          </Text>
        </Box>
      </Group>
    </Stack>
  );
};

const SolutionsMenu = () => {
  return (
    <Stack gap="md">
      <Group gap="md" align="flex-start" wrap="nowrap">
        <Services width={80} height={80} />
        <Box>
          <Title order={4} mb={4}>
            Solutions
          </Title>
          <Text size="sm" c="dimmed" lh={1.5}>
            Console Connect’s suite of core networking services make it easy to
            interconnect your clouds, applications and devices.
          </Text>
        </Box>
      </Group>
    </Stack>
  );
};

const MarketplaceMenu = () => {
  return (
    <Stack gap="md">
      <Group gap="md" align="flex-start" wrap="nowrap">
        <MarketPlace width={80} height={80} />
        <Box>
          <Title order={4} mb={4}>
            Marketplace
          </Title>
          <Text size="sm" c="dimmed" lh={1.5}>
            Explore products and businesses
          </Text>
        </Box>
      </Group>
    </Stack>
  );
};

const CommunityMenu = () => {
  return (
    <Stack gap="md">
      <Group gap="md" align="flex-start" wrap="nowrap">
        <Community width={80} height={80} />
        <Box>
          <Title order={4} mb={4}>
            Community
          </Title>
          <Text size="sm" c="dimmed" lh={1.5}>
            Connect with people, companies and content
          </Text>
        </Box>
      </Group>
    </Stack>
  );
};

export const NavItem = ({ type }: { type: string }) => {
  switch (type) {
    case "Dashboard":
      return <DashboardMenu />;

    case "Solutions":
      return <SolutionsMenu />;

    case "Community":
      return <CommunityMenu />;

    case "Marketplace":
      return <MarketplaceMenu />;

    default:
      return (
        <Box p="md">
          <Text c="dimmed">No content defined for {type}</Text>
        </Box>
      );
  }
};
