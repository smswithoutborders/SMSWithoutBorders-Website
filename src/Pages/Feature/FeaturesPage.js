import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@mui/material";

const FeaturesPage = () => {
	const [content, setContent] = useState("Loading...");

	useEffect(() => {
		fetch("/features.md")
			.then((res) => res.text())
			.then((text) => setContent(text))
			.catch(() => setContent("Failed to load features."));
	}, []);

	return (
		<Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
			<Typography component="div">
				<ReactMarkdown>{content}</ReactMarkdown>
			</Typography>
		</Box>
	);
};

export default FeaturesPage;
