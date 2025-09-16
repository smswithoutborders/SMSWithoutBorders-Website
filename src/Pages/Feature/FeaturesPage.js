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
	const subTextColor = mode === "light" ? "#505e85" : "#D1D1D6";

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
				<Box sx={{ maxWidth: 850, mx: "auto", "& a": { textDecoration: "underline" } }}>
					<ReactMarkdown
						children={content}
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
						components={{
							a: (props) => (
								<a
									{...props}
									style={{ color: subTextColor, textDecoration: "underline", transition: "color 0.3s" }}
									onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
									onMouseLeave={(e) => (e.target.style.color = subTextColor)}
								/>
							),
							p: (props) => <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: subTextColor }} {...props} />,
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
