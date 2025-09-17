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
				fontFamily: "'Ubuntu', 'Roboto'",
				p: { xs: 2, sm: 4 },
				background: "linear-gradient(135deg, #071f74f0 2%, #071f74ff 100%)",
				direction: isFarsi ? "rtl" : "ltr",
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					pb: 6,
					px: { xs: 2, sm: 4, md: 6 },
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontWeight: 400,
						fontSize: { xs: "1.3rem", sm: "1.3rem", md: "2rem" },
						lineHeight: 1.3,
						mt: 2,
						color: textColor,
						textAlign: "center",
						fontFamily: "'Ubuntu', 'Roboto'",
					}}
				>
					{t("header", { defaultValue: "Explore SMSWithoutBorders" })}
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					gap: { xs: 2, sm: 4 },
					mb: 4,
					fontWeight: 200,
				}}
			>
				<Box
					sx={{
						flex: 1,
						p: { xs: 1, sm: 2 },
						textAlign: isFarsi ? "right" : "justify",
					}}
				>
					<Typography
						variant="body1"
						component="p"
						sx={{
							fontFamily: "'Roboto', 'Ubuntu'",
							display: "inline-block",
							fontWeight: 300,
							fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
							color: Sub,
							position: "relative",
							mt: 1,
						}}
					>
						<p>{t("About.description", { defaultValue: "SMSWithoutBorders(SWOB) is dedicated to researching, developing and promoting secure and accessible communication tools that function even without an internet connection." })}</p>
					</Typography>
				</Box>

				<Box
					sx={{
						flex: 1,
						p: { xs: 1, sm: 2 },
						textAlign: isFarsi ? "right" : "justify",
					}}
				>
					<Typography
						variant="body1"
						component="p"
						sx={{
							fontFamily: "'Roboto', 'Ubuntu'",
							display: "inline-block",
							fontWeight: 300,
							fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
							color: Sub,
							position: "relative",
							mt: 1,
						}}
					>
						<p>{t("About.description1", { defaultValue: "The development includes mobile apps for various platforms such as Android, iOS and Linux systems. Some of the work also includes white papers on topics such as cryptography, communications and internet freedom." })}</p>
						<p>{t("About.description2", { defaultValue: "Our journey toward achieving our mission began in 2021 with the development of the first Android version of RelaySMS. We have come far since then, with support for more platforms and many more apps." })}</p>
					</Typography>
				</Box>
			</Box>

			<Box sx={{ p: 2 }}>
				<Typography
					variant="body1"
					component="p"
					sx={{
						display: "inline-block",
						fontWeight: 300,
						fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
						color: Sub,
						position: "relative",
						mt: 1,
						lineHeight: 1.6,
						fontFamily: "'Ubuntu', 'Roboto'",
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
					{parse(
						t("About.description3", {
							defaultValue:
								"We publish our research as frequently as possible on our blog and make announcements via our social media outlets. SMSWithoutBorders is a project started by the team at <a href='https://Afkanerd.com' class='afkanerd'>Afkanerd</a>."
						})
					)}
				</Typography>
			</Box>
		</Box>
	);
}
