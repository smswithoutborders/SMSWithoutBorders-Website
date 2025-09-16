import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import { useTheme } from "../Context/ThemeContext";

export default function FlexRowTwoColumns() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";
	const { mode } = useTheme();

	const textColor = mode === "light" ? "#EEF2FF" : "#FFFFFF";
	const textSub = mode === "light" ? "#D1D1D6" : "#E4E4E7";
	const Sub = mode === "light" ? "#F4F4F5" : "#D1D1D6";


	return (
		<Box
			sx={{
				fontFamily: "Ubuntu, Roboto, Unbounded",
				p: { xs: 2, sm: 4 },
				background: "linear-gradient(135deg, #071f74f0 2%, #071f74ff 100%)",
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					pb: 6,
					px: { xs: 2, sm: 4, md: 6 },
					fontFamily: "'Unbounded'",
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontWeight: 300,
						fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2.1rem" },
						lineHeight: 1.3,
						mt: 2,
						color: textColor,
						textAlign: "center",
						fontFamily: "'Unbounded'"
					}}
				>
					{t("header")}
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					gap: { xs: 2, sm: 4 },
					mb: 4,
					fontFamily: "'Unbounded'",
					fontWeight: 300,
				}}
			>
				<Box
					sx={{
						flex: 1,
						p: { xs: 1, sm: 2 },
						textAlign: isFarsi ? "right" : "justify",
					}}
				>
					<Typography sx={{ color: Sub, lineHeight: 1.6, fontFamily: "Ubuntu, Roboto", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}>
						<p>{t("About.description")}</p>
					</Typography>
				</Box>

				<Box
					sx={{
						flex: 1,
						p: { xs: 1, sm: 2 },
						textAlign: isFarsi ? "right" : "justify",
					}}
				>
					<Typography sx={{ color: Sub, lineHeight: 1.6, fontFamily: "Ubuntu, Roboto", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}>
						<p>{t("About.description1")}</p>
						<p>{t("About.description2")}</p>
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					p: 2
				}}
			>
				<Typography
					sx={{
						color: Sub,
						lineHeight: 1.6,
						fontFamily: "Ubuntu, Roboto",
						fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
						"& a": {
							color: "inherit",
							textDecoration: "underline",
							textUnderlineOffset: "2px",
							transition: "color 0.3s ease",
							"&:hover": {
								color: "#dda406ff",
							},
						},
					}}
				>
					<p>{parse(t("About.description3"))}</p>
				</Typography>
			</Box>
		</Box>
	);
}
