import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import Navbar from "../Components/Navbar";
import { useTheme } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const ThreatModel = () => {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const { mode } = useTheme();

  const backgroundColor = mode === "light" ? "#f0f7fa" : "#040424";
  const paperBg = mode === "light" ? "#ffffff" : "#121246";
  const textColor = mode === "light" ? "#000" : "#fff";
  const secondaryTextColor = mode === "light" ? "#555" : "#ccc";

  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
          p: 2,
          
          direction: isFarsi ? "rtl" : "ltr",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 5,
            textAlign: "center",
            maxWidth: 800,
            width: "100%",
            bgcolor: paperBg,
            color: textColor,
          }}
        >
          <ConstructionIcon
            sx={{
              fontSize: 60,
              color: "#ff6a14",
              mb: 2,
            }}
          />
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
            {t("ThreatModelHeader", "Threat Model")}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: secondaryTextColor }}>
            {t(
              "ThreatModelComingSoon",
              "This page is coming soon! Stay tuned for updates."
            )}
          </Typography>
          <Typography variant="body2" sx={{ color: secondaryTextColor }}>
            {t(
              "ThreatModelDescription",
              "We are working hard to bring you the detailed threat model."
            )}
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default ThreatModel;