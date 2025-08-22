import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Home = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Box
			id="home"
			sx={{
				direction: isFarsi ? "rtl" : "ltr",
				height: { xs: "60vh", sm: "70vh", md: "80vh", lg: "80vh", xl: "80vh" },
				fontFamily: "'Unbounded', 'Mona Sans'",
				display: "flex",
				flexDirection: "column",
				background: "linear-gradient(135deg, #f9fafb, #ffffff)",
				position: "relative",
				overflow: "hidden",
				width: "100%",
				px: { xs: 2, sm: 3, md: 10 },
				py: { xs: 4, sm: 6, md: 8 },
				justifyContent: "flex-end",
				alignItems: isFarsi ? "flex-end" : "flex-start"
			}}
		>
			<Box
				component={motion.img}
				src="/SWOB-Default.png"
				alt="SMS Without Borders"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
				sx={{
					width: { xs: "70%", sm: "60%", md: "50%", lg: "45%", xl: "40%" },
					height: "auto",
					maxWidth: "100%",
					objectFit: "contain",
					mb: { xs: 2, sm: 3, md: 4 }
				}}
			/>

			<Typography
				sx={{
					fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
					fontWeight: 600,
					color: "#071f74ef",
					width: "100%",
					textAlign: isFarsi ? "right" : "left"
				}}
			>
				{t("About.About-title", "Open Source | Research")}
			</Typography>
		</Box>
	);
};

export default Home;
