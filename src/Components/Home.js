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
				minHeight: { xs: "60vh", sm: "70vh", md: "100vh", lg: "80vh", xl: "80vh" },
				fontFamily: "'Unbounded', 'Mona Sans'",
				display: "flex",
				flexDirection: "column",
				px: { xs: 3, sm: 6, md: 12 },
				py: { xs: 6, sm: 8, md: 10 },
				background: "linear-gradient(135deg, #f9fafb, #ffffff)",
				position: "relative",
				overflow: "hidden",
				justifyContent: "flex-end"
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: isFarsi ? "flex-end" : "flex-start",
					gap: { xs: 4, sm: 6, md: 8 },
					width: "100%",
					maxWidth: "900px",
					mb: { xs: 6, sm: 8, md: 10 }
				}}
			>
				<motion.img
					src="/SWOB-Default.png"
					alt="SMS Without Borders"
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
					style={{
						width: "70%",
						height: "auto"
					}}
				/>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
					style={{ width: "100%", textAlign: isFarsi ? "right" : "left" }}
				>
					<Typography
						sx={{
							fontSize: { xs: "1.8rem", sm: "2rem", md: "2.3rem" },
							fontWeight: 600,
							color: "#071f74ef"
						}}
					>
						{t("About.About-title", "Open Source | Research")}
					</Typography>
				</motion.div>
			</Box>
		</Box>
	);
};

export default Home;
