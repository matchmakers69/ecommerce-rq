/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { ReactNode, useState } from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { themeCreator } from "./base";
// import { StylesProvider } from "@mui/styles";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

type ThemeProviderWrapperProps = {
  children: ReactNode;
};

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  const curThemeName = localStorage.getItem("appTheme") || "DarkTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeProviderWrapper;
