import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Navbar from "../../Components/Navbar";

const FeaturesPage = () => {
  const [content, setContent] = useState(null);
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isFarsi = i18n.language === "fa";
  const isLight = theme.palette.mode === "light";

  useEffect(() => {
    const lang = i18n.language;
    const file = `/features.${lang}.md`;

    fetch(file)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch(() =>
        setContent(
          t("features.loadError", {
            defaultValue: "Failed to load features.",
          }),
        ),
      );
  }, [i18n.language, t]);

  const headingStyle = (level) => ({
    marginTop: level === 1 ? "1.6rem" : "1.2rem",
    marginBottom: level === 1 ? "0.9rem" : "0.75rem",
    color: "text.primary",
    fontWeight: 700,
    letterSpacing: level === 1 ? "-0.01em" : 0,
    lineHeight: 1.25,
    textAlign: isFarsi ? "right" : "left",
  });

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
              {t("navbar.link6", { defaultValue: "Features" })}
            </Typography>

            {content === null ? (
              <Box
                sx={{
                  minHeight: "40vh",
                  display: "grid",
                  placeItems: "center",
                  gap: 2,
                }}
              >
                <CircularProgress
                  size={50}
                  thickness={4}
                  sx={{ color: isLight ? "#0d3b66" : "#00d4ff" }}
                />
                <Typography
                  sx={{
                    color: isLight ? "#0d3b66" : "#00d4ff",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                  }}
                >
                  {t("loader", { defaultValue: "Loading Please Wait" })}
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  "& a": {
                    color: isLight ? "#0935c4da" : "#87CEFA",
                    textDecoration: "underline",
                    transition: "color 0.2s ease",
                  },
                  "& a:hover": {
                    color: isLight ? "#ff6600a8" : "#ff9100ff",
                  },
                  "& p": {
                    marginBottom: "1rem",
                    fontSize: { xs: "1rem", md: "1.04rem" },
                    textAlign: isFarsi ? "right" : "left",
                  },
                  "& ul, & ol": {
                    marginBottom: "1rem",
                    paddingInlineStart: isFarsi ? "1rem" : "1.5rem",
                  },
                  "& li": {
                    marginBottom: "0.45rem",
                  },
                }}
              >
                <ReactMarkdown
                  children={content}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
                  components={{
                    h1: (props) => (
                      <Typography variant="h4" sx={headingStyle(1)} {...props} />
                    ),
                    h2: (props) => (
                      <Typography variant="h5" sx={headingStyle(2)} {...props} />
                    ),
                    h3: (props) => (
                      <Typography variant="h6" sx={headingStyle(3)} {...props} />
                    ),
                    h4: (props) => (
                      <Typography sx={headingStyle(4)} {...props} />
                    ),
                    h5: (props) => (
                      <Typography sx={headingStyle(5)} {...props} />
                    ),
                    h6: (props) => (
                      <Typography sx={headingStyle(6)} {...props} />
                    ),
                  }}
                />
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FeaturesPage;
