import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import "aos/dist/aos.css";
import Partner from "../Components/partner";
import "../App.css";

const Swob = () => {
	return (
		<Container fluid className="p-0">
			{/* =========================== Header Section ============================= */}
			<Row className="header text-center justify-content-center align-items-center">
				<Col xs={12}>
					<section className="py-5">
						<h1 className="header1">SMSWithoutBorders</h1>
						<span className="header1-span">opensource\Research</span>
					</section>
				</Col>
			</Row>

			{/* =========================== ABOUT SWOB ====================================== */}
			<section className="about-section">
				<Container>
					<Row className="align-items-center">
						<Col md={6} className="mb-4">
							<div className="sec-title">
								<div className="title">About Us</div>
								<h2 className="text-4xl md:text-6xl font-bold mb-4">
									What is <span className="header-span">SMSWithoutBorders</span> All About
								</h2>
							</div>
							<p className="md:text-1xl mb-4 p">
								SMSWithoutBorders is an overarching project dedicated to developing and promoting
								secure, accessible communication tools that function even without an internet
								connection.
							</p>
							<p className="md:text-1xl mb-4 p">
								The project encompasses two primary applications aimed at enhancing secure
								communication: RelaySMS and DekuSMS.
							</p>
							<p className="md:text-1xl mb-4 p">
								SMSWithoutBorders began as a simple idea to ensure reliable communication in areas
								with limited internet access. It has since grown into a robust platform that bridges
								offline and online communication, empowering users to stay connected, no matter the
								circumstances.
							</p>
						</Col>
						<Col md={6}>
							<img
								src="communication.jpg"
								alt="About SMSWithoutBorders"
								className="about__img img-fluid rounded shadow-sm"
							/>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ============================ Applications Section ================================== */}
			<section className="applications-section">
				<Container>
					<div className="d-flex justify-content-center flex-wrap">
						{/* RelaySMS Card */}
						<Card
							className="application-card shadow-lg m-3 flex-grow-1 py-10"
							style={{ minWidth: "300px", maxWidth: "500px" }}
						>
							<Card.Body>
								<div className="sec-title">
									<h2 className="text-4xl text-center font-bold mb-4 text-indigo-400">
										<span className="header-span">Relay</span>SMS
									</h2>
								</div>
								<p>
									RelaySMS, formerly known as SMSWithoutBorders (Swob), is a user-friendly
									application that empowers you to send messages across your favorite messaging
									platforms, even when you are disconnected from the internet. Think of it as a
									secure bridge that connects your offline world to online communication channels.
									RelaySMS utilizes SMS technology as a reliable relay, allowing you to seamlessly
									transmit messages even in areas with limited or no internet access.
								</p>
								<div className="text-center mt-4">
									<Button
										variant="primary"
										href="https://relay.smswithoutborders.com/"
										className="btn-custom mb-3"
									>
										Learn More
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

						{/* DekuSMS Card */}
						<Card
							className="application-card shadow-lg m-3 flex-grow-1 py-5"
							style={{ minWidth: "300px", maxWidth: "500px" }}
						>
							<Card.Body>
								<h2 className="text-4xl text-center font-bold mb-4 text-indigo-400">
									<span className="header-span">Deku</span>SMS
								</h2>
								<p>
									DekuSMS is an open-source, end-to-end encrypted offline messaging application
									specifically designed for Android devices. Its primary focus is on providing a
									secure and private platform for offline communication. What sets DekuSMS apart is
									its commitment to end-to-end encryption. This means that your messages are
									encrypted on your device before being sent and can only be decrypted by the
									intended recipients device. This robust encryption ensures that only authorized
									parties can access your conversations, offering a higher level of security
									compared to traditional messaging apps.
								</p>
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
			<section className="partner-section py-4">
				<Partner />
			</section>
		</Container>
	);
};

export default Swob;
