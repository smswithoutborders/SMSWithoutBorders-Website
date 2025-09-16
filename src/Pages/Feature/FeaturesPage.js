import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box } from "@mui/material";
import DocsNavbar from "../../Components/DocsNavbar";
import { useTheme } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const headingIdMap = {
	"History and use cases": "history-and-use-cases",
	History: "history",
	"Use cases": "use-cases",
	"Technological breakdown": "technological-breakdown",
	"Key software components": "key-software-components",
	"Avenues to explore": "avenues-to-explore",
	Platforms: "platforms",
	Bridges: "bridges",
	Clients: "clients",
	"Gateway clients": "gateway-clients",
	"Self hosting (to be written based on actual self-hosting)": "self-hosting",
	"Lessons learned": "lessons-learned"
};

const getHeadingText = (children) => {
	if (Array.isArray(children)) return children.join("");
	return children;
};

const FeaturesPage = () => {
	const [content, setContent] = useState("Loading...");
	const { mode } = useTheme();
	const { i18n } = useTranslation();

	useEffect(() => {
		const lang = i18n.language;
		const file = `/features.${lang}.md`;

		fetch(file)
			.then((res) => {
				if (!res.ok) throw new Error("File not found");
				return res.text();
			})
			.then((text) => setContent(text))
			.catch(() => setContent("Failed to load features."));
	}, [i18n.language]);

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
					pb: 6,
					scrollBehavior: "smooth"
				}}
			>
				<Box sx={{ maxWidth: 800, mx: "auto" }}>
					<Box
						sx={{
							"& a": { color: linkColor, textDecoration: "underline" },
							"& h1, & h2, & h3, & h4": {
								color: textColor,
								scrollMarginTop: "100px"
							},
							"& ul, & ol, & p": { color: textColor }
						}}
					>
						<ReactMarkdown
							components={{
								h1: (props) => <h1 id={headingIdMap[getHeadingText(props.children)]} {...props} />,
								h2: (props) => <h2 id={headingIdMap[getHeadingText(props.children)]} {...props} />,
								h3: (props) => <h3 id={headingIdMap[getHeadingText(props.children)]} {...props} />,
								h4: (props) => <h4 id={headingIdMap[getHeadingText(props.children)]} {...props} />
							}}
						>
							{content}
						</ReactMarkdown>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default FeaturesPage;
