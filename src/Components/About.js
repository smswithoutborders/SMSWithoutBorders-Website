import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import { useTheme } from "@mui/material/styles";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function FlexRowTwoColumns() {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();
  const ref4 = useReveal();

  const revealStyle = {
    opacity: 0,
    transform: "translateY(32px)",
    transition:
      "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
  };

  return (
    <Box
      sx={{
        // background: isLight ? "#C7D3FF" : "#000824",
        direction: isFarsi ? "rtl" : "ltr",
        position: "relative",
        // color: "rgba(255,255,255,0.80)",
        overflow: "hidden",
        py: { xs: 7, sm: 10, md: 14 },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box ref={ref1} style={revealStyle} sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.9rem", sm: "2.4rem", md: "9rem" },
              // color: "#ffffff",
              textAlign: "left",
            }}
          >
            "
          </Typography>
        </Box>

        <Box
          sx={{
            gap: { xs: 5, md: 0 },
            mb: { xs: 6, md: 10 },
            alignItems: "start",
          }}
        >
          <Box ref={ref2} style={{ ...revealStyle, transitionDelay: "0.12s" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 300,
                fontSize: { xs: "1.05rem", md: "1.8rem" },
                lineHeight: 1.85,
              }}
            >
              {t("About.description", {
                defaultValue:
                  "SMSWithoutBorders (SWOB) is dedicated to researching, developing and promoting secure and accessible communication tools that function even without an internet connection.",
              })}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 300,
                fontSize: { xs: "1.05rem", md: "1.8rem" },
                lineHeight: 1.85,
                mb: 3,
              }}
            >
              {t("About.description1", {
                defaultValue:
                  "The development includes mobile apps for various platforms such as Android, iOS and Linux systems. Some of the work also includes white papers on topics such as cryptography, communications and internet freedom.",
              })}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Ubuntu', 'Roboto'",
                fontWeight: 300,
                fontSize: { xs: "1.05rem", md: "1.3rem" },
                pl: { xs: 0, md: 60 },
                lineHeight: 1.85,
                textAlign: isFarsi ? "left" : "right",
              }}
            >
              {t("About.description2", {
                defaultValue:
                  "Our journey toward achieving our mission began in 2021 with the development of the first Android version of RelaySMS. We have come far since then, with support for more platforms and many more apps.",
              })}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Ubuntu', 'Roboto'",
                fontWeight: 300,
                fontSize: { xs: "1.05rem", md: "1.3rem" },
                pl: { xs: 0, md: 60 },
                textAlign: isFarsi ? "left" : "right",
                lineHeight: 1.85,
                "& a": {
                  color: "#f3831a",
                  textDecoration: "none",
                  paddingBottom: "1px",
                  transition: "border-color 0.2s, color 0.2s",
                },
              }}
            >
              {parse(
                t("About.description3", {
                  defaultValue:
                    "We publish our research as frequently as possible on our blog and make announcements via our social media outlets. SMSWithoutBorders is a project started by the team at <a href='https://Afkanerd.com' class='afkanerd'>Afkanerd</a>.",
                }),
              )}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
