import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  ButtonBase,
  Chip,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import RefreshIcon from "@mui/icons-material/Refresh";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import Seo from "../Components/Seo";
import papers from "../data/papers";

const DEVELOPERS_EMAIL = "developers@smswithoutborders.com";

const TYPE_CONFIG = {
  whitepaper: {
    labelKey: "paperReader.type.whitepaper",
    defaultLabel: "White Paper",
    color: "#1565C0",
  },
  research: {
    labelKey: "paperReader.type.research",
    defaultLabel: "Research",
    color: "#2E7D32",
  },
  thread: {
    labelKey: "paperReader.type.thread",
    defaultLabel: "Thread",
    color: "#6A1B9A",
  },
};

export default function PaperReader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const paper = papers.find((p) => p.id === id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [verified, setVerified] = useState(false);

  const retry = () => {
    setError(false);
    setLoading(true);
    setAttempt((n) => n + 1);
  };

  useEffect(() => {
    if (paper && !paper.pdfUrl) {
      console.warn(
        `[PaperReader] "${paper.id}" has no pdfUrl — the REACT_APP_* env var ` +
          "it reads from was empty/undefined in this build. Showing the " +
          "'not published yet' fallback instead of the document.",
      );
    }
  }, [paper]);

  // The PDF host answers a missing file with a 200-looking text page inside the
  // iframe, so onError never fires. Check the file exists before embedding it.
  useEffect(() => {
    if (!paper?.pdfUrl) return undefined;

    const controller = new AbortController();
    setVerified(false);

    fetch(paper.pdfUrl, { method: "HEAD", signal: controller.signal })
      .then((res) => {
        if (res.ok) {
          setVerified(true);
          return;
        }
        console.error(
          `[PaperReader] "${paper.pdfUrl}" returned HTTP ${res.status}. ` +
            "The file was probably moved or renamed; update its REACT_APP_* URL.",
        );
        setLoading(false);
        setError(true);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        // Couldn't check (offline, CORS, CSP); let the iframe try anyway.
        setVerified(true);
      });

    return () => controller.abort();
  }, [paper?.pdfUrl, attempt]);

  useEffect(() => {
    if (!paper?.pdfUrl) return undefined;

    const handleCspViolation = (event) => {
      if (event.blockedURI && paper.pdfUrl.startsWith(event.blockedURI)) {
        console.error(
          `[PaperReader] Content-Security-Policy blocked "${paper.pdfUrl}" ` +
            `(violated directive: ${event.violatedDirective}). Add its origin ` +
            "to frame-src in the CSP (see nginx/nginx.conf.template) to allow it.",
          event,
        );
        setLoading(false);
        setError(true);
      }
    };

    document.addEventListener("securitypolicyviolation", handleCspViolation);
    return () =>
      document.removeEventListener(
        "securitypolicyviolation",
        handleCspViolation,
      );
  }, [paper?.pdfUrl]);

  if (!paper) {
    return (
      <>
        <Seo
          title="Paper Not Found | SMSWithoutBorders"
          description="This paper does not exist or has not been published yet."
          noindex
        />
        <Navbar />
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            direction: isFarsi ? "rtl" : "ltr",
            pt: { xs: 14, md: 8 },
            pb: { xs: 8, md: 10 },
          }}
        >
          <Container maxWidth="md">
            <MessagePanel
              Icon={SearchOffIcon}
              title={t("paperReader.notFound", {
                defaultValue: "Paper not found.",
              })}
              body={t("paperReader.notFoundBody", {
                defaultValue:
                  "This paper may have moved or the link may be mistyped. Everything we have published is listed on the research page.",
              })}
            >
              <ActionTile
                primary
                icon={<LibraryBooksOutlinedIcon />}
                label={t("paperReader.browseResearch", {
                  defaultValue: "Browse all papers",
                })}
                onClick={() => navigate("/research")}
              />
            </MessagePanel>
          </Container>
        </Box>
      </>
    );
  }

  const cfg = TYPE_CONFIG[paper.type] || TYPE_CONFIG.research;

  return (
    <>
      <Seo
        title={`${paper.title} | SMSWithoutBorders Research`}
        description={paper.abstract}
        path={`/research/${paper.id}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: paper.title,
          description: paper.abstract,
          datePublished: String(paper.year),
          author: paper.authors.map((name) => ({
            "@type": "Organization",
            name,
          })),
          publisher: { "@type": "Organization", name: "SMSWithoutBorders" },
          keywords: paper.topics.join(", "),
          url: `https://smswithoutborders.com/research/${paper.id}`,
        }}
      />
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          direction: isFarsi ? "rtl" : "ltr",
          pt: { xs: 14, md: 10 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={1.5}
              sx={{ mb: 2 }}
            >
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate("/research")}
                sx={{ textTransform: "none", px: 0, minWidth: 0 }}
              >
                {t("paperReader.backToResearch", {
                  defaultValue: "Back to Research",
                })}
              </Button>

              {paper.pdfUrl ? (
                <Button
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                  sx={{ textTransform: "none" }}
                >
                  {t("paperReader.openPdf", { defaultValue: "Open PDF" })}
                </Button>
              ) : null}
            </Stack>

            {/* <Chip
              label={t(cfg.labelKey, { defaultValue: cfg.defaultLabel })}
              size="small"
              sx={{
                mb: 1.5,
                fontWeight: 700,
                color: cfg.color,
                bgcolor: "action.hover",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 0.5,
              }}
            /> */}

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.2 }}>
              {paper.title}
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 3 }}>
              {paper.authors.join(", ")} · {paper.year}
              {paper.version ? ` · v${paper.version}` : ""}
            </Typography>

            {!paper.pdfUrl ? (
              <Alert severity="info" sx={{ mt: 2 }}>
                {t("paperReader.comingSoonSub", {
                  defaultValue:
                    "This paper has not been published yet. Check back later.",
                })}
              </Alert>
            ) : (
              <Box
                sx={{
                  position: "relative",
                  border: "1px solid",
                  borderColor: "divider",
                  minHeight: "72vh",
                  bgcolor: "background.paper",
                }}
              >
                {loading && !error ? (
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      gap: 1.4,
                      zIndex: 2,
                      bgcolor: "background.paper",
                    }}
                  >
                    <CircularProgress size={42} thickness={4} />
                    <Typography
                      sx={{ color: "text.secondary", fontSize: "0.92rem" }}
                    >
                      {t("paperReader.loading", {
                        defaultValue: "Loading document...",
                      })}
                    </Typography>
                  </Box>
                ) : null}

                {error ? (
                  <Box sx={{ p: { xs: 2, md: 4 } }}>
                    <MessagePanel
                      Icon={BuildCircleOutlinedIcon}
                      title={t("paperReader.errorTitle", {
                        defaultValue: "We couldn't load this paper",
                      })}
                      body={t("paperReader.errorBody", {
                        defaultValue:
                          "This isn't your fault. Something went wrong on our side and we're working on it. In the meantime, here's what you can do:",
                      })}
                      footer={
                        <>
                          {t("paperReader.errorContact", {
                            defaultValue: "Still not working? Let us know at",
                          })}{" "}
                          <Box
                            component="a"
                            href={`mailto:${DEVELOPERS_EMAIL}?subject=${encodeURIComponent(
                              `Paper not loading: ${paper.title}`,
                            )}`}
                            sx={{ color: "text.primary", fontWeight: 600 }}
                          >
                            {DEVELOPERS_EMAIL}
                          </Box>
                        </>
                      }
                    >
                      <ActionTile
                        primary
                        label={t("paperReader.tryAgain", {
                          defaultValue: "Try again",
                        })}
                        onClick={retry}
                      />
                      {/* <ActionTile
                        icon={<OpenInNewIcon />}
                        label={t("paperReader.openPdfDirectly", {
                          defaultValue: "Open PDF directly",
                        })}
                        href={paper.pdfUrl}
                      /> */}
                      <ActionTile
                        label={t("paperReader.browseResearch", {
                          defaultValue: "Browse all papers",
                        })}
                        onClick={() => navigate("/research")}
                      />
                    </MessagePanel>
                  </Box>
                ) : verified ? (
                  <iframe
                    key={attempt}
                    src={paper.pdfUrl}
                    title={paper.title}
                    onLoad={() => setLoading(false)}
                    onError={(event) => {
                      console.error(
                        `[PaperReader] Failed to load "${paper.pdfUrl}" in the iframe.`,
                        event,
                      );
                      setLoading(false);
                      setError(true);
                    }}
                    style={{
                      width: "100%",
                      height: "72vh",
                      border: "none",
                      display: "block",
                      opacity: loading ? 0 : 1,
                      transition: "opacity 0.25s ease",
                    }}
                    allow="autoplay"
                  />
                ) : null}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

