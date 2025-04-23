"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { systemConfig } from "./theme";

export default function ThemeGlobalProvider(props: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider value={systemConfig}>
      <ThemeProvider
        forcedTheme="light"
        disableTransitionOnChange
        attribute="class">
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
