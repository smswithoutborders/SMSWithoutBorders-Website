import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Box
			id="Project"
			sx={{
				fontFamily: "'Unbounded', 'Mona Sans'",
				backgroundColor: "#f2f5fdff",
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
				{t("Projects.title")}
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
				{t("Projects.description")}
			</Typography>

			{/* Project Cards */}
			<Grid container spacing={4}>
				{[1, 2].map((proj) => (
					<Grid item xs={12} md={6} key={proj}>
						<Card>
							<Box sx={{ p: 2 }}>
								<Typography variant="body2" color="primary">
									{t("Projects.keyPoint")} {proj}
								</Typography>
							</Box>
							<CardMedia
								component="img"
								height="200"
								image={`https://via.placeholder.com/600x400?text=Project+${proj}`}
								alt={`Project ${proj}`}
							/>
							<CardContent>
								<Typography variant="h6">
									{t(`Projects.project${proj}.title`, {
										defaultValue: `Project ${proj} Title`
									})}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{t(`Projects.project${proj}.description`, {
										defaultValue:
											"This project demonstrates our innovative approach to global communication."
									})}
								</Typography>
								<Button size="small" sx={{ mt: 2 }}>
									{t("Projects.readMore")}
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Projects;
