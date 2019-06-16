import React from "react";
import { ThemeProvider as XStyledProvider } from "@xstyled/styled-components";
import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <XStyledProvider theme={theme}>{children}</XStyledProvider>
);
