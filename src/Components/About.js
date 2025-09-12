import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

export default function ColumnsGrid() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Box
			sx={{
				flexGrow: 1,
				p: 4,
				background: "linear-gradient(135deg, #071f74f0 2%, #071f74ff 100%)"
			}}
		>
			<Box sx={{ px: { xs: 2, md: 4 }, mb: 10 }}>
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
					{t("subheader")}
				</Typography>
			</Box>
			<Grid container spacing={3} alignItems="stretch">
				<Grid item xs={12} md={6}>
					<Box
						sx={{
							p: 2,
							fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" },
							lineHeight: 2,
							textAlign: isFarsi ? "right" : "justify",
							maxWidth: "600px",
							mx: "auto",
							color: "#ffffff"
						}}
					>
						<p>{t("About.description")}</p>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box
						sx={{
							p: 2,
							fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" },
							lineHeight: 2,
							textAlign: isFarsi ? "right" : "justify",
							maxWidth: "600px",
							mx: "auto",
							color: "#ffffff"
						}}
					>
						<p>{t("About.description1")}</p>
						<p>{t("About.description2")}</p>
					</Box>
				</Grid>
			</Grid>

			<Grid container spacing={3} alignItems="stretch" sx={{ mt: 2 }}>
				<Box
					sx={{
						p: 2,
						fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" },
						lineHeight: 2,
						textAlign: isFarsi ? "right" : "justify",
						mx: "auto",
						color: "#ffffff"
					}}
				>
					<p>{parse(t("About.description3"))}</p>
				</Box>
			</Grid>
		</Box>
	);
}
