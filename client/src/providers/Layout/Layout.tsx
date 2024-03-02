"use client";

import { PropsWithChildren } from "react";
import { Container, useTheme } from "@mui/material";
import { Header } from "src/components/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <Header />
        {children}
      </Container>
    </Container>
  );
};
