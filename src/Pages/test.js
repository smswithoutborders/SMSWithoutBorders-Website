import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Box, Grid, IconButton } from "@mui/material";
import { FaGithub, FaTwitter, FaGlobe, FaArrowCircleRight } from "react-icons/fa";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import Partner from "../Components/partner";
import backgroundRelay from "../assets/Relay.png";
import backgroundDeku from "../assets/Deku.png";

function Swob() {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.setAttribute("dir", i18n.language === "fa" ? "rtl" : "ltr");
	}, [i18n.language]);

	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "60vh",
					backgroundColor: "#020732",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
					color: "white",
					mb: "50px"
				}}
			>
				{/* ================ header section ================================== */}
				<Box>
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: "1.5em", sm: "2.5em", md: "4em" },
							letterSpacing: 12,
							textTransform: "uppercase",
							fontWeight: 900
						}}
					>
						{t("header.title")}
					</Typography>

					<Typography
						variant="h5"
						sx={{
							marginTop: "2vh",
							fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
							color: "#c08507"
						}}
					>
						{t("header.subtitle")}
					</Typography>
				</Box>
				<Box sx={{ marginTop: "20px" }}>
					<LanguageSwitcher />
				</Box>
			</Box>

			<Container
				sx={{
					maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
					marginTop: "70px",
					marginBottom: "70px",
					paddingBottom: "70px"
				}}
			>
				{/* ========= About section ============================= */}
				<Box
					sx={{
						padding: "40px 20px",
						borderRadius: "8px",
						textAlign: "center",
						height: "70vh",
						mb: "70px"
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: "1.5em", sm: "2.5em", md: "3em" },
							fontWeight: 700,
							color: "#020732",
							letterSpacing: 1.5,
							textTransform: "uppercase",
							marginBottom: "40px",
							marginTop: "40px"
						}}
					>
						{t("about.title")}
					</Typography>
					<Typography
						sx={{
							width: { xs: "100%", sm: "90%", md: "80%" },
							maxWidth: "70%",
							margin: "0 auto",
							fontSize: { xs: "1rem", md: "1.5rem" },
							lineHeight: 2
						}}
					>
						{t("about.content")}
					</Typography>
				</Box>

				<Box
					sx={{
						width: "100%",
						padding: "20px",
						borderRadius: "8px",
						mb: "70px"
					}}
				>
					{/* ========== Project Header ================ */}
					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: "1.5em", sm: "2.5em", md: "3em" },
							fontWeight: 700,
							color: "#020732",
							letterSpacing: 1.5,
							textTransform: "uppercase",
							marginBottom: "40px",
							textAlign: "center"
						}}
					>
						{t("projects.title")}
					</Typography>

					<Grid container spacing={6} justifyContent="center">
						{/* ================ RelaySMS Section =================== */}
						<Grid item xs={12} md={10} lg={8}>
							<Box
								sx={{
									display: { xs: "block", md: "flex" }, // Block on mobile and tablets, flex on desktop and laptop
									flexDirection: "column",
									width: "100%", // Ensure full width of its container
									backgroundImage: `url(${backgroundRelay})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									padding: "20px",
									borderRadius: "8px",
									boxShadow: "5px 4px 8px 5px rgba(0, 0, 0, 0.1)",
									textAlign: "left",
									color: "black",
									gap: "20px",
									mb: "30px" // Margin-bottom to separate from next project
								}}
							>
								<Typography
									variant="h4"
									sx={{
										color: "#28302f",
										fontWeight: 600,
										fontSize: { xs: "1.5em", sm: "2em", md: "2.5em" }
									}}
								>
									{t("projects.relaySMS.title")}
								</Typography>
								<Typography
									sx={{
										marginTop: "10px",
										letterSpacing: "1.5px",
										fontSize: { xs: "0.9em", sm: "1.2em", md: "1.5em" },
										lineHeight: 2
									}}
								>
									{t("projects.relaySMS.description")}
								</Typography>
								<Box
									component="a"
									href="https://relay.smswithoutborders.com/"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										display: { xs: "none", md: "inline-flex" },
										alignItems: "center",
										marginTop: "15px",
										color: "#211b1b",
										padding: "10px 20px",
										borderRadius: "4px",
										textDecoration: "none",
										fontWeight: 600,
										fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
										"&:hover": {
											color: "#a56905"
										}
									}}
								>
									{t("buttons.learn_more")} <FaArrowCircleRight style={{ marginLeft: "8px" }} />
								</Box>
								<Box sx={{ display: "flex", gap: "20px", marginTop: "10px" }}>
									<IconButton
										href="https://relay.smswithoutborders.com/"
										target="_blank"
										aria-label="Visit RelaySMS website"
									>
										<FaGlobe size={30} />
									</IconButton>
									<IconButton
										href="https://github.com/smswithoutborders/SMSWithoutBorders-App-Android"
										aria-label="GitHub repository"
									>
										<FaGithub size={30} />
									</IconButton>
									<IconButton href="https://x.com/RelaySMS" aria-label="Twitter profile">
										<FaTwitter size={30} />
									</IconButton>
								</Box>
							</Box>
						</Grid>

						{/* ================ Deku SMS Section =================== */}
						<Grid item xs={12} md={10} lg={8}>
							<Box
								sx={{
									display: { xs: "block", md: "flex" }, // Block on mobile and tablets, flex on desktop and laptop
									flexDirection: "column",
									width: "100%", // Ensure full width of its container
									backgroundImage: `url(${backgroundDeku})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									padding: "20px",
									borderRadius: "8px",
									boxShadow: "5px 4px 8px 5px rgba(0, 0, 0, 0.1)",
									textAlign: "left",
									color: "black",
									gap: "20px",
									mb: "30px" // Margin-bottom to separate from next project
								}}
							>
								<Typography
									variant="h4"
									sx={{
										color: "#28302f",
										fontWeight: 600,
										fontSize: { xs: "1.5em", sm: "2em", md: "2.5em" }
									}}
								>
									{t("projects.dekuSMS.title")}
								</Typography>
								<Typography
									sx={{
										marginTop: "10px",
										letterSpacing: "1.5px",
										fontSize: { xs: "0.9em", sm: "1.2em", md: "1.5em" },
										lineHeight: 2
									}}
								>
									{t("projects.dekuSMS.description")}
								</Typography>
								<Box
									component="a"
									href="https://deku.smswithoutborders.com/"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										display: { xs: "none", md: "inline-flex" },
										alignItems: "center",
										marginTop: "15px",
										color: "#211b1b",
										padding: "10px 20px",
										borderRadius: "4px",
										textDecoration: "none",
										fontWeight: 600,
										fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
										"&:hover": {
											color: "#a56905"
										}
									}}
								>
									{t("buttons.learn_more")} <FaArrowCircleRight style={{ marginLeft: "8px" }} />
								</Box>
								<Box sx={{ display: "flex", gap: "20px", marginTop: "10px" }}>
									<IconButton
										href="https://deku.smswithoutborders.com/"
										target="_blank"
										aria-label="Visit DekuSMS website"
									>
										<FaGlobe size={30} />
									</IconButton>
									<IconButton
										href="https://github.com/smswithoutborders/SMSWithoutBorders-App-iOS"
										aria-label="GitHub repository"
									>
										<FaGithub size={30} />
									</IconButton>
									<IconButton href="https://x.com/DekuSMS" aria-label="Twitter profile">
										<FaTwitter size={30} />
									</IconButton>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				{/* =========== partner ================ */}
				<Partner />
			</Container>
		</>
	);
}

export default Swob;
