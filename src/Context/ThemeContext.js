import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) return savedMode;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  };

  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1A1A1A" : "#faf6ee",
            contrastText: mode === "light" ? "#FAF6EE" : "#0E0C07",
          },
          secondary: {
            main: mode === "light" ? "#FF8614" : "#FFB800",
          },
          background: {
            default: mode === "light" ? "#F5F0E4" : "#0E0C07",
            paper: mode === "light" ? "#FAF6EE" : "#171410",
          },
          text: {
            primary: mode === "light" ? "#1A1A1A" : "#faf6ee",
            secondary: mode === "light" ? "#504A42" : "#9E9285",
          },
          divider:
            mode === "light" ? "rgba(26,26,26,0.15)" : "rgba(240,235,224,0.10)",
        },
        typography: {
          fontFamily: "'Ubuntu', sans-serif",
          h1: { fontFamily: "'Unbounded', sans-serif", fontWeight: 700, letterSpacing: "-0.02em", color: mode === "light" ? "#071f74ff" : "#ffffff" },
          h2: { fontFamily: "'Unbounded', sans-serif" },
          h3: { fontFamily: "'Unbounded', sans-serif" },
          h4: { fontFamily: "'Unbounded', sans-serif" },
          h5: { fontFamily: "'Unbounded', sans-serif" },
          h6: { fontFamily: "'Unbounded', sans-serif" },
        },
        // shape: {
        // 	borderRadius: 8,
        // },
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
