import React, { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	Box,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
	Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const { mode, toggleTheme } = useTheme();
	const isFarsi = i18n.language === "fa";

	const links = [
		{ label: t("navbar.link"), path: "/" },
		{ label: t("navbar.link4"), path: "/privacy-policy" },
		{ label: t("navbar.link5"), href: "https://docs.smswithoutborders.com/" }
	];

	const [drawerOpen, setDrawerOpen] = useState(false);
	const [scroll, setScroll] = useState(false);

	const toggleDrawer = () => setDrawerOpen((prev) => !prev);
	const handleLinkClick = () => setDrawerOpen(false);

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					background: scroll
						? mode === "light"
							? "#f7fbfff5"
							: "linear-gradient(135deg, #01124df0 2%, #010b30ff 100%)"
						: "transparent",
					color: mode === "light" ? "#02397ce3" : "#fff",
					boxShadow: "0px 1px 8px rgba(131, 169, 201, 0.88)",
					py: { xs: 0.2, sm: 0.5 },
					direction: isFarsi ? "rtl" : "ltr",
					transition: "background-color 0.3s ease",
					zIndex: 1200,
					fontFamily: "'Roboto', 'Ubuntu'",
					boxShadow: "none"
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						px: { xs: 2, sm: 4, md: 6 },
						minHeight: { xs: 46, sm: 54, md: 64 }
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1,
							cursor: "pointer"
						}}
						component="a"
						href="/"
					>
						<img
							src={mode === "light" ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"}
							alt="Logo"
							style={{ height: 40, marginRight: 10 }}
						/>
					</Box>


					<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
						{links.map((link, i) => (
							<Button
								key={i}
								component={link.path ? "a" : "a"}
								href={link.href || link.path}
								color="inherit"
								sx={{
									fontFamily: "'Roboto', 'Ubuntu'",
									textTransform: "none",
									fontWeight: 300,
									fontSize: "0.95rem",
									"&:hover": { borderBottom: "2px solid #FF8614" },
									borderBottom: "none"
								}}
							>
								{link.label}
							</Button>
						))}

						<Button
							href="https://github.com/smswithoutborders"
							color="inherit"
							sx={{ minWidth: "auto", p: 0 }}
							aria-label="GitHub"
						>
							<GitHubIcon
								sx={{
									color: mode === "light" ? "#04228eff" : "#fff",
									fontSize: 24,
									"&:hover": { color: "#FF8614" }
								}}
							/>
						</Button>

						<LanguageSwitcher />

						<IconButton onClick={toggleTheme} color="inherit">
							{mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
						</IconButton>
					</Box>


					<IconButton
						color="inherit"
						edge="end"
						onClick={toggleDrawer}
						sx={{ display: { md: "none" } }}
					>
						{drawerOpen ? <CloseIcon /> : <MenuIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				anchor={isFarsi ? "left" : "right"}
				open={drawerOpen}
				onClose={toggleDrawer}
				PaperProps={{
					sx: {
						width: 240,
						backgroundColor: mode === "light" ? "#f9f9f9" : "#10143bff",
						color: mode === "light" ? "#000" : "#fff",
						p: 2,
						height: "50vh",
						overflow: "auto",
						top: "60px",
						borderRadius: 3
					}
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: isFarsi ? "flex-end" : "flex-start",
							mb: 2
						}}
					>

						<img
							src={mode === "light" ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"}
							alt="SMSWithoutBorders"
							style={{ height: 30 }}
						/>
					</Box>

					<Divider sx={{ mb: 2, borderColor: mode === "light" ? "#ccc" : "#555" }} />

					<List>
						{links.map((link, i) => (
							<ListItem key={i} disablePadding>
								<ListItemButton
									component="a"
									href={link.href || link.path}
									onClick={handleLinkClick}
									sx={{
										borderRadius: 2,
										mb: 1,
										"&:hover": { bgcolor: mode === "light" ? "#e6e6e6" : "#333" },
										px: 2
									}}
								>
									<ListItemText
										primary={link.label}
										primaryTypographyProps={{
											fontFamily: "'Roboto', 'Ubuntu'",
											fontSize: "1rem",
											fontWeight: 300,
											textAlign: isFarsi ? "right" : "left",
											color: mode === "light" ? "#000158" : "#fff"
										}}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>

					<Divider sx={{ my: 2, borderColor: mode === "light" ? "#ccc" : "#555" }} />

					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<Tooltip title="GitHub" arrow>
							<Button
								href="https://github.com/smswithoutborders"
								sx={{
									minWidth: "auto",
									p: 1,
									bgcolor: "#000158",
									color: "#fff",
									"&:hover": { bgcolor: "#FF8614" },
									borderRadius: 1,
								}}
							>
								<GitHubIcon />
							</Button>
						</Tooltip>

						<LanguageSwitcher />


						<Tooltip title="Toggle Theme" arrow>
							<IconButton onClick={toggleTheme} color="inherit">
								{mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
							</IconButton>
						</Tooltip>
					</Box>
				</Box>
			</Drawer>
		</>
	);
};

export default Navbar;
