import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
// import { FaEnvelope, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function Footer() {
	return (
		<Container fluid className="footer-container py-4 text-white">
			<Row className="footer-nav text-center">
				<Col xs={12} md={3} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="font-weight-bold mb-2 text-uppercase">
							Quick Links
						</Nav.Link>
						<Nav.Link href="https://blog.smswithoutborders.com/">Blog</Nav.Link>
						<Nav.Link href="/documentation">Documentation</Nav.Link>
						<Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
					</Nav>
				</Col>
				<Col xs={12} md={3} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="font-weight-bold mb-2 text-uppercase">
							Community
						</Nav.Link>
						<Nav.Link href="https://github.com/smswithoutborders">GitHub</Nav.Link>
						<Nav.Link href="https://www.facebook.com/SMSWithoutBorders">Facebook</Nav.Link>
						<Nav.Link href="https://twitter.com/RelaySMS">Twitter</Nav.Link>
						<Nav.Link href="mailto:support@smswithoutborders.com">Contact Us</Nav.Link>
					</Nav>
				</Col>
				<Col xs={12} md={3} className="mb-4">
					<Nav className="flex-column text-center">
						<Nav.Link href="#" className="font-weight-bold mb-2 text-uppercase">
							Downloads
						</Nav.Link>
						<Nav.Link href="/download/android">Android</Nav.Link>
						<Nav.Link href="/download/ios">iOS</Nav.Link>
						<Nav.Link href="/download/linux">Linux</Nav.Link>
						<Nav.Link href="/download/windows">Windows</Nav.Link>
					</Nav>
				</Col>
				<Col xs={12} md={3} className="mb-4 d-flex justify-content-center">
					<section className="flex-content padding_2x">
						<h3 className="title small">
							Welcome to <em>{"{name}"}</em>
						</h3>
						<p>
							When an unknown printer took a galley of type and scrambled it to make a type specimen
							book.
						</p>
						<span className="social_icons">
							<a href="#">
								<i className="fa fa-facebook"></i>
							</a>
							<a href="#">
								<i className="fa fa-instagram"></i>
							</a>
							<a href="#">
								<i className="fa fa-twitter"></i>
							</a>
							<a href="#">
								<i className="fa fa-youtube"></i>
							</a>
						</span>
					</section>
				</Col>
			</Row>

			<Row className="border-top border-light pt-3">
				<Col className="text-center">
					<small>© 2024 SMSWithoutBorders.</small>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
