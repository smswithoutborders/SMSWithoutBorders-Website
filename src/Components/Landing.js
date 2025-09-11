import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Landing = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";
	const { mode } = useTheme();

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#0c0833" : "#ffffff";
	const borderColor = mode === "light" ? "#ddd" : "#07265c";

	return (
		<Box
			id="home"
			sx={{
				direction: isFarsi ? "rtl" : "ltr",
				height: { xs: "60vh", sm: "70vh", md: "80vh" },
				fontFamily: "'Unbounded'",
				display: "flex",
				flexDirection: "column",
				bgcolor: backgroundColor,
				color: textColor,
				position: "relative",
				overflow: "hidden",
				width: "100%",
				px: { xs: 2, sm: 3, md: 10 },
				py: { xs: 4, sm: 6, md: 8 },
				justifyContent: "flex-end",
				alignItems: isFarsi ? "flex-end" : "flex-start",
				borderBottom: `1px solid ${borderColor}`
			}}
		>
			<Box
				component={motion.img}
				src={mode === "light" ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"}
				alt="SMS Without Borders"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
				sx={{
					width: { xs: "70%", sm: "60%", md: "50%", lg: "45%", xl: "40%" },
					height: "auto",
					maxWidth: "100%",
					objectFit: "contain",
					mb: { xs: 2, sm: 3, md: 4 },
					transform: isFarsi ? "scaleX(-1) !important" : "scaleX(1) !important"
				}}
			/>

			<Typography
				sx={{
					fontSize: { xs: "1rem", sm: "1.25rem", md: "2rem" },
					fontWeight: 600,
					color: textColor,
					width: "100%",
					textAlign: isFarsi ? "right" : "left",
					fontFamily: "'Unbounded'"
				}}
			>
				{t("About.About-title", "Open Source | Research")}
			</Typography>
		</Box>
	);
};

export default Landing;
