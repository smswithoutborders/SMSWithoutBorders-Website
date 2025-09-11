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
	Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const links = [
		{ label: t("navbar.link1"), href: "https://blog.smswithoutborders.com/" },
		{ label: t("navbar.link6"), href: "/Features" },
		{ label: t("navbar.link5"), href: "https://docs.smswithoutborders.com/" },
		{ label: t("navbar.link2"), href: "https://relay.smswithoutborders.com/" },
		{ label: t("navbar.link3"), href: "https://Dekusms.com/" },
		{ label: t("navbar.link4"), href: "/privacy-policy" }
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
					bgcolor: scroll ? "#f7fbfff5" : "transparent",
					color: "#02397ce3",
					py: { xs: 0.2, sm: 0.5 },
					direction: isFarsi ? "rtl" : "ltr",
					transition: "background-color 0.3s ease",
					zIndex: 1200,
					fontFamily: "'Unbounded'",
					boxShadow: "none"
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						px: { xs: 2, sm: 4, md: 6 },
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
						{links.map((link, i) => (
							<Button
								key={i}
								href={link.href}
								color="inherit"
								sx={{
									fontFamily: "'Unbounded'",
									textTransform: "none",
									fontWeight: 320,
									fontSize: { xs: "0.9rem", sm: "0.75rem", md: "0.90rem" },
									transition: "all 0.1s ease",
									"&:hover": {
										borderBottom: "3px solid #FF8614"
									},
									borderBottom: "none"
								}}
							>
								{link.label}
							</Button>
						))}

						<Button
							href="https://github.com/deku-messaging/Deku-SMS-Android"
							color="inherit"
							sx={{ minWidth: "auto", p: 0 }}
							aria-label="GitHub"
						>
							<GitHubIcon
								sx={{
									color: "#04228eff",
									fontSize: { xs: 20, sm: 24, md: 26 },
									"&:hover": { color: "#ff6a14e3" }
								}}
							/>
						</Button>

						<LanguageSwitcher />
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
						backgroundColor: "#f9f9f9",
						p: 2,
						height: "60vh",
						overflow: "auto",
						top: "60px"
					}
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						height: "80%",
						alignItems: "stretch"
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: isFarsi ? "flex-end" : "flex-start",
							mb: 2
						}}
					>
						<img
							src="/SWOB-Default.png"
							alt="SMSWithoutBorders"
							style={{ height: 30, width: "auto" }}
						/>
					</Box>

					<Divider sx={{ my: 1, borderColor: "#000158" }} />

					<List>
						{links.map((link, i) => (
							<ListItem key={i} disablePadding>
								<ListItemButton
									component="a"
									href={link.href}
									onClick={handleLinkClick}
									sx={{
										borderRadius: 1,
										mb: 1,
										"&:hover": { bgcolor: "#e6e6e6" },
										px: 2
									}}
								>
									<ListItemText
										primary={link.label}
										primaryTypographyProps={{
											fontFamily: "'Unbounded'",
											fontSize: "1rem",
											fontWeight: 500,
											textAlign: isFarsi ? "right" : "left",
											color: "#000158"
										}}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>

					<Divider sx={{ my: 1, borderColor: "#000158" }} />

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
							gap: 2,
							mb: 1
						}}
					>
						<Button
							href="https://github.com/deku-messaging/Deku-SMS-Android"
							sx={{
								minWidth: "auto",
								p: 1,
								bgcolor: "#000158",
								color: "#fff",
								"&:hover": { bgcolor: "#FF8614" },
								borderRadius: 1
							}}
						>
							<GitHubIcon />
						</Button>

						<LanguageSwitcher />
					</Box>
				</Box>
			</Drawer>
		</>
	);
};

export default Navbar;
