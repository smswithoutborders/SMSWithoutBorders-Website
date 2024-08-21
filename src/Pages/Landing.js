import React from "react";
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

// Create a theme with Roboto as the default font
const theme = createTheme({
	typography: {
		fontFamily: "Roboto, sans-serif"
	}
});

export default function FixedContainer() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth={false} disableGutters>
					{/* =========== Header Section =============== */}
					<Box
						sx={{
							width: "100%",
							height: { xs: "50vh", sm: "60vh", md: "70vh" },
							py: 4,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							backgroundColor: "#020732"
						}}
					>
						<Grid container>
							<Grid item xs={12}>
								<Box
									sx={{
										fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
										fontWeight: "bold",
										color: "white"
									}}
								>
									{t("header")}
								</Box>
								<Box
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
										mt: 1,
										color: "#c08507"
									}}
								>
									{t("subheader")}
								</Box>
								<Box
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
										mt: 1,
										color: "#004d40"
									}}
								>
									<LanguageSwitcher />
								</Box>
							</Grid>
						</Grid>
					</Box>

					{/* =========== About Section =============== */}
					<Box
						sx={{
							py: { xs: 6, sm: 8, md: 12 },
							position: "relative",
							overflow: "hidden",
							textAlign: "center"
						}}
					>
						<Box sx={{ mt: 6 }}>
							<Box
								sx={{
									fontSize: { xs: "1.5em", sm: "2.5em", md: "3em" },
									fontWeight: 500,
									color: "#020732",
									letterSpacing: 1.5,
									textTransform: "uppercase",
									marginBottom: "80px",
									marginTop: "40px"
								}}
							>
								{t("About.About-title")}
							</Box>
							<Box
								component="p"
								sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" }, color: "#2b3343" }}
							>
								{t("About.About_description")}
							</Box>
							<Box
								component="p"
								sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" }, color: "#2b3343" }}
							>
								{t("About.About_description1")}
							</Box>
							<Box
								component="p"
								sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" }, color: "#2b3343" }}
							>
								{t("About.About_description2")}
							</Box>
						</Box>
					</Box>
					{/* ================== Project Section ================== */}
					<Box sx={{ width: "80%", py: 4, mx: "auto" }}>
						<Typography
							variant="h4"
							align="center"
							sx={{
								fontSize: { xs: "1.5em", sm: "2.5em", md: "3em" },
								fontWeight: 500,
								color: "#020732",
								letterSpacing: 1.5,
								textTransform: "uppercase",
								textAlign: "center",
								marginBottom: "90px"
							}}
						>
							{t("projects_title")}
						</Typography>
						<Grid container spacing={4}>
							{/* ---------------- RelaySMS ----------------------------- */}
							<Grid item xs={12} sm={6}>
								<Card
									sx={{
										position: "relative",
										borderRadius: 2,
										boxShadow: 3,
										display: "flex",
										flexDirection: "column",
										height: { xs: "auto", sm: "500px" },
										overflow: "hidden",
										backgroundImage: "url('/Relay.png')",
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
								>
									<CardContent
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											textAlign: { xs: "center", sm: "left" },
											width: { xs: "100%", sm: "60%" },
											px: { xs: 1, sm: 2 },
											py: 1,
											marginRight: { sm: 1 },
											paddingRight: { sm: 1 },
											margin: "10px"
										}}
									>
										<Typography
											variant="h4"
											sx={{
												mb: 2,
												fontSize: { xs: "1rem", sm: "1.25rem", md: "1.25rem" },
												mt: 1,
												fontWeight: 750,
												color: "#020732",
												letterSpacing: 1.5,
												textTransform: "uppercase",
												marginBottom: "30px"
											}}
										>
											{t("project1.title")}
										</Typography>
										<Typography
											variant="body1"
											sx={{ color: "#848484", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}
										>
											{t("project1.description")}
										</Typography>
										<Box
											component="a"
											href="https://relay.smswithoutborders.com/"
											target="_blank"
											rel="noopener noreferrer"
											sx={{
												display: { xs: "none", md: "inline-flex" },
												alignItems: "center",
												marginTop: "5px",
												color: "#211b1b",
												padding: "10px 20px",
												borderRadius: "4px",
												textDecoration: "none",
												fontWeight: 300,
												"&:hover": {
													color: "#a56905"
												}
											}}
										>
											{t("project1.read_more")}
											<FaArrowCircleRight style={{ marginLeft: "8px" }} />
										</Box>
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
												<IconButton href="https://x.com/RelaySMS" aria-label="Website">
													<Public sx={{ color: "#020732" }} />
												</IconButton>
											</Box>
										</CardActions>
									</CardContent>
								</Card>
							</Grid>
							{/* ---------------- Deku-SMS ----------------------------- */}
							<Grid item xs={12} sm={6}>
								<Card
									sx={{
										position: "relative",
										borderRadius: 2,
										boxShadow: 3,
										display: "flex",
										flexDirection: "column",
										height: { xs: "auto", sm: "500px" },
										overflow: "hidden",
										backgroundImage: "url('/Deku.png')",
										backgroundSize: "cover",
										backgroundPosition: "center",
										"&::before": {
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											filter: "blur(5px)",
											zIndex: -1,
											display: { xs: "block", sm: "none" }
										}
									}}
								>
									<CardContent
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											textAlign: { xs: "center", sm: "left" },
											width: { xs: "100%", sm: "60%" },
											px: { xs: 1, sm: 2 },
											py: 1,
											marginRight: { sm: 1 },
											paddingRight: { sm: 1 },
											margin: "10px"
										}}
									>
										<Typography
											variant="h4"
											sx={{
												mb: 2,
												fontSize: { xs: "1rem", sm: "1.25rem", md: "1.25rem" },
												mt: 1,
												fontWeight: 700,
												color: "#020732",
												letterSpacing: 1.5,
												textTransform: "uppercase",
												marginBottom: "30px"
											}}
										>
											{t("project2.title")}
										</Typography>
										<Typography
											variant="body1"
											sx={{ color: "#848484", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}
										>
											{t("project2.description")}
										</Typography>
										<Box
											component="a"
											href="https://esms.smswithoutborders.com/"
											target="_blank"
											rel="noopener noreferrer"
											sx={{
												display: { xs: "none", md: "inline-flex" },
												alignItems: "center",
												marginTop: "5px",
												color: "#211b1b",
												padding: "10px 20px",
												borderRadius: "4px",
												textDecoration: "none",
												fontWeight: 300,
												"&:hover": {
													color: "#a56905"
												}
											}}
										>
											{t("project2.read_more")}
											<FaArrowCircleRight style={{ marginLeft: "8px" }} />
										</Box>
										<CardActions sx={{ justifyContent: "space-between", p: 2 }}>
											<Box>
												<IconButton
													href="https://github.com/smswithoutborders/SMSWithoutBorders-App-iOS"
													aria-label="GitHub"
												>
													<GitHub sx={{ color: "#020732" }} />
												</IconButton>
												<IconButton href="https://x.com/RelaySMS" aria-label="Twitter">
													<Twitter sx={{ color: "#020732" }} />
												</IconButton>
												<IconButton href="https://x.com/RelaySMS" aria-label="Website">
													<Telegram sx={{ color: "#020732" }} />
												</IconButton>
											</Box>
										</CardActions>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Box>

					{/* =========== Partner Section =============== */}
					<Box sx={{ py: 5, color: "white" }}>
						<Partner />
					</Box>
				</Container>
			</React.Fragment>
		</ThemeProvider>
	);
}
