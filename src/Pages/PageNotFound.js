import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Box, Card, CardContent } from "@mui/material";
import { FaArrowCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import parse from "html-react-parser";
import GitHubIcon from "@mui/icons-material/GitHub";

const HeaderText = styled(Typography)(() => ({
	fontFamily: "Unbounded",
	textTransform: "uppercase",
	letterSpacing: "2px"
}));

export default function App() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const links = [
		{ href: "https://blog.smswithoutborders.com/", label: t("navbar.link1") },
		{ href: "https://docs.smswithoutborders.com/", label: t("navbar.link5") },
		{ href: "https://relay.smswithoutborders.com/", label: t("navbar.link2") },
		{ href: "https://github.com/deku-messaging/Deku-SMS-Android", label: t("navbar.link3") },
		{ href: "/privacy-policy", label: t("navbar.link4") }
	];

	const cardColors = [
		{ bg: "#dce7f5ff", text: "#2177e9ff" },
		{ bg: "#dce7f5ff", text: "#2177e9ff" }
	];

	const projects = [
		{
			title: t("project1.title"),
			image: "/Dekusms.png",
			logo: "/RelaySms.png",
			keyPoints: ["React", "Responsive"],
			description: t("project1.description"),
			subHeaders: ["Feature 1"]
		},
		{
			title: t("project2.title"),
			image: "/Relaysms.png",
			logo: "/DekuSms.png",
			keyPoints: ["API Integration", "Animations"],
			description: t("project2.description"),
			subHeaders: ["Feature A"]
		}
	];

	return (
		<>
			<AppBar
				position="static"
				color="default"
				sx={{
					width: "100%",
					bgcolor: "#f9f9f9",
					color: "#000158",
					boxShadow: 0,
					py: { xs: 1, sm: 2 },
					direction: isFarsi ? "rtl" : "ltr"
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						px: { xs: 2, sm: 4, md: 6 }
					}}
				>
					<Box display="flex" alignItems="center"></Box>

					<Box display="flex" alignItems="center" gap={{ xs: 1, sm: 2, md: 3 }}>
						{links.map((link, i) => (
							<Button
								key={i}
								href={link.href}
								color="inherit"
								sx={{
									fontFamily: "'Unbounded', 'Mona Sans'",
									textTransform: "none",
									fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem", lg: "1.4rem" },
									transition: "all 0.3s ease",
									"&:hover": {
										color: "#FF8614",
										transform: "scale(1.08)"
									}
								}}
							>
								{link.label}
							</Button>
						))}

						<Button
							href="https://github.com/deku-messaging/Deku-SMS-Android"
							color="inherit"
							sx={{ minWidth: "auto", p: 0 }}
							aria-label="GitHub"
						>
							<GitHubIcon sx={{ fontSize: { xs: 22, sm: 26, md: 30, lg: 34 } }} />
						</Button>

						<LanguageSwitcher />
					</Box>
				</Toolbar>
			</AppBar>

			{/* ================Landing Section===================== */}
			<Box
				id="home"
				sx={{
					minHeight: "60vh",
					fontFamily: "'Unbounded', 'Mona Sans'",

					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",
					px: { xs: 2, sm: 4, md: 6 },
					pt: { xs: 4, sm: 6, md: 8 },
					pb: { xs: 4, sm: 6, md: 8 },
					bgcolor: "#f9f9f9"
				}}
			>
				<Box
					component="img"
					src="/SWOB-Default.png"
					alt="Normal Image"
					sx={{
						width: { xs: "100%", sm: "70%", md: "40%" },
						height: "auto",
						mb: { xs: 3, sm: 4, md: 5 }
					}}
				/>

				<Typography
					sx={{
						fontFamily: "'Mona Sans', 'Unbounded'",
						color: "#000158",
						maxWidth: 800,
						width: "100%",
						textAlign: isFarsi ? "right" : "left",
						fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.5rem" },
						mb: 4,
						fontWeight: 600,
						letterSpacing: 1,
						textTransform: "uppercase"
					}}
				>
					{t("About.About-title")}
				</Typography>
			</Box>

			{/* =====================================About Section=================================================== */}
			<Box
				id="about"
				sx={{
					fontFamily: "'Unbounded', 'Mona Sans'",
					fontWeight: 400,
					color: "#FF8614",
					backgroundColor: "#000158",
					py: { xs: 8, md: 12 },
					px: { xs: 3, md: 12 },
					direction: isFarsi ? "rtl" : "ltr",
					textAlign: "center",
					overflow: "visible"
				}}
			>
				<HeaderText
					sx={{
						fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.5rem" },
						mb: 4,
						fontWeight: 600,
						letterSpacing: 1,
						color: "#FF8614",
						textTransform: "uppercase"
					}}
				>
					{t("About.About-title")}
				</HeaderText>

				<Grid container spacing={4} justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								color: "#FFFFFF",
								maxWidth: 500,
								margin: "0 auto",
								fontWeight: 300
							}}
						>
							{t("About.description")}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								color: "#FFFFFF",
								maxWidth: 500,
								margin: "0 auto",
								fontWeight: 300,
								mb: 2
							}}
						>
							{t("About.description1")}
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								color: "#FFFFFF",
								maxWidth: 500,
								margin: "0 auto",
								fontWeight: 300
							}}
						>
							{t("About.description2")}
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Box
							sx={{
								fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
								lineHeight: 2,
								color: "#FFFFFF",
								maxWidth: 900,
								margin: "2rem auto 0 auto",
								textAlign: "justify",
								fontWeight: 300
							}}
						>
							{parse(t("About.description3"))}
						</Box>
					</Grid>
				</Grid>
			</Box>

			{/*============================== Projects Section ==================================*/}

			{/*============================== Projects Section ==================================*/}
			<Box
				sx={{
					minHeight: "80vh",
					py: 8,
					px: { xs: 2, sm: 4, md: 6 },
					fontFamily: "'Unbounded', 'Mona Sans', sans-serif",
					bgcolor: "#f5f5f7"
				}}
			>
				{/* Section Title */}
				<Typography
					variant="h4"
					align="center"
					gutterBottom
					sx={{
						fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3rem" },
						mb: 4,
						fontWeight: 700,
						letterSpacing: 1,
						color: "#1f0497",
						textTransform: "uppercase"
					}}
				>
					{t("About.About-title")}
				</Typography>

				<Typography
					variant="h6"
					align="center"
					gutterBottom
					sx={{
						fontSize: { xs: "1rem", sm: "1.1rem", md: "1.5rem" },
						mb: 8,
						fontWeight: 400,
						letterSpacing: 1,
						color: "#1f0497",
						maxWidth: 900,
						margin: "0 auto"
					}}
				>
					{t("About.description")}
				</Typography>

				{/* Projects Grid */}
				<Grid container spacing={6} justifyContent="center">
					{projects.map((proj, idx) => {
						const color = cardColors[idx % cardColors.length];
						return (
							<Grid
								item
								key={idx}
								xs={12}
								sm={6}
								md={5}
								lg={4}
								sx={{ display: "flex", justifyContent: "center" }}
							>
								<Card
									sx={{
										width: "100%",
										maxWidth: 500,
										display: "flex",
										flexDirection: "column",
										borderRadius: 3,
										boxShadow: 3,
										overflow: "hidden",
										bgcolor: color.bg,
										"&:hover": {
											transform: "translateY(-10px)",
											boxShadow: "0 16px 40px rgba(0,0,0,0.2)"
										},
										transition: "all 0.35s ease"
									}}
								>
									{/* Image section with overlay and subtle hover effect */}
									<Box
										sx={{
											position: "relative",
											width: "100%",
											pt: "56.25%", // 16:9 aspect ratio
											overflow: "hidden",
											borderRadius: 3, // rounded corners
											boxShadow: 2, // subtle shadow
											transition: "transform 0.3s ease, box-shadow 0.3s ease",
											"&:hover": {
												transform: "scale(1.03)",
												boxShadow: 6
											}
										}}
									>
										<Box
											component="img"
											src={proj.image}
											alt={`${proj.title} Preview`}
											sx={{
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												objectFit: "cover",
												filter: "brightness(0.95)", // slightly darker for better contrast with overlay/text
												transition: "filter 0.3s ease"
											}}
										/>

										{/* Optional overlay text or badge */}
										<Box
											sx={{
												position: "absolute",
												bottom: 8,
												left: 8,
												bgcolor: "rgba(0,0,0,0.6)",
												color: "#fff",
												px: 2,
												py: 0.5,
												borderRadius: 1,
												fontSize: "0.85rem",
												fontWeight: 500
											}}
										>
											Featured
										</Box>
									</Box>

									<CardContent sx={{ px: 3, py: 2 }}>
										<Box sx={{ display: "flex", justifyContent: "start", mb: 2 }}>
											<Box
												component="img"
												src={proj.logo}
												alt={`${proj.title} Logo`}
												sx={{
													width: 180,
													height: 50,
													objectFit: "contain",
													borderRadius: 1
												}}
											/>
										</Box>

										{/* Description */}
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{
												mb: 2,
												fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
												lineHeight: 1.6,
												textAlign: "center"
											}}
										>
											{proj.description}
										</Typography>

										{/* Subheaders / Read More */}
										{proj.subHeaders?.map((sub, i) => (
											<Box
												component="a"
												href={sub}
												target="_blank"
												rel="noopener noreferrer"
												key={i}
												sx={{
													display: "inline-flex",
													alignItems: "center",
													gap: 1,
													color: color.text,
													fontWeight: 500,
													fontSize: { xs: "0.95rem", sm: "1rem" },
													textDecoration: "none",
													justifyContent: "center",
													mt: 1,
													"&:hover": { color: "#ff8614" }
												}}
											>
												{t("project2.read_more")}
												<FaArrowCircleRight />
											</Box>
										))}
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</>
	);
}
