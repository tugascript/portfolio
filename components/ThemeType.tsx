import { grey } from "@mui/material/colors";
import type { Theme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import type { themeEnum } from "./PreferencesContext";
import { PreferencesCtx } from "./PreferencesContext";

interface IProps {
  children: React.ReactNode;
}

const generateTheme = (theme: themeEnum): Theme =>
  theme === "python"
    ? createTheme({
        palette: {
          primary: {
            main: "#387EB8",
          },
          secondary: {
            main: "#FFE052",
          },
          background: {
            default: "#FFE985",
            paper: "#387EB8",
          },
          divider: grey[300],
        },
        typography: {
          fontFamily: "'Varta', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
      })
    : createTheme({
        palette: {
          primary: {
            main: "#333333",
          },
          secondary: {
            main: "#679E63",
          },
          background: {
            default: "#85B182",
            paper: "#333333",
          },
          divider: grey[400],
        },
        typography: {
          fontFamily: "'Open Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
      });

const ThemeType: React.FC<IProps> = ({ children }) => {
  const { theme } = React.useContext(PreferencesCtx);
  return <ThemeProvider theme={generateTheme(theme)}>{children}</ThemeProvider>;
};

export default ThemeType;
