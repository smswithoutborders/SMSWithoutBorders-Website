import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box, Container, Typography, TextField, InputAdornment,
  Grid, Card, CardContent, CardActions, Button,
  Select, MenuItem, FormControl, Stack, Divider
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTheme } from "../Context/ThemeContext";
import papers from "../data/papers.json";

const TYPE_ICONS  = { whitepaper: <ArticleIcon fontSize="small" />, research: <MenuBookIcon fontSize="small" />, thread: <ForumIcon fontSize="small" /> };
const TYPE_LABELS = { whitepaper: "White Paper", research: "Research", thread: "Thread" };
const TYPE_COLORS = { whitepaper: "#1565C0", research: "#2E7D32", thread: "#6A1B9A" };

const ALL_TOPICS = [...new Set(papers.flatMap((p) => p.topics))].sort();
const ALL_YEARS  = [...new Set(papers.map((p) => p.year))].sort((a, b) => b - a);
const ALL_TYPES  = [...new Set(papers.map((p) => p.type))];

export default function ResearchPage() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const dark = mode === "dark";

  const [search,         setSearch]         = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedType,   setSelectedType]   = useState("all");
  const [selectedYear,   setSelectedYear]   = useState("all");

  const c = dark ? {
    page:        "#000824",
    hero:        "#071235",
    heroBorder:  "rgba(255,255,255,0.06)",
    surface:     "#050e2a",
    card:        "#0a1628",
    cardBorder:  "rgba(255,255,255,0.07)",
    cardHover:   "rgba(255,255,255,0.11)",
    heading:     "#ffffff",
    body:        "#cbd5e1",
    muted:       "#64748b",
    faint:       "#1e2d45",
    input:       "rgba(255,255,255,0.05)",
    inputBorder: "rgba(255,255,255,0.12)",
    inputText:   "#ffffff",
    inputPh:     "#64748b",
    divider:     "rgba(255,255,255,0.07)",
    pillBg:      "rgba(255,255,255,0.05)",
    pillBorder:  "rgba(255,255,255,0.1)",
    pillActive:  "rgba(21,101,192,0.2)",
    back:        "#90caf9",
  } : {
    page:        "#f5f7fa",
    hero:        "#0d1b2a",
    heroBorder:  "rgba(255,255,255,0.06)",
    surface:     "#ffffff",
    card:        "#ffffff",
    cardBorder:  "#e2e8f0",
    cardHover:   "#f8fafc",
    heading:     "#0c0833",
    body:        "#475569",
    muted:       "#94a3b8",
    faint:       "#f1f5f9",
  input:       "rgba(2, 5, 48, 0.1)",
    inputBorder: "rgba(3, 2, 17, 0.94)",
    inputText:   "#0a0a10",
    inputPh:     "rgba(18, 14, 14, 0.5)",
    divider:     "#e2e8f0",
    pillBg:      "transparent",
    pillBorder:  "#e2e8f0",
    pillActive:  "rgba(21,101,192,0.08)",
    back:        "rgba(255,255,255,0.7)",
  };

  const filtered = useMemo(() => papers.filter((p) => {
    const q = search.toLowerCase();
    return (
      (!q || p.title.toLowerCase().includes(q) || p.abstract.toLowerCase().includes(q) ||
       p.authors.some((a) => a.toLowerCase().includes(q)) || p.topics.some((t) => t.toLowerCase().includes(q))) &&
      (selectedTopics.length === 0 || selectedTopics.every((t) => p.topics.includes(t))) &&
      (selectedType === "all" || p.type === selectedType) &&
      (selectedYear === "all" || p.year === Number(selectedYear))
    );
  }), [search, selectedTopics, selectedType, selectedYear]);

  const toggleTopic = (t) =>
    setSelectedTopics((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);

  return (
    <Box sx={{ bgcolor: c.page, minHeight: "100vh", pb: 10, transition: "background 0.3s" }}>


      <Box sx={{ bgcolor: c.hero, borderBottom: `1px solid ${c.heroBorder}`, py: { xs: 6, md: 9 }, px: 3 }}>
        <Container maxWidth="lg">

      
          <Button
            component="a" href="/#home"
            startIcon={<ArrowBackIcon sx={{ fontSize: "0.85rem !important" }} />}
            sx={{ color: c.back, textTransform: "none", fontWeight: 400, mb: 4, pl: 0, fontSize: "0.82rem", "&:hover": { color: "#fff", bgcolor: "transparent" } }}
          >
            smswithoutborders.com
          </Button>

          <Typography sx={{ color: "#1565C0", fontSize: "0.7rem", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", mb: 1.5 }}>
            Knowledge Base
          </Typography>

          <Typography sx={{ fontFamily: "'Roboto', 'Ubuntu'", fontWeight: 700, fontSize: { xs: "2rem", md: "2.8rem" }, color: "#ffffff", lineHeight: 1.2, mb: 2 }}>
            Research & Publications
          </Typography>

          <Typography sx={{ color: "rgba(203,213,225,0.75)", fontSize: "0.95rem", maxWidth: 520, lineHeight: 1.8, mb: 5, fontWeight: 300 }}>
            White papers, research findings, and community threads on offline communication, privacy, and digital inclusion.
          </Typography>

        
    
        </Container>
      </Box>

      {/* ── FILTERS ── */}
      <Box sx={{ py: 2, px: 3, transition: "background 0.3s" }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "flex-start", sm: "center" }} flexWrap="wrap" gap={1}>
        
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {["all", ...ALL_TYPES].map((tp) => {
                const active = selectedType === tp;
                const col    = tp === "all" ? "#1565C0" : TYPE_COLORS[tp];
                return (
                  <Box
                    key={tp}
                    onClick={() => setSelectedType(tp)}
                    sx={{
                      px: 1.8, py: 0.55, borderRadius: "8px",
                      border: active ? `1.5px solid ${col}` : `1px solid ${c.pillBorder}`,
                      bgcolor: active ? c.pillActive : c.pillBg,
                      color: active ? col : c.muted,
                      fontSize: "0.75rem", fontWeight: active ? 600 : 400,
                      cursor: "pointer", userSelect: "none",
                      transition: "all 0.15s",
                      "&:hover": { borderColor: col, color: col },
                    }}
                  >
                    {tp === "all" ? "All" : TYPE_LABELS[tp]}
                  </Box>
                );
              })}
            </Stack>



            <TextField
            fullWidth
            placeholder="Search by title, topic or author…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          sx={{
    maxWidth: 540,

    "& .MuiOutlinedInput-root": {
      borderRadius: "700px",
      backgroundColor: c.input,
      paddingLeft: "6px",
      transition: "all 0.25s ease",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",

      "& fieldset": {
        borderColor: "transparent",
      },

      "&:hover": {
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      },

      "&.Mui-focused": {
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#2563eb",
      },
    },

    "& input": {
      color: c.inputText,
      fontSize: "0.95rem",
      padding: "12px 8px",
    },

    "& input::placeholder": {
      color: c.inputPh,
      opacity: 1,
    },
  }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: c.inputPh, fontSize: 18 }} />
                </InputAdornment>
              ),
            }}
          /> 

     
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                displayEmpty
                sx={{
                  color: dark ? "#94a3b8" : "#555",
                  fontSize: "0.78rem",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: c.pillBorder },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#1565C0" },
                  "& .MuiSvgIcon-root": { color: c.muted },
                }}
              >
                <MenuItem value="all">All Years</MenuItem>
                {ALL_YEARS.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
              </Select>
            </FormControl>

            {selectedTopics.length > 0 && (
              <Button size="small" onClick={() => setSelectedTopics([])}
                sx={{ color: "#6A1B9A", textTransform: "none", fontSize: "0.75rem" }}>
                ✕ Clear tags
              </Button>
            )}

            <Box sx={{ flex: 1 }} />
            <Typography sx={{ color: c.muted, fontSize: "0.78rem" }}>
              <Box component="span" sx={{ color: dark ? "#90caf9" : "#1565C0", fontWeight: 600 }}>{filtered.length}</Box>
              {" of "}{papers.length}
            </Typography>
          </Stack>

        
          {ALL_TOPICS.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: 2 }}>
              {ALL_TOPICS.map((topic) => {
                const active = selectedTopics.includes(topic);
                return (
                  <Box
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    sx={{
                      px: 1.4, py: 0.35, borderRadius: "6px",
                      border: active ? "1.5px solid #1565C0" : `1px solid ${c.pillBorder}`,
                      bgcolor: active ? (dark ? "rgba(21,101,192,0.15)" : "rgba(21,101,192,0.07)") : c.pillBg,
                      color: active ? "#1565C0" : c.muted,
                      fontSize: "0.7rem", fontWeight: active ? 600 : 400,
                      cursor: "pointer", userSelect: "none", transition: "all 0.15s",
                      "&:hover": { borderColor: "#1565C0", color: "#1565C0" },
                    }}
                  >
                    {topic}
                  </Box>
                );
              })}
            </Box>
          )}
        </Container>
      </Box>

    
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {filtered.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 14 }}>
            <Typography sx={{ color: c.muted, fontSize: "1rem" }}>No results found. Try adjusting your filters.</Typography>
          </Box>
        ) : (
          <Grid container spacing={2.5}>
            {filtered.map((paper) => (
              <Grid item xs={12} md={6} key={paper.id}>
                <PaperCard paper={paper} c={c} dark={dark} onRead={() => navigate(`/research/${paper.id}`)} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

function PaperCard({ paper, c, dark, onRead }) {
  const color      = TYPE_COLORS[paper.type] || "#1565C0";
  const icon       = TYPE_ICONS[paper.type];
  const label      = TYPE_LABELS[paper.type] || paper.type;
  const hasContent = Boolean(paper.pdfUrl);
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      elevation={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={hasContent ? onRead : undefined}
      sx={{
        bgcolor: hovered && hasContent ? c.cardHover : c.card,
        border: `1px solid ${hovered && hasContent ? color + "55" : c.cardBorder}`,
        borderRadius: "12px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: hasContent ? "pointer" : "default",
        transition: "all 0.2s ease",
        transform: hovered && hasContent ? "translateY(-3px)" : "none",
        boxShadow: hovered && hasContent
          ? dark ? `0 12px 32px rgba(0,0,0,0.4)` : `0 8px 24px rgba(0,0,0,0.09)`
          : "none",
      }}
    >
   
      <Box sx={{ height: 3, bgcolor: color, borderRadius: "12px 12px 0 0", opacity: hovered ? 1 : 0.5, transition: "opacity 0.2s" }} />

      <CardContent sx={{ flexGrow: 1, p: 3 }}>

      
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Stack direction="row" alignItems="center" spacing={0.6}
            sx={{ px: 1.2, py: 0.4, borderRadius: "6px", bgcolor: `${color}12`, border: `1px solid ${color}25` }}>
            <Box sx={{ color, display: "flex", fontSize: 14 }}>{icon}</Box>
            <Typography sx={{ color, fontSize: "0.66rem", fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase" }}>
              {label}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            {paper.version && (
              <Typography sx={{ color: c.muted, fontSize: "0.65rem", px: 0.8, py: 0.2, borderRadius: "4px", bgcolor: dark ? "rgba(255,255,255,0.05)" : "#f1f5f9", border: `1px solid ${c.divider}` }}>
                v{paper.version}
              </Typography>
            )}
            <Typography sx={{ color: c.muted, fontSize: "0.72rem", fontWeight: 500 }}>
              {paper.year}
            </Typography>
          </Stack>
        </Stack>

      
        <Typography sx={{
          fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, mb: 0.8,
          color: dark ? "#ffffff" : c.heading,
          fontFamily: "'Roboto', 'Ubuntu'",
        }}>
          {paper.title}
        </Typography>

        <Typography sx={{ fontSize: "0.78rem", color: c.muted, mb: 1.5, fontStyle: "italic" }}>
          {paper.authors.join(", ")}
        </Typography>

     
        <Typography sx={{
          fontSize: "0.84rem",
          color: dark ? "#cbd5e1" : c.body,
          lineHeight: 1.75,
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          mb: 2,
          fontWeight: 300,
        }}>
          {paper.abstract}
        </Typography>

     
        {paper.topics.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
            {paper.topics.map((tp) => (
              <Typography key={tp} sx={{
                px: 1.2, py: 0.25, borderRadius: "4px",
                bgcolor: dark ? "rgba(255,255,255,0.04)" : "#f1f5f9",
                border: `1px solid ${c.divider}`,
                color: dark ? "#94a3b8" : "#64748b",
                fontSize: "0.65rem",
              }}>
                {tp}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>

      <Divider sx={{ borderColor: c.divider }} />

      <CardActions sx={{ px: 3, py: 2, justifyContent: "space-between", alignItems: "center" }}>
        {hasContent ? (
          <Button
            variant="contained"
            size="small"
            startIcon={<AutoStoriesIcon sx={{ fontSize: "0.85rem !important" }} />}
            onClick={(e) => { e.stopPropagation(); onRead(); }}
            sx={{
              bgcolor: color, textTransform: "none", fontWeight: 600,
              fontSize: "0.8rem", borderRadius: "8px", px: 2,
              boxShadow: "none",
              "&:hover": { bgcolor: color, filter: "brightness(1.1)", boxShadow: "none" },
            }}
          >
            Read Paper
          </Button>
        ) : (
          <Stack direction="row" spacing={0.8} alignItems="center">
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#6A1B9A",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.3 } }
            }} />
            <Typography sx={{ color: c.muted, fontSize: "0.78rem" }}>Coming Soon</Typography>
          </Stack>
        )}

        {hasContent && (
          <Typography sx={{ color: c.muted, fontSize: "0.7rem" }}>
            View full document →
          </Typography>
        )}
      </CardActions>
    </Card>
  );
}