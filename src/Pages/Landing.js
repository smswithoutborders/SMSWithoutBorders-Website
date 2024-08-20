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
import LanguageSwitcher from "../Components/LanguageSwitcher";

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
						bgcolor: "#e0f7fa"
					}}
				>
					<Grid container>
						<Grid item xs={12}>
							<Box
								sx={{
									fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
									fontWeight: "bold",
									color: "#00796b"
								}}
							>
								{t("header")}
							</Box>
							<Box
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
									mt: 1,
									color: "#004d40" // Slightly darker color for subheader
								}}
							>
								{t("subheader")}
							</Box>
							<Box
								sx={{
									fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
									mt: 1,
									color: "#004d40" // Slightly darker color for subheader
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
								fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
								fontWeight: "bold",
								color: "#00aeef",
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
					<Typography variant="h4" align="center" sx={{ mb: 4, color: "#00796b" }}>
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
									height: { xs: "auto", sm: "400px" },
									overflow: "hidden",
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
										paddingRight: { sm: 3 }
									}}
								>
									<Typography variant="h5" sx={{ color: "#00796b", mb: 2 }}>
										{t("project1.title")}
									</Typography>
									<Typography variant="body1" sx={{ color: "#848484" }}>
										{t("project1.description")}
									</Typography>
									<CardActions sx={{ justifyContent: "space-between", p: 2 }}>
										<Box>
											<IconButton href="https://github.com/your-repo" aria-label="GitHub">
												<GitHub sx={{ color: "#00796b" }} />
											</IconButton>
											<IconButton href="https://twitter.com/your-profile" aria-label="Twitter">
												<Twitter sx={{ color: "#00796b" }} />
											</IconButton>
										</Box>
										<Box>
											<a
												href="https://relaysms.com"
												style={{ textDecoration: "none", color: "#00796b" }}
											>
												{t("project1.read_more")}
											</a>
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
									height: { xs: "auto", sm: "400px" },
									overflow: "hidden",
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
										paddingRight: { sm: 3 }
									}}
								>
									<Typography variant="h5" sx={{ color: "#00796b", mb: 2 }}>
										{t("project2.title")}
									</Typography>
									<Typography variant="body1" sx={{ color: "#848484" }}>
										{t("project2.description")}
									</Typography>
									<CardActions sx={{ justifyContent: "space-between", p: 2 }}>
										<Box>
											<IconButton href="https://github.com/your-repo" aria-label="GitHub">
												<GitHub sx={{ color: "#00796b" }} />
											</IconButton>
											<IconButton href="https://twitter.com/your-profile" aria-label="Twitter">
												<Twitter sx={{ color: "#00796b" }} />
											</IconButton>
										</Box>
										<Box>
											<a
												href="https://dekusms.com"
												style={{ textDecoration: "none", color: "#00796b" }}
											>
												{t("project2.read_more")}
											</a>
										</Box>
									</CardActions>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</React.Fragment>
	);
}
