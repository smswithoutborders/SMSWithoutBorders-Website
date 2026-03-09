import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

export default function Landing() {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const { mode } = useTheme();

  const isLight = mode === "light";
  const containerRef = useRef(null);

  return (
    <Box
      id="home"
      ref={containerRef}
      sx={{
        direction: isFarsi ? "rtl" : "ltr",
       minHeight: {
  xs: "40svh",  
  sm: "60svh", 
  md: "80vh",   
  lg: "60vh",   
},
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        background: isLight
          ? "linear-gradient(160deg, #eef2ff 0%, #dce7ff 40%, #f0f4ff 100%)"
          : "linear-gradient(135deg, #050f3a 2%, #071f74ff 100%)",
        borderBottom: isLight
          ? "1px solid rgba(7,31,116,0.08)"
          : "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: isLight
            ? "radial-gradient(rgba(7,31,116,0.07) 1px, transparent 1px)"
            : "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: { xs: -120, md: -180 },
          left: { xs: -120, md: -160 },
          width: { xs: 380, md: 600 },
          height: { xs: 380, md: 600 },
          borderRadius: "50%",
          border: `1px solid ${isLight ? "rgba(7,31,116,0.08)" : "rgba(255,255,255,0.05)"}`,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: -60, md: -80 },
          left: { xs: -60, md: -80 },
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          borderRadius: "50%",
          border: `1px solid ${isLight ? "rgba(7,31,116,0.06)" : "rgba(255,184,0,0.08)"}`,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

  
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            px: { xs: 3, sm: 5, md: 10 },
            pb: { xs: 6, sm: 8, md: 10 },
            pt: { xs: 16, sm: 14, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: isFarsi ? "flex-end" : "flex-start",
            gap: { xs: 3, md: 4 },
          }}
        >
       
          <Box
            component={motion.img}
            src={isLight ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"}
            alt="SMS Without Borders"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            sx={{
              width: { xs: "62%", sm: "44%", md: "36%", lg: "28%", xl: "24%" },
              maxWidth: 460,
              height: "auto",
              objectFit: "contain",
              transform: isFarsi ? "scaleX(-1) !important" : "scaleX(1) !important",
              filter: isLight
                ? "drop-shadow(0 4px 24px rgba(7,31,116,0.12))"
                : "drop-shadow(0 4px 32px rgba(0,0,0,0.4))",
            }}
          />

          
          <Box
            component={motion.div}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.8rem", lg: "3.4rem" },
                fontWeight: 700,
                color: isLight ? "#071f74ef" : "#ffffff",
                textAlign: isFarsi ? "right" : "left",
                fontFamily: "'Ubuntu', 'Roboto'",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                maxWidth: "100%",
              }}
            >
              {t("LandingHeader", { defaultValue: "Open Source | Research" })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}