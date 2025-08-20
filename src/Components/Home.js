import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Box
			id="home"
			sx={{
				minHeight: "70vh",
				fontFamily: "'Unbounded', 'Mona Sans'",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: { xs: "center", md: "flex-start" },
				px: { xs: 3, sm: 6, md: 12 },
				pt: { xs: 4, sm: 6, md: 8 },
				pb: { xs: 4, sm: 6, md: 8 },
				bgcolor: "#f9f9f9"
			}}
		>
			<Box
				component="img"
				src="/SWOB-Default.png"
				alt="SMS Without Borders"
				sx={{
					width: { xs: "100%", sm: "100%", md: "100%" },
					maxWidth: 900,
					height: "auto",
					mt: { xs: 10, sm: 20, md: 33 },
					mb: { xs: 3, sm: 4, md: 5 },
					borderRadius: 2
				}}
			/>

			<Typography
				sx={{
					fontFamily: "'Mona Sans',",
					color: "#000158",
					maxWidth: 800,
					width: "100%",
					textAlign: isFarsi ? "right" : { xs: "center", md: "left" },
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.75rem" },
					mb: 3,
					fontWeight: 700,
					letterSpacing: 1,
					textTransform: "uppercase",
					lineHeight: 1.2
				}}
			>
				{t("About.About-title")}
			</Typography>
		</Box>
	);
};

export default Home;
