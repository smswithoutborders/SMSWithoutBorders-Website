import { Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function Partner() {
	const { t, i18n } = useTranslation();

	const isFarsi = i18n.language === "fa";

	return (
		<Box
			sx={{
				color: "black",
				background: "#EEF2FF",
				py: { md: 8, xs: 10 },
				px: { md: 18, xs: 2 }
			}}
		>
			{/* Section Title */}
			<Box
				sx={{
					fontSize: { xs: "2em", sm: "2.2em", md: "2.5em" },
					fontFamily: "Unbounded, Ubuntu",
					fontWeight: 400,
					color: "#041c94",
					letterSpacing: 1.5,
					marginBottom: { xs: "40px", sm: "60px", md: "60px" },
					marginTop: { xs: "20px", sm: "30px", md: "30px" },
					textAlign: "center",
					direction: isFarsi ? "rtl" : "ltr"
				}}
			>
				{t("Sponsor.SponsorT")}
			</Box>

			{/* Partner Logos */}
			<Grid
				container
				spacing={4}
				justifyContent="center"
				alignItems="center"
				sx={{
					px: { md: 20, sm: 5, xs: 2 }
				}}
			>
				{/* Open Tech Fund Logo */}
				<Grid
					item
					md={5}
					xs={6}
					component="a"
					href="https://www.opentech.fund/"
					target="_blank"
					sx={{
						textAlign: "center"
					}}
				>
					<Box
						component="img"
						src="/OTF.png"
						alt="Open Tech Fund"
						sx={{
							width: { md: "80%", xs: "100%" },
							transition: "transform 0.3s ease-in-out",
							"&:hover": {
								transform: "scale(1.05)"
							}
						}}
					/>
				</Grid>

				{/* Internews Logo */}
				<Grid
					item
					md={5}
					xs={6}
					component="a"
					href="https://internews.org/"
					target="_blank"
					sx={{
						textAlign: "center"
					}}
				>
					<Box
						component="img"
						src="/Internews.png"
						alt="Internews"
						sx={{
							width: { md: "80%", xs: "100%" },
							transition: "transform 0.3s ease-in-out",
							"&:hover": {
								transform: "scale(1.05)"
							}
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Partner;
