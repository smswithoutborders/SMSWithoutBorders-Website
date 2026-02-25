import React, { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
	Tooltip,
	Collapse
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const { mode, toggleTheme } = useTheme();
	const isFarsi = i18n.language === "fa";

	const [drawerOpen, setDrawerOpen] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [drawerSubOpen, setDrawerSubOpen] = useState(false);

	const toggleDrawer = () => setDrawerOpen((prev) => !prev);
	const handleLinkClick = () => setDrawerOpen(false);
	const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
	const handleMenuClose = () => setAnchorEl(null);
	const handleDrawerSubToggle = () => setDrawerSubOpen(!drawerSubOpen);

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);


	const links = [
		{ label: t("navbar.link1", "Blog"), href: "https://blog.smswithoutborders.com/" },
		{ label: t("navbar.link6", "Features"), href: "/Features" },
		{ label: t("navbar.link5", "Documentation"), href: "https://docs.smswithoutborders.com/" },
		{ label: t("navbar.link2", "RelaySMS"), href: "https://relay.smswithoutborders.com/" },
		{ label: t("navbar.link3", "DekuSMS"), href: "https://Dekusms.com/" },
		{ label: t("navbar.link4", "Privacy Policy"), href: "/privacy-policy" },
		{
			label: t("navbar.link7", "Papers"),
			subLinks: [
				{
					label: t("papers.whitepaper", "Whitepaper"),
					href: "https://drive.google.com/file/d/1MobJrt1HkyZa956sdN2a3ux3B1vzIQ3Z/view"
				},
				   {
        label: t("papers.threatModel", "Threat Model"),
        href: "/threat-model",
        comingSoon: true
      }
			]
		}
	];

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					background: scroll
						? (mode === "light"
							? "#f7fbfff5"
							: "linear-gradient(135deg, #071f74f0 2%, #071f74ff 100%)")
						: "transparent",
					color: mode === "light" ? "#02397ce3" : "#ffffffff",
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
						px: { xs: 2, sm: 4, md: 4 },
						minHeight: { xs: 46, sm: 54, md: 64 }
					}}
				>
					<Box sx={{ width: { xs: "0", md: "100px" } }} />

					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							gap: { xs: 1, sm: 2, md: 3 }
						}}
					>
						{links.map((link, i) => {
							if (link.subLinks) {
								const isOpen = Boolean(anchorEl);
								return (
									<Box key={i} sx={{ display: "inline-block" }}>
										<Button
											color="inherit"
											sx={{
												fontFamily: "'Roboto', 'Ubuntu'",
												textTransform: "none",
												fontWeight: 300,
												fontSize: { xs: "0.9rem", sm: "0.75rem", md: "0.90rem" },
												transition: "all 0.1s ease",
												"&:hover": { borderBottom: "3px solid #FF8614" },
												borderBottom: "none",
												display: "flex",
												alignItems: "center",
												gap: 0.3
											}}
											onClick={handleMenuOpen}
										>
											{link.label}
											<ArrowDropDownIcon
												sx={{
													fontSize: "1.2rem",
													transition: "transform 0.2s",
													transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
												}}
											/>
										</Button>
										<Menu
											anchorEl={anchorEl}
											open={isOpen}
											onClose={handleMenuClose}
										>
											{link.subLinks.map((sub, idx) => (
												<MenuItem
													key={idx}
													component="a"
													href={sub.href}
													onClick={handleMenuClose}
												>
													{sub.label}
												</MenuItem>
											))}
										</Menu>
									</Box>
								);
							}
							return (
								<Button
									key={i}
									href={link.href}
									color="inherit"
									sx={{
										fontFamily: "'Roboto', 'Ubuntu'",
										textTransform: "none",
										fontWeight: 300,
										fontSize: { xs: "0.9rem", sm: "0.75rem", md: "0.90rem" },
										transition: "all 0.1s ease",
										"&:hover": { borderBottom: "3px solid #FF8614" },
										borderBottom: "none"
									}}
								>
									{link.label}
								</Button>
							);
						})}

						<Button
							href="https://github.com/smswithoutborders"
							color="inherit"
							sx={{ minWidth: "auto", p: 0 }}
							aria-label="GitHub"
						>
							<GitHubIcon
								sx={{
									color: mode === "light" ? "#04228eff" : "#ffffff",
									fontSize: { xs: 20, sm: 24, md: 26 },
									"&:hover": { color: "#ff6a14e3" }
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
						width: 260,
						backgroundColor: mode === "light" ? "#f9f9f9" : "#10143bff",
						color: mode === "light" ? "#000" : "#fff",
						p: 2,
						height: "65vh",
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
							<React.Fragment key={i}>
								{!link.subLinks ? (
									<ListItem disablePadding>
										<ListItemButton
											component="a"
											href={link.href}
											onClick={handleLinkClick}
											sx={{
												borderRadius: 2,
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
								) : (
									<Box>
										<ListItem disablePadding>
											<ListItemButton
												onClick={handleDrawerSubToggle}
												sx={{
													borderRadius: 2,
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
												{drawerSubOpen ? <ExpandLess /> : <ExpandMore />}
											</ListItemButton>
										</ListItem>

										<Collapse in={drawerSubOpen} timeout="auto" unmountOnExit>
											<List component="div" disablePadding>
												{link.subLinks.map((sub, idx) => (
													<ListItem key={idx} disablePadding>
														<ListItemButton
															component="a"
															href={sub.href}
															onClick={handleLinkClick}
															sx={{
																pl: 4,
																borderRadius: 2,
																"&:hover": { bgcolor: mode === "light" ? "#e6e6e6" : "#333" }
															}}
														>
															<ListItemText
																primary={sub.label}
																primaryTypographyProps={{
																	fontFamily: "'Roboto', 'Ubuntu'",
																	fontSize: "0.95rem",
																	fontWeight: 300,
																	textAlign: isFarsi ? "right" : "left",
																	color: mode === "light" ? "#000158" : "#fff"
																}}
															/>
														</ListItemButton>
													</ListItem>
												))}
											</List>
										</Collapse>
									</Box>
								)}
							</React.Fragment>
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