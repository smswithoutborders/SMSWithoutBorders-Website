import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";

const USE_LEGACY_HERO = false;

function LegacyHero({ t }) {
  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            pt: 35,
            color: "text.primary",
            letterSpacing: "-0.02em",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          SMSWithoutBorders - Afkanerd for Offline communications.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mt: 4,
            textAlign: "center",
            fontSize: { xs: "1.05rem", md: "1.3rem" },
          }}
        >
          SMSWithoutBorders explores and builds new ways to communicate using
          SMS.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mt: 4,
            textAlign: "center",
            fontSize: { xs: "1.05rem", md: "1.3rem" },
          }}
        >
          {t("About.description", {
            defaultValue:
              "SMSWithoutBorders (SWOB) is dedicated to researching, developing and promoting secure and accessible communication tools that function even without an internet connection.",
          })}
          {t("About.description1", {
            defaultValue:
              "The development includes mobile apps for various platforms such as Android, iOS and Linux systems. Some of the work also includes white papers on topics such as cryptography, communications and internet freedom.",
          })}
          {t("About.description2", {
            defaultValue:
              "Our journey toward achieving our mission began in 2021 with the development of the first Android version of RelaySMS. We have come far since then, with support for more platforms and many more apps.",
          })}
        </Typography>
      </Box>
    </Container>
  );
}

function NewHero({ t, isFarsi }) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100svh",
        py: { xs: 2, md: 0 },
        px: { xs: 2, sm: 3, md: 0 },
        display: "grid",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Box
        component={motion.div}
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 0.2 }}
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: { xs: 2.5, sm: 3, md: 4.5 },
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "1.85rem",
                sm: "2.6rem",
                md: "4.3rem",
                lg: "5.5rem",
              },
              lineHeight: { xs: 1.1, md: 0.98 },
              letterSpacing: "-0.03em",
              color: "text.primary",
              textTransform: "uppercase",
              textAlign: { xs: "left", md: isFarsi ? "right" : "left" },
              maxWidth: { xs: "100%", md: "18ch" },
              pt: { xs: 0, md: 8, lg: 15 },
            }}
          >
            <Box
              component="span"
              sx={{
                position: "relative",
                display: "inline-block",
                color: "secondary.contrastText",
                px: { xs: 0.75, md: 1.1 },
                py: { xs: 0.2, md: 0.25 },
                mr: isFarsi ? 0 : 0.8,
                ml: isFarsi ? 0.8 : 0,
                borderRadius: 1,
                zIndex: 0,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  bgcolor: "#8FA7FF",
                  borderRadius: 1,
                  transform: "skewX(-10deg) rotate(-1deg)",
                  transformOrigin: "center",
                  zIndex: -1,
                },
              }}
            >
              SMS
            </Box>
            WITHOUTBORDERS
          </Typography>

          <Typography
            sx={{
              mt: { xs: 2, md: 3 },
              maxWidth: 760,
              color: "text.secondary",
              fontSize: { xs: "0.94rem", sm: "1rem", md: "1.2rem" },
              lineHeight: { xs: 1.65, md: 1.75 },
              textAlign: { xs: "left", md: isFarsi ? "right" : "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {t("landingHeroSub", {
              defaultValue:
                "SMSWithoutBorders(SWOB) is dedicated to researching, developing and promoting secure and accessible communication tools that function even without an internet connection.",
            })}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-end",
              md: "flex-end",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              gap: { xs: 1.5, md: 2 },
              mt: { xs: 0.5, md: 0 },
            }}
          >
            {/* <Typography
              sx={{
                maxWidth: { xs: "24ch", md: "26ch" },
                textAlign: "right",
                fontSize: { xs: "1.02rem", md: "1.2rem" },
                // lineHeight: 1.45,
                // letterSpacing: "0.03em",
                // textTransform: "uppercase",
                color: "text.secondary",
                opacity: 0.9,
              }}
            >
              Projects built on SMS - the most resilient layer
            </Typography> */}
            <Box
              component={motion.a}
              href="#projects"
              whileHover={{ y: 4, rotate: 24 }}
              whileTap={{ scale: 0.96 }}
              sx={{
                width: { xs: 60, sm: 68, md: 106 },
                height: { xs: 60, sm: 68, md: 106 },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "text.primary",
                textDecoration: "none",
                bgcolor: "background.paper",
                transform: { xs: "rotate(12deg)", md: "rotate(18deg)" },
                transition: "background-color 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
              aria-label={t("landing.goToProjects", {
                defaultValue: "Go to projects",
              })}
            >
              <SouthRoundedIcon sx={{ fontSize: { xs: 28, sm: 32, md: 56 } }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default function Landing() {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const containerRef = useRef(null);

  return (
    <Box
      id="home"
      ref={containerRef}
      sx={{
        minHeight: "100svh",
        my: 0,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {USE_LEGACY_HERO ? (
          <LegacyHero t={t} />
        ) : (
          <NewHero t={t} isFarsi={isFarsi} />
        )}
      </Box>
    </Box>
  );
}
