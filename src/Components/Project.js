import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

const projects = [
  {
    key: "project1",
    accentColor: "#FF8614",
    accentColorDim: "rgba(255,134,20,0.12)",
    accentBorder: "rgba(255,134,20,0.25)",
    image: "/Images/relaysms.png",
    logoLight: "/Images/RelaySms.png",
    logoDark: "/Images/RelaySMS-White.png",
    href: "https://relay.smswithoutborders.com",
    chips: ["project1.keyPoint1", "project1.keyPoint2"],
    chipDefaults: ["SMS", "Internet Freedom"],
    descKey: "project1.description",
    descDefault:
      "RelaySMS uses SMS messaging to communicate with online platforms without needing an internet connection. The users can grant access to their online platforms which would be used to act on their behalf using SMS messaging. The access granted, messages being sent from the app, and how they get published online are secured with strong up-to-date cryptographic and security practices.",
    readMoreKey: "project1.read_more",
    readMoreDefault: "Visit Website",
    number: "01",
  },
  {
    key: "project2",
    accentColor: "#2ED3B7",
    accentColorDim: "rgba(46,211,183,0.10)",
    accentBorder: "rgba(46,211,183,0.25)",
    image: "/Images/dekusms.png",
    logoLight: "/Images/DekuSms.png",
    logoDark: "/Images/DekuSMS-Dark Theme.png",
    href: "https://dekusms.com",
    chips: ["project2.keyPoint1", "project2.keyPoint2"],
    chipDefaults: ["SMS", "Privacy"],
    descKey: "project2.description",
    descDefault:
      "DekuSMS is an Android SMS messaging app. It enables 2 users of the app to communicate using end-to-end encryption over SMS messages. The app also contains message forwarding abilities supporting protocols such as SMTP, FTP, and AMQP. The app is built to integrate with RabbitMQ allowing users with messaging queues to set up and make remote communication requests to their apps.",
    readMoreKey: "project2.read_more",
    readMoreDefault: "Visit Website",
    number: "02",
  },
];

export default function Projects() {
  const { mode } = useTheme();
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";

  const isLight = mode === "light";
  const bg = isLight ? "#f7f9ff" : "#000824";
  const textColor = isLight ? "#071f74ef" : "#ffffff";
  const subColor = isLight ? "#505e85ff" : "#cbd7e2ff";

  const headerRef = useReveal(0);

  return (
    <Box
      sx={{
        bgcolor: bg,
        py: { xs: 8, md: 14 },
        px: { xs: 3, sm: 5, md: 8 },
        direction: isFarsi ? "rtl" : "ltr",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: isLight
            ? "radial-gradient(rgba(7,31,116,0.04) 1px, transparent 1px)"
            : "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />


	  <Box
		  ref={headerRef}
		  style={{
			opacity: 0,
			transform: "translateY(28px)",
			transition:
			  "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
		  }}
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
				bgcolor: isLight ? "#071f74" : "#FFB800",
			  }}
			/>
			<Typography
			  sx={{
				fontSize: "0.72rem",
				fontWeight: 700,
				letterSpacing: "0.18em",
				textTransform: "uppercase",
				color: isLight ? "#071f74" : "#FFB800",
				fontFamily: "'Ubuntu', 'Roboto'",
			  }}
			>
			 Our Projects
			</Typography>
			<Box
			  sx={{
				width: 28,
				height: "1.5px",
				bgcolor: isLight ? "#071f74" : "#FFB800",
			  }}
			/>
		  </Box>

		  <Typography
			variant="h2"
			sx={{
			  fontWeight: 700,
			  fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" },
			  lineHeight: 1.12,
			  color: textColor,
			  fontFamily: "'Ubuntu', 'Roboto'",
			  letterSpacing: "-0.02em",
			  mb: 2,
			}}
		  >
			      {t("projectHeader", {
            defaultValue: "Innovative Projects Under SMSWithoutBorders",
          })}
		  </Typography>

		  <Typography
			variant="body1"
			sx={{
			  fontFamily: "'Ubuntu', 'Roboto'",
			  fontWeight: 300,
			  fontSize: { xs: "1rem", md: "1.1rem" },
			  color: subColor,
			  lineHeight: 1.8,
			  maxWidth: 550,
			  mx: "auto",
			}}
		  >
		{t("projectSubHeader", {
            defaultValue:
              "SMSWithoutBorders commits to building open source tools that aid free speech and communication.",
          })}
		  </Typography>
		</Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 5 },
          alignItems: "stretch",
        }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.key}
            project={project}
            idx={idx}
            t={t}
            mode={mode}
            isLight={isLight}
            isFarsi={isFarsi}
            subColor={subColor}
            textColor={textColor}
          />
        ))}
      </Box>
    </Box>
  );
}

