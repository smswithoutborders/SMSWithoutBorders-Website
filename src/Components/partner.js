import { Grid, Box } from "@mui/material";

function Partner() {
	return (
		<Box
			sx={{ bgcolor: "whitesmoke", color: "black", py: { md: 8, xs: 10 }, px: { md: 18, xs: 2 } }}
		>
			<section className="container items-center">
				<h1 className="font-bold mb-4 text-2xl md:text-4xl text-center">PARTNERS</h1>
				<h2 className="text text-center">Heros that help keep us afloat</h2>
			</section>
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

export default Partner;
