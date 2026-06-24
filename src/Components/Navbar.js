import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  Divider,
  Tooltip,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme as useAppTheme } from "../Context/ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useAppTheme();
  const theme = useTheme();
  const isFarsi = i18n.language === "fa";
  const isLight = theme.palette.mode === "light";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drawerSubOpen, setDrawerSubOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (href) =>
    typeof window !== "undefined" && window.location.pathname === href;

  const links = [
    // {
    //   label: t("navbar.link6", "Features"),
    //   href: "/Features",
    //   external: false,
    // },
    {
      label: t("navbar.link5", "Documentation"),
      href: "https://docs.smswithoutborders.com/",
      external: true,
    },
    {
      label: t("navbar.link1", "Blog"),
      href: "https://blog.smswithoutborders.com/",
      external: true,
    },
    {
      label: t("navbar.products", "Products"),
      subLinks: [
        {
          label: t("navbar.link2", "RelaySMS"),
          href: "https://relay.smswithoutborders.com/",
          external: true,
        },
        {
          label: t("navbar.link3", "DekuSMS"),
          href: "https://Dekusms.com/",
          external: true,
        },
      ],
    },
    {
      label: t("navbar.link4", "Privacy Policy"),
      href: "/privacy-policy",
      external: false,
    },
    {
      label: t("navbar.link7", "Research"),
      href: "/research",
      external: false,
    },
  ];

  const textColor = theme.palette.text.primary;
  const hoverColor = theme.palette.secondary.main;
  const iconHoverBg = isLight
    ? "rgba(255,134,20,0.09)"
    : "rgba(255,134,20,0.13)";
  const currentLocale = isFarsi ? "fa-IR" : i18n.language;

  const navLinkSx = (active) => ({
    position: "relative",
    fontSize: "0.78rem",
    fontWeight: active ? 700 : 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    textDecoration: "none",
    px: "14px",
    py: "12px",
    color: active ? hoverColor : textColor,
    whiteSpace: "nowrap",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "color 0.2s ease",
    "&:hover": { color: hoverColor },
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: -1,
      left: "14px",
      width: active ? "calc(100% - 28px)" : "0%",
      height: "1.5px",
      background: hoverColor,
      transition: "width 0.2s ease",
    },
    "&:hover::after": { width: "calc(100% - 28px)" },
  });

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1300,
          direction: isFarsi ? "rtl" : "ltr",
          bgcolor: "background.paper",
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.12)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Newspaper dateline strip */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            px: "32px",
            py: "5px",
            bgcolor: "text.primary",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.72rem",
              letterSpacing: "0.05em",
              color: isLight ? "#FAF6EE" : "#0E0C07",
            }}
          >
            {new Date().toLocaleDateString(currentLocale, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}
          >
            <Box
              sx={{
                "& .MuiButton-root": { color: isLight ? "#FAF6EE" : "#0E0C07" },
                "& .MuiButton-root:hover": {
                  bgcolor: "rgba(255,255,255,0.10)",
                },
              }}
            >
              <LanguageSwitcher />
            </Box>
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{ color: isLight ? "#FAF6EE" : "#0E0C07", p: 0.5 }}
            >
              {isLight ? (
                <DarkModeIcon sx={{ fontSize: 15 }} />
              ) : (
                <LightModeIcon sx={{ fontSize: 15 }} />
              )}
            </IconButton>
            <Typography
              sx={{
                fontSize: "0.72rem",
                // letterSpacing: "0.08em",
                // fontStyle: "italic",
                color: isLight ? "#FAF6EE" : "#0E0C07",
              }}
            >
              {t("navbar.tagline", {
                defaultValue: "Open Source · Privacy · Freedom",
              })}
            </Typography>
          </Box>
        </Box>

        {/* Main masthead nav */}
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: "32px" },
            py: "12px",
            mx: "auto",
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
              "&:hover img": { opacity: 0.8 },
            }}
          >
            <Box
              component="img"
              src={
                isLight ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"
              }
              alt="SMSWithoutBorders"
              sx={{ height: { xs: 26, md: 30 }, display: "block" }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
              ml: "auto",
              flexShrink: 0,
            }}
          >
            <Box
              component="nav"
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
              }}
            >
              {links.map((link, i) => {
                if (link.subLinks) {
                  return (
                    <Box
                      key={i}
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "flex-start",
                        "&:hover .nav-dropdown, &:focus-within .nav-dropdown": {
                          opacity: 1,
                          pointerEvents: "all",
                          transform: "translateX(-50%) translateY(0)",
                        },
                      }}
                    >
                      <Box
                        component="button"
                        sx={{
                          ...navLinkSx(false),
                          background: "none",
                          border: "none",
                          gap: "6px",
                        }}
                      >
                        {link.label}
                        <KeyboardArrowDownIcon
                          sx={{ fontSize: 15, mt: "1px", opacity: 0.7 }}
                        />
                      </Box>

                      <Box
                        className="nav-dropdown"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%) translateY(-8px)",
                          opacity: 0,
                          pointerEvents: "none",
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                          zIndex: 2100,
                          pt: "14px",
                        }}
                      >
                        <Box
                          sx={{
                            borderRadius: "0px",
                            p: "6px",
                            minWidth: 170,
                            bgcolor: "background.paper",
                            boxShadow: theme.shadows[8],
                          }}
                        >
                          {link.subLinks.map((sub, si) => (
                            <Box
                              key={si}
                              component="a"
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                                px: "14px",
                                py: "9px",
                                fontSize: "0.85rem",
                                textDecoration: "none",
                                whiteSpace: "nowrap",
                                color: textColor,
                                transition:
                                  "background 0.15s ease, color 0.15s ease",
                                "&:hover": {
                                  bgcolor: isLight
                                    ? "rgba(7,31,116,0.06)"
                                    : "rgba(100,130,255,0.12)",
                                  color: hoverColor,
                                },
                              }}
                            >
                              {sub.label}
                              <NorthEastIcon
                                sx={{ fontSize: 10, opacity: 0.5 }}
                              />
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  );
                }

                return (
                  <Box
                    key={i}
                    component="a"
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    sx={{ ...navLinkSx(isActive(link.href)), gap: "4px" }}
                  >
                    {link.label}
                    {link.external && (
                      <NorthEastIcon
                        sx={{ fontSize: 10, opacity: 0.55, mb: "1px" }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>

            <Box
              component="a"
              href="https://github.com/smswithoutborders"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.78rem",
                fontFamily: "'Ubuntu', sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: textColor,
                "&:hover": { color: hoverColor },
              }}
            >
              {t("footer.github", { defaultValue: "GitHub" })}
              <NorthEastIcon sx={{ fontSize: 10, opacity: 0.55 }} />
            </Box>
          </Box>{" "}
          {/* end right group */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: "4px",
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen((p) => !p)}
              size="small"
              sx={{
                color: textColor,
                bgcolor: isLight
                  ? "rgba(7,31,116,0.07)"
                  : "rgba(255,255,255,0.08)",
                borderRadius: "10px",
                p: "7px",
                "&:hover": { bgcolor: iconHoverBg },
                transition: "all 0.2s",
              }}
            >
              {drawerOpen ? (
                <CloseIcon sx={{ fontSize: 19 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 19 }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor={isFarsi ? "left" : "right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 275,
            bgcolor: "background.paper",
            borderLeft: `1px solid ${theme.palette.divider}`,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            py: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component="img"
            src={
              isLight ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"
            }
            alt="SMSWithoutBorders"
            sx={{ height: 26 }}
          />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            size="small"
            sx={{ color: textColor, p: "5px" }}
          >
            <CloseIcon sx={{ fontSize: 17 }} />
          </IconButton>
        </Box>

        <Box sx={{ px: 1.5, pt: 1, pb: 1, flex: 1, overflowY: "auto" }}>
          <List disablePadding>
            {links.map((link, i) => (
              <React.Fragment key={i}>
                {link.subLinks ? (
                  <>
                    <ListItemButton
                      onClick={() => setDrawerSubOpen((p) => !p)}
                      sx={{
                        borderRadius: "10px",
                        px: 1.5,
                        py: 0.9,
                        "&:hover": { bgcolor: "action.hover" },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          fontSize: "0.95rem",
                          color: textColor,
                        }}
                      />
                      {drawerSubOpen ? (
                        <ExpandLess
                          sx={{ color: textColor, opacity: 0.4, fontSize: 17 }}
                        />
                      ) : (
                        <ExpandMore
                          sx={{ color: textColor, opacity: 0.4, fontSize: 17 }}
                        />
                      )}
                    </ListItemButton>

                    <Collapse in={drawerSubOpen} timeout="auto" unmountOnExit>
                      <List disablePadding sx={{ pl: 1.5 }}>
                        {link.subLinks.map((sub, si) => (
                          <ListItem key={si} disablePadding>
                            <ListItemButton
                              component="a"
                              href={sub.href}
                              onClick={() => setDrawerOpen(false)}
                              sx={{
                                borderRadius: "9px",
                                px: 1.5,
                                py: 0.8,
                                "&:hover": { bgcolor: "action.hover" },
                              }}
                            >
                              <ListItemText
                                primary={sub.label}
                                primaryTypographyProps={{
                                  fontSize: "0.88rem",
                                  color: textColor,
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      sx={{
                        borderRadius: "10px",
                        px: 1.5,
                        py: 0.9,
                        bgcolor: isActive(link.href)
                          ? "action.selected"
                          : "transparent",
                        "&:hover": { bgcolor: "action.hover" },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          fontSize: "0.95rem",
                          fontWeight: isActive(link.href) ? 600 : 400,
                          color: isActive(link.href) ? hoverColor : textColor,
                        }}
                      />
                      {isActive(link.href) && (
                        <Box
                          sx={{
                            borderRadius: "50%",
                            bgcolor: hoverColor,
                            width: 6,
                            height: 6,
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>

        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            py: 1.5,
          }}
        >
          <Box
            component="a"
            href="https://github.com/smswithoutborders"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.82rem",
              textDecoration: "none",
              color: textColor,
              "&:hover": { color: hoverColor },
            }}
          >
            {t("footer.github", { defaultValue: "GitHub" })}{" "}
            <NorthEastIcon sx={{ fontSize: 10 }} />
          </Box>

          <LanguageSwitcher />

          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{ color: textColor }}
          >
            {isLight ? (
              <DarkModeIcon sx={{ fontSize: 18 }} />
            ) : (
              <LightModeIcon sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}
