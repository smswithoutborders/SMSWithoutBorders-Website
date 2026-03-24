import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

const sponsors = [
  {
    href: "https://www.opentech.fund/",
    imgLight: "/Images/OTF.png",
    imgDark: "/Images/OTF.png",
    alt: "Open Tech Fund",
    description: "Open Technology Fund",
    delay: 120,
  },
  {
    href: "https://internews.org/",
    imgLight: "/Images/Internews.png",
    imgDark: "/Images/Internews.png",
    alt: "Internews",
    description: "Internews",
    delay: 260,
  },
];

function SponsorCard({ sponsor, isLight, subColor }) {
  const ref = useReveal(sponsor.delay);

  const cardBg = isLight ? "#ffffff" : "#070f2b";
  const borderColor = isLight ? "rgba(7,31,116,0.09)" : "rgba(238,242,255,0.07)";
  const hoverBorder = isLight ? "rgba(7,31,116,0.22)" : "rgba(238,242,255,0.18)";

  return (
    <Box
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(36px)",
        transition:
          "opacity 0.72s cubic-bezier(.4,0,.2,1), transform 0.72s cubic-bezier(.4,0,.2,1)",
      }}
      component="a"
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sponsor.alt}
      sx={{
        flex: 1,
        minWidth: { xs: "100%", sm: 260 },
        maxWidth: { xs: "100%", sm: 420 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        textDecoration: "none",
        bgcolor: cardBg,
        border: `1px solid ${borderColor}`,
        borderRadius: 3,
        px: { xs: 4, md: 6 },
        py: { xs: 5, md: 7 },
        position: "relative",
        overflow: "hidden",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          borderColor: hoverBorder,
          transform: "translateY(-6px)",
          boxShadow: isLight
            ? "0 20px 50px rgba(7,31,116,0.09)"
            : "0 20px 50px rgba(0,0,0,0.35)",
          "& .sponsor-icon": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
          "& .sponsor-link": { opacity: 1 },
        },
      }}
    >

      <Box
        className="sponsor-link"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          opacity: 0,
          transition: "opacity 0.25s ease",
          color: subColor,
        }}
      >
        <OpenInNewIcon sx={{ fontSize: 16 }} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: isLight
            ? "radial-gradient(ellipse at 50% 60%, rgba(7,31,116,0.04) 0%, transparent 70%)"
            : "radial-gradient(ellipse at 50% 60%, rgba(255,184,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />


      <Box
        component="img"
        src={isLight ? sponsor.imgLight : sponsor.imgDark}
        alt={sponsor.alt}
        sx={{
          width: "100%",
          maxWidth: 260,
          height: 100,
          objectFit: "contain",
          filter: isLight ? "none" : "brightness(0.92)",
          transition: "transform 0.35s ease",
          position: "relative",
          zIndex: 1,
          "&:hover": { transform: "scale(1.04)" },
        }}
      />

  
      <Box
        sx={{
          width: 40,
          height: "1.5px",
          bgcolor: isLight ? "rgba(7,31,116,0.12)" : "rgba(255,255,255,0.10)",
          borderRadius: 1,
        }}
      />

      <Typography
        sx={{
          fontFamily: "'Ubuntu', 'Roboto'",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: subColor,
          opacity: 0.7,
          position: "relative",
          zIndex: 1,
        }}
      >
        {sponsor.description}
      </Typography>
    </Box>
  );
}

export default function Partner() {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const { mode } = useTheme();

  const isLight = mode === "light";
  const bg = isLight ? "#f7f9ff" : "#000824";
  const textColor = isLight ? "#071f74ef" : "#ffffff";
  const subColor = isLight ? "#505e85ff" : "#cbd7e2ff";

  const headerRef = useReveal(0);

  return (
    <Box
      sx={{
        bgcolor: bg,
        py: { xs: 8, md: 14 },
        px: { xs: 3, sm: 6, md: 10 },
        direction: isFarsi ? "rtl" : "ltr",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: isLight
            ? "radial-gradient(rgba(7,31,116,0.04) 1px, transparent 1px)"
            : "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ maxWidth: 1100, mx: "auto", position: "relative" }}>

        <Box
          ref={headerRef}
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition:
              "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
          }}
          sx={{ mb: { xs: 8, md: 10 }, textAlign: "center" }}
        >
       
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                width: 28,
                height: "1.5px",
                bgcolor: isLight ? "#071f74" : "#FFB800",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isLight ? "#071f74" : "#FFB800",
                fontFamily: "'Ubuntu', 'Roboto'",
              }}
            >
               {t("Sponsor.Sponsorsub", { defaultValue: "Partners" })}
          
            </Typography>
            <Box
              sx={{
                width: 28,
                height: "1.5px",
                bgcolor: isLight ? "#071f74" : "#FFB800",
              }}
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" },
              lineHeight: 1.12,
              color: textColor,
              fontFamily: "'Ubuntu', 'Roboto'",
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            {t("Sponsor.SponsorT", { defaultValue: "Supporting Organizations" })}
          </Typography>

        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 3, md: 5 },
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.alt}
              sponsor={sponsor}
              isLight={isLight}
              subColor={subColor}
            />
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            pt: 4,
            borderTop: `1px solid ${
              isLight ? "rgba(7,31,116,0.08)" : "rgba(255,255,255,0.07)"
            }`,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Ubuntu', 'Roboto'",
              fontSize: "0.82rem",
              fontWeight: 300,
              color: subColor,
              opacity: 0.6,
              letterSpacing: "0.04em",
            }}
          >
                          {t("Sponsor.sponsorfooter", { defaultValue: "Proudly supported by organizations committed to a free and open internet." })}

          </Typography>
        </Box>
      </Box>
    </Box>
  );
}