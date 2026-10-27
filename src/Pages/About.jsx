import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import Navbar from "../Components/Navbar";
import Seo from "../Components/Seo";
import NewsletterForm from "../Components/NewsletterForm";

const AFKANERD_URL = "https://afkanerd.com";
const DEVELOPERS_EMAIL = "developers@smswithoutborders.com";
const GITHUB_URL = "https://github.com/smswithoutborders";
const ISSUES_URL =
  "https://github.com/smswithoutborders/RelaySMS-Android/issues";
const RELAYSMS_TELEGRAM_URL = "https://t.me/+IPYp6q06dWsyZjY0";
const DEKUSMS_TELEGRAM_URL = "https://t.me/deku_sms";

const TELEGRAM_BLUE = "#229ED9";

const asList = (value) => (Array.isArray(value) ? value : []);

export default function About() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isFarsi = i18n.language === "fa";

  const history = asList(t("aboutPage.history", { returnObjects: true }));
  const useCases = asList(t("aboutPage.useCases", { returnObjects: true }));

  const involvement = [
    {
      key: "contact",
      title: t("aboutPage.contactTitle", {
        defaultValue: "Reach the developers",
      }),
      body: t("aboutPage.contactBody", {
        defaultValue:
          "Questions, partnerships or security reports? Email the team directly.",
      }),
      links: [
        {
          // icon: <MailOutlineIcon sx={{ fontSize: 18 }} />,
          label: DEVELOPERS_EMAIL,
          href: `mailto:${DEVELOPERS_EMAIL}`,
        },
      ],
    },
    {
      key: "contribute",
      title: t("aboutPage.contributeTitle", { defaultValue: "Contribute" }),
      body: t("aboutPage.contributeBody", {
        defaultValue:
          "SMSWithoutBorders is open source, and we are constantly looking for ways to improve. Code, translations, testing and bug reports are all welcome.",
      }),
      links: [
        {
          icon: <GitHubIcon sx={{ fontSize: 18 }} />,
          label: t("footer.github", { defaultValue: "GitHub" }),
          href: GITHUB_URL,
          external: true,
        },
        {
          icon: <ArrowOutwardIcon sx={{ fontSize: 18 }} />,
          label: t("footerNav.reportIssue", {
            defaultValue: "Report an issue",
          }),
          href: ISSUES_URL,
          external: true,
        },
      ],
    },
    {
      key: "feedback",
      title: t("aboutPage.feedbackTitle", { defaultValue: "Share feedback" }),
      body: t("aboutPage.feedbackBody", {
        defaultValue:
          "Join our community channels on Telegram to ask questions, report problems and hear about new releases first.",
      }),
      links: [
        {
          icon: <TelegramIcon sx={{ fontSize: 18 }} />,
          label: t("aboutPage.relaysmsTelegram", {
            defaultValue: "RelaySMS on Telegram",
          }),
          href: RELAYSMS_TELEGRAM_URL,
          external: true,
          highlight: true,
        },
        {
          icon: <TelegramIcon sx={{ fontSize: 18 }} />,
          label: t("aboutPage.dekusmsTelegram", {
            defaultValue: "DekuSMS on Telegram",
          }),
          href: DEKUSMS_TELEGRAM_URL,
          external: true,
          highlight: true,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Seo
        title="About SMSWithoutBorders | Open-Source Tools Against Internet Shutdowns"
        description="The history of SMSWithoutBorders and RelaySMS, why we build offline communication tools, and how to contact, contribute to and follow the project."
        path="/about"
      />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          direction: isFarsi ? "rtl" : "ltr",
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            {/* <Typography
              sx={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: theme.palette.secondary.main,
                mb: 1.5,
              }}
            >
              {t("aboutPage.eyebrow", { defaultValue: "About" })}
            </Typography> */}

            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.45rem", sm: "1.85rem", md: "2.125rem" },
                lineHeight: 1.25,
                overflowWrap: "anywhere",
              }}
            >
              {t("aboutPage.title", {
                defaultValue: "About SMSWithoutBorders",
              })}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.85,
                fontSize: { xs: "1rem", md: "1.06rem" },
                maxWidth: 860,
                mb: 4,
              }}
            >
              {t("aboutPage.intro", {
                defaultValue:
                  "SMSWithoutBorders (SWOB) is dedicated to researching, developing and promoting secure and accessible communication tools that function even without an internet connection.",
              })}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              sx={{
                border: "1px solid",
                borderColor: "divider",
                // borderInlineStart: `3px solid ${theme.palette.secondary.main}`,
                bgcolor: "background.paper",
                px: { xs: 2.5, md: 3 },
                py: 2.5,
                mb: { xs: 7, md: 9 },
              }}
            >
              <Typography sx={{ fontWeight: 600, lineHeight: 1.6 }}>
                {t("aboutPage.builtBy", {
                  defaultValue: "SMSWithoutBorders is built by Afkanerd.",
                })}
              </Typography>
              <Button
                component="a"
                href={AFKANERD_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                size="small"
                endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  flexShrink: 0,
                  borderRadius: "2px",
                  textTransform: "none",
                  fontWeight: 600,
                  color: "text.primary",
                  borderColor: "divider",
                  "&:hover": { borderColor: "text.primary" },
                }}
              >
                {t("aboutPage.visitAfkanerd", {
                  defaultValue: "Visit afkanerd.com",
                })}
              </Button>
            </Stack>

            <Stack spacing={{ xs: 7, md: 9 }}>
              <TextSection
                title={t("aboutPage.historyTitle", { defaultValue: "History" })}
                paragraphs={history}
              />
              <TextSection
                title={t("aboutPage.useCasesTitle", {
                  defaultValue: "Use cases",
                })}
                paragraphs={useCases}
              />

              <Box component="section">
                <SectionHeading>
                  {t("aboutPage.involvedTitle", {
                    defaultValue: "Get involved",
                  })}
                </SectionHeading>
                <Box sx={{ border: "1px solid", borderColor: "divider" }}>
                  {involvement.map((item, index) => (
                    <InvolvementRow
                      key={item.key}
                      {...item}
                      isFirst={index === 0}
                    />
                  ))}
                </Box>
              </Box>

              <Box
                component="section"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  px: { xs: 2.5, md: 4 },
                  py: { xs: 4, md: 6 },
                }}
              >
                <NewsletterForm centered />
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

