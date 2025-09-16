import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";

function Partner() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";
	const { mode } = useTheme();

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#071f74ef" : "#ffffff";
	const textSub = mode === "light" ? "#003a71ff" : "#cbd7e2ff"
	const Sub = mode === "light" ? "#505e85ff" : "#D1D1D6"

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
					maxWidth: 500,
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
				<Box
					sx={{
						textAlign: "center",
						pb: 6,
						px: { xs: 2, sm: 4, md: 6 },
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontWeight: 300,
							fontSize: { xs: "1.3rem", sm: "1.2rem", md: "2rem" },
							lineHeight: 1.3,
							mt: 2,
							color: textColor,
							textAlign: "center",
							fontFamily: "'Roboto', 'Ubuntu'"
						}}
					>
						{t("Sponsor.SponsorT")}
					</Typography>

					<Typography
						variant="body1"
						component="p"
						sx={{
							fontFamily: "'Roboto', 'Ubuntu'",
							display: "inline-block",
							fontWeight: 300,
							fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
							color: Sub,
							position: "relative",
							mt: 1,
						}}
					>
						{t("Sponsor.Sponsor-subheader")}
					</Typography>
				</Box>




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
		</Box >
	);
}

export default Partner;
