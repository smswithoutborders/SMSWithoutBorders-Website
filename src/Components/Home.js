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
				background: "#f1f4f78a"
			}}
		>
			<Box
				component="img"
				src="/SWOB-Default.png"
				alt="SMS Without Borders"
				sx={{
					width: { xs: "60%", sm: "70%", md: "40%" },
					maxWidth: 800,
					height: "auto",
					mt: { xs: 10, sm: 20, md: 33 },
					mb: { xs: 3, sm: 4, md: 5 },
					borderRadius: 2
				}}
			/>

			<Typography
				sx={{
					fontFamily: "'Mona Sans',",
					color: "#071F74",
					maxWidth: { xs: "90%", sm: "80%", md: "70%" },
					textAlign: isFarsi ? "right" : "left",
					fontSize: { xs: "1.4rem", sm: "2rem", md: "2.3rem" },
					mb: { xs: 2, sm: 3, md: 4 },
					fontWeight: 600,
					letterSpacing: 1,
					textTransform: "uppercase",
					lineHeight: 1.3
				}}
			>
				{t("About.About-title")}
			</Typography>
		</Box>
	);
};

export default Home;
