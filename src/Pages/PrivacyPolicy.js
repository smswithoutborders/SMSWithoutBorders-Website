import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactHtmlParser from "react-html-parser";

const theme = createTheme({
	typography: {
		fontFamily: "Roboto, sans-serif"
	}
});

export default function FixedContainer() {
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init({
			duration: 1200,
			once: true
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<CssBaseline />

				<Box sx={{ pt: 8 }}>
					<Container maxWidth={false} disableGutters>
						{/* ============================================= Privacy Policy Section ===================================================== */}
						<Box
							sx={{
								minHeight: "70vh",
								py: { xs: 2, sm: 4, md: 5 },
								overflow: "hidden",
								textAlign: "center",
								px: { xs: 0.1, sm: 1, md: 15 },
								margin: { xs: 1, sm: 2, md: 1 }
							}}
							data-aos="fade-up"
						>
							<Box sx={{ mt: 6, px: { xs: 1, sm: 2, md: 3 } }}>
								<Box
									sx={{
										fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
										fontWeight: 500,
										color: "#041c94",
										letterSpacing: 1.5,
										marginBottom: { xs: "40px", sm: "60px", md: "60px" },
										marginTop: { xs: "20px", sm: "30px", md: "30px" }
									}}
									data-aos="fade-left"
								>
									{t("Privacy-Policy.policyHeader")}
								</Box>
								<Box
									component="p"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										textAlign: "justify",
										mb: 3,
										px: { xs: 2, sm: 3 }
									}}
									data-aos="fade-up"
								>
									{t("Privacy-Policy.policySubheader")}
								</Box>
								<Box
									component="p"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										textAlign: "justify",
										mb: 3,
										px: { xs: 2, sm: 3 }
									}}
									data-aos="fade-up"
								>
									{t("Privacy-Policy.policyBody1")}
								</Box>
								<Box
									component="p"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										textAlign: "justify",
										mb: 3,
										px: { xs: 2, sm: 3 }
									}}
									data-aos="fade-up"
								>
									{t("Privacy-Policy.policyBody2")}
								</Box>

								{/* =========== policy body 2 ======== */}
								<Box
									sx={{
										fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
										fontWeight: 500,
										color: "#041c94",
										letterSpacing: 1.5,
										marginBottom: { xs: "40px", sm: "60px", md: "60px" },
										marginTop: { xs: "20px", sm: "30px", md: "30px" }
									}}
									data-aos="fade-left"
								>
									{t("Privacy-Policy2.policyHeader2")}
								</Box>
								<Box
									component="p"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										textAlign: "justify",
										mb: 3,
										px: { xs: 2, sm: 3 }
									}}
									data-aos="fade-up"
								>
									{t("Privacy-Policy2.policySubheader2")}
								</Box>
								<Box
									component="p"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										textAlign: "justify",
										mb: 3,
										px: { xs: 2, sm: 3 }
									}}
									data-aos="fade-up"
								>
									{t("Privacy-Policy2.policyBody2")}
								</Box>

								{/* =========== policy body 3 ======== */}
								<Box
									sx={{
										fontSize: { xs: "2em", sm: "2em", md: "2.5em" },
										fontWeight: 500,
										color: "#041c94",
										letterSpacing: 1.5,
										marginBottom: { xs: "40px", sm: "60px", md: "60px" },
										marginTop: { xs: "20px", sm: "30px", md: "30px" }
									}}
									data-aos="fade-left"
								>
									{t("Privacy-Policy3.policyHeader3")}
								</Box>
								<Box
									component="p"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										textAlign: "justify",
										mb: 3,
										px: { xs: 2, sm: 3 }
									}}
									data-aos="fade-up"
								>
									{t("Privacy-Policy3.policyBody3")}
								</Box>

								<Box
									component="ul"
									sx={{
										fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
										color: "#2b3343",
										lineHeight: 2,
										mb: 3,
										px: { xs: 2, sm: 3 },
										listStyleType: "disc",
										textAlign: "left",
										margin: "0 auto",
										maxWidth: "600px"
									}}
									data-aos="fade-up"
								>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionAccount"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionCompany"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionCookies"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionCountry"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionDevice"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionPersonalData"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionService"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionServiceProvider"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionThirdParty"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionUsageData"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionWebsite"))}
									</Box>
									<Box component="li" sx={{ mb: 2 }}>
										{ReactHtmlParser(t("Privacy-Policy3.definitionYou"))}
									</Box>
								</Box>

								{/* ========= policy 4 section ============ */}
							</Box>
						</Box>
					</Container>
				</Box>
			</React.Fragment>
		</ThemeProvider>
	);
}
