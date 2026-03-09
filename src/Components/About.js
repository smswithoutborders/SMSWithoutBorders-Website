import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import { useTheme } from "../Context/ThemeContext";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function FlexRowTwoColumns() {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const { mode } = useTheme();

  const isLight = mode === "light";

  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();
  const ref4 = useReveal();

  const revealStyle = {
    opacity: 0,
    transform: "translateY(32px)",
    transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
  };

  return (
    <Box
      sx={{
        fontFamily: "'Ubuntu', 'Roboto'",
        background: isLight
          ? "linear-gradient(135deg, #071f74ff 100%)"
          : "linear-gradient(135deg, #041459 2%, #071f74ff 100%)",
        direction: isFarsi ? "rtl" : "ltr",
        position: "relative",
        overflow: "hidden",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 7, sm: 10, md: 14 },
        overflow: "hidden",
      }}
    >
  

      <Box sx={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      <Box
        ref={ref1}
        style={revealStyle}
         sx={{ mb: { xs: 8, md: 10 }, textAlign: "center" }}
      >
     <Box
			sx={{
			  display: "inline-flex",
			  alignItems: "center",
			  gap: 1.5,
			  mb: 2.5,
			}}
		  >
			<Box
			  sx={{
				width: 28,
				height: "1.5px",
				bgcolor: isLight ? "#eef0f6" : "#FFB800",
			  }}
			/>
			<Typography
			  sx={{
				fontSize: "0.72rem",
				fontWeight: 700,
				letterSpacing: "0.18em",
				textTransform: "uppercase",
				color: isLight ? "#f3f5fb" : "#FFB800",
				fontFamily: "'Ubuntu', 'Roboto'",
			  }}
			>
			 Our Projects
			</Typography>
			<Box
			  sx={{
				width: 28,
				height: "1.5px",
				bgcolor: isLight ? "#ecedf4" : "#FFB800",
			  }}
			/>
		  </Box>


      	  <Typography
			variant="h2"
			sx={{
			  fontWeight: 700,
			  fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" },
			  lineHeight: 1.12,
			 color: "#FFFFFF",
			  fontFamily: "'Ubuntu', 'Roboto'",
			  letterSpacing: "-0.02em",
			  mb: 2,
			}}
		  >
			      {t("About.AboutHeader", { defaultValue: "Explore SMSWithoutBorders" })}
		  </Typography>

      </Box>

    
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1px 1fr" },
          gap: { xs: 5, md: 0 },
          mb: { xs: 6, md: 10 },
          alignItems: "start",
        }}
      >
     
        <Box
          ref={ref2}
          style={{ ...revealStyle, transitionDelay: "0.12s" }}
          sx={{ pr: { md: 6 } }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Ubuntu', 'Roboto'",
              fontWeight: 300,
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.85,
              textAlign: isFarsi ? "right" : "left",
            }}
          >
            {t("About.description", {
              defaultValue:
                "SMSWithoutBorders (SWOB) is dedicated to researching, developing and promoting secure and accessible communication tools that function even without an internet connection.",
            })}
          </Typography>
        </Box>

    
        <Box sx={{
          display: { xs: "none", md: "block" },
          bgcolor: "rgba(255,255,255,0.10)",
          mx: "auto",
          width: "1px",
          height: "100%",
          minHeight: 120,
        }} />

      
        <Box
          ref={ref3}
          style={{ ...revealStyle, transitionDelay: "0.24s" }}
          sx={{ pl: { md: 6 } }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Ubuntu', 'Roboto'",
              fontWeight: 300,
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.85,
              textAlign: isFarsi ? "right" : "left",
              mb: 3,
            }}
          >
            {t("About.description1", {
              defaultValue:
                "The development includes mobile apps for various platforms such as Android, iOS and Linux systems. Some of the work also includes white papers on topics such as cryptography, communications and internet freedom.",
            })}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Ubuntu', 'Roboto'",
              fontWeight: 300,
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.85,
              textAlign: isFarsi ? "right" : "left",
            }}
          >
            {t("About.description2", {
              defaultValue:
                "Our journey toward achieving our mission began in 2021 with the development of the first Android version of RelaySMS. We have come far since then, with support for more platforms and many more apps.",
            })}
          </Typography>
        </Box>
      </Box>

  
      <Box
        ref={ref4}
        style={{ ...revealStyle, transitionDelay: "0.36s" }}
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.10)",
          pt: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 3,
        }}
      >
    
    

        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Ubuntu', 'Roboto'",
            fontWeight: 300,
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            "& a": {
              color: "#f3831a",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,184,0,0.35)",
              paddingBottom: "1px",
              transition: "border-color 0.2s, color 0.2s",
              "&:hover": {
                color: "#ca6303",
                borderBottomColor: "#f18b2c",
              },
            },
          }}
        >
          {parse(
            t("About.description3", {
              defaultValue:
                "We publish our research as frequently as possible on our blog and make announcements via our social media outlets. SMSWithoutBorders is a project started by the team at <a href='https://Afkanerd.com' class='afkanerd'>Afkanerd</a>.",
            })
          )}
        </Typography>
      </Box>
    </Box>
  );
}