import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaArrowCircleRight } from "react-icons/fa";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import Partner from "../Components/partner";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
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
										{t("navbar.link4")}
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
									{t("navbar.link4")}
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
						{/* ============================================= Header Section =================================================== */}
						<Box
							id="home"
							sx={{
								width: "100%",
								height: { xs: "60vh", sm: "70vh", md: "50vh" },
								paddingTop: "100px",
								py: 4,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundColor: "#1c222c",
								backgroundBlendMode: "overlay",
								direction: isFarsi ? "rtl" : "ltr"
							}}
							data-aos="fade-up"
						>
							<Grid container>
								<Grid item xs={12}>
									<Box
										sx={{
											fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
											fontWeight: "700",
											color: "white"
										}}
										data-aos="fade-in"
									>
										{t("header")}
									</Box>

									<Box
										sx={{
											fontSize: { xs: "1rem", sm: "1.25rem", md: "1.2rem" },
											mt: 1,
											color: "white",
											fontWeight: "semibold"
										}}
										data-aos="fade-up"
									>
										{t("subheader")}
									</Box>
								</Grid>
							</Grid>
						</Box>

						{/* ============================================= About Section ===================================================== */}
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
									{t("About.About-title")}
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
									{t("About.description")}
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
									{t("About.description1")}
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
									{t("About.description2")}
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
									{parse(t("About.description3"))}
								</Box>
							</Box>
						</Box>
						{/* ================================================ project section ======================================== */}
						<Box sx={{ minHeight: "60vh", width: "80%", py: 4, mx: "auto" }}>
							<Typography
								variant="h4"
								align="center"
								sx={{
									fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
									fontWeight: 500,
									color: "#041c94",
									marginBottom: { xs: "40px", sm: "60px", md: "70px" },
									marginTop: { xs: "20px", sm: "20px", md: "10px" },
									direction: isFarsi ? "rtl" : "ltr"
								}}
								data-aos="fade-left"
							>
								{t("projects_title")}
							</Typography>

							{/* ---------------- RelaySMS ----------------------------- */}
							<Box
								sx={{
									mb: 5,
									py: 3,
									px: 2,
									borderRadius: 2,
									boxShadow: 3,
									backgroundColor: "#f9f9f9",
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
											fontWeight: 600,
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
										fontSize: "1rem",
										lineHeight: 2,
										mb: 3
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
										fontWeight: 300,
										"&:hover": { color: "#a56905" }
									}}
								>
									{t("project1.read_more")}
									<FaArrowCircleRight style={{ marginLeft: "8px" }} />
								</Box>
							</Box>

							{/* ---------------- Deku-SMS ----------------------------- */}
							<Box
								sx={{
									py: 3,
									px: 2,
									borderRadius: 2,
									boxShadow: 3,
									backgroundColor: "#f9f9f9",
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
											fontWeight: 600,
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
										fontSize: "1rem",
										lineHeight: 2,
										mb: 3
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
										fontWeight: 300,
										"&:hover": { color: "#a56905" }
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
