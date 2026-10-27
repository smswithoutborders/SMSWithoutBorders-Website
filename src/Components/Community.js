import React from "react";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import TelegramIcon from "@mui/icons-material/Telegram";
import NewsletterForm from "./NewsletterForm";
import useReveal from "../hooks/useReveal";
import { FavoriteBorder } from "@mui/icons-material";

const RELAYSMS_TELEGRAM_URL = "https://t.me/+IPYp6q06dWsyZjY0";
const DEKUSMS_TELEGRAM_URL = "https://t.me/deku_sms";

const revealStyle = {
  opacity: 0,
  transform: "translateY(28px)",
  transition:
    "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
};

export default function Community() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const accent = theme.palette.secondary.main;
  const headerRef = useReveal(0);
  const panelRef = useReveal(150);

  return (
    <Box
      id="community"
      sx={{
        scrollMarginTop: { xs: "72px", md: "96px" },
        py: { xs: 8, md: 14 },
        direction: isFarsi ? "rtl" : "ltr",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box ref={headerRef} style={revealStyle} sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: accent,
              mb: 1.5,
            }}
          >
            {t("community.eyebrow", { defaultValue: "Community" })}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {t("community.title", {
              defaultValue: "Stay close to the community",
            })}
          </Typography>
        </Box>

        <Box
          ref={panelRef}
          style={revealStyle}
          sx={{
            border: `1px solid ${theme.palette.divider}`,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "start",
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 5 },
            }}
          >
            {/* <FavoriteBorder sx={{ fontSize: { xs: 25, md: 35 }, mb: 2 }} />
            <br/> */}
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "text.secondary",
                lineHeight: 1.85,
                maxWidth: 480,
              }}
            >
              {t("community.subtitle", {
                defaultValue:
                  "SMSWithoutBorders is shaped by the people who use it, test it and spread the word. Join the newsletter to stay up to date and get the news first.",
              })}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "start",
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 5 },
              bgcolor: "background.paper",
              borderTop: {
                xs: `1px solid ${theme.palette.divider}`,
                md: "none",
              },
              borderInlineStart: {
                xs: "none",
                md: `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {t("community.formTitle", {
                defaultValue: "Join the newsletter",
              })}
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.75, mb: 2.5 }}
            >
              {t("community.formBody", {
                defaultValue:
                  "Release news, community updates and research, straight to your inbox.",
              })}
            </Typography>

            <NewsletterForm showHeading={false} sx={{ width: "100%" }} />

            <Box
              sx={{
                width: "100%",
                mt: 3,
                pt: 2.5,
                borderTop: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography
                sx={{ color: "text.secondary", fontSize: "0.9rem", mb: 1.25 }}
              >
                {t("community.chatPrompt", {
                  defaultValue: "Prefer to chat? Join us on Telegram:",
                })}
              </Typography>
              <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
                {[
                  { label: "RelaySMS", href: RELAYSMS_TELEGRAM_URL },
                  { label: "DekuSMS", href: DEKUSMS_TELEGRAM_URL },
                ].map((channel) => (
                  <Chip
                    key={channel.href}
                    component="a"
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    clickable
                    variant="outlined"
                    icon={<TelegramIcon />}
                    label={channel.label}
                    sx={{
                      borderRadius: "20px",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      borderColor: "divider",
                      color: "text.primary",
                      "& .MuiChip-icon": { color: "#229ED9", fontSize: 18 },
                      "&:hover": { borderColor: "#229ED9" },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
