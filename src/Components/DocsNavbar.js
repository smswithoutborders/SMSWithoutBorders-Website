import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const DocsNavbar = () => {
	const { mode } = useTheme();

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#0c0833" : "#ffffff";

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor,
				color: textColor,
				boxShadow: "0px 2px 8px rgba(0,0,0,0.2)"
			}}
		>
			<Toolbar sx={{ justifyContent: "center", gap: 3 }}>
				<Button component={Link} to="/features" sx={{ color: textColor }}>
					Features
				</Button>
				<Button component={Link} to="/about" sx={{ color: textColor }}>
					About
				</Button>
				<Button component={Link} to="/setup" sx={{ color: textColor }}>
					Setup
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default DocsNavbar;
