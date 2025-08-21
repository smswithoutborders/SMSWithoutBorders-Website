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
				fontFamily: "'Unbounded', 'Mona Sans'",
				backgroundColor: "#071F74",
				color: "#d7e2eaff",
				py: { xs: 10, md: 12 },
				px: { xs: 6, md: 6, lg: 12 },
				direction: isFarsi ? "rtl" : "ltr",
				textAlign: "center",
				minHeight: "60vh"
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.5rem" },
					mb: 6,
					fontWeight: 600,
					letterSpacing: 1,
					color: "#FF8614",
					textTransform: "uppercase"
				}}
			>
				{t("subheader")}
			</Typography>

			<Box
				sx={{
					pt: { xs: 6, md: 10 },
					textAlign: "center",
					direction: isFarsi ? "rtl" : "ltr"
				}}
			>
				<Grid container spacing={18} justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.5rem" },
								lineHeight: 2,
								textAlign: isFarsi ? "right" : "justify"
							}}
						>
							{t("About.description")}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.5rem" },
								lineHeight: 2,
								textAlign: isFarsi ? "right" : "justify",
								mb: 2
							}}
						>
							{t("About.description1")}
						</Typography>

						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.5rem" },
								lineHeight: 2,
								textAlign: isFarsi ? "right" : "justify"
							}}
						>
							{t("About.description2")}
						</Typography>
					</Grid>
				</Grid>

				<Box sx={{ mt: 6 }}>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.5rem" },
							lineHeight: 2,
							textAlign: isFarsi ? "right" : "justify"
						}}
					>
						{parse(t("About.description3"))}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
