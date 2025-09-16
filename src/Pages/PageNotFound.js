import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function PageNotFound() {
	return (
		<Box sx={{ px: { md: 17, xs: 2 }, py: { md: 15, xs: 10 } }}>
			<Typography
				variant="h2"
				className="banner-text"
				sx={{
					align: "center",
					px: { md: 25, xs: 2 },
					textAlign: "center",
					fontWeight: 700,
					fontSize: { md: "80px", xs: "55px" },
					fontFamily: "'Roboto', 'Ubuntu'"
				}}
			>
				Oops you got lost
			</Typography>{" "}
			<Typography
				variant="h5"
				sx={{
					px: { md: 35, xs: 2 },
					py: { md: 5, xs: 3 },
					textAlign: "center",
					opacity: "70%"
				}}
			>
				It seems the page you are looking for does not exist
			</Typography>
			<Typography
				variant="h6"
				sx={{
					px: { md: 35, xs: 2 },
					py: { md: 7, xs: 2 },
					textAlign: "center",
					opacity: "70%"
				}}
			>
				Let&apos;s get you back home
				<IconButton component="a" href="/">
					<FaCircleChevronRight size="30px" />
				</IconButton>
			</Typography>
		</Box>
	);
}
