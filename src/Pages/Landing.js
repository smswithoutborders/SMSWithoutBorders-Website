import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	CssBaseline,
	Box,
	Container,
	Grid,
	Typography,
	IconButton,
	AppBar,
	Menu,
	MenuItem,
	Toolbar,
	useMediaQuery
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaArrowCircleRight } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import Partner from "../Components/partner";
import parse from "html-react-parser";
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
			duration: 1000,
			easing: "ease-in-out",
			once: false
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
						boxShadow: {
							xs: "1px 4px 6px rgba(0, 0, 0, 0.03)",
							md: "0px 2px 4px rgba(0, 0, 0, 0.03)"
						},
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundColor: "#FFFFFF",
						color: "#000158",
						backgroundBlendMode: "overlay",
						direction: isFarsi ? "rtl" : "ltr"
					}}
				>
					<Toolbar
						sx={{
							justifyContent: isMobile ? "center" : "space-between",
							minHeight: { xs: 60, sm: 70 },
							px: { xs: 2, sm: 5, md: 20 }
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
									{[
										{
											href: "https://blog.smswithoutborders.com/",
											label: t("navbar.link1")
										},
										{
											href: "https://docs.smswithoutborders.com/",
											label: t("navbar.link5"),
											target: "_blank"
										},
										{
											href: "https://relay.smswithoutborders.com/",
											label: t("navbar.link2"),
											target: "_blank"
										},
										{
											href: "https://github.com/deku-messaging/Deku-SMS-Android",
											label: t("navbar.link3"),
											target: "_blank"
										},
										{
											href: "/privacy-policy",
											label: t("navbar.link4")
										}
									].map((item, index) => (
										<MenuItem
											key={index}
											onClick={handleClose}
											sx={{
												color: "#000158",
												"&:hover": { color: "#c08507" }
											}}
											component="a"
											href={item.href}
											target={item.target || "_self"}
											rel="noopener noreferrer"
										>
											{item.label}
										</MenuItem>
									))}
									<MenuItem>
										<LanguageSwitcher />
									</MenuItem>
								</Menu>
							</>
						) : (
							<>
								{[
									{
										href: "https://blog.smswithoutborders.com/",
										label: t("navbar.link1")
									},
									{
										href: "https://docs.smswithoutborders.com/",
										label: t("navbar.link5"),
										target: "_blank"
									},
									{
										href: "https://relay.smswithoutborders.com/",
										label: t("navbar.link2"),
										target: "_blank"
									},
									{
										href: "https://github.com/deku-messaging/Deku-SMS-Android",
										label: t("navbar.link3"),
										target: "_blank"
									},
									{
										href: "/privacy-policy",
										label: t("navbar.link4")
									}
								].map((item, index) => (
									<MenuItem
										key={index}
										onClick={handleClose}
										sx={{
											fontSize: "1rem",
											"&:hover": { color: "#c08507" }
										}}
										component="a"
										href={item.href}
										target={item.target || "_self"}
										rel="noopener noreferrer"
									>
										{item.label}
									</MenuItem>
								))}
								<MenuItem sx={{ fontSize: "1rem" }}>
									<LanguageSwitcher />
								</MenuItem>
							</>
						)}
					</Toolbar>
				</AppBar>

				<Box sx={{ pt: 8 }}>
					<Container maxWidth={false} disableGutters>
						{/* ============================================= Header Section =================================================== */}
						<Box
							id="home"
							sx={{
								width: "100%",
								// height: { xs: "30vh", sm: "50vh", md: "40vh" },
								paddingTop: "70px",
								py: { xs: 6, sm: 15 },
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundColor: "#FFFFFF",
								backgroundBlendMode: "overlay",
								direction: isFarsi ? "rtl" : "ltr",
								px: { xs: 2, sm: 3, md: 5 }
							}}
							data-aos="fade-up"
						>
							{/* Image */}
							<Box
								component="img"
								src="/SWOB-Default.png"
								alt="Normal Image"
								sx={{
									width: { xs: "100%", sm: "70%", md: "40%" },
									height: "auto",
									marginBottom: { xs: "50px", sm: "10px", md: "10px" },
									marginTop: { xs: "40px", sm: "20px", md: "50px" },
									marginY: "auto"
								}}
							/>
						</Box>

						{/* ============================================= About Section ===================================================== */}
						<Box
							sx={{
								fontFamily: "Unbounded, Ubuntu",
								fontWeight: 400,
								color: "#FF8614",
								minHeight: "70vh",
								backgroundColor: "#000158",
								py: { xs: 6, md: 8 },
								px: { xs: 2, md: 18 },
								direction: isFarsi ? "rtl" : "ltr"
							}}
							data-aos="fade-right"
						>
							<Typography
								sx={{
									fontSize: { xs: "1.5em", sm: "2em", md: "3em" },
									mb: 4,
									fontFamily: "Unbounded, Ubuntu",
									fontWeight: 400,
									textTransform: "uppercase",
									letterSpacing: 1.5,
									textAlign: "center"
								}}
								data-aos="zoom-in"
							>
								{t("About.About-title")}
							</Typography>

							{/* Subheader */}
							<Typography
								sx={{
									fontSize: { xs: "1.5em", sm: "1.25em", md: "2em" },
									fontWeight: 300,
									fontFamily: "Unbounded, Ubuntu",
									color: "#FFFFFF",
									marginBottom: "20px",
									textAlign: isFarsi ? "right" : "left"
								}}
								data-aos="fade-left"
							>
								{t("subheader")}
							</Typography>

							<Grid container spacing={4}>
								<Grid item xs={12} sm={6} data-aos="fade-left">
									<Typography
										sx={{
											fontSize: { xs: "1rem", sm: "1.25rem" },
											lineHeight: 1.8,
											color: "#FFFFFF",
											fontFamily: "Unbounded, Ubuntu",
											fontWeight: 200
										}}
									>
										{t("About.description")}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6} data-aos="fade-right">
									<Typography
										sx={{
											fontSize: { xs: "1rem", sm: "1.25rem" },
											lineHeight: 1.8,
											color: "#FFFFFF",
											fontFamily: "Unbounded, Ubuntu",
											fontWeight: 200
										}}
									>
										{t("About.description1")}
									</Typography>
									<Typography
										sx={{
											fontSize: { xs: "1rem", sm: "1.25rem" },
											lineHeight: 1.8,
											color: "#FFFFFF",
											fontFamily: "Unbounded, Ubuntu",
											fontWeight: 200
										}}
									>
										{t("About.description2")}
									</Typography>
								</Grid>

								{/* Row Underneath the Two Columns */}
								<Grid item xs={16}>
									<Box
										sx={{
											textAlign: "justify",
											fontSize: { xs: "1rem", sm: "1.25rem" },
											lineHeight: 2,
											color: "#FFFFFF",
											fontFamily: "Unbounded, Ubuntu",
											fontWeight: 200
										}}
									>
										{parse(t("About.description3"))}
									</Box>
								</Grid>
							</Grid>
						</Box>

						{/* ================================================ project section ======================================== */}
						<Box
							sx={{ minHeight: "60vh", width: "80%", py: 4, mx: "auto", backgroundColor: "white" }}
						>
							<Typography
								variant="h3"
								sx={{
									fontSize: { xs: "2em", sm: "2.2em", md: "2.5em" },
									mb: 4,
									fontFamily: "Unbounded, Ubuntu",
									fontWeight: 400,
									textTransform: "camelcase",
									letterSpacing: 1.5,
									textAlign: "center",
									direction: isFarsi ? "rtl" : "ltr",
									color: "#FF8614",
									py: { xs: 6, md: 8 },
									px: { xs: 2, md: 18 }
								}}
								data-aos="fade-left"
							>
								{t("projects_title")}
							</Typography>

							{/* ---================== RelaySMS ----===================- */}
							<Box
								sx={{
									mb: 5,
									py: 3,
									px: 2,
									borderRadius: 2,
									boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
									backgroundColor: "rgba(252, 252, 252, 0.9)",
									direction: isFarsi ? "rtl" : "ltr"
								}}
								data-aos="fade-left"
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2,
										mb: 2
									}}
								>
									<Box
										component="img"
										src="/RelaySMS.png"
										alt="Logo"
										sx={{
											width: { xs: "30px", sm: "40px", md: "50px" },
											height: "auto"
										}}
									/>
									<Typography
										variant="h4"
										sx={{
											fontFamily: "Unbounded, Ubuntu",
											fontWeight: 400,
											color: "#041c94",
											fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }
										}}
									>
										{t("project1.title")}
									</Typography>
								</Box>

								<Typography
									variant="body1"
									sx={{
										color: "#2b3343",
										lineHeight: 2,
										mb: 3,
										fontFamily: "Unbounded, Ubuntu",
										fontWeight: 200,
										fontSize: { xs: "1rem", sm: "1.25rem" }
									}}
								>
									{t("project1.description")}
								</Typography>
								<Box
									component="a"
									href="https://relay.smswithoutborders.com/"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										color: "blue",
										textDecoration: "none",
										fontFamily: "Unbounded, Ubuntu",
										fontWeight: 200,
										"&:hover": { color: "#a56905" },
										fontSize: { xs: "1rem", sm: "1.25rem" }
									}}
								>
									{t("project1.read_more")}
									<FaArrowCircleRight style={{ marginLeft: "8px" }} />
								</Box>
							</Box>

							{/* ---------------- Deku-SMS ----------------------------- */}
							<Box
								sx={{
									mb: 5,
									py: 3,
									px: 2,
									borderRadius: 2,
									boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
									backgroundColor: "rgba(252, 252, 252, 0.9)",
									direction: isFarsi ? "rtl" : "ltr"
								}}
								data-aos="fade-left"
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2,
										mb: 2
									}}
								>
									<Box
										component="img"
										src="/DekuSMS.png"
										alt="Logo"
										sx={{
											width: { xs: "30px", sm: "40px", md: "50px" },
											height: "auto"
										}}
									/>
									<Typography
										variant="h4"
										sx={{
											fontFamily: "Unbounded, Ubuntu",
											fontWeight: 400,
											color: "#041c94",
											fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }
										}}
									>
										{t("project2.title")}
									</Typography>
								</Box>

								<Typography
									variant="body1"
									sx={{
										color: "#2b3343",
										fontSize: { xs: "1rem", sm: "1.25rem" },
										lineHeight: 2,
										mb: 3,
										fontFamily: "Unbounded, Ubuntu",
										fontWeight: 200
									}}
								>
									{t("project2.description")}
								</Typography>
								<Box
									component="a"
									href="https://github.com/deku-messaging/Deku-SMS-Android/blob/master/README.md"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										color: "blue",
										textDecoration: "none",
										fontFamily: "Unbounded, Ubuntu",
										fontWeight: 200,
										"&:hover": { color: "#a56905" },
										fontSize: { xs: "1rem", sm: "1.25rem" }
									}}
								>
									{t("project2.read_more")}
									<FaArrowCircleRight style={{ marginLeft: "8px" }} />
								</Box>
							</Box>
						</Box>

						{/* =========== Partner Section =============== */}
						<Partner />
					</Container>
				</Box>
			</React.Fragment>
		</ThemeProvider>
	);
}
