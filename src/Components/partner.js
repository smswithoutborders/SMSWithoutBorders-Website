import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function partner() {
	return (
		<Box
			sx={{ bgcolor: "whitesmoke", color: "black", py: { md: 8, xs: 10 }, px: { md: 18, xs: 2 } }}
		>
			<Typography variant="h6" sx={{ opacity: "70%", pb: 2 }}>
				PARTNERS
			</Typography>
			<Typography variant="h5" sx={{ pb: 5, fontWeight: 600 }}>
				Heros that help keep us afloat
			</Typography>
			<Grid
				sx={{ px: { md: 35, xs: 1 } }}
				container
				direction="row"
				justifyContent="space-evenly"
				alignItems="center"
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

export default partner;
