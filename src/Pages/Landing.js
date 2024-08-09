import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";
import Partner from "../Components/partner";
import "../App.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const Swob = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa";

	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<Container fluid className="p-0" dir={isRtl ? "rtl" : "ltr"}>
			{/* =========================== Header Section ============================= */}
			<Row className="header text-center justify-content-center align-items-center">
				<Col xs={12}>
					<section className="py-5" data-aos="fade-down">
						<h1 className="header1">{t("header.title")}</h1>
						<span className="header1-span">{t("header.subtitle")}</span>
					</section>
				</Col>
				<LanguageSwitcher />
			</Row>

			{/* =========================== ABOUT SWOB ====================================== */}
			<section className="about-section" data-aos="fade-up">
				<Container>
					<Row className="align-items-center">
						<Col md={6} className="mb-4">
							<div className="sec-title" data-aos="fade-right">
								<div className="title">{t("about.what_is")}</div>
								<h2 className="text-4xl md:text-6xl font-bold mb-4">
									<span className="header-span">{t("header.title")}</span>
								</h2>
							</div>
							<p className="md:text-1xl mb-4 p" data-aos="fade-up">
								{t("about.description")}
							</p>
							<p className="md:text-1xl mb-4 p" data-aos="fade-up" data-aos-delay="200">
								{t("about.additional_description")}
							</p>
							<p className="md:text-1xl mb-4 p" data-aos="fade-up" data-aos-delay="400">
								{t("about.history")}
							</p>
						</Col>
						<Col md={6}>
							<img
								src="communication.jpg"
								alt={t("header.title")}
								className="about__img img-fluid rounded shadow-sm"
								data-aos="zoom-in"
							/>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ============================ Applications Section ================================== */}
			<section className="applications-section" data-aos="fade-up">
				<Container>
					<div className="d-flex justify-content-center flex-wrap">
						{/*=================== RelaySMS Card======================== */}
						<Card
							className="application-card shadow-lg m-4"
							style={{ minWidth: "350px", maxWidth: "550px" }}
							data-aos="flip-left"
						>
							<Card.Body>
								<div className="sec-title">
									<h2 className="text-4xl text-center font-bold mb-4 text-indigo-800">
										<span className="header-span">{t("applications.relay_sms_title")}</span>
									</h2>
								</div>
								<p>{t("applications.relay_sms_description")}</p>
								<div className="text-center mt-4">
									<Button
										variant="primary"
										href="https://relay.smswithoutborders.com/"
										className="btn-custom mb-3"
									>
										{t("buttons.learn_more")}
									</Button>
									<div>
										<a
											href="https://github.com/smswithoutborders/relaysms-homepage"
											className="icon-link mr-3"
										>
											<FaGithub size={30} />
										</a>
										<a href="https://x.com/RelaySMS" className="icon-link">
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
							data-aos="flip-right"
						>
							<Card.Body>
								<h2 className="text-4xl text-center font-bold mb-4 text-indigo-800">
									<span className="header-span">{t("applications.deku_sms_title")}</span>
								</h2>
								<p>{t("applications.deku_sms_description")}</p>
								<div className="text-center mt-4">
									<div>
										<a href="https://github.com/deku-messaging" className="icon-link mr-3">
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
			<section className="partner-section py-4" data-aos="fade-up">
				<Partner />
			</section>
		</Container>
	);
};

export default Swob;
