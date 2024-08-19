// src/Pages/Landing.js
import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Button,
	Grid,
	Card,
	CardContent,
	CardActions,
	IconButton
} from "@mui/material";
import { GitHub, Twitter, Telegram, Public } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import "../App.css";

const Landing = () => {
	const { t } = useTranslation();

	return (
		<div>
			{/* Navbar */}
			<AppBar position="static" className="appBar">
				<Toolbar>
					<Typography variant="h6">{t("header.title")}</Typography>
					<div style={{ flexGrow: 1 }} />
					<Button color="inherit" href="#home">
						{t("languageSwitcher.english")}
					</Button>
					<Button color="inherit" href="#about">
						{t("about.title")}
					</Button>
					<Button color="inherit" href="#projects">
						{t("applications.application_title")}
					</Button>
				</Toolbar>
			</AppBar>

			{/* Header Section */}
			<header className="headerSection" id="home">
				<Container>
					<Typography variant="h2">{t("header.title")}</Typography>
					<Typography variant="h5">{t("header.subtitle")}</Typography>
				</Container>
			</header>

			{/* About Section */}
			<section className="aboutSection" id="about">
				<Container maxWidth="md">
					<Typography variant="h4" gutterBottom>
						{t("about.title")}
					</Typography>
					<div className="aboutContent">
						<div className="aboutText">
							<Typography variant="body1" paragraph>
								{t("about.description")}
							</Typography>
						</div>
						<div className="aboutText">
							<Typography variant="body1" paragraph>
								{t("about.additional_description")}
							</Typography>
						</div>
					</div>
				</Container>
			</section>

			{/* Projects Section */}
			<section className="projectsSection" id="projects">
				<Container maxWidth="lg">
					<Typography variant="h4" className="projectsTitle">
						{t("applications.application_title")}
					</Typography>
					<Grid container spacing={4}>
						{/* Project Card 1 */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className="cardStyled">
								<CardContent className="cardContentStyled">
									<Typography variant="h5">{t("applications.relay_sms_title")}</Typography>
									<Typography variant="body2" color="textSecondary">
										{t("applications.relay_sms_description")}
									</Typography>
								</CardContent>
								<CardActions className="cardActionsStyled">
									<IconButton color="primary" href="https://github.com/project-one">
										<GitHub />
									</IconButton>
									<IconButton color="primary" href="https://twitter.com/project-one">
										<Twitter />
									</IconButton>
									<IconButton color="primary" href="https://t.me/project-one">
										<Telegram />
									</IconButton>
									<IconButton color="primary" href="https://project-one.com">
										<Public />
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
						{/* Project Card 2 */}
						<Grid item xs={12} sm={6} md={4}>
							<Card className="cardStyled">
								<CardContent className="cardContentStyled">
									<Typography variant="h5">{t("applications.deku_sms_title")}</Typography>
									<Typography variant="body2" color="textSecondary">
										{t("applications.deku_sms_description")}
									</Typography>
								</CardContent>
								<CardActions className="cardActionsStyled">
									<IconButton color="primary" href="https://github.com/project-two">
										<GitHub />
									</IconButton>
									<IconButton color="primary" href="https://twitter.com/project-two">
										<Twitter />
									</IconButton>
									<IconButton color="primary" href="https://t.me/project-two">
										<Telegram />
									</IconButton>
									<IconButton color="primary" href="https://project-two.com">
										<Public />
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</section>
		</div>
	);
};

export default Landing;
