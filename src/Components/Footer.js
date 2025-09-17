import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
	const { mode, toggleTheme } = useTheme();

	return (
		<Box
			sx={{
				textAlign: "center",
				width: "100%",
				background: "linear-gradient(135deg, #071f74f0 2%, #071f74ff 100%)",
				color: mode === "light" ? "#e2ebf7e3" : "#ffffffff",
				py: { xs: 3, sm: 4 },
				fontFamily: "'Roboto', 'Ubuntu'"
			}}
		>
			<Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
				© {new Date().getFullYear()}{" "}
				<Link
					href="https://www.Afkanerd.com"
					target="_blank"
					rel="noopener"
					sx={{ color: "#FF8614", textDecoration: "none", fontFamily: "'Roboto', 'Ubuntu'" }}
				>
					Afkanerd
				</Link>
			</Typography>
		</Box>
	);
};

export default Footer;
