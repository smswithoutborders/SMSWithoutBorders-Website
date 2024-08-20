import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { FaGithub, FaTelegram, FaTwitter, FaGlobe, FaArrowCircleRight } from "react-icons/fa";
import Partner from "../Components/partner";

function Swob() {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (i18n.language === "fa") {
			document.documentElement.setAttribute("dir", "rtl");
		} else {
			document.documentElement.setAttribute("dir", "ltr");
		}
	}, [i18n.language]);

	return (
		<>
			<header className="smswithoutborders-header">
				<div className="smswithoutborders-heading">
					<h1>{t("header.title")}</h1>
					<p className="headertext">{t("header.subtitle")}</p>
				</div>
				<div className="smswithoutborders-logo">
					<LanguageSwitcher />
				</div>
			</header>
			{/* ===================================== */}
			<main>
				<section className="smswithoutborders-section">
					<header className="smswithoutborders-section-heading">
						<h2>{t("about.title")}</h2>
					</header>
					<div className="smswithoutborders-content">
						<p className="abouttext">{t("about.content")}</p>
					</div>
				</section>

				{/* ============================================= */}

				<section className="project-section">
					<header className="project-section-heading">
						<p>{t("projects.title")}</p>
					</header>
					<div className="project-cards">
						{/* RelaySMS Card */}
						<div className="project-card relaysms">
							<div className="project-card-content">
								<h4 className="project-title">{t("projects.relaySMS.title")}</h4>
								<p>{t("projects.relaySMS.description")}</p>
								<a href="https://relay.smswithoutborders.com/" className="btn-custom mb-3">
									{t("buttons.learn_more")}
									<FaArrowCircleRight className="ml-2 arrow-icon" />
								</a>
								<div className="card-icons">
									<a
										href="https://relay.smswithoutborders.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="icon-link mr-3"
										aria-label="Visit RelaySMS website"
									>
										<FaGlobe size={30} />
									</a>
									<a
										href="https://github.com/smswithoutborders/SMSWithoutBorders-App-Android"
										className="icon-link mr-3"
										aria-label="GitHub repository"
									>
										<FaGithub size={30} />
									</a>
									<a
										href="https://x.com/RelaySMS"
										className="icon-link"
										aria-label="Twitter profile"
									>
										<FaTwitter size={30} />
									</a>
								</div>
							</div>
						</div>

						{/* ===== DekuSMS Card ============ */}
						<div className="project-card dekusms">
							<div className="project-card-content">
								<h4 className="project-title">{t("projects.dekuSMS.title")}</h4>
								<p>{t("projects.dekuSMS.description")}</p>
								<a
									href="https://github.com/deku-messaging/Deku-SMS-Android/blob/master/README.md"
									className="btn-custom mb-3"
								>
									{t("buttons.learn_more")}
									<FaArrowCircleRight className="ml-2 arrow-icon" />
								</a>
								<div className="card-icons">
									<a
										href="https://github.com/deku-messaging/Deku-SMS-Android"
										className="icon-link mr-3"
										aria-label="GitHub repository"
									>
										<FaGithub size={30} />
									</a>
									<a
										href="https://t.me/deku_sms"
										className="icon-link"
										aria-label="Telegram channel"
									>
										<FaTelegram size={30} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Partner />
			</main>
		</>
	);
}

export default Swob;