function SectionHeading({ children }) {
  return (
    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
      {children}
    </Typography>
  );
}

function TextSection({ title, paragraphs }) {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
        columnGap: 6,
      }}
    >
      <SectionHeading>{title}</SectionHeading>
      <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
        {paragraphs.map((paragraph, index) => (
          <Typography
            key={index}
            sx={{
              color: "text.secondary",
              lineHeight: 1.85,
              fontSize: { xs: "1rem", md: "1.04rem" },
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

function InvolvementRow({ title, body, links, isFirst }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) auto" },
        alignItems: "center",
        gap: { xs: 2.5, md: 5 },
        p: { xs: 2.5, md: 3.5 },
        borderTop: isFirst ? "none" : "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ maxWidth: 640 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: "1.05rem", mb: 0.75 }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
          {body}
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.25}
        useFlexGap
        flexWrap="wrap"
        justifyContent={{ md: "flex-end" }}
      >
        {links.map((link) => (
          <Button
            key={link.href}
            component="a"
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            variant={link.highlight ? "contained" : "outlined"}
            disableElevation
            startIcon={link.icon}
            sx={{
              justifyContent: { xs: "flex-start", sm: "center" },
              borderRadius: "2px",
              textTransform: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
              px: 2,
              py: 1,
              ...(link.highlight
                ? {
                    bgcolor: TELEGRAM_BLUE,
                    color: "#fff",
                    "&:hover": { bgcolor: "#1B8BC0" },
                  }
                : {
                    color: "text.primary",
                    borderColor: "divider",
                    "&:hover": {
                      borderColor: "text.primary",
                      bgcolor: "transparent",
                    },
                  }),
            }}
          >
            {link.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
