import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import Telegram from "@mui/icons-material/Telegram";
import Public from "@mui/icons-material/Public";
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
	const { t } = useTranslation();
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
						backgroundBlendMode: "overlay"
					}}
				>
					<Toolbar
						sx={{
							justifyContent: isMobile ? "center" : "space-between",
							minHeight: { xs: 80, sm: 90 }
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
											fontSize: "18px",
											fontWeight: "700"
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
										target="_blank"
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
										fontSize: "1.2rem",
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://blog.smswithoutborders.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("navbar.link1")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										fontSize: "1.2rem",
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
										fontSize: "1.2rem",
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
									sx={{
										fontSize: "1.2rem"
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
							sx={{
								width: "100%",
								height: { xs: "50vh", sm: "60vh", md: "40vh" },
								py: 4,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundColor: "#1c222c",
								backgroundBlendMode: "overlay"
							}}
							data-aos="fade-up"
						>
							<Grid container>
								<Grid item xs={12}>
									<Box
										sx={{
											fontSize: { xs: "1.5rem", sm: "2rem", md: "3.5rem" },
											fontWeight: "bold",
											color: "white"
										}}
										data-aos="fade-in"
									>
										{t("header")}
									</Box>

									<Box
										sx={{
											fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
											mt: 1,
											color: "white",
											fontWeight: "bold"
										}}
										data-aos="fade-up"
									>
										{t("subheader")}
									</Box>
									<Box
										sx={{
											fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
											mt: 1,
											color: "#004d40"
										}}
									></Box>
								</Grid>
							</Grid>
						</Box>

						{/* ============================================= About Section ===================================================== */}
						<Box
							sx={{
								minHeight: "70vh",
								py: { xs: 6, sm: 8, md: 12 },
								overflow: "hidden",
								textAlign: "center",
								px: { xs: 1, sm: 4, md: 20 },
								margin: { xs: 2, sm: 3, md: 2 }
							}}
							data-aos="fade-up"
						>
							<Box sx={{ mt: 6, px: { xs: 1, sm: 2, md: 3 } }}>
								<Box
									sx={{
										fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
										fontWeight: 600,
										color: "#020732",
										letterSpacing: 1.5,
										marginBottom: { xs: "40px", sm: "60px", md: "80px" },
										marginTop: { xs: "20px", sm: "30px", md: "40px" }
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
						<Box sx={{ minHeight: "60vh", width: "80%", py: 4, mx: "auto" }}>
							<Typography
								variant="h4"
								align="center"
								sx={{
									fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
									fontWeight: 600,
									color: "#020732",
									marginBottom: { xs: "40px", sm: "60px", md: "80px" },
									marginTop: { xs: "20px", sm: "20px", md: "10px" }
								}}
								data-aos="fade-left"
							>
								{t("projects_title")}
							</Typography>
							<Grid container spacing={4} className="cards">
								{/* ---------------- RelaySMS ----------------------------- */}
								<Grid item xs={12} sm={12} md={6}>
									<Card
										className="cardself"
										sx={{
											position: "relative",
											borderRadius: 2,
											boxShadow: 3,
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											height: "100%",
											overflow: "hidden",
											backgroundImage: { xs: "none", sm: "url('/Relay.png')" },
											backgroundSize: "cover",
											backgroundPosition: "center",
											"&::before": {
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "fit-content",
												background: "inherit",
												filter: "blur(5px)",
												zIndex: -1,
												display: { xs: "block", sm: "none" }
											}
										}}
										data-aos="fade-left"
									>
										<CardContent
											sx={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												textAlign: { xs: "justify", sm: "left" },
												width: { xs: "100%", sm: "60%" },
												px: { xs: 1, sm: 2 },
												py: 1,
												marginRight: { sm: 1 },
												paddingRight: { sm: 1 },
												margin: "10px",
												flexGrow: 1
											}}
										>
											<Typography
												variant="h4"
												sx={{
													mb: 2,
													fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem" },
													mt: 1,
													fontWeight: 750,
													color: "#020732",
													letterSpacing: 1.5,
													marginBottom: "30px"
												}}
											>
												{t("project1.title")}
											</Typography>
											<Typography
												variant="body1"
												sx={{
													color: "#2b3343",
													fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
													margin: "20px",
													letterSpacing: 0.5,
													lineHeight: 2
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
													textAlign: "start",
													"&:hover": {
														color: "#a56905"
													}
												}}
											>
												{t("project1.read_more")}
												<FaArrowCircleRight style={{ marginLeft: "8px" }} />
											</Box>
										</CardContent>
										<CardActions sx={{ justifyContent: "space-between", p: 2 }}>
											<Box>
												<IconButton
													href="https://github.com/smswithoutborders/SMSWithoutBorders-App-Android"
													aria-label="GitHub"
												>
													<GitHub sx={{ color: "#020732" }} />
												</IconButton>
												<IconButton href="https://x.com/RelaySMS" aria-label="Twitter">
													<Twitter sx={{ color: "#020732" }} />
												</IconButton>
												<IconButton
													href="https://relay.smswithoutborders.com/"
													aria-label="Website"
												>
													<Public sx={{ color: "#020732" }} />
												</IconButton>
											</Box>
										</CardActions>
									</Card>
								</Grid>

								{/* ---------------- Deku-SMS ----------------------------- */}

								<Grid item xs={12} sm={12} md={6}>
									<Card
										sx={{
											position: "relative",
											borderRadius: 2,
											boxShadow: 3,
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											height: "100%",
											overflow: "hidden",
											backgroundImage: { xs: "none", sm: "url('/Deku.png')" },
											backgroundSize: "cover",
											backgroundPosition: "center",
											"&::before": {
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												background: "inherit",
												filter: "blur(5px)",
												zIndex: -1,
												display: { xs: "block", sm: "none" }
											}
										}}
										data-aos="fade-left"
									>
										<CardContent
											sx={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												textAlign: { xs: "justify", sm: "left" },
												width: { xs: "100%", sm: "60%" },
												px: { xs: 1, sm: 2 },
												py: 1,
												marginRight: { sm: 1 },
												paddingRight: { sm: 1 },
												margin: "10px",
												flexGrow: 1
											}}
										>
											<Typography
												variant="h4"
												sx={{
													mb: 2,
													fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem" },
													mt: 1,
													fontWeight: 700,
													color: "#020732",
													letterSpacing: 1.5,
													marginBottom: "30px"
												}}
											>
												{t("project2.title")}
											</Typography>
											<Typography
												variant="body1"
												sx={{
													color: "#2b3343",
													fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
													margin: "20px",
													letterSpacing: 0.5,
													lineHeight: 2
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
													textAlign: "start",
													"&:hover": {
														color: "#a56905"
													}
												}}
											>
												{t("project2.read_more")}
												<FaArrowCircleRight style={{ marginLeft: "8px" }} />
											</Box>
										</CardContent>
										<CardActions sx={{ justifyContent: "space-between", p: 2 }}>
											<Box>
												<IconButton
													href="https://github.com/deku-messaging/Deku-SMS-Android/blob/master/README.md"
													aria-label="GitHub"
												>
													<GitHub sx={{ color: "#020732" }} />
												</IconButton>
												<IconButton href="https://t.me/deku_sms" aria-label="Telegram">
													<Telegram sx={{ color: "#020732" }} />
												</IconButton>
											</Box>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Box>

						{/* =========== Partner Section =============== */}
						<Box sx={{ py: 5, color: "white" }}>
							<Partner />
						</Box>
					</Container>
				</Box>
			</React.Fragment>
		</ThemeProvider>
	);
}
