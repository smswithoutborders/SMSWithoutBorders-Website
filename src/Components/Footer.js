import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function Footer() {
	return (
		<Container fluid className="footer-container py-4 text-white">
			<Row className="footer-nav text-center">
				<Col xs={12} md={4} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="font-weight-bold mb-2 text-uppercase">
							Quick Links
						</Nav.Link>
						<Nav.Link href="https://blog.smswithoutborders.com/">Blog</Nav.Link>
						<Nav.Link href="https://docs.smswithoutborders.com/">Documentation</Nav.Link>
						<Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
					</Nav>
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="font-weight-bold mb-2 text-uppercase">
							Community
						</Nav.Link>
						<Nav.Link href="https://github.com/smswithoutborders">GitHub</Nav.Link>
						<Nav.Link href="https://twitter.com/RelaySMS">Twitter</Nav.Link>
						<Nav.Link href="https://t.me/deku_sms">Telegram</Nav.Link>
					</Nav>
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="font-weight-bold mb-2 text-uppercase">
							Downloads
						</Nav.Link>
						<Nav.Link href="/download/android">RelaySMS</Nav.Link>
						<Nav.Link href="/download/ios">DekuSMS</Nav.Link>
					</Nav>
				</Col>
			</Row>

			<Row className="border-top border-light pt-3">
				<Col className="text-center">
					<small>© SMSWithoutBorders.</small>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
