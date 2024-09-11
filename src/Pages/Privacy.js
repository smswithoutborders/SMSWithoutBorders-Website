import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ReactHtmlParser from "react-html-parser";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const theme = createTheme({
	typography: {
		fontFamily: "Roboto, sans-serif"
	}
});

export default function FixedContainer() {
	const { t, i18n } = useTranslation();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	useEffect(() => {
		AOS.init({
			duration: 1200,
			once: true
		});
	}, []);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		AOS.init({
			duration: 1200,
			once: true
		});
	}, []);

	const isFarsi = i18n.language === "fa";

	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<CssBaseline />

				{/* ============== Navbar ================= */}
				<AppBar
					position="fixed"
					sx={{
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundColor: "#1c222c",
						backgroundBlendMode: "overlay",
						direction: isFarsi ? "rtl" : "ltr"
					}}
				>
					<Toolbar
						sx={{
							justifyContent: isMobile ? "center" : "space-between",
							minHeight: { xs: 60, sm: 70 }
						}}
					>
						<Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
						{isMobile ? (
							<>
								<IconButton
									edge="start"
									color="inherit"
									aria-label="menu"
									onClick={handleMenu}
									sx={{ ml: "auto" }}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									PaperProps={{
										style: {
											width: "80%",
											maxWidth: "none",
											fontSize: "14px",
											fontWeight: "500"
										}
									}}
									MenuListProps={{
										sx: {
											p: 0,
											display: "flex",
											flexDirection: "column",
											alignItems: "center"
										}
									}}
								>
									<MenuItem
										onClick={handleClose}
										sx={{
											"&:hover": {
												color: "#c08507"
											}
										}}
										component="a"
										href="/"
										rel="noopener noreferrer"
									>
										{t("navbar.link")}
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										sx={{
											"&:hover": {
												color: "#c08507"
											}
										}}
										component="a"
										href="https://blog.smswithoutborders.com/"
										rel="noopener noreferrer"
									>
										{t("navbar.link1")}
									</MenuItem>

									<MenuItem
										onClick={handleClose}
										sx={{
											"&:hover": {
												color: "#c08507"
											}
										}}
										component="a"
										href="https://relay.smswithoutborders.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("navbar.link2")}
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										sx={{
											"&:hover": {
												color: "#c08507"
											}
										}}
										component="a"
										href="https://github.com/deku-messaging/Deku-SMS-Android"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("navbar.link3")}
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										sx={{
											"&:hover": {
												color: "#c08507"
											}
										}}
										component="a"
										href="/privacy-policy"
										rel="noopener noreferrer"
									>
										{t("footer.privacyPolicy")}
									</MenuItem>
									<MenuItem
										sx={{
											"&:hover": {
												color: "#c08507"
											}
										}}
									>
										<LanguageSwitcher />
									</MenuItem>
								</Menu>
							</>
						) : (
							<>
								<MenuItem
									onClick={handleClose}
									sx={{
										fontSize: "1rem",
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="/"
									rel="noopener noreferrer"
								>
									{t("navbar.link")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										fontSize: "1rem",
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://blog.smswithoutborders.com/"
									rel="noopener noreferrer"
								>
									{t("navbar.link1")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										fontSize: "1rem",
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://relay.smswithoutborders.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("navbar.link2")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										fontSize: "1rem",
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://github.com/deku-messaging/Deku-SMS-Android"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("navbar.link3")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										fontSize: "1rem",
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="/privacy-policy"
									rel="noopener noreferrer"
								>
									{t("footer.privacyPolicy")}
								</MenuItem>
								<MenuItem
									sx={{
										fontSize: "1rem"
									}}
								>
									<LanguageSwitcher />
								</MenuItem>
							</>
						)}
					</Toolbar>
				</AppBar>

				<Box sx={{ pt: 8 }}>
					<Container maxWidth={false} disableGutters>
						{/* ============================================= Privacy Policy Section ===================================================== */}
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
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
									component="p"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										textAlign: "justify",
										mb: 3,
										px: { xs: 2, sm: 3 }
									}}
									data-aos="fade-up"
								>
									{ReactHtmlParser(t("Privacy-Policy12.policyBody16"))}
								</Box>
							</Box>
						</Box>
					</Container>
				</Box>
			</React.Fragment>
		</ThemeProvider>
	);
}
