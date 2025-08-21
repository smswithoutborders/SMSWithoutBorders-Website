import React from "react";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const projects = [
		{
			key: "project1",
			image: "relaysms.png",
			keyPoints: ["SMS", "Internet Freedom"],
			logo: "/RelaySms.png",
			website: "https://relay.smswithoutborders.com"
		},
		{
			key: "project2",
			image: "dekusms.png",
			keyPoints: ["Privacy", "SMS"],
			logo: "/DekuSms.png",
			website: "https://deku.smswithoutborders.com"
		}
	];

	return (
		<Box
			id="Project"
			sx={{
				fontFamily: "'Unbounded', 'Mona Sans'",
				backgroundColor: "#f2f5fd",
				color: "#000158",
				py: { xs: 8, md: 12 },
				px: { xs: 3, md: 12 },
				direction: isFarsi ? "rtl" : "ltr",
				textAlign: "center"
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.2rem" },
					mb: 2,
					fontWeight: 600,
					letterSpacing: 1,
					color: "#FF8614",
					textTransform: "uppercase",
					textAlign: "center"
				}}
			>
				{t("projects_title")}
			</Typography>

			<Typography
				variant="h6"
				sx={{
					fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
					mb: 12,
					color: "#034983",
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
				<Grid container spacing={1} justifyContent="center">
					{projects.map((proj, idx) => (
						<Grid item xs={12} md={6} key={idx}>
							<Card
								sx={{
									height: "100%",
									width: "100%",
									maxWidth: 700,
									display: "flex",
									flexDirection: "column",
									mx: "auto",
									border: "1px solid #0345d454"
								}}
							>
								{proj.keyPoints?.length > 0 && (
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											gap: 1.5,
											justifyContent: "flex-end",
											px: 2,
											pb: 2
										}}
									>
										{proj.keyPoints.slice(0, 2).map((point, idx) => (
											<Button
												key={idx}
												variant="outlined"
												size="small"
												sx={{
													md: 5,
													color: "#053c7cff",
													backgroundColor: "#FF8614",
													fontWeight: 600,
													borderRadius: "20px",
													textTransform: "none",
													px: 2,
													"&:hover": {
														backgroundColor: "#FF8614",
														color: "#fff",
														borderColor: "#FF8614"
													}
												}}
											>
												{point}
											</Button>
										))}
									</Box>
								)}

								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										my: 2
									}}
								>
									<Box
										component="img"
										src={proj.image}
										alt={t(`${proj.key}.title`)}
										sx={{ width: { xs: "50%", md: "40%" }, height: "auto" }}
									/>
								</Box>

								<CardContent
									sx={{
										flexGrow: 1,
										width: "100%",
										textAlign: "justify",
										display: "flex",
										flexDirection: "column",
										gap: 2,
										p: 8,
										borderTop: "1px solid #0345d454"
									}}
								>
									{proj.logo && (
										<Box
											sx={{
												display: "flex",
												justifyContent: { xs: "center", md: isFarsi ? "flex-end" : "flex-start" }
											}}
										>
											<Box
												component="img"
												src={proj.logo}
												alt={`${t(`${proj.key}.title`)} logo`}
												sx={{ width: 180, height: "auto", borderRadius: 1 }}
											/>
										</Box>
									)}

									<Typography
										variant="p"
										sx={{ color: "#013057ff", lineHeight: 1.9, fontSize: "1.2rem" }}
									>
										{t(`${proj.key}.description`)}
									</Typography>

									{proj.website && (
										<Box
											sx={{
												display: "flex",
												justifyContent: { xs: "center", md: isFarsi ? "flex-end" : "flex-start" }
											}}
										>
											<Button
												size="small"
												sx={{
													color: "#025ba3ff",
													fontWeight: 700,
													textTransform: "none"
												}}
												endIcon={<ArrowOutwardIcon />}
												href={proj.website}
												target="_blank"
											>
												{t("Projects.visitWebsite")}
											</Button>
										</Box>
									)}
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Projects;
