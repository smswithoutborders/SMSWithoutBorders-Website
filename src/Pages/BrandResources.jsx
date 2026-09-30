import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Navbar from "../Components/Navbar";
import Seo, { SITE_URL } from "../Components/Seo";

const LOGO_BASE = "/Images/Logo";

const LIGHT_BG = "#FAF6EE";
const DARK_BG = "#0E0C07";

const LOGO_GROUPS = [
  {
    key: "fullLogo",
    folder: "Full Logo",
    title: "Full Logo",
    description:
      "The primary logo with the icon and wordmark. Use it wherever there is enough horizontal space.",
    variants: [
      { name: "Default", file: "SWOB-Default", bg: LIGHT_BG },
      { name: "Black", file: "SWOB-Black", bg: LIGHT_BG },
      { name: "Dark Theme", file: "SWOB-Dark Theme", bg: DARK_BG },
      { name: "White", file: "SWOB-White", bg: DARK_BG },
    ],
  },
  {
    key: "logoIcon",
    folder: "Logo Icon",
    title: "Logo Icon",
    description:
      "The standalone icon. Use it for avatars, app icons and small spaces where the wordmark would not be legible.",
    variants: [
      { name: "Default", file: "SWOB-Icon-Default", bg: LIGHT_BG },
      { name: "Black", file: "SWOB-Icon-Black", bg: LIGHT_BG },
      { name: "Dark Theme", file: "SWOB-Icon-Dark Theme", bg: DARK_BG },
      { name: "White", file: "SWOB-Icon-White", bg: DARK_BG },
    ],
  },
  {
    key: "logoOnBackground",
    folder: "Logo on Background",
    title: "Logo on Background",
    description:
      "The logo placed on a solid background, ready for social media, banners and presentations.",
    variants: [
      { name: "Default", file: "SWOB-Default" },
      { name: "Blue", file: "SWOB-Blue" },
      { name: "Dark Theme", file: "SWOB-Dark Theme" },
      { name: "White", file: "SWOB-White" },
    ],
  },
];

const logoUrl = (format, folder, file) =>
  encodeURI(`${LOGO_BASE}/${format}/${folder}/${file}.${format.toLowerCase()}`);

