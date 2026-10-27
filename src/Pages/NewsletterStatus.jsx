import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import UnsubscribeOutlinedIcon from "@mui/icons-material/UnsubscribeOutlined";
import Navbar from "../Components/Navbar";
import Seo from "../Components/Seo";
import NewsletterForm from "../Components/NewsletterForm";
import { NEWSLETTER_ROUTES } from "../config/newsletter";

const VARIANTS = {
  subscribed: {
    path: NEWSLETTER_ROUTES.subscribed,
    Icon: MarkEmailReadOutlinedIcon,
    titleKey: "Newsletter.successTitle",
    title: "You're subscribed!",
    bodyKey: "Newsletter.successHint",
    body: "Thanks for confirming your email. A welcome email is on its way to your inbox.",
    showForm: false,
  },
  confirmationError: {
    path: NEWSLETTER_ROUTES.confirmationError,
    Icon: LinkOffIcon,
    titleKey: "Newsletter.confirmationErrorTitle",
    title: "This confirmation link has expired or has already been used.",
    bodyKey: "Newsletter.confirmationErrorBody",
    body: "Subscribe again below and we will send you a fresh confirmation email.",
    showForm: true,
  },
  unsubscribed: {
    path: NEWSLETTER_ROUTES.unsubscribed,
    Icon: UnsubscribeOutlinedIcon,
    titleKey: "Newsletter.unsubscribedTitle",
    title: "You have unsubscribed.",
    bodyKey: "Newsletter.unsubscribedBody",
    body: "You will no longer receive emails from this newsletter. Changed your mind? You can subscribe again below.",
    showForm: true,
  },
};

export default function NewsletterStatus({ variant }) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isFarsi = i18n.language === "fa";
  const { path, Icon, titleKey, title, bodyKey, body, showForm } =
    VARIANTS[variant];
  const titleText = t(titleKey, { defaultValue: title });

  return (
    <>
      <Navbar />
      <Seo
        title={`${titleText} | SMSWithoutBorders`}
        description={t(bodyKey, { defaultValue: body })}
        path={path}
        noindex
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          direction: isFarsi ? "rtl" : "ltr",
        }}
      >
        <Container maxWidth="md">
          <Stack
            alignItems="center"
            textAlign="center"
            spacing={2.5}
            sx={{
              px: { xs: 3, md: 5 },
              py: { xs: 5, md: 7 },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                display: "grid",
                placeItems: "center",

                color: "primary.light",
              }}
            >
              <Icon sx={{ fontSize: 42 }} />
            </Box>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.35rem", md: "2rem" },
              }}
            >
              {titleText}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                maxWidth: 600,
                fontSize: { xs: "0.95rem", md: "1.4rem" },
              }}
            >
              {t(bodyKey, { defaultValue: body })}
            </Typography>

            {showForm && (
              <NewsletterForm
                showHeading={false}
                centered
                sx={{ width: "100%", pt: 1 }}
              />
            )}

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              sx={{ pt: 1 }}
            >
              <Button
                component={RouterLink}
                to="/"
                variant={showForm ? "outlined" : "contained"}
                disableElevation
                sx={{
                  borderRadius: "2px",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  ...(showForm && {
                    color: "text.primary",
                    borderColor: "divider",
                    "&:hover": { borderColor: "text.primary" },
                  }),
                }}
              >
                {t("Newsletter.backHome", { defaultValue: "Back to home" })}
              </Button>
              {!showForm && (
                <Button
                  component={RouterLink}
                  to="/research"
                  variant="outlined"
                  sx={{
                    borderRadius: "2px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 3,
                    color: "text.primary",
                    borderColor: "divider",
                    "&:hover": { borderColor: "text.primary" },
                  }}
                >
                  {t("Newsletter.readResearch", {
                    defaultValue: "Read our research",
                  })}
                </Button>
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
