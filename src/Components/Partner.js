import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Partner() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const LogoItem = ({ href, imgSrc, altText, delay }) => (
		<Grid
			item
			md={6}
			xs={12}
			component="a"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={altText}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				opacity: 0,
				animation: "fadeInUp 1s ease forwards",
				fontFamily: "'Unbounded'",
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
					width: { md: "70%", xs: "80%" },
					transition: "transform 0.3s ease-in-out",
					"&:hover": {
						transform: "scale(1.05)"
					}
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
				background: "linear-gradient(135deg, #f1f4f7aa 0%, #ffffff00 100%)",
				fontFamily: "'Unbounded'"
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.3rem" },
					mb: 6,
					fontWeight: 600,
					fontFamily: "'Unbounded'",
					letterSpacing: 1,
					color: "rgba(255, 134, 20, 1)",
					textTransform: "uppercase",
					animation: "fadeInUp 1s ease forwards",
					opacity: 0,
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
					color: "#01254ec8",
					maxWidth: 700,
					margin: "0 auto",
					letterSpacing: 1,
					textAlign: "center",
					opacity: 0,
					animation: "fadeInUp 1s ease forwards",
					animationDelay: "0.3s",
					fontFamily: "'Montserrat', Ubuntu",
					fontWeight: 400
				}}
			>
				{t("Sponsor.Sponsor-subheader")}
			</Typography>

			<Grid
				container
				spacing={6}
				justifyContent="center"
				alignItems="center"
				sx={{ px: { xs: 2, sm: 4, md: 10 } }}
			>
				<LogoItem
					href="https://www.opentech.fund/"
					imgSrc="/OTF.png"
					altText="Open Tech Fund"
					delay={0.2}
				/>
				<LogoItem
					href="https://internews.org/"
					imgSrc="/Internews.png"
					altText="Internews"
					delay={0.4}
				/>
			</Grid>
		</Box>
	);
}

export default Partner;
