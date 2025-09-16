import React from "react";
import {
	Box,
	Typography,
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
	const textSub = mode === "light" ? "#003a71ff" : "#cbd7e2ff"
	const Sub = mode === "light" ? "#505e85ff" : "#D1D1D6"

	return (
		<Box sx={{ py: 8, display: "flex", justifyContent: "center", bgcolor: backgroundColor }}>
			<Box sx={{ width: "100%", px: { xs: 2, md: 4 } }}>

				<Box
					sx={{
						textAlign: "center",
						pb: 6,
						px: { xs: 2, sm: 4, md: 6 },
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontWeight: 300,
							fontSize: { xs: "1.3rem", sm: "1.2rem", md: "2rem" },
							lineHeight: 1.3,
							mt: 2,
							color: textColor,
							textAlign: "center",
							fontFamily: "'Roboto', 'Ubuntu'"
						}}
					>
						{t("projects_title")}
					</Typography>

					<Typography
						variant="body1"
						component="p"
						sx={{
							fontFamily: "'Roboto', 'Ubuntu'",
							display: "inline-block",
							fontWeight: 300,
							fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
							color: Sub,
							position: "relative",
							mt: 1,
						}}
					>
						{t("projects_subtitle")}
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "space-evenly",
						alignItems: "stretch",
						gap: { xs: 2, sm: 3 },
						mt: 4,
						px: { xs: 2, sm: 4 },
					}}>
					{/* =============== Relaysms Card ============= */}
					<Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
						<Card
							sx={{
								bgcolor: backgroundColor,
								color: textColor,
								borderRadius: 1,
								border: mode === "light"
									? "1px solid #004f7428"
									: "1px solid #EEF2FF28",
								height: "100%",
								flexDirection: "column",
								opacity: 0,
								animation: "fadeInUp 1s ease forwards",
								transition: "transform 0.3s ease",
								"&:hover": { transform: "translateY(-10px)" },
								overflow: "hidden",
								flex: 1,
								maxWidth: 600,
							}}
						>
							<Stack
								direction="row"
								spacing={1}
								sx={{
									p: 2,
									flexWrap: "wrap",
									justifyContent: "flex-end",
								}}
							>
								<Chip
									label={t("project1.keyPoint1")}
									sx={{
										backgroundColor: "#FF8614",
										color: "#02334bff",
										fontWeight: "bold",
										fontFamily: "Ubuntu, Roboto"
									}}
								/>
								<Chip
									label={t("project1.keyPoint2")}
									sx={{
										backgroundColor: "#FF8614",
										color: "#02334bff",
										fontWeight: "bold",
										fontFamily: "Ubuntu, Roboto"
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
									borderTop: mode === "light"
										? "1px solid #02295513"
										: "1px solid #EEF2FF13",
									position: "relative",
									zIndex: 1,
									px: { xs: 3, sm: 4 },
									bgcolor: backgroundColor,
									width: "100%"
								}}
							>
								<Box
									component="img"
									src={mode === "light" ? "/Images/RelaySms.png" : "/Images/RelaySMS-White.png"}
									sx={{ width: 150, height: "auto", mb: 2 }}
								/>

								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: Sub,
										fontSize: { xs: "1rem", md: "1.1rem" },
										lineHeight: 1.8,
										fontFamily: "Ubuntu, Roboto",
										mb: 2
									}}
								>
									{t("project1.description")}
								</Typography>
							</CardContent>
							<CardActions sx={{
								px: { xs: 3, sm: 4 },
							}}>
								<Button
									size="small"
									href="https://relay.smswithoutborders.com"
									target="_blank"
									sx={{
										color: Sub,
										transition: "all 0.3s ease",
										fontFamily: "Ubuntu, Roboto",
										"&:hover": {
											color: "#FF8614",
											transform: "translateY(-2px)",
										}
									}}
								>
									{t("project1.read_more")}
									<ArrowOutwardIcon fontSize="small" sx={{ ml: 0.5 }} />
								</Button>
							</CardActions>
						</Card>
					</Box>

					{/* =================== Dekusms Card ================= */}
					<Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
						<Card
							sx={{
								bgcolor: backgroundColor,
								color: textColor,
								borderRadius: 1,
								border: mode === "light"
									? "1px solid #004f7428"
									: "1px solid #EEF2FF28",
								height: "100%",
								flexDirection: "column",
								opacity: 0,
								animation: "fadeInUp 1s ease forwards",
								transition: "transform 0.3s ease",
								"&:hover": { transform: "translateY(-10px)" },
								overflow: "hidden",
								flex: 1,
								maxWidth: 600,
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
										fontFamily: "Ubuntu, Roboto",
										fontWeight: "bold"
									}}
								/>
								<Chip
									label={t("project2.keyPoint2")}
									sx={{
										backgroundColor: "#2ED3B7",
										color: "#02334bff",
										fontWeight: "bold",
										fontFamily: "Ubuntu, Roboto"
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
									borderTop: mode === "light"
										? "1px solid #02295513"
										: "1px solid #EEF2FF13",
									position: "relative",
									zIndex: 1,
									px: { xs: 3, sm: 4 },
									fontFamily: "'Roboto', 'Ubuntu'",
									bgcolor: backgroundColor,
									width: "100%"
								}}
							>
								<Box
									component="img"
									src={mode === "light" ? "/Images/DekuSms.png" : "/Images/DekuSMS-Dark Theme.png"}
									sx={{ width: 150, height: "auto", mb: 2 }}
								/>

								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: Sub,
										fontSize: { xs: "1rem", md: "1.1rem" },
										lineHeight: 1.8,
										fontFamily: "Ubuntu, Roboto",
										mb: 2
									}}
								>
									{t("project2.description")}
								</Typography>
							</CardContent>
							<CardActions sx={{
								px: { xs: 3, sm: 4 },
							}}>
								<Button
									size="small"
									href="https://dekusms.com"
									target="_blank"
									sx={{
										color: Sub,
										transition: "all 0.3s ease",
										fontFamily: "Ubuntu, Roboto",
										"&:hover": {
											color: "#FF8614",
											transform: "translateY(-2px)",
										}
									}}
								>
									{t("project2.read_more")}
									<ArrowOutwardIcon fontSize="small" sx={{ ml: 0.5 }} />
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Box>
			</Box>
		</Box >
	);
};

export default Projects;
