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
							fontWeight: 400,
							fontSize: { xs: "1.3rem", sm: "1.2rem", md: "2rem" },
							lineHeight: 1.3,
							mt: 2,
							color: textColor,
							textAlign: "center",
							fontFamily: "'Roboto', 'Ubuntu'"
						}}
					>
						{t("projectHeader", { defaultValue: "Innovative Projects Under SMSWithoutBorders(SWOB)" })}
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
						{t("projectSubHeader", { defaultValue: "SMSWithoutBorders Commits to buiding OpenSource Tools That Aid Free speech and Communication" })}
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
									label={t("project1.keyPoint1", { defaultValue: "SMS" })}
									sx={{
										backgroundColor: "#FF8614",
										color: "#02334bff",
										fontWeight: 350,
										fontFamily: "Ubuntu, Roboto"
									}}
								/>
								<Chip
									label={t("project1.keyPoint2", { defaultValue: "Internet Freedom" })}
									sx={{
										backgroundColor: "#FF8614",
										color: "#02334bff",
										fontWeight: 350,
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
									variant="body1"
									component="p"
									sx={{
										fontFamily: "'Roboto', 'Ubuntu'",
										display: "inline-block",
										fontWeight: 350,
										fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
										color: Sub,
										position: "relative",
										mt: 1,
									}}
								>
									{t("project1.description", { defaultValue: "RelaySMS uses SMS messaging to communicate with online platforms without needing an internet connection. The users can grant access to their online platforms which would be used to act on their behalf using SMS messaging. The access granted, messages being sent from the app, and how they get published online are secured with strong up-to-date cryptographic and security practices." })}
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
									{t("project1.read_more", { defaultValue: "Visit Website" })}
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
									label={t("project2.keyPoint1", { defaultValue: "SMS" })}
									sx={{
										backgroundColor: "#2ED3B7",
										color: "#02334bff",
										fontFamily: "Ubuntu, Roboto",
										fontWeight: 350
									}}
								/>
								<Chip
									label={t("project2.keyPoint2", { defaultValue: "Privacy" })}
									sx={{
										backgroundColor: "#2ED3B7",
										color: "#02334bff",
										fontWeight: 350,
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
									variant="body1"
									component="p"
									sx={{
										fontFamily: "'Roboto', 'Ubuntu'",
										display: "inline-block",
										fontWeight: 350,
										fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
										color: Sub,
										position: "relative",
										mt: 1,
									}}
								>
									{t("project2.description", { defaultValue: "DekuSMS is an Android SMS messaging app. It enables 2 users of the app to communicate using end-to-end encryption over SMS messages. The app also contains message forwarding abilities supporting protocols such as SMTP, FTP, and AMQP. The app is built to integrate with RabbitMQ allowing users with messaging queues to set up and make remote communication requests to their apps." })}
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
									{t("project2.read_more", { defaultValue: "Visit Website" })}
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
