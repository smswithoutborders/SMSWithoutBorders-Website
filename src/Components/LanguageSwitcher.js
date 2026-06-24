import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Flag from "react-world-flags";

const languages = [
  { code: "en", flag: "US", label: "English" },
  { code: "es", flag: "ES", label: "Español" },
  { code: "fr", flag: "FR", label: "Français" },
  { code: "fa", flag: "IR", label: "فارسی" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const currentCode =
    languages.find((l) => l.code === i18n.language?.slice(0, 2))?.code ?? "en";
  const current = languages.find((l) => l.code === currentCode);

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        size="small"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 14 }} />}
        sx={{
          color: "text.primary",
          textTransform: "none",
          fontSize: "0.9rem",
		  fontWeight: 400,
          gap: 0.5,
          "&:hover": { bgcolor: "action.hover" },
        }}
        startIcon={
          <Flag
            code={current.flag}
            style={{ width: 20, height: 14, borderRadius: 1 }}
          />
        }
      >
        {current.label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        PaperProps={{ sx: { minWidth: 160, borderRadius: 0 } }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === currentCode}
            onClick={() => handleChange(lang.code)}
            sx={{ gap: 1.5, fontSize: "0.875rem" }}
          >
            <Flag
              code={lang.flag}
              style={{ width: 20, height: 14, borderRadius: 1 }}
            />
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
