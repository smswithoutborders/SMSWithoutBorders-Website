import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const About = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Box
			id="about"
			sx={{
				fontFamily: "'Unbounded'",
				background: "linear-gradient(135deg, #071f74f0 2%, #071f74ff 100%)",
				backdropFilter: "blur(10px)",
				boxShadow: "0 10px 25px rgba(34, 68, 117, 0.39)",
				color: "#d7e2eaff",
				py: { xs: 10, md: 12 },
				px: { xs: 3, md: 6, lg: 12 },
				direction: isFarsi ? "rtl" : "ltr",
				textAlign: "center",
				minHeight: "60vh"
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: "1rem", sm: "1.25rem", md: "2rem" },
					mb: 6,
					fontWeight: 500,
					letterSpacing: 1,
					color: "rgba(255, 134, 20, 1)",
					textTransform: "uppercase",
					animation: "fadeInUp 1s ease forwards",
					opacity: 0,
					fontFamily: "'Unbounded'",
					"@keyframes fadeInUp": {
						"0%": { opacity: 0, transform: "translateY(30px)" },
						"100%": { opacity: 1, transform: "translateY(0)" }
					}
				}}
			>
				{t("subheader")}
			</Typography>

			<Grid container spacing={6} justifyContent="center" sx={{ position: "relative" }}>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						borderRadius: 4,
						p: { xs: 3, md: 5 },
						animation: "fadeInSide 1s ease forwards",
						opacity: 0,
						"@keyframes fadeInSide": {
							"0%": { opacity: 0, transform: "translateX(-50px)" },
							"100%": { opacity: 1, transform: "translateX(0)" }
						}
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" },
							lineHeight: 2,
							textAlign: isFarsi ? "right" : "justify",
							color: "#ffffff",
							fontWeight: 300,
							fontFamily: "'Unbounded'"
						}}
					>
						{t("About.description")}
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					md={6}
					sx={{
						borderRadius: 4,
						p: { xs: 3, md: 5 },
						fontWeight: 300,
						animation: "fadeInSide 1s ease forwards",
						opacity: 0,
						fontFamily: "'Unbounded'",
						animationDelay: "0.3s",
						"@keyframes fadeInSide": {
							"0%": { opacity: 0, transform: "translateX(50px)" },
							"100%": { opacity: 1, transform: "translateX(0)" }
						}
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" },
							lineHeight: 2,
							textAlign: isFarsi ? "right" : "justify",
							color: "#ffffff",
							mb: 2,
							fontWeight: 300,
							fontFamily: "'Unbounded'"
						}}
					>
						{t("About.description1")}
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" },
							lineHeight: 2,
							textAlign: isFarsi ? "right" : "justify",
							color: "#ffffff",
							fontWeight: 300,
							fontFamily: "'Unbounded'"
						}}
					>
						{t("About.description2")}
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					sx={{
						mt: 2,
						borderRadius: 4,
						p: { xs: 3, md: 5 },
						animation: "fadeInUp 1s ease forwards",
						opacity: 0,
						fontFamily: "'Unbounded'",
						animationDelay: "0.6s"
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" },
							lineHeight: 2,
							fontWeight: 300,
							textAlign: isFarsi ? "right" : "justify",
							color: "#ffffff",
							fontFamily: "'Unbounded'"
						}}
					>
						{parse(t("About.description3"))}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
