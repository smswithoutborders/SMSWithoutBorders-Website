import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const About = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Box
			id="project"
			sx={{
				fontFamily: "'Unbounded', 'Mona Sans'",
				py: { xs: 8, md: 12 },
				px: { xs: 3, md: 12 },
				direction: isFarsi ? "rtl" : "ltr",
				textAlign: "center",
				background: "#f1f4f78a"
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.5rem" },
					mb: 6,
					fontWeight: 600,
					letterSpacing: 1,
					color: "#FF8614",
					textTransform: "uppercase"
				}}
			>
				{t("subheader")}
			</Typography>

			<Box
				sx={{
					pt: { xs: 6, md: 10 },
					textAlign: "center",
					direction: isFarsi ? "rtl" : "ltr"
				}}
			>
				<Grid container spacing={18} justifyContent="center">
					<Grid item xs={12} md={6}>
						<Card
							sx={{
								borderRadius: 1,
								overflow: "hidden",
								boxShadow: 4,
								width: "80%",
								flexDirection: "column",
								border: "1px solid #0345d454"
							}}
						>
							<CardContent
								sx={{
									flexGrow: 1,
									width: "100%",
									textAlign: "justify",
									display: "flex",
									flexDirection: "column",
									gap: 2,
									p: 8
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "flex-end",
										flexWrap: "wrap",
										gap: 1.5,
										mb: 2
									}}
								>
									<Button
										variant="outlined"
										size="small"
										sx={{
											color: "#02397ce3",
											bgcolor: "#FF8614",
											fontWeight: 600,
											borderRadius: "20px",
											textTransform: "none",
											px: 2,
											"&:hover": {
												opacity: 0.85
											}
										}}
									>
										{t("project1.keyPoint1")}
									</Button>
									<Button
										variant="outlined"
										size="small"
										sx={{
											color: "#02397ce3",
											bgcolor: "#FF8614",
											fontWeight: 600,
											borderRadius: "20px",
											textTransform: "none",
											px: 2,
											"&:hover": {
												opacity: 0.85
											}
										}}
									>
										{t("project1.keyPoint2")}
									</Button>
								</Box>

								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										borderBottom: "1px solid #0345d454"
									}}
								>
									<Box
										component="img"
										src="/relaysms.png"
										alt="title"
										sx={{ width: { xs: "50%", md: "40%" }, height: "auto" }}
									/>
								</Box>

								<Box
									sx={{
										pt: 2
									}}
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: {
												xs: "center",
												md: isFarsi ? "flex-end" : "flex-start"
											}
										}}
									>
										<Box
											component="img"
											src="/RelaySms.png"
											sx={{ width: 180, height: "auto", mb: 3 }}
										/>
									</Box>

									<Typography
										variant="p"
										sx={{
											color: "#013057ff",
											lineHeight: 1.9,
											fontSize: "1.2rem"
										}}
									>
										{t("project1.description")}
									</Typography>

									<Box
										sx={{
											display: "flex",
											pt: 2,
											justifyContent: { xs: "center", md: isFarsi ? "flex-end" : "flex-start" }
										}}
									>
										<Button
											size="small"
											sx={{
												color: "#025ba3ff",
												fontWeight: 700,
												textTransform: "none"
											}}
											endIcon={<ArrowOutwardIcon />}
											target="_blank"
											href="https://example.com"
										>
											{t("Projects.visitWebsite")}
										</Button>
									</Box>
								</Box>
							</CardContent>
						</Card>
					</Grid>

					{/* -----------==============================================----------Deku sms ------=========================================================--------------------- */}
					<Grid item xs={12} md={6}>
						<Card
							sx={{
								borderRadius: 1,
								overflow: "hidden",
								boxShadow: 4,
								width: "80%",
								flexDirection: "column",
								border: "1px solid #0345d454"
							}}
						>
							<CardContent
								sx={{
									flexGrow: 1,
									width: "100%",
									textAlign: "justify",
									display: "flex",
									flexDirection: "column",
									gap: 2,
									p: 8
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "flex-end",
										flexWrap: "wrap",
										gap: 1.5,
										mb: 2
									}}
								>
									<Button
										variant="outlined"
										size="small"
										sx={{
											color: "#02397ce3",
											bgcolor: "#2CD4B4",
											fontWeight: 600,
											borderRadius: "20px",
											textTransform: "none",
											px: 2,
											"&:hover": {
												opacity: 0.85
											}
										}}
									>
										{t("project1.keyPoint1")}
									</Button>
									<Button
										variant="outlined"
										size="small"
										sx={{
											color: "#02397ce3",
											bgcolor: "#2CD4B4",
											fontWeight: 600,
											borderRadius: "20px",
											textTransform: "none",
											px: 2,
											"&:hover": {
												opacity: 0.85
											}
										}}
									>
										{t("project1.keyPoint2")}
									</Button>
								</Box>

								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										borderBottom: "1px solid #0345d454"
									}}
								>
									<Box
										component="img"
										src="/dekusms.png"
										alt="title"
										sx={{ width: { xs: "50%", md: "40%" }, height: "auto" }}
									/>
								</Box>

								<Box
									sx={{
										pt: 2
									}}
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: {
												xs: "center",
												md: isFarsi ? "flex-end" : "flex-start"
											}
										}}
									>
										<Box
											component="img"
											src="/DekuSms.png"
											sx={{ width: 180, height: "auto", mb: 3 }}
										/>
									</Box>

									<Typography
										variant="p"
										sx={{
											color: "#013057ff",
											lineHeight: 1.9,
											fontSize: "1.2rem"
										}}
									>
										{t("project2.description")}
									</Typography>

									<Box
										sx={{
											display: "flex",
											pt: 2,
											justifyContent: { xs: "center", md: isFarsi ? "flex-end" : "flex-start" }
										}}
									>
										<Button
											size="small"
											sx={{
												color: "#025ba3ff",
												fontWeight: 700,
												textTransform: "none"
											}}
											endIcon={<ArrowOutwardIcon />}
											target="_blank"
											href="https://example.com"
										>
											{t("Projects.visitWebsite")}
										</Button>
									</Box>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default About;
