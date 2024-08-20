import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../App.css";

function Partner() {
	const { t } = useTranslation();
	return (
		<Box sx={{ color: "black", py: { md: 8, xs: 10 }, px: { md: 18, xs: 2 } }}>
			<Typography variant="h4" sx={{ color: "#28302f", fontWeight: 600, fontSize: "30px" }}>
				{t("Sponsor.SponsorT")}
			</Typography>
			<Grid
				sx={{ px: { md: 35, xs: 1 } }}
				container
				direction="row"
				justifyContent="space-evenly"
				alignItems="center"
				paddingBottom={"100px"}
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
