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
			src: "/Images/RelaySms.png",
			subTitle: t("projects.one.subtitle"),
			image: "/Images/relaysms.png",
			keyPoints: [t("project1.keyPoint1"), t("project1.keyPoint2")],
			description: t("project1.description"),
			website: "https://relay.smswithoutborders.com/",
			websiteLabel: t("project1.read_more"),
			chipBg: "#FF8614",
			chipColor: "#02334bff"
		},
		{
			id: 2,
			src: "/Images/DekuSms.png",
			image: "/Images/dekusms.png",
			keyPoints: [t("project2.keyPoint1"), t("project2.keyPoint2")],
			description: t("project2.description"),
			website: "https://dekusms.com/",
			websiteLabel: t("project1.read_more"),
			chipBg: "#2CD4B4",
			chipColor: "#02334bff"
		}
	];

	return (
		<Box
			sx={{
				fontFamily: "'Unbounded'",
				py: 10,
				px: { xs: 3, sm: 6, md: 12 },
				textAlign: "center",
				direction: isFarsi ? "rtl" : "ltr",
				background: "linear-gradient(135deg, #f1f4f7aa 0%, #ffffff00 100%)"
			}}
		>
			<Typography
				variant="h4"
				sx={{
					fontSize: { xs: "1rem", sm: "1.25rem", md: "2rem" },
					mb: 6,
					fontFamily: "'Unbounded'",
					fontWeight: 500,
					letterSpacing: 1,
					color: "#FF8614",
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
				sx={{
					mb: 12,
					color: "#01254ec8",
					maxWidth: 700,
					margin: "0 auto",
					letterSpacing: 1,
					textAlign: "center",
					opacity: 0,
					animation: "fadeInUp 1s ease forwards",
					animationDelay: "0.3s",
					fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.3rem" },
					fontFamily: "'Montserrat', Ubuntu",
					fontWeight: 400
				}}
			>
				{t("projects_subtitle")}
			</Typography>

			<Grid
				container
				spacing={8}
				justifyContent="center"
				sx={{ mt: { xs: 2, sm: 2, md: 6, lg: 4, xl: 4 } }}
			>
				{projects.map((proj, idx) => (
					<Grid item xs={12} md={6} key={proj.id}>
						<Card
							sx={{
								fontFamily: "'Unbounded'",
								border: "1px solid #02295537",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								borderRadius: 4,
								backgroundColor: "rgba(255, 255, 255, 0.08)",
								backdropFilter: "blur(12px)",
								boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
								p: { xs: 2, md: 4 },
								opacity: 0,
								animation: "fadeInUp 1s ease forwards",
								animationDelay: `${0.2 * idx}s`,
								transition: "transform 0.3s ease",
								"&:hover": { transform: "translateY(-10px)" },
								overflow: "hidden"
							}}
						>
							<Box
								sx={{
									display: "flex",
									gap: 1,
									pb: 2,
									flexWrap: "wrap",
									justifyContent: isFarsi ? "left" : "flex-end",
									textAlign: isFarsi ? "left" : "right",
									fontFamily: "'Montserrat', Ubuntu"
								}}
							>
								{proj.keyPoints.map((point, idx) => (
									<Chip
										key={idx}
										label={point}
										sx={{
											backgroundColor: proj.chipBg,
											color: proj.chipColor,
											fontFamily: "'Montserrat', Ubuntu",
											fontWeight: "bold"
										}}
									/>
								))}
							</Box>

							<CardMedia
								component="img"
								image={proj.image}
								alt={proj.title}
								sx={{
									width: { xs: "60%", md: "50%" },
									height: "auto",
									mx: "auto",
									mb: -8,
									position: "relative",
									zIndex: 0,
									fontFamily: "'Unbounded'"
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
									backgroundColor: "#f9fcffff"
								}}
							>
								<Box component="img" src={proj.src} sx={{ width: 150, height: "auto", mb: 2 }} />

								<Typography
									sx={{
										color: "#011832c8",
										fontSize: { xs: "0.9rem", md: "1rem" },
										lineHeight: 1.8,
										mb: 2,
										fontWeight: 300,
										fontFamily: "'Unbounded'"
									}}
								>
									{proj.description}
								</Typography>

								{proj.website && (
									<Typography
										sx={{
											display: "inline-flex",
											alignItems: "center",
											fontFamily: "'Unbounded'",
											cursor: "pointer",
											color: "#011832c8",
											fontWeight: 350,
											"&:hover": { color: "#FF8614" }
										}}
										component="a"
										href={proj.website}
										target="_blank"
										rel="noopener noreferrer"
									>
										{proj.websiteLabel}
										<ArrowOutwardIcon fontSize="small" sx={{ ml: 0.5 }} />
									</Typography>
								)}
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Project;
