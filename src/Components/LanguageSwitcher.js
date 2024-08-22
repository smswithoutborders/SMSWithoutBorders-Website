import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, MenuItem, IconButton, Menu, Box, Tooltip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleLanguageMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleLanguageMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		setAnchorEl(null);
	};

	const currentLang = i18n.language;

	const languageLabels = {
		en: { label: "English", flag: "US" },
		fr: { label: "Français", flag: "FR" },
		fa: { label: "فارسی", flag: "IR" }
	};

	return (
		<FormControl variant="outlined" size="small">
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
				<Tooltip title="Change Language" arrow>
					<IconButton
						onClick={handleLanguageMenuClick}
						sx={{
							color: "white",
							"&:hover": {
								backgroundColor: "#9cbcf4"
							},
							borderRadius: "10%",
							padding: "8px",
							display: "flex",
							alignItems: "center",
							gap: "8px"
						}}
					>
						<LanguageIcon sx={{ color: "white" }} />
						<Typography sx={{ color: "white" }}>
							{languageLabels[currentLang]?.label || "Language"}
						</Typography>
					</IconButton>
				</Tooltip>
				<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLanguageMenuClose}>
					{Object.keys(languageLabels).map((lang) => (
						<MenuItem key={lang} onClick={() => handleLanguageChange(lang)}>
							<Flag
								code={languageLabels[lang].flag}
								style={{ width: 24, height: 24, marginRight: 8 }}
							/>
							{languageLabels[lang].label}
						</MenuItem>
					))}
				</Menu>
			</Box>
		</FormControl>
	);
};

export default LanguageSwitcher;
