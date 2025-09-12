import React, { createContext, useState, useMemo, useContext, useEffect } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(() => localStorage.getItem("theme") || "light");

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
					...(mode === "light"
						? {
								primary: { main: "#1976d2" },
								background: { default: "#f5f5f5", paper: "#fff" }
							}
						: {
								primary: { main: "#90caf9" },
								background: { default: "#000824", paper: "#000a40" }
							})
				},
				typography: {
					fontFamily: "Roboto, Arial, sans-serif"
				}
			}),
		[mode]
	);

	return (
		<ThemeContext.Provider value={{ mode, toggleTheme }}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
