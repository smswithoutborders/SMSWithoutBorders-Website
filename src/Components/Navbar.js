import React, { useState, useEffect } from "react";
import {
	Box,
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
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";


const GlobalStyles = () => (
	<style>{`
		@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&family=Syne:wght@600;700;800&display=swap');

		/* ─ nav link underline ─ */
		.swob-link {
			position: relative;
			font-family: 'DM Sans', sans-serif;
			font-size: 0.875rem;
			font-weight: 400;
			letter-spacing: 0.01em;
			text-decoration: none;
			padding: 5px 0;
			transition: color 0.2s ease;
			white-space: nowrap;
			cursor: pointer;
			background: none;
			border: none;
		}
		.swob-link::after {
			content: '';
			position: absolute;
			bottom: -1px;
			left: 0;
			width: 0%;
			height: 2px;
			background: linear-gradient(90deg, #FF8614, #ffb347);
			border-radius: 2px;
			transition: width 0.25s cubic-bezier(.4,0,.2,1);
		}
		.swob-link:hover::after,
		.swob-link.swob-active::after { width: 100%; }
		.swob-link.swob-active { font-weight: 600; }

		/* ─ dropdown ─ */
		.swob-has-dropdown { position: relative; }
		.swob-dropdown-panel {
			position: absolute;
			top: calc(100% + 14px);
			left: 50%;
			transform: translateX(-50%) translateY(-8px);
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.2s ease, transform 0.2s ease;
			z-index: 2100;
		}
		.swob-has-dropdown:hover .swob-dropdown-panel,
		.swob-has-dropdown:focus-within .swob-dropdown-panel {
			opacity: 1;
			pointer-events: all;
			transform: translateX(-50%) translateY(0);
		}
		.swob-dropdown-box {
			border-radius: 14px;
			padding: 6px;
			min-width: 170px;
			box-shadow: 0 24px 64px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08);
		}
		.swob-dropdown-item {
			display: block;
			padding: 9px 14px;
			border-radius: 9px;
			font-family: 'DM Sans', sans-serif;
			font-size: 0.85rem;
			text-decoration: none;
			transition: background 0.15s ease, color 0.15s ease;
			white-space: nowrap;
		}

		/* ─ Research pill CTA ─ */
		.swob-research-btn {
			font-family: 'DM Sans', sans-serif;
			font-size: 0.82rem;
			font-weight: 600;
			letter-spacing: 0.02em;
			text-decoration: none;
			display: inline-flex;
			align-items: center;
			gap: 5px;
			padding: 7px 16px;
			border-radius: 100px;
			background: linear-gradient(135deg, #FF8614 0%, #e85d00 100%);
			color: #fff;
			border: none;
			cursor: pointer;
			box-shadow: 0 2px 14px rgba(255,134,20,0.38);
			transition: box-shadow 0.2s ease, transform 0.15s ease, opacity 0.15s;
			white-space: nowrap;
		}
		.swob-research-btn:hover {
			box-shadow: 0 4px 22px rgba(255,134,20,0.52);
			transform: translateY(-1px);
		}

		/* ─ drawer item stagger ─ */
		@keyframes swobFadeUp {
			from { opacity: 0; transform: translateY(8px); }
			to   { opacity: 1; transform: translateY(0); }
		}
		.swob-drawer-row {
			animation: swobFadeUp 0.22s ease both;
		}

		/* ─ icon button ring on hover ─ */
		.swob-icon-btn {
			transition: color 0.2s, background 0.2s !important;
		}
	`}</style>
);

export default function Navbar() {
	const { t, i18n } = useTranslation();
	const { mode, toggleTheme } = useTheme();
	const isFarsi = i18n.language === "fa";
	const isLight = mode === "light";

	const [drawerOpen, setDrawerOpen]   = useState(false);
	const [scrolled, setScrolled]       = useState(false);
	const [drawerSubOpen, setDrawerSubOpen] = useState(false);

	useEffect(() => {
		const fn = () => setScrolled(window.scrollY > 36);
		window.addEventListener("scroll", fn, { passive: true });
		return () => window.removeEventListener("scroll", fn);
	}, []);

	const isActive = (href) =>
		typeof window !== "undefined" && window.location.pathname === href;

	const links = [
		{ label: t("navbar.link6",    "Features"),        href: "/Features" },
		{ label: t("navbar.link5",    "Documentation"),   href: "https://docs.smswithoutborders.com/" },
		{ label: t("navbar.link1",    "Blog"),             href: "https://blog.smswithoutborders.com/" },
		{
			label: t("navbar.products", "Products"),
			subLinks: [
				{ label: t("navbar.link2", "RelaySMS"), href: "https://relay.smswithoutborders.com/" },
				{ label: t("navbar.link3", "DekuSMS"),  href: "https://Dekusms.com/" },
			],
		},
		{ label: t("navbar.link7", "Research"),           href: "/research" },
		{ label: t("navbar.link4", "Privacy Policy"),     href: "/privacy-policy" },
	];

	const bg = scrolled
		? isLight ? "rgba(248,251,255,0.88)" : "rgba(5,10,38,0.88)"
		: "transparent";

	const border = scrolled
		? isLight ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.07)"
		: "1px solid transparent";

	const textColor   = isLight ? "#071f74" : "#dde6ff";
	const hoverColor  = "#FF8614";
	const dropBg      = isLight ? "#ffffff"  : "#0b1340";
	const dropHover   = isLight ? "#f0f5ff"  : "#17236b";
	const iconHoverBg = isLight ? "rgba(255,134,20,0.09)" : "rgba(255,134,20,0.13)";

	return (
		<>
			<GlobalStyles />

			<Box
				component="header"
				sx={{
					position: "fixed",
					top: { xs: 0, md: "14px" },
					left: "50%",
					transform: "translateX(-50%)",
					width: { xs: "100%", md: "calc(100% - 56px)" },
					maxWidth: 1800,
					zIndex: 1300,
					direction: isFarsi ? "rtl" : "ltr",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						px: { xs: 2, md: "20px" },
						py: { xs: "10px", md: "10px" },
						background: bg,
						border,
						borderRadius: { xs: 0, md: "18px" },
						backdropFilter: scrolled ? "blur(20px) saturate(200%)" : "none",
						WebkitBackdropFilter: scrolled ? "blur(20px) saturate(200%)" : "none",
						boxShadow: scrolled
							? isLight
								? "0 2px 24px rgba(7,31,116,0.08), 0 1px 0 rgba(255,255,255,0.9) inset"
								: "0 2px 28px rgba(0,0,0,0.35)"
							: "none",
						transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
					}}
				>
					<Box
						component="a"
						href="/"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1,
							textDecoration: "none",
							flexShrink: 0,
							"&:hover img": { opacity: 0.85, transition: "opacity 0.2s" },
						}}
					>
						{/* <Box
							component="img"
							src={isLight ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"}
							alt="SMSWithoutBorders"
							sx={{ height: { xs: 26, md: 30 }, display: "block", transition: "opacity 0.2s" }}
						/> */}
					</Box>

					<Box
						component="nav"
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							gap: "16px",
						}}
					>
						{links.map((link, i) => {
							if (link.subLinks) {
								return (
									<Box key={i} className="swob-has-dropdown" sx={{ display: "flex", alignItems: "center" }}>
										<Box
											component="button"
											className="swob-link"
											sx={{
												color: textColor,
												px: "14px",
												display: "flex",
												alignItems: "center",
												gap: "2px",
												"&:hover": { color: hoverColor },
											}}
										>
											{link.label}
											<KeyboardArrowDownIcon sx={{ fontSize: 15, mt: "1px", opacity: 0.7 }} />
										</Box>

										<Box className="swob-dropdown-panel">
											<Box className="swob-dropdown-box" sx={{ bgcolor: dropBg }}>
												{link.subLinks.map((sub, si) => (
													<Box
														key={si}
														component="a"
														href={sub.href}
														className="swob-dropdown-item"
														sx={{
															color: textColor,
															"&:hover": { bgcolor: dropHover, color: hoverColor },
														}}
													>
														{sub.label}
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
									className={`swob-link${isActive(link.href) ? " swob-active" : ""}`}
									sx={{
										color: isActive(link.href) ? hoverColor : textColor,
										px: "14px",
										"&:hover": { color: hoverColor },
									}}
								>
									{link.label}
								</Box>
							);
						})}
					</Box>

					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							gap: "6px",
							flexShrink: 0,
						}}
					>
						<Box
							component="a"
							href="/research"
							className="swob-research-btn"
						>
							📄 {t("navbar.link7", "Research")}
						</Box>

						<Box sx={{ width: "1px", height: 20, bgcolor: isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)", mx: 0.5 }} />

						<Tooltip title="GitHub" arrow>
							<IconButton
								component="a"
								href="https://github.com/smswithoutborders"
								target="_blank"
								rel="noopener noreferrer"
								size="small"
								className="swob-icon-btn"
								sx={{ color: textColor, "&:hover": { color: hoverColor, bgcolor: iconHoverBg } }}
							>
								<GitHubIcon sx={{ fontSize: 19 }} />
							</IconButton>
						</Tooltip>

						<LanguageSwitcher />

						<Tooltip title={isLight ? "Switch to dark" : "Switch to light"} arrow>
							<IconButton
								onClick={toggleTheme}
								size="small"
								className="swob-icon-btn"
								sx={{ color: textColor, "&:hover": { color: hoverColor, bgcolor: iconHoverBg } }}
							>
								{isLight
									? <DarkModeIcon sx={{ fontSize: 18 }} />
									: <LightModeIcon sx={{ fontSize: 18 }} />}
							</IconButton>
						</Tooltip>
					</Box>

				
					<Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: "4px" }}>
						<IconButton
							onClick={toggleTheme}
							size="small"
							sx={{ color: textColor }}
						>
							{isLight ? <DarkModeIcon sx={{ fontSize: 18 }} /> : <LightModeIcon sx={{ fontSize: 18 }} />}
						</IconButton>

						<IconButton
							onClick={() => setDrawerOpen((p) => !p)}
							size="small"
							sx={{
								color: textColor,
								bgcolor: isLight ? "rgba(7,31,116,0.07)" : "rgba(255,255,255,0.08)",
								borderRadius: "10px",
								p: "7px",
								"&:hover": { bgcolor: iconHoverBg },
								transition: "all 0.2s",
							}}
						>
							{drawerOpen ? <CloseIcon sx={{ fontSize: 19 }} /> : <MenuIcon sx={{ fontSize: 19 }} />}
						</IconButton>
					</Box>
				</Box>
			</Box>

			{/*  Moble drawer starts here */}
			<Drawer
				anchor={isFarsi ? "left" : "right"}
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				PaperProps={{
					sx: {
						width: 275,
						background: isLight
							? "linear-gradient(170deg, #f7fbff 0%, #edf1fb 100%)"
							: "linear-gradient(170deg, #07102a 0%, #0c1740 100%)",
						borderLeft: `1px solid ${isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.06)"}`,
						display: "flex",
						flexDirection: "column",
					}
				}}
			>
			
				<Box sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					px: 2.5,
					py: 2,
					borderBottom: `1px solid ${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"}`,
				}}>
					<Box
						component="img"
						src={isLight ? "/Images/SWOB-Default.png" : "/Images/SWOB-White.png"}
						alt="SMSWithoutBorders"
						sx={{ height: 26 }}
					/>
					<IconButton
						onClick={() => setDrawerOpen(false)}
						size="small"
						sx={{
							color: textColor,
							bgcolor: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.07)",
							borderRadius: "8px",
							p: "5px",
						}}
					>
						<CloseIcon sx={{ fontSize: 17 }} />
					</IconButton>
				</Box>

			
				<Box sx={{ px: 2, pt: 2 }}>
					<Box
						component="a"
						href="/research"
						onClick={() => setDrawerOpen(false)}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 1,
							py: 1.3,
							borderRadius: "12px",
							background: "linear-gradient(135deg, #FF8614 0%, #e05900 100%)",
							color: "#fff",
							fontFamily: "'DM Sans', sans-serif",
							fontSize: "0.88rem",
							fontWeight: 600,
							textDecoration: "none",
							boxShadow: "0 4px 18px rgba(255,134,20,0.32)",
							transition: "opacity 0.2s, transform 0.15s",
							"&:hover": { opacity: 0.9, transform: "translateY(-1px)" },
						}}
					>
						📄 {t("navbar.researchFull", "Research & Publications")}
					</Box>
				</Box>

			
				<Box sx={{ px: 1.5, pt: 1, pb: 1, flex: 1, overflowY: "auto" }}>
					<List disablePadding>
						{links.map((link, i) => (
							<React.Fragment key={i}>
								{link.subLinks ? (
									<Box className="swob-drawer-row" style={{ animationDelay: `${i * 35}ms` }}>
										<ListItemButton
											onClick={() => setDrawerSubOpen((p) => !p)}
											sx={{
												borderRadius: "10px", px: 1.5, py: 0.9,
												"&:hover": { bgcolor: isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)" },
											}}
										>
											<ListItemText
												primary={link.label}
												primaryTypographyProps={{
													fontFamily: "'DM Sans', sans-serif",
													fontSize: "0.95rem",
													fontWeight: 400,
													color: textColor,
												}}
											/>
											{drawerSubOpen
												? <ExpandLess sx={{ color: textColor, opacity: 0.4, fontSize: 17 }} />
												: <ExpandMore  sx={{ color: textColor, opacity: 0.4, fontSize: 17 }} />}
										</ListItemButton>

										<Collapse in={drawerSubOpen} timeout="auto" unmountOnExit>
											<List disablePadding sx={{ pl: 1.5 }}>
												{link.subLinks.map((sub, si) => (
													<ListItem key={si} disablePadding>
														<ListItemButton
															component="a" href={sub.href}
															onClick={() => setDrawerOpen(false)}
															sx={{
																borderRadius: "9px", px: 1.5, py: 0.8,
																"&:hover": { bgcolor: isLight ? "rgba(255,134,20,0.07)" : "rgba(255,134,20,0.1)" },
															}}
														>
															<ListItemText
																primary={sub.label}
																primaryTypographyProps={{
																	fontFamily: "'DM Sans', sans-serif",
																	fontSize: "0.88rem",
																	color: textColor,
																}}
															/>
														</ListItemButton>
													</ListItem>
												))}
											</List>
										</Collapse>
									</Box>
								) : (
									<ListItem
										disablePadding
										className="swob-drawer-row"
										style={{ animationDelay: `${i * 35}ms` }}
									>
										<ListItemButton
											component="a" href={link.href}
											onClick={() => setDrawerOpen(false)}
											sx={{
												borderRadius: "10px", px: 1.5, py: 0.9,
												bgcolor: isActive(link.href)
													? isLight ? "rgba(7,31,116,0.07)" : "rgba(100,130,255,0.12)"
													: "transparent",
												"&:hover": { bgcolor: isLight ? "rgba(7,31,116,0.05)" : "rgba(255,255,255,0.05)" },
											}}
										>
											<ListItemText
												primary={link.label}
												primaryTypographyProps={{
													fontFamily: "'DM Sans', sans-serif",
													fontSize: "0.95rem",
													fontWeight: isActive(link.href) ? 600 : 400,
													color: isActive(link.href) ? hoverColor : textColor,
												}}
											/>
											{isActive(link.href) && (
												<Box sx={{ w: 6, h: 6, borderRadius: "50%", bgcolor: hoverColor, width: 6, height: 6, flexShrink: 0 }} />
											)}
										</ListItemButton>
									</ListItem>
								)}
							</React.Fragment>
						))}
					</List>
				</Box>

				
				<Divider sx={{ borderColor: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)" }} />
				<Box sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					px: 2.5, py: 1.5,
				}}>
					<Tooltip title="GitHub" arrow>
						<IconButton
							component="a"
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							size="small"
							sx={{
								bgcolor: "#071f74",
								color: "#fff",
								borderRadius: "8px",
								"&:hover": { bgcolor: "#FF8614" },
								transition: "all 0.2s",
							}}
						>
							<GitHubIcon sx={{ fontSize: 17 }} />
						</IconButton>
					</Tooltip>

					<LanguageSwitcher />

					<IconButton
						onClick={toggleTheme}
						size="small"
						sx={{ color: textColor, "&:hover": { color: hoverColor } }}
					>
						{isLight ? <DarkModeIcon sx={{ fontSize: 18 }} /> : <LightModeIcon sx={{ fontSize: 18 }} />}
					</IconButton>
				</Box>
			</Drawer>
		</>
	);
}