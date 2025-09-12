import React from "react";
import {
	Box,
	Typography,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Stack,
	Chip
} from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Projects = () => {
	const { mode } = useTheme();
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#071f74ef" : "#ffffff";
	const borderColor = mode === "light" ? "#ddd" : "#07265c";

	return (
		<Box sx={{ py: 8, display: "flex", justifyContent: "center", bgcolor: backgroundColor }}>
			<Box sx={{ width: "100%", maxWidth: "3000px", px: { xs: 2, md: 4 } }}>
				<Typography
					variant="h4"
					component="h2"
					align="center"
					gutterBottom
					sx={{
						fontSize: { xs: "1rem", sm: "1.25rem", md: "2rem" },
						mb: 6,
						fontWeight: 400,
						letterSpacing: 1,
						color: "rgba(255, 134, 20, 1)",
						textTransform: "uppercase",
						opacity: 0,
						animation: "fadeInUp 1s ease forwards",
						"@keyframes fadeInUp": {
							"0%": { opacity: 0, transform: "translateY(30px)" },
							"100%": { opacity: 1, transform: "translateY(0)" }
						}
					}}
				>
					{t("projects_title")}
				</Typography>

				<Typography
					variant="subtitle1"
					align="center"
					sx={{
						mb: 12,
						fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
						color: textColor,
						maxWidth: 700,
						margin: "0 auto",
						letterSpacing: 1,
						textAlign: "center",
						opacity: 0,
						animation: "fadeInUp 1s ease forwards",
						animationDelay: "0.3s"
					}}
				>
					{t("projects_subtitle")}
				</Typography>

				<Grid container spacing={6} justifyContent="center">
					{/* ===========================Relaysms ==========================*/}
					<Grid item xs={12} md={6} display="flex">
						<Card
							sx={{
								bgcolor: backgroundColor,
								color: textColor,
								borderRadius: 1,
								border: "1px solid #02387562",
								height: "100%",
								flexDirection: "column",
								opacity: 0,
								animation: "fadeInUp 1s ease forwards",
								transition: "transform 0.3s ease",
								"&:hover": { transform: "translateY(-10px)" },
								overflow: "hidden"
							}}
						>
							<Stack
								direction="row"
								spacing={1}
								sx={{
									p: 2,
									flexWrap: "wrap",
									justifyContent: "flex-end"
								}}
							>
								<Chip
									label={t("project1.keyPoint1")}
									sx={{
										backgroundColor: "#FF8614",
										color: "#02334bff",
										fontWeight: "bold"
									}}
								/>
								<Chip
									label={t("project1.keyPoint2")}
									sx={{
										backgroundColor: "#FF8614",
										color: "#02334bff",
										fontWeight: "bold"
									}}
								/>
							</Stack>

							<CardMedia
								component="img"
								height="200"
								image="/Images/relaysms.png"
								alt="Relaysms"
								sx={{
									width: { xs: "80%", sm: "60%", md: "50%" },
									maxWidth: 300,
									height: "auto",
									mx: "auto",
									mb: 2,
									position: "relative",
									zIndex: 0
								}}
							/>
							<CardContent
								sx={{
									flexGrow: 1,
									textAlign: isFarsi ? "right" : "left",
									borderTop: "1px solid #02295513",
									position: "relative",
									zIndex: 1,
									pt: 6,
									fontFamily: "'Unbounded'",
									bgcolor: backgroundColor,
									maxWidth: 600
								}}
							>
								<Box
									component="img"
									src="/Images/RelaySms.png"
									sx={{ width: 150, height: "auto", mb: 2 }}
								/>

								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: "#011832c8",
										fontSize: { xs: "1rem", md: "1.1rem" },
										lineHeight: 1.8,
										mb: 2
									}}
								>
									{t("project1.description")}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" href="https://relay.smswithoutborders.com" target="_blank">
									{t("project1.read_more")}
									<ArrowOutwardIcon fontSize="small" sx={{ ml: 0.5 }} />
								</Button>
							</CardActions>
						</Card>
					</Grid>

					{/* =============================Dekusms========================== */}
					<Grid item xs={12} md={6} display="flex">
						<Card
							sx={{
								bgcolor: backgroundColor,
								color: textColor,
								borderRadius: 1,
								border: "1px solid #02387562",
								height: "100%",
								flexDirection: "column",
								opacity: 0,
								animation: "fadeInUp 1s ease forwards",
								transition: "transform 0.3s ease",
								"&:hover": { transform: "translateY(-10px)" },
								overflow: "hidden"
							}}
						>
							<Stack
								direction="row"
								spacing={1}
								sx={{
									p: 2,
									flexWrap: "wrap",
									justifyContent: "flex-end"
								}}
							>
								<Chip
									label={t("project2.keyPoint1")}
									sx={{
										backgroundColor: "#2ED3B7",
										color: "#02334bff",
										fontWeight: "bold"
									}}
								/>
								<Chip
									label={t("project2.keyPoint2")}
									sx={{
										backgroundColor: "#2ED3B7",
										color: "#02334bff",
										fontWeight: "bold"
									}}
								/>
							</Stack>

							<CardMedia
								component="img"
								height="200"
								image="/Images/dekusms.png"
								alt="Dekusms"
								sx={{
									width: { xs: "80%", sm: "60%", md: "50%" },
									maxWidth: 300,
									height: "auto",
									mx: "auto",
									mb: 2,
									position: "relative",
									zIndex: 0
								}}
							/>
							<CardContent
								sx={{
									flexGrow: 1,
									textAlign: isFarsi ? "right" : "left",
									borderTop: "1px solid #00357013",
									position: "relative",
									zIndex: 1,
									pt: 6,
									fontFamily: "'Unbounded'",
									bgcolor: backgroundColor,
									maxWidth: 600
								}}
							>
								<Box
									component="img"
									src="/Images/DekuSms.png"
									sx={{ width: 150, height: "auto", mb: 2 }}
								/>

								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: "#011832c8",
										fontSize: { xs: "1rem", md: "1.1rem" },
										lineHeight: 1.8,
										mb: 2
									}}
								>
									{t("project1.description")}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" href="https://dekusms.com" target="_blank">
									{t("project2.read_more")}
									<ArrowOutwardIcon fontSize="small" sx={{ ml: 0.5 }} />
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Projects;
