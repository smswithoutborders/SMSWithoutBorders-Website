import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box, Container, Typography, Chip, Button, Stack,
  CircularProgress, Alert
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import papers from "../data/papers.json";

const TYPE_CONFIG = {
  whitepaper: { label: "White Paper", color: "#1565C0" },
  research:   { label: "Research",    color: "#2E7D32" },
  thread:     { label: "Thread",      color: "#6A1B9A" },
};


function toEmbedUrl(url) {
  if (!url) return null;

  if (url.includes("/preview")) return url;

  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/?\s]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  const openMatch = url.match(/[?&]id=([^&\s]+)/);
  if (openMatch) {
    return `https://drive.google.com/file/d/${openMatch[1]}/preview`;
  }

  return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
}

export default function PaperReader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const paper = papers.find((p) => p.id === id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (!paper) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary">Paper not found.</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/research")} sx={{ mt: 2 }}>
          Back to Research
        </Button>
      </Container>
    );
  }

  if (!paper.pdfUrl) {
    return (
      <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh" }}>
        <PaperHeader paper={paper} navigate={navigate} />
        <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Full text coming soon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This paper has not been published yet. Check back later.
          </Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/research")}
            variant="outlined"
            sx={{ mt: 3, textTransform: "none", borderRadius: 2 }}
          >
            Back to Research
          </Button>
        </Container>
      </Box>
    );
  }

  const embedUrl = toEmbedUrl(paper.pdfUrl);

  return (
    <Box sx={{ bgcolor: "#0D1B2A", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 70%, #155FA0 100%)",
          px: { xs: 2, md: 4 },
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          zIndex: 10,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1, minWidth: 0 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/research")}
            sx={{
              color: "#90CAF9",
              textTransform: "none",
              fontWeight: 500,
              whiteSpace: "nowrap",
              "&:hover": { color: "white" },
            }}
          >
            Research
          </Button>

          <Box sx={{ width: "1px", height: 24, bgcolor: "rgba(255,255,255,0.15)" }} />

          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                color: "white",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: 160, sm: 320, md: 500 },
              }}
            >
              {paper.title}
            </Typography>
            <Stack direction="row" spacing={1} mt={0.3} flexWrap="wrap">
              <Chip
                label={TYPE_CONFIG[paper.type]?.label || paper.type}
                size="small"
                sx={{
                  height: 18,
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  bgcolor: `${TYPE_CONFIG[paper.type]?.color}30`,
                  color: "#90CAF9",
                }}
              />
              <Typography variant="caption" sx={{ color: "#64748B", lineHeight: "18px" }}>
                {paper.authors.join(", ")} · {paper.year}
                {paper.version ? ` · v${paper.version}` : ""}
              </Typography>
            </Stack>
          </Box>
        </Stack>

       
        <Stack direction="row" spacing={1}>
          <Button
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon fontSize="small" />}
            size="small"
            sx={{
              color: "#CBD5E1",
              textTransform: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 2,
              "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.3)" },
            }}
          >
            Open in Drive
          </Button>
       
        </Stack>
      </Box>

  
      <Box sx={{ flex: 1, position: "relative", minHeight: "85vh" }}>
   
        {loading && !error && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#0D1B2A",
              zIndex: 5,
              gap: 2,
            }}
          >
            <CircularProgress sx={{ color: "#1565C0" }} size={48} />
            <Typography variant="body2" sx={{ color: "#64748B" }}>
              Loading document…
            </Typography>
          </Box>
        )}

    
        {error && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#0D1B2A",
              zIndex: 5,
              gap: 3,
              px: 3,
            }}
          >
            <Alert
              severity="warning"
              sx={{ maxWidth: 500, bgcolor: "#1E293B", color: "#F8FAFC", "& .MuiAlert-icon": { color: "#FBBF24" } }}
            >
              The document could not be embedded. This can happen if the Google Drive file is not set to
              "Anyone with the link can view". Try opening it directly.
            </Alert>
            <Stack direction="row" spacing={2}>
              <Button
                href={paper.pdfUrl}
                target="_blank"
                variant="contained"
                endIcon={<OpenInNewIcon />}
                sx={{ textTransform: "none", bgcolor: "#1565C0", borderRadius: 2 }}
              >
                Open in Google Drive
              </Button>
              <Button
                onClick={() => navigate("/research")}
                variant="outlined"
                sx={{ textTransform: "none", borderRadius: 2, color: "#CBD5E1", borderColor: "rgba(255,255,255,0.2)" }}
              >
                ← Back
              </Button>
            </Stack>
          </Box>
        )}

        <iframe
          src={embedUrl}
          title={paper.title}
          onLoad={() => setLoading(false)}
          onError={() => { setLoading(false); setError(true); }}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "85vh",
            border: "none",
            display: "block",
            opacity: loading ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
          allow="autoplay"
        />
      </Box>
    </Box>
  );
}

function PaperHeader({ paper, navigate }) {
  const cfg = TYPE_CONFIG[paper.type] || {};
  return (
    <Box sx={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 70%, #155FA0 100%)", color: "white", py: 5, px: 3 }}>
      <Container maxWidth="lg">
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/research")} sx={{ color: "#90CAF9", mb: 2, textTransform: "none" }}>
          Research & Publications
        </Button>
        <Chip label={cfg.label} size="small" sx={{ bgcolor: `${cfg.color}30`, color: "#90CAF9", fontWeight: 700, mb: 2 }} />
        <Typography variant="h4" fontWeight={800}>{paper.title}</Typography>
        <Typography variant="body2" sx={{ color: "#94A3B8", mt: 1 }}>{paper.authors.join(", ")} · {paper.year}</Typography>
      </Container>
    </Box>
  );
}