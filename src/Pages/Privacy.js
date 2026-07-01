import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>SMSWithoutBorders | Privacy Policy</title>

  <meta
    name="description"
    content="SMSWithoutBorders (SWOB) is dedicated to researching, developing and promoting secure and open-source communication tools that function even without an internet connection."
  />
</Helmet>;

const definitionKeys = [
  "Privacy-Policy3.definitionAccount",
  "Privacy-Policy3.definitionCompany",
  "Privacy-Policy3.definitionCookies",
  "Privacy-Policy3.definitionCountry",
  "Privacy-Policy3.definitionDevice",
  "Privacy-Policy3.definitionPersonalData",
  "Privacy-Policy3.definitionService",
  "Privacy-Policy3.definitionServiceProvider",
  "Privacy-Policy3.definitionThirdParty",
  "Privacy-Policy3.definitionUsageData",
  "Privacy-Policy3.definitionWebsite",
  "Privacy-Policy3.definitionYou",
];

const policySections = [
  {
    title: "Privacy-Policy2.policyHeader2",
    lead: "Privacy-Policy2.policySubheader2",
    paragraphs: ["Privacy-Policy2.policyBody2"],
  },
  {
    title: "Privacy-Policy3.policyHeader3",
    paragraphs: ["Privacy-Policy3.policyBody3"],
    list: definitionKeys,
  },
  { title: "Privacy-Policy4.policyHeader4" },
  {
    title: "Privacy-Policy5.policyHeader5",
    paragraphs: ["Privacy-Policy5.policyBody5", "Privacy-Policy5.policyBody6"],
  },
  {
    title: "Privacy-Policy6.policyHeader6",
    paragraphs: ["Privacy-Policy6.policyBody7", "Privacy-Policy6.policyBody8"],
  },
  {
    title: "Privacy-Policy7.policyHeader7",
    paragraphs: ["Privacy-Policy7.policyBody9"],
  },
  {
    title: "Privacy-Policy8.policyHeader8",
    paragraphs: [
      "Privacy-Policy8.policyBody10",
      "Privacy-Policy8.policyBody11",
    ],
  },
  {
    title: "Privacy-Policy9.policyHeader9",
    paragraphs: ["Privacy-Policy9.policyBody12"],
  },
  {
    title: "Privacy-Policy10.policyHeader10",
    paragraphs: ["Privacy-Policy10.policyBody14"],
  },
  {
    title: "Privacy-Policy11.policyHeader11",
    paragraphs: ["Privacy-Policy11.policyBody15"],
  },
];

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isFarsi = i18n.language === "fa";

  return (
    <>
      <Navbar />
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
          <Box
            sx={{
              //   border: `1px solid ${theme.palette.divider}`,
              p: { xs: 3, md: 5 },
            }}
          >
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
              Legal
            </Typography> */}

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              {t("Privacy-Policy.policyHeader")}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: { xs: "1rem", md: "1.06rem" },
                mb: 2.5,
              }}
            >
              {t("Privacy-Policy.policySubheader")}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: { xs: "1rem", md: "1.06rem" },
                mb: 2.5,
              }}
            >
              {t("Privacy-Policy.policyBody1")}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: { xs: "1rem", md: "1.06rem" },
                mb: 4,
              }}
            >
              {t("Privacy-Policy.policyBody2")}
            </Typography>

            {policySections.map((section) => (
              <Box key={section.title} sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {t(section.title)}
                </Typography>

                {section.lead ? (
                  <Typography
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.85,
                      fontSize: { xs: "1rem", md: "1.02rem" },
                      mb: 1.5,
                    }}
                  >
                    {t(section.lead)}
                  </Typography>
                ) : null}

                {section.paragraphs?.map((key) => (
                  <Typography
                    key={key}
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.9,
                      fontSize: { xs: "1rem", md: "1.06rem" },
                      mb: 2,
                    }}
                  >
                    {t(key)}
                  </Typography>
                ))}

                {section.list ? (
                  <Box
                    component="ul"
                    sx={{
                      pl: isFarsi ? 0 : 3,
                      pr: isFarsi ? 3 : 0,
                      color: "text.secondary",
                      lineHeight: 1.9,
                      fontSize: { xs: "1rem", md: "1.06rem" },
                      mb: 1,
                    }}
                  >
                    {section.list.map((key) => (
                      <Box component="li" key={key} sx={{ mb: 1.2 }}>
                        {ReactHtmlParser(t(key))}
                      </Box>
                    ))}
                  </Box>
                ) : null}
              </Box>
            ))}

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                {t("Privacy-Policy12.policyHeader12")}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.06rem" },
                }}
              >
                {ReactHtmlParser(t("Privacy-Policy12.policyBody16") || "")}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
