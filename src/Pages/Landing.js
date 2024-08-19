import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";

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
						<div className="project-card">
							<div>
								<img src="/logo.png" className="project-photo" alt="relaysms" />
							</div>
							<h4 className="project-title">{t("projects.relaySMS.title")}</h4>
							<p>{t("projects.relaySMS.description")}</p>
						</div>
						<div className="project-card">
							<div>
								<img src="/Deku.png" className="project-photo" alt="dekusms" />
							</div>
							<h4 className="project-title">{t("projects.dekuSMS.title")}</h4>
							<p>{t("projects.dekuSMS.description")}</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default Swob;
