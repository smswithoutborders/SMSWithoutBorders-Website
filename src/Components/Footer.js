import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const { mode } = useTheme();
  const isLight = mode === "light";

  return (
    <Box
      sx={{
        width: "100%",
        background: isLight
          ? "linear-gradient(135deg, #071f74f0 2%, #071f74ff 100%)"
          : "linear-gradient(135deg, #050f3a 2%, #071f74ff 100%)",
        fontFamily: "'Ubuntu', 'Roboto'",
      }}
    >
      <Box
        sx={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 2, sm: 0 },
          px: { xs: 3, sm: 6, md: 10 },
          py: { xs: 3, sm: 3.5 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.55)",
            fontFamily: "'Ubuntu', 'Roboto'",
          }}
        >
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://www.Afkanerd.com"
            target="_blank"
            rel="noopener"
            sx={{
              color: "#FF8614",
              textDecoration: "none",
              fontFamily: "'Ubuntu', 'Roboto'",
              transition: "color 0.2s",
              "&:hover": { color: "#ffaa55" },
            }}
          >
            Afkanerd
          </Link>
        </Typography>

        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.30)",
            fontFamily: "'Ubuntu', 'Roboto'",
          }}
        >
          SMSWithoutBorders
        </Typography>

        <Link
          href="https://github.com/smswithoutborders"
          target="_blank"
          rel="noopener"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.8,
            color: "rgba(255,255,255,0.45)",
            textDecoration: "none",
            fontSize: "0.78rem",
            fontFamily: "'Ubuntu', 'Roboto'",
            transition: "color 0.2s",
            "&:hover": { color: "#ffffff" },
          }}
        >
          <GitHubIcon sx={{ fontSize: 16 }} />
          GitHub
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;