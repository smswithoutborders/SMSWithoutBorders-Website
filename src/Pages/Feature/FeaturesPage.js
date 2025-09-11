import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar";
import { useTheme } from "../../Context/ThemeContext";

const FeaturesPage = () => {
	const [content, setContent] = useState("Loading...");
	const { mode } = useTheme();

	useEffect(() => {
		fetch("/features.md")
			.then((res) => res.text())
			.then((text) => setContent(text))
			.catch(() => setContent("Failed to load features."));
	}, []);

	const backgroundColor = mode === "light" ? "#ffffff" : "#0d467e";
	const textColor = mode === "light" ? "#0c0833" : "#ffffff";

	return (
		<>
			<Navbar />

			<Box
				sx={{
					bgcolor: backgroundColor,
					color: textColor,
					minHeight: "100vh",
					px: { xs: 2, sm: 3, md: 6 },
					pt: { xs: 10, sm: 12, md: 14 }
				}}
			>
				<Box sx={{ maxWidth: 800, mx: "auto", pb: 6 }}>
					<Typography component="div" sx={{ "& a": { color: textColor } }}>
						<ReactMarkdown>{content}</ReactMarkdown>
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default FeaturesPage;
