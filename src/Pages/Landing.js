import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaTelegram, FaTwitter, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Partner from "../Components/partner";
import "../App.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const Swob = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa";

	return (
		<Container fluid className="p-0" dir={isRtl ? "rtl" : "ltr"}>
			{/* =========================== Header Section ============================= */}
			<Row className="header text-center justify-content-center align-items-center">
				<Col xs={12}>
					<section className="py-5">
						<h1 className="header1">{t("header.title")}</h1>
						<span className="header1-span">{t("header.subtitle")}</span>
					</section>
				</Col>
				<LanguageSwitcher />
			</Row>

			{/* =========================== ABOUT SWOB ====================================== */}
			<section className="about-section">
				<Container>
					<Row className="align-items-center">
						<Col md={12} className="mb-4">
							<section className="container items-center">
								<h1 className="title font-bold mb-4 text-2xl md:text-4xl text-center">
									{t("about.what_is")}
								</h1>
							</section>
							<p className="mb-4">{t("about.description")}</p>
							<p className="mb-4">{t("about.additional_description")}</p>
							<p className="mb-4">{t("about.history")}</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ============================ Applications Section ================================== */}
			<section className="applications-section">
				<Container>
					<section className="container items-center">
						<h1 className="title font-bold mb-4 text-2xl md:text-4xl text-center">
							{t("applications.application_title")}
						</h1>
					</section>

					<div className="d-flex justify-content-center flex-wrap">
						{/*=================== RelaySMS Card======================== */}
						<Card
							className="application-card shadow-lg m-4"
							style={{ minWidth: "350px", maxWidth: "550px" }}
						>
							<Card.Body className="p-4">
								<div className="sec-title text-center mb-3">
									<h2 className="text-4xl font-bold mb-4 text-indigo-800">
										<span className="header-span">{t("applications.relay_sms_title")}</span>
									</h2>
								</div>
								<p className="mb-4">{t("applications.relay_sms_description")}</p>
								<div className="text-center">
									<Button
										variant="primary"
										href="https://relay.smswithoutborders.com/"
										className="btn-custom mb-3"
									>
										{t("buttons.learn_more")}
									</Button>
									<div className="d-flex justify-content-center">
										{/* Website Icon Link */}
										<a
											href="https://relay.smswithoutborders.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="icon-link mr-3"
											aria-label="Visit RelaySMS website"
										>
											<FaGlobe size={30} />
										</a>
										{/* GitHub Icon Link */}
										<a
											href="https://github.com/smswithoutborders/SMSWithoutBorders-App-Android"
											className="icon-link mr-3"
											aria-label="GitHub repository"
										>
											<FaGithub size={30} />
										</a>
										{/* Twitter Icon Link */}
										<a
											href="https://x.com/RelaySMS"
											className="icon-link"
											aria-label="Twitter profile"
										>
											<FaTwitter size={30} />
										</a>
									</div>
								</div>
							</Card.Body>
						</Card>

						{/* ================= DekuSMS Card ============================= */}
						<Card
							className="application-card shadow-lg m-4"
							style={{ minWidth: "350px", maxWidth: "550px" }}
						>
							<Card.Body className="p-4">
								<div className="sec-title text-center mb-3">
									<h2 className="text-4xl font-bold mb-4 text-indigo-800">
										<span className="header-span">{t("applications.deku_sms_title")}</span>
									</h2>
								</div>
								<p className="mb-4">{t("applications.deku_sms_description")}</p>
								<div className="text-center">
									<Button
										variant="primary"
										href="https://github.com/deku-messaging/Deku-SMS-Android/blob/master/README.md"
										className="btn-custom mb-3"
									>
										{t("buttons.learn_more")}
									</Button>
									<div className="d-flex justify-content-center">
										<a
											href="https://github.com/deku-messaging/Deku-SMS-Android"
											className="icon-link mr-3"
										>
											<FaGithub size={30} />
										</a>
										<a href="https://t.me/deku_sms" className="icon-link">
											<FaTelegram size={30} />
										</a>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</Container>
			</section>

			{/* ======================= Partner Section =========================*/}
			<section className="partner-section py-4">
				<Partner />
			</section>
		</Container>
	);
};

export default Swob;
