import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Chip,
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
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Navbar from "../Components/Navbar";
import papers from "../data/papers";
import Seo from "../Components/Seo";

const TYPE_COLORS = {
  whitepaper: "#1565C0",
  research: "#2E7D32",
  thread: "#6A1B9A",
};

const ALL_YEARS = [...new Set(papers.map((p) => p.year))].sort((a, b) => b - a);

export default function ResearchPage() {
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
      <Seo
        title="Research Papers on Internet Freedom & Censorship | SMSWithoutBorders"
        description="Whitepapers and specifications from SMSWithoutBorders on offline communication, internet shutdowns, architecture, encryption and threat modeling."
        path="/research"
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
              {t("researchPage.knowledgeBase", {
                defaultValue: "Knowledge Base",
              })}
            </Typography> */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "minmax(0, 1fr) minmax(320px, 420px)",
                },
                gap: { xs: 3, md: 6 },
                alignItems: "end",
                mb: { xs: 6, md: 8 },
              }}
            >
              <Box>
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
                    mb: 0,
                  }}
                >
                  {t("researchPage.subtitle", {
                    defaultValue:
                      "White papers, research findings, and community threads on offline communication, privacy, and digital inclusion.",
                  })}
                </Typography>
              </Box>

              <Stack spacing={1.5}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  alignItems={{ xs: "stretch", sm: "center" }}
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
                          <SearchIcon
                            sx={{ fontSize: 18, color: "text.secondary" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <FormControl
                    size="small"
                    sx={{ minWidth: { xs: "100%", sm: 110 } }}
                  >
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

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{ color: "text.secondary", fontSize: "0.8rem" }}
                  >
                    <Box
                      component="span"
                      sx={{ fontWeight: 700, color: "text.primary" }}
                    >
                      {filtered.length}
                    </Box>{" "}
                    {t("researchPage.of", { defaultValue: "of" })}{" "}
                    {papers.length}
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            {filtered.length === 0 ? (
              <Box sx={{ py: 8, textAlign: "center" }}>
                <Typography sx={{ color: "text.secondary" }}>
                  {t("researchPage.noResults", {
                    defaultValue:
                      "No results found. Try adjusting your filters.",
                  })}
                </Typography>
              </Box>
            ) : (
              <Box
                component="ol"
                sx={{
                  listStyle: "none",
                  m: 0,
                  p: 0,
                }}
              >
                {filtered.map((paper) => (
                  <PaperEntry key={paper.id} paper={paper} t={t} />
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

function PaperEntry({ paper, t }) {
  const accent = TYPE_COLORS[paper.type] || "#1565C0";
  const hasContent = Boolean(paper.pdfUrl);
  const readPath = `/research/${paper.id}`;

  const actionSx = {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "text.primary",
    textDecoration: "none",
    borderBottom: "1px solid",
    borderColor: "divider",
    transition: "color 0.2s ease, border-color 0.2s ease",
    "&:hover": { color: "secondary.main", borderColor: "secondary.main" },
  };

  return (
    <Box
      component="li"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "88px minmax(0, 1fr)",
          md: "88px minmax(0, 1fr) 200px",
        },
        columnGap: { sm: 3, md: 4 },
        rowGap: 1,
        py: { xs: 3, md: 6.5 },
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* Dateline column */}
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 0.25 }}
        alignItems={{ xs: "baseline", sm: "flex-start" }}
      >
        <Typography
          sx={{
            fontFamily: "Unbounded, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "0.95rem", sm: "1.25rem" },
            lineHeight: 1.1,
          }}
        >
          {paper.year}
        </Typography>
        {paper.version && (
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "text.secondary",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            v{paper.version}
          </Typography>
        )}
      </Stack>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "grey.600",
            mb: 0.75,
          }}
        >
          {t(`paperReader.type.${paper.type}`, { defaultValue: paper.type })}
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: 700, lineHeight: 1.35, mb: 0.75 }}
        >
          {hasContent ? (
            <Box
              component={RouterLink}
              to={readPath}
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "1px",
                },
              }}
            >
              {paper.title}
            </Box>
          ) : (
            paper.title
          )}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.88rem",
            fontStyle: "italic",
            color: "text.secondary",
            mb: 1.25,
          }}
        >
         Author: {paper.authors.join(", ")}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.75,
            fontSize: { xs: "0.94rem", md: "0.98rem" },
            maxWidth: 820,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: 1.5,
          }}
        >
          {paper.abstract}
        </Typography>

        <Stack direction="row" spacing={2.5} alignItems="center">
          {hasContent ? (
            <>
              <Box component={RouterLink} to={readPath} sx={actionSx}>
                {t("researchPage.readPaper", { defaultValue: "Read paper" })}
                <ArrowOutwardIcon sx={{ fontSize: 14 }} />
              </Box>
              <Box
                component="a"
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={actionSx}
              >
                PDF
                <NorthEastIcon sx={{ fontSize: 11, opacity: 0.6 }} />
              </Box>
            </>
          ) : (
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "text.secondary",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {t("paperReader.comingSoon", { defaultValue: "Coming soon" })}
            </Typography>
          )}
        </Stack>
      </Box>

      {paper.topics?.length > 0 && (
        <Box
          sx={{
            gridColumn: { xs: "1", sm: "2", md: "3" },
            pt: { md: 0.25 },
          }}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "text.secondary",
              mb: 1,
            }}
          >
            {t("researchPage.keywords", { defaultValue: "Keywords" })}
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            spacing={0.75}
            component="ul"
            sx={{ listStyle: "none", m: 0, p: 0 }}
          >
            {paper.topics.map((topic) => (
              <Chip
                key={topic}
                component="li"
                label={topic}
                size="small"
                sx={{
                  borderRadius: "2px",
                  bgcolor: "action.selected",
                  color: "text.primary",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  height: 24,
                }}
              />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
