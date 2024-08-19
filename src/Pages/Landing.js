import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { FaGithub, FaTelegram, FaTwitter, FaGlobe } from "react-icons/fa";
import { Button } from "react-bootstrap";
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
				<div className="smswithoutborders-logo">
					<LanguageSwitcher />
				</div>
				<div className="smswithoutborders-heading">
					<h1>{t("header.title")}</h1>
					<p>{t("header.subtitle")}</p>
				</div>
			</header>
			<main>
				<section className="smswithoutborders-section">
					<header className="smswithoutborders-section-heading">
						<h2>{t("about.title")}</h2>
					</header>
					<div className="smswithoutborders-content">
						<p>{t("about.content")}</p>
					</div>
				</section>

				<section className="project-section">
					<header className="project-section-heading">
						<h2>{t("projects.title")}</h2>
						<p>{t("projects.subtitle")}</p>
					</header>
					<div className="project-cards">
						{/* RelaySMS Card */}
						<div className="project-card">
							<div>
								<img src="/logo.png" className="project-photo" alt="relaysms" />
							</div>
							<h4 className="project-title">{t("projects.relaySMS.title")}</h4>
							<p>{t("projects.relaySMS.description")}</p>
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
						</div>

						{/* DekuSMS Card */}
						<div className="project-card">
							<div>
								<img src="/Deku.png" className="project-photo" alt="dekusms" />
							</div>
							<h4 className="project-title">{t("projects.dekuSMS.title")}</h4>
							<p>{t("projects.dekuSMS.description")}</p>
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
