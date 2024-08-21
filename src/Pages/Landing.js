import React from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
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

export default function FixedContainer() {
	const { t } = useTranslation();

	return (
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
						backgroundColor: "#f9f9f9"
					}}
				>
					<Box sx={{ textAlign: "center", mt: 6 }}>
						<Box
							sx={{
								fontSize: { xs: "1.5em", sm: "2.5em", md: "3em" },
								fontWeight: 700,
								color: "#020732",
								letterSpacing: 1.5,
								textTransform: "uppercase",
								marginBottom: "40px",
								marginTop: "40px",
								mb: 2
							}}
						>
							{t("goal_title")}
						</Box>
						{t("goal_description", { returnObjects: true }).map((desc, index) => (
							<Box
								key={index}
								sx={{
									fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
									color: "#848484",
									mb: 2
								}}
							>
								{desc}
							</Box>
						))}
					</Box>
				</Box>

				{/* ================== Project Section ================== */}
				<Box sx={{ width: "80%", py: 4, mx: "auto" }}>
					<Typography
						variant="h4"
						align="center"
						sx={{
							fontSize: { xs: "1.5em", sm: "2.5em", md: "3em" },
							fontWeight: 700,
							color: "#020732",
							letterSpacing: 1.5,
							textTransform: "uppercase",
							marginBottom: "40px",
							textAlign: "center"
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
										marginRight: { sm: 3 },
										paddingRight: { sm: 3 },
										margin: "10px"
									}}
								>
									<Typography
										variant="h4"
										sx={{
											mb: 2,
											fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
											mt: 1
										}}
									>
										{t("project1.title")}
									</Typography>
									<Typography
										variant="body1"
										sx={{ color: "#848484", fontSize: { xs: "1rem", sm: "1rem", md: "1.25rem" } }}
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
											marginTop: "15px",
											color: "#211b1b",
											padding: "10px 20px",
											borderRadius: "4px",
											textDecoration: "none",
											fontWeight: 600,
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

						{/* ---------------- DekuSMS ----------------------------- */}
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
										marginRight: { sm: 3 },
										paddingRight: { sm: 3 },
										margin: "10px"
									}}
								>
									<Typography
										variant="h4"
										sx={{
											mb: 2,
											fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
											mt: 1
										}}
									>
										{t("project2.title")}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: "#848484",
											fontSize: { xs: "1rem", sm: "1rem", md: "1.25rem" }
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
											display: { xs: "none", md: "inline-flex" },
											alignItems: "center",
											marginTop: "15px",
											color: "#211b1b",
											padding: "10px 20px",
											borderRadius: "4px",
											textDecoration: "none",
											fontWeight: 600,
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
												href="https://github.com/deku-messaging/Deku-SMS-Android"
												aria-label="GitHub"
											>
												<GitHub sx={{ color: "#020732" }} />
											</IconButton>

											<IconButton href="https://t.me/deku_sms" aria-label="Telegram channel">
												<Telegram sx={{ color: "#020732" }} />
											</IconButton>
										</Box>
									</CardActions>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ width: "80%", py: 4, mx: "auto" }}>
					<Partner />
				</Box>
			</Container>
		</React.Fragment>
	);
}
