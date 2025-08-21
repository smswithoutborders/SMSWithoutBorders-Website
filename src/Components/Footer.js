import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
	return (
		<Box
			sx={{
				textAlign: "center",
				width: "100%",
				bgcolor: "#071F74",
				color: "#fff",
				py: { xs: 3, sm: 4 },
				fontFamily: "'Unbounded', 'Mona Sans', sans-serif"
			}}
		>
			<Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
				© {new Date().getFullYear()}{" "}
				<Link
					href="https://www.Afkanerd.com"
					target="_blank"
					rel="noopener"
					sx={{ color: "#FF8614", textDecoration: "none" }}
				>
					Afkanerd
				</Link>
			</Typography>
		</Box>
	);
};

export default Footer;
