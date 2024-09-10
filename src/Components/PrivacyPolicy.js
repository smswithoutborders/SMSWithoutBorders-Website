import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import "../index.css";

const PrivacyPolicyMarkdown = () => {
	const { i18n } = useTranslation();
	const [content, setContent] = useState("");

	useEffect(() => {
		const language = i18n.language || "en"; // Default to English if no language is set
		const filePath = `/privacy-policy/${language}.md`;

		fetch(filePath)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.text();
			})
			.then((text) => setContent(text))
			.catch((error) => console.error("Error fetching markdown:", error));
	}, [i18n.language]);

	return (
		<div className="text-gray-900">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
		</div>
	);
};

export default PrivacyPolicyMarkdown;
