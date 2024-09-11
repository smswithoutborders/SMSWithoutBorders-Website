import { Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function Partner() {
	const { t, i18n } = useTranslation();

	const isFarsi = i18n.language === "fa";

	return (
		<Box sx={{ color: "black", py: { md: 8, xs: 10 }, px: { md: 18, xs: 2 } }}>
			<Box
				sx={{
					fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
					fontWeight: 500,
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
			<Grid
				sx={{ px: { md: 35, xs: 1 } }}
				container
				direction="row"
				justifyContent="space-evenly"
				alignItems="center"
				display={{ xs: "block", sm: "block", md: "flex" }}
				lineHeight="10"
			>
				<Grid md={5} xs={6} component="a" href="https://www.opentech.fund/" target="_blank">
					<Box
						component="img"
						src="/OTF.png"
						sx={{ width: { md: "100%", xs: "100%" } }}
						alt="RelaySMS"
					/>
				</Grid>
				<Grid md={5} xs={6} component="a" href="https://internews.org/" target="_blank">
					<Box
						component="img"
						src="/Internews.png"
						sx={{ width: { md: "100%", xs: "100%" } }}
						alt="RelaySMS"
					/>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Partner;
