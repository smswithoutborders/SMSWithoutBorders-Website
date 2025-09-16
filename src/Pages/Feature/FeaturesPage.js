import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Box } from "@mui/material";
import DocsNavbar from "../../Components/DocsNavbar";
import { useTheme } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const FeaturesPage = () => {
	const [content, setContent] = useState("Loading...");
	const { mode } = useTheme();
	const { i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

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
	const subTextColor = mode === "light" ? "#4b575aff" : "#D1D1D6";

	const headingColors = {
		h1: mode === "light" ? "#0d3b66" : "#00d4ff",
		h2: mode === "light" ? "#174f8f" : "#00bfff",
		h3: mode === "light" ? "#1e6091" : "#00aaff",
		h4: mode === "light" ? "#2176ae" : "#33ccff",
		h5: mode === "light" ? "#2a9df4" : "#66e0ff",
		h6: mode === "light" ? "#3ca0f0" : "#99f0ff",
	};


	const headingStyle = (level) => ({
		textAlign: "start",
		color: headingColors[`h${level}`],
		marginBottom: level === 1 ? "1rem" : "0.8rem",
		marginTop: level === 1 ? "2rem" : "1rem",
		direction: isFarsi ? "rtl" : "ltr",
		fontFamily: "'Unbounded', Ubuntu, Roboto",
		fontWeight: 300,
	});

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
					scrollBehavior: "smooth",
					direction: isFarsi ? "rtl" : "ltr",
					textAlign: isFarsi ? "right" : "left",
				}}
			>
				<Box sx={{ maxWidth: 850, mx: "auto" }}>
					<ReactMarkdown
						children={content}
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
						components={{
							a: (props) => (
								<a
									{...props}
									style={{
										color: mode === "light" ? "#0935c4da" : "#87CEFA",
										textDecoration: "underline",
										transition: "color 0.3s",
									}}
									onMouseEnter={(e) =>
										(e.target.style.color = mode === "light" ? "#ff6600a8" : "#ff9100ff")
									}
									onMouseLeave={(e) =>
										(e.target.style.color = mode === "light" ? "#1a0dab" : "#87CEFA")
									}
								/>
							),
							h1: (props) => <h1 style={headingStyle(1)} {...props} />,
							h2: (props) => <h2 style={headingStyle(2)} {...props} />,
							h3: (props) => <h3 style={headingStyle(3)} {...props} />,
							h4: (props) => <h4 style={headingStyle(4)} {...props} />,
							h5: (props) => <h5 style={headingStyle(5)} {...props} />,
							h6: (props) => <h6 style={headingStyle(6)} {...props} />,
							p: (props) => (
								<p style={{ fontFamily: "Ubuntu, Roboto", lineHeight: 1.8, marginBottom: "1rem", color: subTextColor, fontSize: { xs: "1rem", sm: "1.10rem", md: "1.2rem" } }} {...props} />
							),
							ul: (props) => <ul style={{ marginBottom: "1rem", color: subTextColor }} {...props} />,
							ol: (props) => <ol style={{ marginBottom: "1rem", color: subTextColor }} {...props} />,
						}}
					/>
				</Box>
			</Box>
		</>
	);
};

export default FeaturesPage;
