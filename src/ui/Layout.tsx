import React from "react";
import { Box, Container } from "@mantine/core";
import { AdminPanel } from "./AdminPanel";
import { NavBar } from "@/ui/NavBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg="white">
      <NavBar />
      <Container py={8}>{children}</Container>
      <AdminPanel />
    </Box>
  );
};
