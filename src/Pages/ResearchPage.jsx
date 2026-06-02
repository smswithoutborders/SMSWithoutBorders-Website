import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Navbar from "../Components/Navbar";
import papers from "../data/papers.json";

const TYPE_ICONS = {
  whitepaper: <ArticleIcon sx={{ fontSize: 16 }} />,
  research: <MenuBookIcon sx={{ fontSize: 16 }} />,
  thread: <ForumIcon sx={{ fontSize: 16 }} />,
};

const TYPE_COLORS = {
  whitepaper: "#1565C0",
  research: "#2E7D32",
  thread: "#6A1B9A",
};

const ALL_YEARS = [...new Set(papers.map((p) => p.year))].sort((a, b) => b - a);

export default function ResearchPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isFarsi = i18n.language === "fa";

  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState(String(ALL_YEARS[0] || ""));

  const filtered = useMemo(
    () =>
      papers.filter((p) => {
        const q = search.toLowerCase();
        return (
          (!q ||
            p.title.toLowerCase().includes(q) ||
            p.abstract.toLowerCase().includes(q) ||
            p.authors.some((a) => a.toLowerCase().includes(q)) ||
            p.topics.some((tp) => tp.toLowerCase().includes(q))) &&
          p.year === Number(selectedYear)
        );
      }),
    [search, selectedYear],
  );

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
              {t("researchPage.knowledgeBase", {
                defaultValue: "Knowledge Base",
              })}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              {t("researchPage.title", {
                defaultValue: "Research & Publications",
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
              {t("researchPage.subtitle", {
                defaultValue:
                  "White papers, research findings, and community threads on offline communication, privacy, and digital inclusion.",
              })}
            </Typography>

            <Stack spacing={2.2} sx={{ mb: 5.5 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={1.5}
                alignItems={{ xs: "stretch", md: "center" }}
              >
                <TextField
                  size="small"
                  fullWidth
                  placeholder={t("researchPage.searchPlaceholder", {
                    defaultValue: "Search by title, topic or author...",
                  })}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2px",
                      height: 40,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <FormControl size="small" sx={{ minWidth: { xs: "100%", md: 120 } }}>
                  <Select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    {ALL_YEARS.map((year) => (
                      <MenuItem key={year} value={String(year)}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography sx={{ color: "text.secondary", fontSize: "0.8rem" }}>
                  <Box component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                    {filtered.length}
                  </Box>{" "}
                  {t("researchPage.of", { defaultValue: "of" })} {papers.length}
                </Typography>
              </Stack>
            </Stack>

            {filtered.length === 0 ? (
              <Box sx={{ py: 8, textAlign: "center" }}>
                <Typography sx={{ color: "text.secondary" }}>
                  {t("researchPage.noResults", {
                    defaultValue: "No results found. Try adjusting your filters.",
                  })}
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {filtered.map((paper) => (
                  <PaperCard
                    key={paper.id}
                    paper={paper}
                    onRead={() => navigate(`/research/${paper.id}`)}
                    t={t}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

function PaperCard({ paper, onRead, t }) {
  const accent = TYPE_COLORS[paper.type] || "#1565C0";
  const icon = TYPE_ICONS[paper.type] || TYPE_ICONS.research;
  const hasContent = Boolean(paper.pdfUrl);

  return (
    <Box
      onClick={hasContent ? onRead : undefined}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        p: { xs: 2.5, md: 3 },
        cursor: hasContent ? "pointer" : "default",
        transition: "background-color 0.2s ease",
        "&:hover": {
          bgcolor: hasContent ? "action.hover" : "transparent",
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1.5 }}>
        <Stack
          direction="row"
          spacing={0.7}
          alignItems="center"
          sx={{
            px: 1,
            py: 0.4,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "action.hover",
          }}
        >
          {/* <Box sx={{ color: accent, display: "flex" }}>{icon}</Box> */}
          <Typography
            sx={{
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: accent,
            }}
          >
            {t(`paperReader.type.${paper.type}`, { defaultValue: paper.type })}
          </Typography>
        </Stack>

        <Typography sx={{ fontSize: "0.74rem", color: "text.secondary" }}>
          {paper.year}
          {paper.version ? ` · v${paper.version}` : ""}
        </Typography>
      </Stack>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.1 }}>
        {paper.title}
      </Typography>

      <Typography sx={{ fontSize: "0.8rem", color: "text.secondary", mb: 1.4 }}>
        {paper.authors.join(", ")}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          lineHeight: 1.8,
          fontSize: "0.92rem",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          mb: 1.8,
        }}
      >
        {paper.abstract}
      </Typography>

      <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
        {paper.topics.map((topic) => (
          <Typography
            key={topic}
            sx={{
              px: 0.95,
              py: 0.35,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "action.hover",
              fontSize: "0.68rem",
              color: "text.secondary",
            }}
          >
            {topic}
          </Typography>
        ))}
      </Stack>

      <Button
        variant="text"
        endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
        sx={{
          px: 0,
          minWidth: 0,
          textTransform: "none",
          fontWeight: 600,
          color: hasContent ? "text.primary" : "text.secondary",
        }}
      >
        {hasContent
          ? t("researchPage.readPaper", { defaultValue: "Read paper" })
          : t("paperReader.comingSoon", { defaultValue: "Coming soon" })}
      </Button>
    </Box>
  );
}
