import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";

function Partner() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";
	const { mode } = useTheme();

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#071f74ef" : "#ffffff";

	const LogoItem = ({ href, imgSrc, altText, delay }) => (
		<Grid
			item
			xs={12}
			md={6}
			display="flex"
			justifyContent="center"
			alignItems="center"
			component="a"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={altText}
			sx={{
				opacity: 0,
				animation: "fadeInUp 1s ease forwards",
				animationDelay: `${delay}s`,
				"@keyframes fadeInUp": {
					"0%": { opacity: 0, transform: "translateY(20px)" },
					"100%": { opacity: 1, transform: "translateY(0)" }
				}
			}}
		>
			<Box
				component="img"
				src={imgSrc}
				alt={altText}
				sx={{
					width: "100%",
					maxWidth: 300,
					height: 200,
					objectFit: "contain",
					transition: "transform 0.3s ease-in-out",
					"&:hover": { transform: "scale(1.05)" }
				}}
			/>
		</Grid>
	);

	return (
		<Box
			sx={{
				py: 10,
				px: { xs: 3, sm: 6, md: 12 },
				textAlign: "center",
				direction: isFarsi ? "rtl" : "ltr",
				bgcolor: backgroundColor,
				color: textColor,
				display: "flex",
				justifyContent: "center"
			}}
		>
			<Box sx={{ width: "100%", maxWidth: 1200 }}>
				<Typography
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
					{t("Sponsor.SponsorT")}
				</Typography>

				<Typography
					sx={{
						fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
						mb: 12,
						color: textColor,
						maxWidth: 700,
						margin: "0 auto",
						letterSpacing: 1,
						textAlign: "center",
						opacity: 0,
						animation: "fadeInUp 1s ease forwards",
						animationDelay: "0.3s"
					}}
				>
					{t("Sponsor.Sponsor-subheader")}
				</Typography>

				<Grid container spacing={6} justifyContent="center" alignItems="stretch">
					<LogoItem
						href="https://www.opentech.fund/"
						imgSrc="/Images/OTF.png"
						altText="Open Tech Fund"
						delay={0.2}
					/>
					<LogoItem
						href="https://internews.org/"
						imgSrc="/Images/Internews.png"
						altText="Internews"
						delay={0.4}
					/>
				</Grid>
			</Box>
		</Box>
	);
}

export default Partner;
