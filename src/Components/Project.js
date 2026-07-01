import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import papers from "../data/papers.json";

const featuredProjects = [
  {
    key: "relaysms",
    kind: "app",
    title: "RelaySMS",
    description:
      "The flagship user app. Store OAuth2 tokens for Gmail, Twitter, and Telegram in an encrypted Vault. Send messages to those platforms via any SMS connection - even during internet shutdowns.",
    tags: [
      "Android",
      "iOS",
      "Kotlin",
      "Swift",
      "E2E encrypted",
      "OAuth2 vault",
    ],
    links: [
      {
        label: "Website",
        href: "https://relay.smswithoutborders.com",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/relaysms/id6630382970",
      },
      {
        label: "GitHub",
        href: "https://github.com/smswithoutborders/RelaySMS-Android",
        icon: "github",
      },
    ],
  },
  {
    key: "dekusms",
    kind: "app",
    title: "DekuSMS",
    description:
      "An open-source, end-to-end encrypted SMS app for Android. Powers RelaySMS's SMS-handling layer, and can also be used standalone as a secure replacement for your default SMS app. Supports MMS image sending.",
    tags: [
      "Android",
      "Kotlin",
      "E2E encrypted",
      "MMS support",
      "Default SMS app",
    ],
    links: [
      {
        label: "Website",
        href: "https://dekusms.com",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.afkanerd.deku",
      },
      {
        label: "F-Droid",
        href: "https://f-droid.org/packages/com.afkanerd.deku/",
      },
      {
        label: "GitHub",
        href: "https://github.com/dekusms/DekuSMS-Android",
        icon: "github",
      },
    ],
  },
];

const developerLibraries = [
  {
    key: "smsmms-library",
    label: "lib-mobile",
    title: "lib_smsmms_android",
    description:
      "Android SMS and MMS transport library used by RelaySMS and DekuSMS. Handles carrier messaging flows, runtime permissions, MMS sending, and default-SMS integration.",
    meta: "Kotlin · MIT",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/smswithoutborders/lib_smsmms_android",
        // icon: "github",
      },
    ],
  },
  {
    key: "lib-image",
    label: "lib-mobile",
    title: "lib_image",
    description:
      "Image helper library for MMS and media processing in the mobile messaging stack. Used by both RelaySMS Android and iOS.",
    meta: "Kotlin · Swift · MIT",
    links: [
      {
        label: "Android",
        href: "https://github.com/smswithoutborders/lib_image_android",
        // icon: "github",
      },
      {
        label: "iOS",
        href: "https://github.com/smswithoutborders/lib_image_ios",
        // icon: "github",
      },
    ],
  },
  {
    key: "adapter-interface",
    label: "pluggable",
    title: "Publisher Adapters",
    description:
      "Publisher platform adapters are specialized plugins that handle authentication and message delivery for specific online services (Gmail, Twitter, Telegram, etc.).",
    meta: "Python · GPL-3.0",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/smswithoutborders/RelaySMS-Publisher/blob/main/platforms/README.md",
        // icon: "github",
      },
    ],
  },
  {
    key: "rusty_relaysms_payload_specs",
    label: "protocol",
    title: "rusty_specs",
    description:
      " implementation of the RelaySMS specifications paper and some security implementation of the technical paper.",
    meta: "Rust · MIT",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/smswithoutborders/rusty_relaysms_payload_specs",
        // icon: "github",
      },
    ],
  },
];

function SectionEyebrow({ children, accent }) {
  return (
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
      {children}
    </Typography>
  );
}

function TagList({ tags }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
      {tags.map((tag) => (
        <Typography
          key={tag}
          sx={{
            fontSize: "0.76rem",
            fontWeight: 600,
            color: "text.secondary",
            border: "1px solid",
            borderColor: "divider",
            px: 1.25,
            py: 0.65,
            borderRadius: "999px",
          }}
        >
          {tag}
        </Typography>
      ))}
    </Box>
  );
}

