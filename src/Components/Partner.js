import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
      { threshold: 0.12 },
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

function SponsorCard({ sponsor, index }) {
  const theme = useTheme();
  const ref = useReveal(sponsor.delay);
  const isLight = theme.palette.mode === "light";

  return (
    <Box
      ref={ref}
      // style={{
      //   opacity: 0,
      //   transform: "translateY(36px)",
      //   transition:
      //     "opacity 0.72s cubic-bezier(.4,0,.2,1), transform 0.72s cubic-bezier(.4,0,.2,1)",
      // }}
      component="a"
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sponsor.alt}
      sx={{
        flex: 1,
        minWidth: { xs: "100%", sm: 240 },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 2,
        textDecoration: "none",
        px: { xs: 3.5, md: 5 },
        py: { xs: 4, md: 5 },
        position: "relative",
        borderTop: {
          xs: index > 0 ? `1px solid ${theme.palette.divider}` : "none",
          sm: "none",
        },
        borderInlineStart: {
          xs: "none",
          sm: index > 0 ? `1px solid ${theme.palette.divider}` : "none",
        },
        transition: "background-color 0.2s ease",
        "& .sponsor-link": {
          opacity: 0,
          transform: "translate(-2px, 2px)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        },
        "&:hover": {
          bgcolor: "action.hover",
          "& .sponsor-link": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
      }}
    >
      <Box
        className="sponsor-link"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "text.primary",
        }}
      >
        <ArrowOutwardIcon sx={{ fontSize: 18 }} />
      </Box>
      {/* 
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: isLight
            ? "radial-gradient(ellipse at 50% 60%, rgba(7,31,116,0.04) 0%, transparent 70%)"
            : "radial-gradient(ellipse at 50% 60%, rgba(255,184,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      /> */}

      <Box
        component="img"
        src={isLight ? sponsor.imgLight : sponsor.imgDark}
        alt={sponsor.alt}
        sx={{
          width: "100%",
          maxWidth: 240,
          height: 100,
          objectFit: "contain",
          filter: isLight ? "none" : "brightness(0.92)",
          transition: "transform 0.35s ease",
          position: "relative",
          zIndex: 1,
          "&:hover": { transform: "scale(1.04)" },
        }}
      />

      {/* <Box
        sx={{
          width: 40,
          height: "1.5px",
          bgcolor: isLight ? "rgba(7,31,116,0.12)" : "rgba(255,255,255,0.10)",
          borderRadius: 1,
        }}
      /> */}
      {/* 
      <Typography
        sx={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "text.secondary",
          opacity: 0.7,
          position: "relative",
          zIndex: 1,
        }}
      >
        {sponsor.description}
      </Typography> */}
    </Box>
  );
}

export default function Partner() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const isLight = theme.palette.mode === "light";

  const headerRef = useReveal(0);
  const accent = theme.palette.secondary.main;

  return (
    <Box
      sx={{
        // bgcolor: "background.default",
        py: { xs: 8, md: 14 },
        direction: isFarsi ? "rtl" : "ltr",
        // position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box
          ref={headerRef}
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition:
              "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
          }}
          sx={{ mb: { xs: 6, md: 8 }, textAlign: isFarsi ? "right" : "left" }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              // mb: 2.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: accent,
                mb: 1.5,
              }}
            >
              {t("Sponsor.Sponsorsub", { defaultValue: "Partners" })}
            </Typography>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {t("Sponsor.SponsorT", {
              defaultValue: "Supporting Organizations",
            })}
          </Typography>
        </Box>

        <Box
          sx={{
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 0,
            // bgcolor: "action.hover",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 0,
            justifyContent: "flex-start",
            alignItems: "stretch",
            overflow: "hidden",
          }}
        >
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={sponsor.alt} sponsor={sponsor} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
