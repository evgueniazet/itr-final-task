"use client";

import { PropsWithChildren } from "react";
import { Container, useTheme } from "@mui/material";

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
      <Container maxWidth="xl">{children}</Container>
    </Container>
  );
};
