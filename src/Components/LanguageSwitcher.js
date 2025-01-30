import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Menu, MenuItem, Box, Tooltip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		setAnchorEl(null);
	};

	const currentLang = i18n.language;

	const languageLabels = {
		en: { label: "English", flag: "US" },
		es: { label: "Español", flag: "ES" },
		fr: { label: "Français", flag: "FR" },
		fa: { label: "فارسی", flag: "IR" }
	};

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Tooltip title="Change Language" arrow>
				<IconButton
					onClick={handleMenuOpen}
					sx={{
						backgroundColor: "#000158",
						color: "#FFFFFF",
						padding: "8px 12px",
						borderRadius: "8px",
						display: "flex",
						alignItems: "center",
						gap: "8px"
					}}
				>
					<LanguageIcon />
					<Typography sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
						{languageLabels[currentLang]?.label || "Language"}
					</Typography>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
				PaperProps={{
					elevation: 3,
					sx: {
						minWidth: "160px",
						borderRadius: "8px",
						padding: "4px 0",
						backgroundColor: "#FFFFFF"
					}
				}}
			>
				{Object.keys(languageLabels).map((lang) => (
					<MenuItem
						key={lang}
						onClick={() => handleLanguageChange(lang)}
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "12px",
							padding: "8px 16px"
						}}
					>
						<Flag
							code={languageLabels[lang].flag}
							style={{
								width: 24,
								height: 16,
								borderRadius: "4px"
							}}
						/>
						<Typography sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
							{languageLabels[lang].label}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export default LanguageSwitcher;
