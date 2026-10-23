import React, { useState } from "react";
import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  NEWSLETTER_HONEYPOT_NAME,
  NEWSLETTER_SUBMIT_URL,
} from "../config/newsletter";

export default function NewsletterForm({
  showHeading = true,
  centered = false,
  sx = {},
}) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const isSubmitting = status === "submitting";
  const isError = status === "error";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const honeypotValue = String(
      formData.get(NEWSLETTER_HONEYPOT_NAME) ?? "",
    ).trim();
    if (honeypotValue) return;

    setStatus("submitting");

    try {
      const payload = new URLSearchParams();
      payload.append("contact[email]", email.trim());
      payload.append(NEWSLETTER_HONEYPOT_NAME, "");

      // no-cors: the response is opaque, so a resolved request is treated as sent.
      await fetch(NEWSLETTER_SUBMIT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      setStatus("doubleOptIn");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box
      sx={{
        ...(centered && {
          maxWidth: 560,
          mx: "auto",
          textAlign: "center",
        }),
        ...sx,
      }}
    >
      {showHeading && (
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.75 }}>
            {t("Newsletter.title", { defaultValue: "Subscribe to our newsletter" })}
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
            {t("Newsletter.description", {
              defaultValue:
                "Get SMSWithoutBorders updates, release highlights and research in your inbox.",
            })}
          </Typography>
        </Box>
      )}

      {status === "doubleOptIn" ? (
        <Alert
          severity="info"
          sx={{ borderRadius: "2px", textAlign: "start" }}
        >
          <Box component="span" sx={{ fontWeight: 700, display: "block" }}>
            {t("Newsletter.doubleOptInTitle", { defaultValue: "Check your inbox." })}
          </Box>
          {t("Newsletter.doubleOptInHint", {
            defaultValue:
              "Check your inbox and click the confirmation link to finish subscribing.",
          })}
        </Alert>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ position: "relative", width: "100%" }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent={centered ? "center" : "flex-start"}
          >
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (isError) setStatus("idle");
              }}
              required
              fullWidth
              size="small"
              placeholder={t("Newsletter.emailPlaceholder", {
                defaultValue: "Email address",
              })}
              inputProps={{
                "aria-label": t("Newsletter.emailPlaceholder", {
                  defaultValue: "Email address",
                }),
              }}
              sx={{
                maxWidth: { sm: 360 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "2px",
                  bgcolor: "background.paper",
                },
              }}
            />

            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                left: -9999,
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              <input
                type="text"
                name={NEWSLETTER_HONEYPOT_NAME}
                autoComplete="off"
                tabIndex={-1}
                defaultValue=""
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              disableElevation
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              sx={{
                borderRadius: "2px",
                textTransform: "none",
                fontWeight: 600,
                whiteSpace: "nowrap",
                px: 2.5,
                minWidth: { sm: 140 },
              }}
            >
              {isSubmitting
                ? t("Newsletter.subscribing", { defaultValue: "Subscribing…" })
                : t("Newsletter.submit", { defaultValue: "Subscribe" })}
            </Button>
          </Stack>

          {isError ? (
            <Typography
              role="alert"
              variant="caption"
              sx={{ display: "block", mt: 1, color: "error.main" }}
            >
              {t("Newsletter.error", {
                defaultValue:
                  "Something went wrong, not your fault. Please try again later.",
              })}
            </Typography>
          ) : (
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 1, color: "text.secondary" }}
            >
              {t("Newsletter.privacyHint", {
                defaultValue: "No spam. Unsubscribe anytime.",
              })}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}
