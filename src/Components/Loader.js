import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const Loader = () => {
	const [dots, setDots] = useState(".");

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : "."));
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#01062c"
			}}
		>
			<Typography
				align="center"
				variant="h3"
				sx={{
					fontWeight: 700,
					color: "#d7a449",
					animation: "fadeInOut 3s ease-in-out infinite"
				}}
			>
				SMSWithoutBorders
			</Typography>
			<Typography
				align="center"
				variant="h5"
				sx={{
					fontWeight: 500,
					color: "#ffffff",
					marginTop: "20px"
				}}
			>
				Loading{dots}
			</Typography>
		</Box>
	);
};

export default Loader;
