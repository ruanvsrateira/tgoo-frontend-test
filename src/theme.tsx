import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      [key: string]: string;
    };
    fonts: {
      [key: string]: string;
    };
  }
  interface ThemeOptions {
    colors: {
      [key: string]: string;
    };
    fonts: {
      [key: string]: string;
    };
  }
}

const theme = createTheme({
  colors: {
    "gray-blue-100": "#C4CDD5",
    "gray-blue-200": "#919EAB",
    "light-gray-100": "#F5F5F5",
    "light-gray-200": "#DFE3E8",
    "light-gray-300": "#D9D9D9",
    "dark-gray-100": "#BFBFBF",
    "dark-gray-200": "#C5C5C5",
    "dark-gray-300": "#606060",
    "dark-gray-400": "#686868",
    "main-red": "#FC6767",
    "main-green": "#8CE284",
    "main-blue": "#6794EC",
    "main-purple": "#4200FF",
    "main-orange": "#FA973C",
  },
  fonts: {
    Roboto: "Roboto",
    LexendDeca: "LexendDeca",
    Poppins: "Poppins",
  },
});

export default theme;
