import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const Footer = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa";

	return (
		<Box
			sx={{
				backgroundColor: "black",
				color: "#ffffff",
				py: 4,
				mt: 4,
				width: "100%",
				direction: isRtl ? "rtl" : "ltr"
			}}
		>
			<Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, lg: 12 } }}>
				<Grid container spacing={4} justifyContent="space-between">
					<Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
						<Typography
							variant="h6"
							sx={{
								mb: 2,
								fontWeight: "bold",
								color: "#f0a500",
								fontSize: "1rem"
							}}
						>
							{t("footer.quickLinks")}
						</Typography>
						<Link
							href="https://blog.smswithoutborders.com/"
							color="inherit"
							underline="none"
							sx={{
								display: "block",
								mb: 1,
								fontSize: "0.875rem",
								"&:hover": {
									color: "#f0a500",
									textDecoration: "underline"
								}
							}}
						>
							{t("footer.blog")}
						</Link>
						<Link
							href="https://docs.smswithoutborders.com/"
							color="inherit"
							underline="none"
							sx={{
								display: "block",
								mb: 1,
								fontSize: "0.875rem",
								"&:hover": {
									color: "#f0a500",
									textDecoration: "underline"
								}
							}}
						>
							{t("footer.documentation")}
						</Link>
						<Link
							href="https://smswithoutborders.com/privacy-policy"
							color="inherit"
							underline="none"
							sx={{
								display: "block",
								mb: 1,
								fontSize: "0.875rem",
								"&:hover": {
									color: "#f0a500",
									textDecoration: "underline"
								}
							}}
						>
							{t("footer.privacyPolicy")}
						</Link>
					</Grid>

					<Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
						<Typography
							variant="h6"
							sx={{
								mb: 2,
								fontWeight: "bold",
								color: "#f0a500",
								fontSize: "1rem"
							}}
						>
							{t("footer.community")}
						</Typography>
						<Box>
							<IconButton
								href="https://github.com/smswithoutborders"
								aria-label="GitHub"
								sx={{ color: "#ffffff" }}
							>
								<FaGithub size={20} />
							</IconButton>
							<IconButton
								href="https://twitter.com/RelaySMS"
								aria-label="Twitter"
								sx={{ color: "#ffffff" }}
							>
								<FaTwitter size={20} />
							</IconButton>
							<IconButton
								href="https://t.me/deku_sms"
								aria-label="Telegram"
								sx={{ color: "#ffffff" }}
							>
								<FaTelegram size={20} />
							</IconButton>
						</Box>
					</Grid>

					<Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
						<Typography
							variant="h6"
							sx={{
								mb: 2,
								fontWeight: "bold",
								color: "#f0a500",
								fontSize: "1rem"
							}}
						>
							{t("footer.downloads")}
						</Typography>
						<Link
							href="/download/android"
							color="inherit"
							underline="none"
							sx={{
								display: "block",
								mb: 1,
								fontSize: "0.875rem",
								"&:hover": {
									color: "#f0a500",
									textDecoration: "underline"
								}
							}}
						>
							{t("footer.relaySMS")}
						</Link>
						<Link
							href="/download/ios"
							color="inherit"
							underline="none"
							sx={{
								display: "block",
								mb: 1,
								fontSize: "0.875rem",
								"&:hover": {
									color: "#f0a500",
									textDecoration: "underline"
								}
							}}
						>
							{t("footer.dekuSMS")}
						</Link>
					</Grid>
				</Grid>

				<Divider sx={{ my: 3, borderColor: "#424242" }} />

				<Grid container spacing={4} justifyContent="space-between" alignItems="center">
					<Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "left" }}>
						<Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
							{t("footer.copyright")}
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "right" }}>
						<LanguageSwitcher />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
