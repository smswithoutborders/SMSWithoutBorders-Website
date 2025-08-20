import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const About = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Box
			id="about"
			sx={{
				fontFamily: "'Unbounded', 'Mona Sans'",
				backgroundColor: "#000158",
				color: "#FFFFFF",
				py: { xs: 8, md: 12 },
				px: { xs: 3, md: 12 },
				direction: isFarsi ? "rtl" : "ltr",
				textAlign: "center"
			}}
		>
			{/* Section Header */}
			<Typography
				sx={{
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.5rem" },
					mb: 2,
					fontWeight: 600,
					letterSpacing: 1,
					color: "#FF8614",
					textTransform: "uppercase"
				}}
			>
				{t("About.About-title")}
			</Typography>

			{/* Subheader */}
			<Typography
				variant="subtitle1"
				sx={{
					mb: 6,
					color: "#ccc",
					textAlign: "center"
				}}
			>
				{t("About.description")}
			</Typography>

			<Container maxWidth="lg">
				{/* Two Column Text */}
				<Grid container spacing={4} justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								textAlign: isFarsi ? "right" : "left"
							}}
						>
							{t("About.description1")}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								textAlign: isFarsi ? "right" : "left"
							}}
						>
							{t("About.description2")}
						</Typography>
					</Grid>
				</Grid>

				{/* One Row Text Underneath */}
				<Box sx={{ mt: 6 }}>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.15rem" },
							lineHeight: 1.8,
							textAlign: isFarsi ? "right" : "center"
						}}
					>
						{parse(t("About.description3"))}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default About;
