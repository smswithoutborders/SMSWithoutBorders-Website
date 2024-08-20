import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa"; // Importing icons
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";

function Footer() {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa";

	return (
		<Container fluid className="footer-container py-4 text-white" dir={isRtl ? "rtl" : "ltr"}>
			<Row className="footer-nav text-center">
				<Col xs={12} md={4} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="footer-title font-weight-bold mb-2 text-uppercase">
							{t("footer.quickLinks")}
						</Nav.Link>
						<Nav.Link href="https://blog.smswithoutborders.com/">{t("footer.blog")}</Nav.Link>
						<Nav.Link href="https://docs.smswithoutborders.com/">
							{t("footer.documentation")}
						</Nav.Link>
						<Nav.Link href="https://smswithoutborders.com/privacy-policy">
							{t("footer.privacyPolicy")}
						</Nav.Link>
					</Nav>
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="footer-title font-weight-bold mb-2 text-uppercase">
							{t("footer.community")}
						</Nav.Link>
						<Nav.Link href="https://github.com/smswithoutborders">
							<FaGithub size={20} className="footer-icon" /> {t("footer.github")}
						</Nav.Link>
						<Nav.Link href="https://twitter.com/RelaySMS">
							<FaTwitter size={20} className="footer-icon" /> {t("footer.twitter")}
						</Nav.Link>
						<Nav.Link href="https://t.me/deku_sms">
							<FaTelegram size={20} className="footer-icon" /> {t("footer.telegram")}
						</Nav.Link>
					</Nav>
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="footer-title font-weight-bold mb-2 text-uppercase">
							{t("footer.downloads")}
						</Nav.Link>
						<Nav.Link href="/download/android">{t("footer.relaySMS")}</Nav.Link>
						<Nav.Link href="/download/ios">{t("footer.dekuSMS")}</Nav.Link>
						<LanguageSwitcher />
					</Nav>
				</Col>
			</Row>

			<Row className="border-top border-light pt-3">
				<Col className="text-center">
					<small>{t("footer.copyright")}</small>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
