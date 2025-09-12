import React from "react";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTranslation } from "react-i18next";

const DocsNavbar = () => {
	const { mode, toggleTheme } = useTheme();
	const { t } = useTranslation();

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#0c0833" : "#ffffff";

	return (
		<AppBar
			position="fixed"
			sx={{ backgroundColor, color: textColor, boxShadow: "0px 2px 8px rgba(0,0,0,0.2)" }}
		>
			<Toolbar sx={{ justifyContent: "center", gap: 3 }}>
				<Button component={Link} to="/" sx={{ color: textColor }}>
					{t("navbar.link")}
				</Button>
				<Button component={Link} to="/privacy-policy" sx={{ color: textColor }}>
					{t("navbar.link4")}
				</Button>
				<Button component={Link} to="/setup" sx={{ color: textColor }}>
					Setup
				</Button>

				{/* Dark/Light Mode Toggle */}
				<IconButton onClick={toggleTheme} sx={{ ml: 2, color: textColor }}>
					{mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default DocsNavbar;
