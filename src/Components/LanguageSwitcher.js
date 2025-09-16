import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Menu, MenuItem, Box, Tooltip, Typography, Divider, CircularProgress } from "@mui/material";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
	const { t, i18n, ready } = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);

	const supportedLanguages = ["en", "es", "fr", "fa"];
	const languageLabels = {
		en: { flag: "US", label: "English" },
		es: { flag: "ES", label: "Español" },
		fr: { flag: "FR", label: "Français" },
		fa: { flag: "IR", label: "فارسی" },
	};

	const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
	const handleMenuClose = () => setAnchorEl(null);

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("i18nextLng", lang);
		setAnchorEl(null);
	};

	if (!ready) return <CircularProgress size={20} />;

	const currentLangRaw = i18n.language || "en";
	const currentLang = supportedLanguages.includes(currentLangRaw.slice(0, 2))
		? currentLangRaw.slice(0, 2)
		: "en";

	return (
		<Box
			sx={{
				backgroundColor: "#04228e",
				display: "flex",
				alignItems: "center",
				borderRadius: "0.5rem",
				px: 1,
				py: 0.5,
				fontFamily: "'Roboto', 'Ubuntu'",
				fontWeight: 300,
			}}
		>
			<Tooltip title={t("changeLanguage")} arrow>
				<IconButton
					onClick={handleMenuOpen}
					disableRipple
					sx={{
						color: "#FFFFFF",
						borderRadius: "1rem",
						display: "flex",
						alignItems: "center",
						gap: 1,
						"&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "0.75rem", sm: "0.85rem" },
							fontFamily: "'Roboto', 'Ubuntu'",
							fontWeight: 300,
						}}
					>
						{languageLabels[currentLang]?.label || "Language"}
					</Typography>
					<Flag
						code={languageLabels[currentLang]?.flag || "US"}
						style={{ width: 22, height: 16, borderRadius: 3 }}
					/>
				</IconButton>
			</Tooltip>

			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
				PaperProps={{
					elevation: 4,
					sx: { minWidth: 180, borderRadius: "1rem", bgcolor: "#fff", overflow: "hidden" },
				}}
			>
				{supportedLanguages.map((lang, index) => (
					<Box key={lang}>
						<MenuItem
							onClick={() => handleLanguageChange(lang)}
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1.5,
								px: 2,
								py: 1,
								fontFamily: "'Roboto', 'Ubuntu'",
								transition: "all 0.2s ease",
								"&:hover": { backgroundColor: "#f5f5f5", transform: "translateX(4px)" },
							}}
						>
							<Flag code={languageLabels[lang].flag} style={{ width: 22, height: 16, borderRadius: 3 }} />
							<Typography
								sx={{
									fontSize: "0.85rem",
									fontFamily: "'Roboto', 'Ubuntu'",
									fontWeight: 350,
									color: "#333",
								}}
							>
								{languageLabels[lang].label}
							</Typography>
						</MenuItem>
						{index < supportedLanguages.length - 1 && <Divider sx={{ my: 0.5 }} />}
					</Box>
				))}
			</Menu>
		</Box>
	);
};

export default LanguageSwitcher;