function ProjectCard({ project, idx, t, mode, isLight, isFarsi, subColor, textColor }) {
  const ref = useReveal(idx * 160);

  const cardBg = isLight ? "#ffffff" : "#070f2b";
  const borderColor = isLight ? "rgba(7,31,116,0.10)" : "rgba(238,242,255,0.08)";

  return (
    <Box
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: "opacity 0.75s cubic-bezier(.4,0,.2,1), transform 0.75s cubic-bezier(.4,0,.2,1)",
      }}
      sx={{ flex: 1 }}
    >
      <Box
        sx={{
          bgcolor: cardBg,
          border: `1px solid ${borderColor}`,
          borderRadius: 3,
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: isLight
              ? `0 24px 60px rgba(7,31,116,0.10)`
              : `0 24px 60px rgba(0,0,0,0.40)`,
          },
        }}
      >
     
        <Box
          sx={{
            height: 3,
            background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
          }}
        />


        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            px: 3,
            pt: 3,
            pb: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Ubuntu', 'Roboto'",
              fontSize: "2.8rem",
              fontWeight: 800,
              lineHeight: 1,
              color: project.accentColor,
              opacity: 0.18,
              letterSpacing: "-0.04em",
              userSelect: "none",
            }}
          >
            {project.number}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="flex-end" gap={0.5}>
            {project.chips.map((chipKey, i) => (
              <Chip
                key={chipKey}
                label={t(chipKey, { defaultValue: project.chipDefaults[i] })}
                size="small"
                sx={{
                  bgcolor: project.accentColorDim,
                  border: `1px solid ${project.accentBorder}`,
                  color: project.accentColor,
                  fontWeight: 600,
                  fontFamily: "'Ubuntu', 'Roboto'",
                  fontSize: "0.7rem",
                  letterSpacing: "0.04em",
                }}
              />
            ))}
          </Stack>
        </Box>

    
        <Box
          sx={{
            px: 4,
            py: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 180,
            position: "relative",
          }}
        >
   
          <Box
            sx={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${project.accentColor}22 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <Box
            component="img"
            src={project.image}
            alt={project.key}
            sx={{
              width: { xs: "55%", sm: "45%", md: "55%" },
              maxWidth: 200,
              height: "auto",
              position: "relative",
              zIndex: 1,
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))",
            }}
          />
        </Box>

   
        <Box sx={{ mx: 3, height: "1px", bgcolor: borderColor }} />

   
        <Box
          sx={{
            px: { xs: 3, sm: 4 },
            pt: 3,
            pb: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            textAlign: isFarsi ? "right" : "left",
          }}
        >
       
          <Box
            component="img"
            src={isLight ? project.logoLight : project.logoDark}
            alt={`${project.key} logo`}
            sx={{ width: 140, height: "auto", mb: 2.5 }}
          />

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Ubuntu', 'Roboto'",
              fontWeight: 300,
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: subColor,
              lineHeight: 1.85,
              flexGrow: 1,
            }}
          >
            {t(project.descKey, { defaultValue: project.descDefault })}
          </Typography>
        </Box>

      
        <Box sx={{ px: { xs: 3, sm: 4 }, pb: 3.5 }}>
          <Button
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            endIcon={<ArrowOutwardIcon fontSize="small" />}
            sx={{
              color: project.accentColor,
              fontFamily: "'Ubuntu', 'Roboto'",
              fontWeight: 600,
              fontSize: "0.85rem",
              textTransform: "none",
              px: 0,
              letterSpacing: "0.02em",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "0%",
                height: "1.5px",
                bgcolor: project.accentColor,
                transition: "width 0.25s ease",
              },
              "&:hover::after": { width: "100%" },
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            {t(project.readMoreKey, { defaultValue: project.readMoreDefault })}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}