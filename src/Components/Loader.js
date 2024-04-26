import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const Loader = () => {
	const [showText, setShowText] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowText((prevShowText) => !prevShowText);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="loader">
			{showText && (
				<span style={{ animation: "blink 1s infinite" }}>
					<Box
						sx={{
							height: "100vh",
							my: "auto",
							justifyContent: "center",
							alignItems: "center",
							display: "flex"
						}}
					>
						<Typography align="center" variant="h3" sx={{ fontWeight: 700 }}>
							SMSWithoutBorders
						</Typography>
					</Box>
				</span>
			)}
		</div>
	);
};

export default Loader;
