import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Project = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const projects = [
		{
			id: 1,
			src: "/RelaySms.png",
			subTitle: t("projects.one.subtitle"),
			image: "/relaysms.png",
			keyPoints: [t("project1.keyPoint1"), t("project1.keyPoint2")],
			description: t("project1.description"),
			website: t("project1.read_more"),
			chipBg: "#FF8614",
			chipColor: "#02334bff"
		},
		{
			id: 2,
			src: "/DekuSms.png",
			image: "/dekusms.png",
			keyPoints: [t("project2.keyPoint1"), t("project2.keyPoint2")],
			description: t("project2.description"),
			website: t("project2.read_more"),
			chipBg: "#2CD4B4",
			chipColor: "#02334bff"
		}
	];

	return (
		<Box
			sx={{
				py: 6,
				px: { xs: 4, sm: 8, md: 15 },
				textAlign: "center",
				direction: i18n.language === "fa" ? "rtl" : "ltr",
				background: "#f1f4f78a"
			}}
		>
			<Typography
				variant="h4"
				fontWeight="bold"
				gutterBottom
				sx={{
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.5rem" },
					mb: 6,
					fontWeight: 600,
					letterSpacing: 1,
					color: "#FF8614",
					textTransform: "uppercase"
				}}
			>
				{t("projects_title")}
			</Typography>
			<Typography
				variant="subtitle1"
				color="text.secondary"
				mb={4}
				sx={{
					fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
					mb: 12,
					color: "#01254ec8",
					maxWidth: 700,
					margin: "0 auto",
					fontWeight: 300,
					letterSpacing: 1,
					textAlign: "center"
				}}
			>
				{t("projects_subtitle")}
			</Typography>

			<Box
				sx={{
					pt: { xs: 6, md: 10 },
					textAlign: "center",
					direction: isFarsi ? "rtl" : "ltr"
				}}
			>
				<Grid container spacing={20} justifyContent="center">
					{projects.map((proj) => (
						<Grid item xs={12} md={6} key={proj.id}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									borderRadius: 1
								}}
							>
								<Box
									sx={{
										display: "flex",
										gap: 1,
										p: 2,
										flexWrap: "wrap",
										justifyContent: isFarsi ? "left" : "right",
										textAlign: isFarsi ? "right" : "justify"
									}}
								>
									{proj.keyPoints.map((point, idx) => (
										<Chip
											key={idx}
											label={point}
											sx={{
												backgroundColor: proj.chipBg,
												color: proj.chipColor,
												fontWeight: "bold"
											}}
										/>
									))}
								</Box>

								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<CardMedia
										component="img"
										image={proj.image}
										alt={proj.title}
										sx={{ width: { xs: "50%", md: "40%" }, height: "auto" }}
									/>
								</Box>

								<CardContent
									sx={{
										borderTop: "1px solid #00316943",
										flexGrow: 1,
										textAlign: isFarsi ? "right" : "justify",
										px: { xs: 6, md: 8 }
									}}
								>
									<Typography
										variant="h6"
										fontWeight="bold"
										gutterBottom
										sx={{
											color: "#01254ec8",
											flexGrow: 1,
											textAlign: isFarsi ? "right" : "justify",
											px: { xs: 6, md: 2 }
										}}
									>
										<Box
											component="img"
											src={proj.src}
											sx={{ width: 180, height: "auto", mb: 3 }}
										/>
									</Typography>

									<Typography
										sx={{
											color: "#011832c8",
											flexGrow: 1,
											textAlign: isFarsi ? "right" : "justify",
											px: { xs: 6, md: 2 },
											fontSize: { xs: "1rem", md: "1.1rem" },
											lineHeight: 2
										}}
									>
										{proj.description}
									</Typography>

									<Typography
										variant="h6"
										sx={{
											textTransform: "none",
											color: "#011832c8",
											flexGrow: 1,
											textAlign: isFarsi ? "right" : "justify",
											px: { xs: 6, md: 2 },
											pt: 2,
											cursor: "pointer",
											display: "inline-flex",
											alignItems: "center",
											"&:hover": {
												color: "#FF8614"
											}
										}}
									>
										{proj.website}{" "}
										<ArrowOutwardIcon
											fontSize="small"
											sx={{
												ml: 0.5,
												color: "#066a9bff"
											}}
										/>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Project;