function MessagePanel({ Icon, title, body, footer, children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: "auto",
        textAlign: "center",
        // border: "1px solid",
        // borderColor: "divider",
        // borderTop: `3px solid ${theme.palette.secondary.main}`,
        // bgcolor: "background.paper",
        px: { xs: 2.5, md: 5 },
        py: { xs: 4, md: 5 },
      }}
    >
      {/* <Box
        sx={{
          width: 56,
          height: 56,
          mx: "auto",
          mb: 2.5,
          display: "grid",
          placeItems: "center",
          border: "1px solid",
          borderColor: "divider",
          color: "secondary.main",
        }}
      >
        <Icon sx={{ fontSize: 30 }} />
      </Box> */}

      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.2rem", md: "1.45rem" },
          mb: 1.25,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          lineHeight: 1.8,
          maxWidth: 520,
          mx: "auto",
          mb: 3,
        }}
      >
        {body}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: `repeat(${React.Children.count(children)}, minmax(0, 1fr))`,
          },
          gap: 1.5,
        }}
      >
        {children}
      </Box>

      {footer ? (
        <Typography
          sx={{ color: "text.secondary", fontSize: "0.88rem", mt: 3 }}
        >
          {footer}
        </Typography>
      ) : null}
    </Box>
  );
}

function ActionTile({ icon, label, onClick, href, primary = false }) {
  const linkProps = href
    ? { component: "a", href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <ButtonBase
      {...linkProps}
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        justifyContent: { xs: "flex-start", sm: "center" },
        gap: 1,
        px: 2,
        py: { xs: 1.5, sm: 2.25 },
        border: "1px solid",
        borderColor: primary ? "primary.main" : "divider",
        bgcolor: primary ? "primary.main" : "transparent",
        color: primary ? "primary.contrastText" : "text.primary",
        fontWeight: 600,
        fontSize: "0.92rem",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
        "& .MuiSvgIcon-root": { fontSize: 22 },
        "&:hover": primary
          ? { opacity: 0.9 }
          : { borderColor: "text.primary", bgcolor: "action.hover" },
      }}
    >
      {icon}
      {label}
    </ButtonBase>
  );
}