function ProjectLinks({ links }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
      {links.map((link) => (
        <Button
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="small"
          endIcon={
            link.icon === "github" ? (
              <GitHubIcon fontSize="small" />
            ) : (
              <ArrowOutwardIcon fontSize="small" />
            )
          }
          sx={{
            px: 0,
            minWidth: 0,
            textTransform: "none",
            fontSize: "0.92rem",
            fontWeight: 600,
            color: "text.primary",
            justifyContent: "flex-start",
            "&:hover": { color: "secondary.main", bgcolor: "transparent" },
          }}
        >
          {link.label}
        </Button>
      ))}
    </Box>
  );
}

function ProjectHeroCell({
  project,
  showTopBorder,
  mdTopBorder = false,
  addMdColumnDivider = false,
  isRightColumn = false,
}) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 2.2, md: 4 },
        borderTopWidth: {
          xs: showTopBorder ? "1px" : 0,
          md: mdTopBorder ? "1px" : 0,
        },
        borderTopStyle: "solid",
        borderTopColor: "divider",
        transition: "background-color 0.2s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          insetBlock: 0,
          insetInlineStart: 0,
          width: "1px",
          bgcolor: "divider",
          display: {
            xs: "none",
            md: addMdColumnDivider && isRightColumn ? "block" : "none",
          },
        },
        "&:hover": {
          bgcolor: "action.hover",
        },
      }}
    >
      {project.kind && (
        <Typography
          sx={(theme) => ({
            display: "inline-block",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "text.secondary",
            bgcolor: "action.hover",
            border: "1px solid",
            borderColor: "divider",
            px: 1,
            py: 0.35,
            mb: 1.5,
            borderRadius: 1,
          })}
        >
          {project.kind}
        </Typography>
      )}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "1.02rem", md: "1.25rem" },
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        {project.title}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          lineHeight: 1.8,
          fontSize: { xs: "0.92rem", md: "1rem" },
          mb: 3,
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        {t(`projectDescriptions.${project.key}`, {
          defaultValue: project.description,
        })}
      </Typography>
      <Box sx={{ mb: 3 }}>
        <TagList tags={project.tags} />
      </Box>
      <Box sx={{ pt: 2.5 }}>
        <ProjectLinks links={project.links} />
      </Box>
    </Box>
  );
}

function LibraryCardCell({ item, index }) {
  const { t } = useTranslation();
  const isRightColumn = index % 2 === 1;
  const isAfterFirstRow = index >= 2;

  return (
    <Box
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "relative",
        p: { xs: 2.2, md: 4 },
        borderTopWidth: {
          xs: index > 0 ? "1px" : 0,
          md: isAfterFirstRow ? "1px" : 0,
        },
        borderTopStyle: "solid",
        borderTopColor: "divider",
        textDecoration: "none",
        color: "inherit",
        display: "block",
        transition: "background-color 0.2s ease",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          insetBlock: 0,
          insetInlineStart: 0,
          width: "1px",
          bgcolor: "divider",
          display: {
            xs: "none",
            md: isRightColumn ? "block" : "none",
          },
        },
        "&:hover": {
          bgcolor: "action.hover",
        },
      }}
    >
      <Typography
        sx={{
          display: "inline-block",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "text.secondary",
          bgcolor: "action.hover",
          border: "1px solid",
          borderColor: "divider",
          px: 1,
          py: 0.35,
          borderRadius: 1,
          mb: 1.5,
        }}
      >
        {item.label}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 1.25,
          fontSize: { xs: "0.98rem", md: "1.25rem" },
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        {t(`libraryTitles.${item.key}`, {
          defaultValue: item.title,
        })}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          lineHeight: 1.75,
          mb: 2.5,
          fontSize: { xs: "0.9rem", md: "1rem" },
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        {t(`libraryDescriptions.${item.key}`, {
          defaultValue: item.description,
        })}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          mb: 1.75,
          fontSize: { xs: "0.86rem", md: "1rem" },
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        {item.meta}
      </Typography>
      <Box sx={{ pt: 1 }}>
        <ProjectLinks links={item.links} />
      </Box>
    </Box>
  );
}

