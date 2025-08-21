import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Partner() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const LogoItem = ({ href, imgSrc, altText }) => (
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
				alignItems: "center"
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
				color: "black",
				background: "#EEF2FF",
				py: { md: 8, xs: 10 },
				px: { md: 18, xs: 2 },
				direction: isFarsi ? "rtl" : "ltr"
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.2rem" },
					mb: 4,
					fontWeight: 600,
					letterSpacing: 1,
					color: "#FF8614",
					textTransform: "uppercase",
					textAlign: "center"
				}}
			>
				{t("Sponsor.SponsorT")}
			</Typography>

			<Typography
				variant="h6"
				sx={{
					fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
					mb: 12,
					color: "#034983",
					maxWidth: 700,
					margin: "0 auto",
					fontWeight: 300,
					letterSpacing: 1,
					textAlign: "center"
				}}
			>
				{t("Sponsor.Sponsor-subheader")}
			</Typography>

			<Grid container spacing={4} justifyContent="center" alignItems="center">
				<LogoItem href="https://www.opentech.fund/" imgSrc="/OTF.png" altText="Open Tech Fund" />
				<LogoItem href="https://internews.org/" imgSrc="/Internews.png" altText="Internews" />
			</Grid>
		</Box>
	);
}

export default Partner;
