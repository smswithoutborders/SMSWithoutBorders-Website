import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	IconButton,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Divider,
	Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import useMediaQuery from "@mui/material/useMediaQuery";

const DocsNavbar = () => {
	const { mode, toggleTheme } = useTheme();
	const { t } = useTranslation();
	const [mobileOpen, setMobileOpen] = useState(false);

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#0c0833" : "#ffffff";
	const isMobile = useMediaQuery("(max-width:768px)");

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const navItems = [
		{ label: t("navbar.link"), path: "/" },
		{ label: t("navbar.link4"), path: "/privacy-policy" },
		{ label: "Setup", path: "/setup" }
	];

	const drawer = (
		<Box sx={{ width: 250, p: 2, color: textColor, fontFamily: "'Unbounded', Ubuntu" }}>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<IconButton onClick={handleDrawerToggle} sx={{ color: textColor }}>
					<CloseIcon />
				</IconButton>
			</Box>
			<Divider sx={{ mb: 2, borderColor: textColor }} />

			{navItems.map((item) => (
				<List key={item.path}>
					<ListItem
						button
						component={Link}
						to={item.path}
						onClick={handleDrawerToggle}
						sx={{
							textAlign: "start",
							fontFamily: "'Unbounded', Ubuntu",
							"&:hover": {
								backgroundColor: mode === "light" ? "#f5f5f5" : "#e66f005d",
								borderRadius: 5
							}
						}}
					>
						<ListItemText
							primary={
								<Typography
									sx={{
										fontFamily: "'Unbounded', Ubuntu",
										fontWeight: 300,
										color: textColor
									}}
								>
									{item.label}
								</Typography>
							}
						/>
					</ListItem>
				</List>
			))}
			<Divider sx={{ my: 2, borderColor: textColor }} />
			<LanguageSwitcher />
			<IconButton onClick={toggleTheme} sx={{ mt: 2, color: textColor }}>
				{mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
			</IconButton>
		</Box>
	);

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor,
				color: textColor,
				boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
				fontFamily: "'Unbounded', Ubuntu"
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box
					display="flex"
					alignItems="center"
					component={Link}
					to="/"
					sx={{ textDecoration: "none" }}
				>
					<img
						src={mode === "light" ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"}
						alt="Logo"
						style={{ height: 40, marginRight: 10 }}
					/>
				</Box>

				{!isMobile ? (
					<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
						{navItems.map((item) => (
							<Button
								key={item.path}
								component={Link}
								to={item.path}
								sx={{
									color: textColor,
									fontFamily: "'Unbounded', Ubuntu",
									fontWeight: 300,
									textTransform: "none",
									fontSize: "1rem",
									"&:hover": {
										backgroundColor: "transparent",
										borderBottom: "2px solid #E66F00"
									}
								}}
							>
								{item.label}
							</Button>
						))}
						<LanguageSwitcher />
						<IconButton onClick={toggleTheme} sx={{ ml: 2, color: textColor }}>
							{mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
						</IconButton>
					</Box>
				) : (
					<IconButton
						color="inherit"
						edge="end"
						onClick={handleDrawerToggle}
						sx={{ color: textColor }}
					>
						<MenuIcon />
					</IconButton>
				)}
			</Toolbar>

			<Drawer
				anchor="right"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				PaperProps={{ sx: { backgroundColor } }}
			>
				{drawer}
			</Drawer>
		</AppBar>
	);
};

export default DocsNavbar;