function PaperRowCard({ paper, showTopBorder = false }) {
  return (
    <Box
      component="a"
      href={`/research/${paper.id}`}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr auto",
          md: "120px minmax(0, 1fr) auto",
        },
        columnGap: { xs: 1.5, md: 3 },
        rowGap: { xs: 0.75, md: 0 },
        alignItems: "start",
        textDecoration: "none",
        color: "inherit",
        p: { xs: 2.2, md: 3 },
        borderTopWidth: showTopBorder ? "1px" : 0,
        borderTopStyle: "solid",
        borderTopColor: "divider",
        transition: "background-color 0.2s ease",
        "& .paper-arrow": {
          opacity: 0,
          transform: "translate(-2px, 2px)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        },
        "&:hover": {
          bgcolor: "action.hover",
        },
        "&:hover .paper-arrow": {
          opacity: 1,
          transform: "translate(0, 0)",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "text.secondary",
          gridColumn: { xs: "1 / 2", md: "1 / 2" },
        }}
      >
        {paper.year}
      </Typography>

      <Box sx={{ gridColumn: { xs: "1 / -1", md: "2 / 3" } }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.65 }}>
          {paper.title}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.75,
            fontSize: { xs: "0.94rem", md: "0.98rem" },
          }}
        >
          {paper.abstract}
        </Typography>
      </Box>

      <Box
        className="paper-arrow"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 0.2,
          color: "text.primary",
          gridColumn: { xs: "2 / 3", md: "3 / 4" },
        }}
      >
        <ArrowOutwardIcon sx={{ fontSize: 18 }} />
      </Box>
    </Box>
  );
}

export default function Projects() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const accent = theme.palette.secondary.main;
  const featuredPapers = [...papers]
    .sort((a, b) => b.year - a.year)
    .slice(0, 4);

  return (
    <Box
      id="projects"
      sx={{
        scrollMarginTop: { xs: "72px", md: "96px" },
        py: { xs: 8, md: 14 },
        // mt: 18,
        bgcolor: "background.default",
        direction: isFarsi ? "rtl" : "ltr",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <SectionEyebrow accent={accent}>
            {t("projectHeader", { defaultValue: "Projects" })}
          </SectionEyebrow>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {t("projectHeadline", {
              defaultValue: "Everything we build, open and free",
            })}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.08rem" },
              color: "text.secondary",
              maxWidth: 760,
              lineHeight: 1.85,
            }}
          >
            {t("projectSubHeader", {
              defaultValue:
                "SMSWithoutBorders Commits to buiding OpenSource Tools That Aid Free speech and Communication",
            })}
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid",
            borderColor: "divider",
            mb: { xs: 8, md: 25 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 0,
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "divider",
            }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectHeroCell
                key={project.key}
                project={project}
                showTopBorder={index > 0}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: { xs: 8, md: 25 } }}>
          <SectionEyebrow accent={accent}>
            {t("papersEyebrow", { defaultValue: "Papers" })}
          </SectionEyebrow>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {t("papersTitle", {
              defaultValue: "Research and publications",
            })}
          </Typography>
          <Typography
            sx={{
              maxWidth: 760,
              color: "text.secondary",
              lineHeight: 1.85,
              mb: { xs: 3, md: 4 },
            }}
          >
            {t("papersBody", {
              defaultValue:
                "The team publishes research papers and notes behind the stack, from architecture and encryption to threat modeling.",
            })}
          </Typography>

          <Box sx={{ border: "1px solid", borderColor: "divider" }}>
            {featuredPapers.map((paper, index) => (
              <PaperRowCard
                key={paper.id}
                paper={paper}
                showTopBorder={index > 0}
              />
            ))}
          </Box>
        </Box>

        <Box>
          <SectionEyebrow accent={accent}>
            {t("developerLibrariesEyebrow", {
              defaultValue: "Developer Libraries",
            })}
          </SectionEyebrow>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {t("developerLibrariesTitle", {
              defaultValue: "Build on the stack",
            })}
          </Typography>
          <Typography
            sx={{
              maxWidth: 760,
              color: "text.secondary",
              lineHeight: 1.85,
              mb: { xs: 4, md: 5 },
            }}
          >
            {t("developerLibrariesBody", {
              defaultValue: "All core components are open-source and reusable.",
            })}
          </Typography>

          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 0,
            }}
          >
            {developerLibraries.map((item, index) => (
              <LibraryCardCell key={item.key} item={item} index={index} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
