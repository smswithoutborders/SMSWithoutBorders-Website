import React from "react";
import { Box, Divider, Link, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FooterNavLink({ item }) {
  const commonSx = {
    color: "text.secondary",
    textDecoration: "none",
    fontSize: "0.95rem",
    lineHeight: 1.55,
    "&:hover": { color: "text.primary" },
  };

  if (item.external) {
    return (
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        sx={commonSx}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link component={RouterLink} to={item.href} sx={commonSx}>
      {item.label}
    </Link>
  );
}

export default function Footer() {
  const theme = useTheme();
  const { t } = useTranslation();

  const linkGroups = [
    {
      key: "projects",
      title: t("footerNav.projects", { defaultValue: "Projects" }),
      links: [
        {
          label: t("footerNav.relay", {
            defaultValue: "RelaySMS",
          }),
          href: "https://relay.smswithoutborders.com/",
          external: true,
        },
        {
          label: t("footerNav.deku", { defaultValue: "DekuSMS" }),
          href: "https://dekusms.com/",
          external: true,
        },
      ],
    },
    {
      key: "resources",
      title: t("footerNav.resources", { defaultValue: "Resources" }),
      links: [
        {
          label: t("navbar.link5", { defaultValue: "Documentation" }),
          href: "https://docs.smswithoutborders.com/",
          external: true,
        },
        {
          label: t("navbar.link1", { defaultValue: "Blog" }),
          href: "https://blog.smswithoutborders.com/",
          external: true,
        },
        {
          label: t("navbar.researchFull", { defaultValue: "Research Papers" }),
          href: "/research",
        },
        {
          label: t("navbar.link4", { defaultValue: "Privacy Policy" }),
          href: "/privacy-policy/",
        },
      ],
    },
    {
      key: "community",
      title: t("footerNav.community", { defaultValue: "Community" }),
      links: [
        {
          label: t("footerNav.githubOrg", {
            defaultValue: "GitHub Organization",
          }),
          href: "https://github.com/smswithoutborders",
          external: true,
        },
        {
          label: t("footerNav.contactDevelopers", {
            defaultValue: "Contact developers",
          }),
          href: "mailto:developers@smswithoutborders.com",
          external: true,
        },
        {
          label: t("footerNav.reportIssue", {
            defaultValue: "Report an issue",
          }),
          href: "https://github.com/smswithoutborders/RelaySMS-Android/issues",
          external: true,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.default",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box
          sx={{
            py: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: 0,
            }}
          >
            {linkGroups.map((group, index) => (
              <Box
                key={group.key}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderTop: {
                    xs:
                      index > 0 ? `1px solid ${theme.palette.divider}` : "none",
                    md: "none",
                  },
                  borderInlineStart: {
                    xs: "none",
                    md:
                      index > 0 ? `1px solid ${theme.palette.divider}` : "none",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "text.primary",
                    mb: 1.75,
                  }}
                >
                  {group.title}
                </Typography>

                <Box component="p" sx={{ display: "grid", gap: 1 }}>
                  {group.links.map((item) => (
                    <FooterNavLink key={item.label} item={item} />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Divider sx={{ mt: { xs: 2.5, md: 3 } }} />
          <Link
            href="https://afkanerd.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            sx={{ textDecoration: "none" }}
          >
            <Typography
              variant="body2"
              sx={{
                mt: { xs: 1.25, md: 1.5 },
                textAlign: "center",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {t("footer.copyrightYear", {
                year: new Date().getFullYear(),
                defaultValue: "© {{year}} Afkanerd",
              })}
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
