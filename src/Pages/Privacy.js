import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createTheme } from "@mui/material/styles";
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
	Container
} from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const theme = createTheme({
	typography: {
		fontFamily: "'Mona Sans'"
	}
});

export default function FixedContainer() {
	const { t, i18n } = useTranslation();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isFarsi = i18n.language === "fa";
	const [scroll, setScroll] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const links = [
		{ label: t("navbar.link1"), href: "/" },
		{ label: t("navbar.link1"), href: "https://blog.smswithoutborders.com/" },
		{ label: t("navbar.link2"), href: "https://docs.smswithoutborders.com/" },
		{ label: t("navbar.link3"), href: "https://relay.smswithoutborders.com/" },
		{ label: t("navbar.link4"), href: "https://Dekusms.com/" },
		{ label: t("navbar.link5"), href: "/privacy-policy" }
	];

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		AOS.init({ duration: 1200, once: true });
	}, []);

	const toggleDrawer = () => setDrawerOpen(!drawerOpen);

	const handleLinkClick = () => {
		if (isMobile) setDrawerOpen(false);
	};

	return (
		<Box
			id="home"
			sx={{
				minHeight: "100vh",
				fontFamily: "'Unbounded', 'Mona Sans'",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: { xs: "center", md: "flex-start" },
				px: { xs: 3, sm: 6, md: 12 },
				pt: { xs: 4, sm: 6, md: 8 },
				pb: { xs: 4, sm: 6, md: 8 },
				background: "#f1f4f78a"
			}}
		>
			{/* ================= Navbar ================= */}
			<AppBar
				position="fixed"
				sx={{
					bgcolor: scroll ? "#f1f4f7f5" : "transparent",
					color: "#02397ce3",
					boxShadow: scroll ? 4 : 0,
					py: { xs: 0.2, sm: 0.5 },
					direction: isFarsi ? "rtl" : "ltr",
					transition: "background-color 0.3s ease, box-shadow 0.3s ease",
					zIndex: 1400,
					fontFamily: "'Mona Sans'"
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						px: { xs: 2, sm: 4, md: 6 },
						minHeight: { xs: 48, sm: 56, md: 66 }
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
									fontFamily: "'Mona Sans'",
									textTransform: "none",
									fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.3rem" },
									transition: "all 0.1s ease",
									"&:hover": { borderBottom: "3px solid #FF8614" },
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
								sx={{ fontSize: { xs: 20, sm: 24, md: 26 }, "&:hover": { color: "#FF8614" } }}
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

			{/* ================= Mobile Drawer ================= */}
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
					<Box sx={{ display: "flex", justifyContent: isFarsi ? "flex-end" : "flex-start", mb: 2 }}>
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
									sx={{ borderRadius: 1, mb: 1, "&:hover": { bgcolor: "#e6e6e6" }, px: 2 }}
								>
									<ListItemText
										primary={link.label}
										primaryTypographyProps={{
											fontFamily: "'Mona Sans'",
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
						sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 2, mb: 1 }}
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

			{/* ================= Main Content ================= */}
			<Box sx={{ pt: 8 }}>
				<Container maxWidth={false} disableGutters>
					<Box
						sx={{
							minHeight: "70vh",
							py: { xs: 2, sm: 4, md: 5 },
							overflow: "hidden",
							textAlign: "center",
							px: { xs: 0.1, sm: 1, md: 15 },
							margin: { xs: 1, sm: 2, md: 1 },
							direction: isFarsi ? "rtl" : "ltr"
						}}
						data-aos="fade-up"
					>
						<Box sx={{ mt: 6, px: { xs: 1, sm: 2, md: 3 } }}>
							<Box
								sx={{
									fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									marginBottom: { xs: "40px", sm: "60px", md: "60px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy.policyHeader")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy.policySubheader")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy.policyBody1")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy.policyBody2")}
							</Box>

							{/* =========== policy body 2 ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy2.policyHeader2")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									textAlign: "justify",
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy2.policySubheader2")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy2.policyBody2")}
							</Box>

							{/* =========== policy body 3 ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy3.policyHeader3")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy3.policyBody3")}
							</Box>

							<Box
								component="ul"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									mb: 3,
									listStyleType: "disc",
									textAlign: "left"
								}}
								data-aos="fade-up"
							>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionAccount"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionCompany"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionCookies"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionCountry"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionDevice"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionPersonalData"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionService"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionServiceProvider"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionThirdParty"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionUsageData"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionWebsite"))}
								</Box>
								<Box component="li" sx={{ mb: 2 }}>
									{ReactHtmlParser(t("Privacy-Policy3.definitionYou"))}
								</Box>
							</Box>

							{/* =========== Policy Body 4 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy4.policyHeader4")}
							</Box>

							{/* =========== Policy Body 5 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy5.policyHeader5")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy5.policyBody5")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy5.policyBody6")}
							</Box>

							{/* =========== Policy Body 6 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy6.policyHeader6")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy6.policyBody7")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy6.policyBody8")}
							</Box>

							{/* =========== Policy Body 7 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy7.policyHeader7")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy7.policyBody9")}
							</Box>

							{/* =========== Policy Body 8 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy8.policyHeader8")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy8.policyBody10")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy8.policyBody11")}
							</Box>

							{/* =========== Policy Body 9 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy9.policyHeader9")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy9.policyBody12")}
							</Box>

							{/* =========== Policy Body 10 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy10.policyHeader10")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy10.policyBody14")}
							</Box>

							{/* =========== Policy Body 11 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy11.policyHeader11")}
							</Box>
							<Box
								component="p"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
								data-aos="fade-up"
							>
								{t("Privacy-Policy11.policyBody15")}
							</Box>

							{/* =========== Policy Body 12 Section ======== */}
							<Box
								sx={{
									fontSize: { xs: "1em", sm: "1em", md: "1.5em" },
									fontWeight: 500,
									color: "#041c94",
									letterSpacing: 1.5,
									textAlign: "justify",
									marginBottom: { xs: "20px", sm: "30px", md: "30px" },
									marginTop: { xs: "20px", sm: "30px", md: "30px" }
								}}
								data-aos="fade-left"
							>
								{t("Privacy-Policy12.policyHeader12")}
							</Box>
							<Box
								component="h6"
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
									color: "#2b3343",
									lineHeight: 2,
									textAlign: "justify",
									mb: 3,
									px: { xs: 2, sm: 3 }
								}}
							>
								{ReactHtmlParser(t("Privacy-Policy12.policyBody16") || "")}
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}
