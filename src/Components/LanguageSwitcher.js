import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Menu, MenuItem, Box, Tooltip, Typography } from "@mui/material";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
	const handleMenuClose = () => setAnchorEl(null);

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
		<Box
			sx={{ backgroundColor: "#04228eff", display: "flex", alignItems: "center", borderRadius: 2 }}
		>
			<Tooltip title="Change Language" arrow>
				<IconButton
					onClick={handleMenuOpen}
					disableRipple
					sx={{
						color: "#FFFFFF",
						px: 2,
						py: 1,
						borderRadius: 2,
						display: "flex",
						alignItems: "center",
						gap: 1,
						fontFamily: "'Unbounded'",
						"&:hover": { backgroundColor: "#0430b5d6" }
					}}
				>
					<Flag
						code={languageLabels[currentLang]?.flag || "US"}
						style={{ width: 24, height: 16, borderRadius: 2 }}
					/>
					<Typography
						sx={{
							fontSize: { xs: "0.8rem", sm: "0.9rem" },
							fontFamily: "'Unbounded'",
							fontWeight: 500
						}}
					>
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
					sx: { minWidth: 180, borderRadius: 2, p: "4px 0", bgcolor: "#FFFFFF" }
				}}
			>
				{Object.keys(languageLabels).map((lang) => (
					<MenuItem
						key={lang}
						onClick={() => handleLanguageChange(lang)}
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1.5,
							px: 2,
							py: 1,
							fontFamily: "'Unbounded'"
						}}
					>
						<Flag
							code={languageLabels[lang].flag}
							style={{ width: 24, height: 16, borderRadius: 2 }}
						/>
						<Typography sx={{ fontSize: "0.9rem", fontFamily: "'Unbounded'", fontWeight: 500 }}>
							{languageLabels[lang].label}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export default LanguageSwitcher;
