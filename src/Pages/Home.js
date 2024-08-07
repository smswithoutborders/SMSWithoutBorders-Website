import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Partner from "../Components/partner";
import Blog from "../Components/Blog";
import "../App.css";
import Project from "./About";

const Home = () => {
	return (
		<Container fluid>
			{/* Header Section */}
			<Row className="header text-center">
				<Col>
					<section className="container mx-auto py-24 flex flex-col md:flex-row items-center">
						<div className="md:w-2/2 px-6">
							<h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-4">
								Smswithoutborders<span className="text-orange-500">SW|OB</span>
							</h1>
						</div>
					</section>
				</Col>
			</Row>

			{/* About SMSWithoutBorders */}
			<Row className="about">
				<Col md={12}>
					<section className="container mx-auto py-24 flex flex-col md:flex-row items-center">
						<div className="md:w-2/2 px-6">
							<h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-4">
								Transform Your Business with{" "}
								<span className="text-orange-500">SMSWithoutBorders</span>
							</h1>
							<p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 font-sans leading-relaxed">
								SMSWithoutBorders is an overarching project dedicated to developing and promoting
								secure, accessible communication tools that function even without an internet
								connection. This initiative encompasses two primary applications:
							</p>
							<p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 font-sans leading-relaxed">
								SMSWithoutBorders began its journey as a single, innovative application focused on
								empowering offline messaging. However, as the project matured and our vision
								expanded, we recognized the potential to create a broader ecosystem for secure
								communication. This led to the exciting transition from a standalone app to the
								SMSWithoutBorders project, encompassing two distinct but complementary applications:
							</p>
							<ul className="list-disc list-inside mb-6">
								<li>
									<strong>RelaySMS:</strong> This user-facing application acts as the cornerstone of
									the project. Formerly known as SMSWithoutBorders, RelaySMS allows users to
									seamlessly connect their favorite messaging platforms and send messages even when
									offline. It utilizes SMS technology as a secure relay to bridge the gap between
									disconnected devices and online communication channels.
								</li>
								<li>
									<strong>DekuSMS:</strong> This offline, open-source, end-to-end encrypted
									messaging application for Android provides users with a secure and private
									messaging experience. While DekuSMS focuses on offline communication security, it
									complements the SMSWithoutBorders projects mission by offering a robust option for
									secure messaging within an internet-disconnected environment.
								</li>
							</ul>
						</div>
					</section>
				</Col>
			</Row>
			{/* Blog Section */}
			<Row className="my-4">
				<Col md={12} sm={8}>
					<Blog />
				</Col>
			</Row>
			{/* Deku Section */}
			<Row className="my-4">
				<Col md={12}>
					{/* About DekuSMS */}
					<section className="container mx-auto py-24 flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 px-6">
							<h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-4">
								About <span className="text-orange-500">DekuSMS</span>
							</h1>
							<p className="text-lg text-gray-700 mb-6">
								DekuSMS is an open-source, end-to-end encrypted offline messaging application
								specifically designed for Android devices. Its primary focus is on providing a
								secure and private platform for offline communication.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								What sets DekuSMS apart is its commitment to end-to-end encryption. This means that
								your messages are encrypted on your device before being sent and can only be
								decrypted by the intended recipients device. This robust encryption ensures that
								only authorized parties can access your conversations, offering a higher level of
								security compared to traditional messaging apps.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								DekuSMS embraces the open-source philosophy. The applications source code is freely
								available on Github for public scrutiny, allowing security experts and developers to
								examine and contribute to the project. This transparency fosters trust and ensures
								the code is free from hidden vulnerabilities.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								While DekuSMS prioritizes offline security, it plays a valuable role within the
								broader SMSWithoutBorders project. It acts as a gateway client for the RelaySMS
								application, allowing users to securely relay SMS messages from RelaySMS to online
								messaging platforms.
							</p>
						</div>
						<div className="md:w-1/2 mt-8 md:mt-0">
							<img src="o11.jpg" alt="DekuSMS" className="rounded-lg shadow-lg" />
						</div>
					</section>
				</Col>
			</Row>

			{/* About DekuSMS */}
			<Row className="about">
				<Col md={6}>
					<img src="o11.jpg" alt="DekuSMS" />
				</Col>
				<Col md={6}>
					{/* About RelaySMS */}
					<section className="container mx-auto py-24 flex flex-col md:flex-row items-center">
						<div className="md:w-2/2 px-6">
							<h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-4">
								About <span className="text-orange-500">RelaySMS</span>
							</h1>
							<p className="text-lg text-gray-700 mb-6">
								RelaySMS, formerly known as SMSWithoutBorders (Swob), is a user-friendly application
								that empowers you to send messages across your favorite messaging platforms, even
								when you are disconnected from the internet. Think of it as a secure bridge that
								connects your offline world to online communication channels. RelaySMS utilizes SMS
								technology as a reliable relay, allowing you to seamlessly transmit messages even in
								areas with limited or no internet access.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								The concept for SMSWithoutBorders, now RelaySMS, originated from a simple yet
								powerful vision: ensuring everyone has access to reliable communication, regardless
								of internet connectivity. Many regions around the world have limited or unreliable
								internet infrastructure, creating communication barriers that can be disruptive for
								individuals and communities. RelaySMS was born to bridge this gap, empowering users
								to stay connected with friends, family, and colleagues even when offline.
							</p>
						</div>
					</section>
				</Col>
			</Row>

			{/* Our Partner Section */}
			<Row className="my-4">
				<Col md={12} sm={8}>
					<Partner />
				</Col>
			</Row>

			{/* Project */}
			<Row className="my-4">
				<Col md={12} sm={8}>
					<Project />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
