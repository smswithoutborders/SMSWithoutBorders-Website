import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@mui/material";
import DocsNavbar from "../../Components/DocsNavbar";
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

	const backgroundColor = mode === "light" ? "#ffffff" : "#000824";
	const textColor = mode === "light" ? "#0c0833" : "#ffffff";
	const linkColor = mode === "light" ? "#1976d2" : "#90caf9";

	return (
		<>
			<DocsNavbar />

			<Box
				sx={{
					bgcolor: backgroundColor,
					color: textColor,
					minHeight: "100vh",
					px: { xs: 2, sm: 3, md: 6 },
					pt: { xs: 10, sm: 12, md: 14 },
					pb: 6
				}}
			>
				<Box sx={{ maxWidth: 800, mx: "auto" }}>
					<Box sx={{ mb: 4 }}>
						<Typography variant="h5" sx={{ mb: 2 }}>
							Table of Contents
						</Typography>
						<Box component="ul" sx={{ pl: 2 }}>
							<li>
								<a href="#history-and-use-cases" style={{ color: linkColor }}>
									History and use cases
								</a>
								<ul>
									<li>
										<a href="#history" style={{ color: linkColor }}>
											History
										</a>
									</li>
									<li>
										<a href="#use-cases" style={{ color: linkColor }}>
											Use cases
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#technological-breakdown" style={{ color: linkColor }}>
									Technological breakdown
								</a>
								<ul>
									<li>
										<a href="#key-software-components" style={{ color: linkColor }}>
											Key software components
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#avenues-to-explore" style={{ color: linkColor }}>
									Avenues to explore
								</a>
							</li>
							<li>
								<a href="#platforms" style={{ color: linkColor }}>
									Platforms
								</a>
							</li>
							<li>
								<a href="#bridges" style={{ color: linkColor }}>
									Bridges
								</a>
							</li>
							<li>
								<a href="#clients" style={{ color: linkColor }}>
									Clients
								</a>
							</li>
							<li>
								<a href="#gateway-clients" style={{ color: linkColor }}>
									Gateway clients
								</a>
							</li>
							<li>
								<a
									href="#self-hosting-to-be-written-based-on-actual-self-hosting"
									style={{ color: linkColor }}
								>
									Self hosting
								</a>
							</li>
							<li>
								<a href="#lessons-learned" style={{ color: linkColor }}>
									Lessons learned
								</a>
							</li>
						</Box>
					</Box>

					<Typography
						component="div"
						sx={{
							"& a": { color: linkColor, textDecoration: "underline" },
							"& h1, & h2, & h3, & h4": {
								color: textColor,
								scrollMarginTop: "100px"
							},
							"& ul, & ol, & p": { color: textColor }
						}}
					>
						<ReactMarkdown>{content}</ReactMarkdown>
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default FeaturesPage;