export default function BrandResources() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isFarsi = i18n.language === "fa";
  const [preview, setPreview] = useState(null);

  return (
    <>
      <Navbar />
      <Seo
        title="Brand Resources & Logos | SMSWithoutBorders"
        description="Download official SMSWithoutBorders logos in PNG and SVG, including the full logo, icon and logo on background in every color variant."
        path="/brand"
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
            <Typography
              sx={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: theme.palette.secondary.main,
                mb: 1.5,
              }}
            >
              {t("brandPage.eyebrow", { defaultValue: "Press & Media" })}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              {t("brandPage.title", { defaultValue: "Brand Resources" })}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.85,
                fontSize: { xs: "1rem", md: "1.06rem" },
                maxWidth: 860,
                mb: 6,
              }}
            >
              {t("brandPage.subtitle", {
                defaultValue:
                  "Official SMSWithoutBorders logos for articles, presentations and partner materials. Please don't alter, recolor or distort the logos. Use SVG wherever possible and PNG where vector files aren't supported.",
              })}
            </Typography>

            <Stack spacing={7}>
              {LOGO_GROUPS.map((group) => (
                <Box key={group.key} component="section">
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {t(`brandPage.${group.key}.title`, {
                      defaultValue: group.title,
                    })}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.8,
                      maxWidth: 760,
                      mb: 3,
                    }}
                  >
                    {t(`brandPage.${group.key}.description`, {
                      defaultValue: group.description,
                    })}
                  </Typography>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                      },
                      gap: 2,
                    }}
                  >
                    {group.variants.map((variant) => (
                      <LogoCard
                        key={variant.file}
                        group={group}
                        variant={variant}
                        onPreview={() => setPreview({ group, variant })}
                        t={t}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <PreviewDialog preview={preview} onClose={() => setPreview(null)} t={t} />
    </>
  );
}

function LogoCard({ group, variant, onPreview, t }) {
  const svgUrl = logoUrl("SVG", group.folder, variant.file);
  const pngUrl = logoUrl("PNG", group.folder, variant.file);
  const isIcon = group.key === "logoIcon";
  const hasOwnBackground = !variant.bg;

  return (
    <Box sx={{ border: "1px solid", borderColor: "divider" }}>
      <ButtonBase
        onClick={onPreview}
        aria-label={t("brandPage.preview", { defaultValue: "Preview" })}
        sx={{
          position: "relative",
          width: "100%",
          bgcolor: variant.bg || "transparent",
          aspectRatio: "16 / 9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: hasOwnBackground ? 0 : { xs: 3, md: 4 },
          borderBottom: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
          "&:hover .preview-hint, &:focus-visible .preview-hint": {
            opacity: 1,
          },
        }}
      >
        <Box
          component="img"
          src={svgUrl}
          alt={`SMSWithoutBorders ${group.title} – ${variant.name}`}
          loading="lazy"
          sx={{
            display: "block",
            width: hasOwnBackground ? "100%" : isIcon ? "auto" : "80%",
            height: hasOwnBackground ? "100%" : isIcon ? "60%" : "auto",
            maxHeight: "100%",
            objectFit: hasOwnBackground ? "cover" : "contain",
          }}
        />
        <Stack
          className="preview-hint"
          direction="row"
          spacing={0.5}
          alignItems="center"
          sx={{
            position: "absolute",
            top: 8,
            insetInlineEnd: 8,
            px: 1,
            py: 0.4,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 600,
            opacity: 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <ZoomInIcon sx={{ fontSize: 16 }} />
          <span>{t("brandPage.preview", { defaultValue: "Preview" })}</span>
        </Stack>
      </ButtonBase>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{ px: 2, py: 1.5 }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "0.92rem" }}>
          {t(`brandPage.variant.${variant.name}`, {
            defaultValue: variant.name,
          })}
        </Typography>

        <Stack direction="row" spacing={1}>
          <DownloadButton href={svgUrl} label="SVG" />
          <DownloadButton href={pngUrl} label="PNG" />
        </Stack>
      </Stack>
    </Box>
  );
}

function DownloadButton({ href, label }) {
  return (
    <Button
      component="a"
      href={href}
      download
      size="small"
      variant="outlined"
      startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
      sx={{
        borderRadius: "2px",
        textTransform: "none",
        fontWeight: 600,
        color: "text.primary",
        borderColor: "divider",
        "&:hover": { borderColor: "text.primary" },
      }}
    >
      {label}
    </Button>
  );
}

function PreviewDialog({ preview, onClose, t }) {
  const [message, setMessage] = useState("");

  const [current, setCurrent] = useState(preview);
  if (preview && preview !== current) setCurrent(preview);
  if (!current) return null;

  const { group, variant } = current;
  const svgUrl = logoUrl("SVG", group.folder, variant.file);
  const pngUrl = logoUrl("PNG", group.folder, variant.file);
  const publicPngUrl = `${SITE_URL}${pngUrl}`;
  const publicSvgUrl = `${SITE_URL}${svgUrl}`;
  const altText = `SMSWithoutBorders ${group.title}`;
  const emailWidth = group.key === "logoIcon" ? 64 : 200;
  const emailHtml = `<a href="${SITE_URL}"><img src="${publicPngUrl}" alt="${altText}" width="${emailWidth}" style="display:block;border:0;height:auto;" /></a>`;

  const copyText = async (text, done) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage(done);
    } catch {
      setMessage(
        t("brandPage.copyFailed", {
          defaultValue: "Couldn't copy to clipboard",
        }),
      );
    }
  };

  const copyImage = async () => {
    try {
      const blob = await fetch(pngUrl).then((res) => res.blob());
      await navigator.clipboard.write([
        new window.ClipboardItem({ "image/png": blob }),
      ]);
      setMessage(
        t("brandPage.imageCopied", {
          defaultValue: "Image copied. Paste it into your email or document.",
        }),
      );
    } catch {
      setMessage(
        t("brandPage.imageCopyUnsupported", {
          defaultValue:
            "Your browser can't copy images. Copy the image link or download the PNG instead.",
        }),
      );
    }
  };

  const actions = [
    {
      icon: <ContentCopyIcon sx={{ fontSize: 16 }} />,
      label: t("brandPage.copyImage", { defaultValue: "Copy image" }),
      onClick: copyImage,
    },
    {
      icon: <LinkIcon sx={{ fontSize: 16 }} />,
      label: t("brandPage.copyPngLink", { defaultValue: "Copy PNG link" }),
      onClick: () =>
        copyText(
          publicPngUrl,
          t("brandPage.linkCopied", { defaultValue: "Link copied" }),
        ),
    },
    {
      icon: <LinkIcon sx={{ fontSize: 16 }} />,
      label: t("brandPage.copySvgLink", { defaultValue: "Copy SVG link" }),
      onClick: () =>
        copyText(
          publicSvgUrl,
          t("brandPage.linkCopied", { defaultValue: "Link copied" }),
        ),
    },
    {
      icon: <CodeIcon sx={{ fontSize: 16 }} />,
      label: t("brandPage.copyEmailHtml", { defaultValue: "Copy email HTML" }),
      onClick: () =>
        copyText(
          emailHtml,
          t("brandPage.htmlCopied", { defaultValue: "HTML copied" }),
        ),
    },
  ];

  return (
    <Dialog
      open={Boolean(preview)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { borderRadius: "2px" } }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box component="span" sx={{ fontSize: "1rem", fontWeight: 700 }}>
          {t(`brandPage.${group.key}.title`, { defaultValue: group.title })} ·{" "}
          {t(`brandPage.variant.${variant.name}`, {
            defaultValue: variant.name,
          })}
        </Box>
        <IconButton
          onClick={onClose}
          aria-label={t("brandPage.close", { defaultValue: "Close" })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            bgcolor: variant.bg || "transparent",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: variant.bg ? { xs: 3, md: 6 } : 0,
            mb: 2.5,
          }}
        >
          <Box
            component="img"
            src={svgUrl}
            alt={altText}
            sx={{
              display: "block",
              width: variant.bg
                ? group.key === "logoIcon"
                  ? "40%"
                  : "85%"
                : "100%",
              maxHeight: "60vh",
              objectFit: "contain",
            }}
          />
        </Box>

        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          spacing={1}
          sx={{ mb: 2.5 }}
        >
          {actions.map((action) => (
            <ActionButton key={action.label} {...action} />
          ))}
          <ActionButton
            icon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
            label={t("brandPage.openFullSize", {
              defaultValue: "Open full size",
            })}
            href={pngUrl}
          />
          <ActionButton
            icon={<DownloadIcon sx={{ fontSize: 16 }} />}
            label="SVG"
            href={svgUrl}
            download
          />
          <ActionButton
            icon={<DownloadIcon sx={{ fontSize: 16 }} />}
            label="PNG"
            href={pngUrl}
            download
          />
        </Stack>

        <Box
          component="pre"
          sx={{
            m: 0,
            p: 1.5,
            bgcolor: "action.hover",
            border: "1px solid",
            borderColor: "divider",
            fontSize: "0.75rem",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            direction: "ltr",
          }}
        >
          {emailHtml}
        </Box>
      </DialogContent>

      <Snackbar
        open={Boolean(message)}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
        message={message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Dialog>
  );
}

function ActionButton({ icon, label, onClick, href, download }) {
  const linkProps = href
    ? download
      ? { component: "a", href, download: true }
      : { component: "a", href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <Button
      {...linkProps}
      size="small"
      variant="outlined"
      startIcon={icon}
      sx={{
        borderRadius: "2px",
        textTransform: "none",
        fontWeight: 600,
        color: "text.primary",
        borderColor: "divider",
        "&:hover": { borderColor: "text.primary" },
      }}
    >
      {label}
    </Button>
  );
}
