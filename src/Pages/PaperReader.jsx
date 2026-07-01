import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import papers from "../data/papers.json";

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

  if (!paper) {
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
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "text.secondary", mb: 2 }}>
              {t("paperReader.notFound", { defaultValue: "Paper not found." })}
            </Typography>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/research")}
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              {t("paperReader.backToResearch", { defaultValue: "Back to Research" })}
            </Button>
          </Container>
        </Box>
      </>
    );
  }

  const cfg = TYPE_CONFIG[paper.type] || TYPE_CONFIG.research;

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
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1.5} sx={{ mb: 2 }}>
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate("/research")}
                sx={{ textTransform: "none", px: 0, minWidth: 0 }}
              >
                {t("paperReader.backToResearch", { defaultValue: "Back to Research" })}
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

            <Chip
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
            />

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.2 }}>
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
                    <Typography sx={{ color: "text.secondary", fontSize: "0.92rem" }}>
                      {t("paperReader.loading", { defaultValue: "Loading document..." })}
                    </Typography>
                  </Box>
                ) : null}

                {error ? (
                  <Box sx={{ p: { xs: 2.5, md: 3.5 } }}>
                    <Alert severity="warning" sx={{ mb: 2 }}>
                      {t("paperReader.errorMessage", {
                        defaultValue:
                          "The document could not be loaded. Make sure the PDF file exists in public/papers/ and the filename matches exactly.",
                      })}
                    </Alert>
                    <Stack direction="row" spacing={1.2}>
                      <Button
                        href={paper.pdfUrl}
                        target="_blank"
                        variant="contained"
                        endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                        sx={{ textTransform: "none" }}
                      >
                        {t("paperReader.openPdfDirectly", {
                          defaultValue: "Open PDF directly",
                        })}
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => navigate("/research")}
                        sx={{ textTransform: "none" }}
                      >
                        {t("paperReader.back", { defaultValue: "Back" })}
                      </Button>
                    </Stack>
                  </Box>
                ) : (
                  <iframe
                    src={paper.pdfUrl}
                    title={paper.title}
                    onLoad={() => setLoading(false)}
                    onError={() => {
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
                )}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}
