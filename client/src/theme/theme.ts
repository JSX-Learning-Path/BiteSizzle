import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F26A21",
      dark: "#DD5B17",
      light: "#FFF1E8",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#FFFCF8",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#202020",
      secondary: "#6B7280",
    },

    divider: "#E5E7EB",

    success: {
      main: "#16A34A",
    },

    error: {
      main: "#DC2626",
    },
  },

  typography: {
    fontFamily: '"DM Sans Variable", sans-serif',

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
  },
});
