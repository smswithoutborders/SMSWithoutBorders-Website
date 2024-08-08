import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Partner from "../Components/partner";
import Blog from "../Components/Blog";
import "../App.css";

const Home = () => {
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1200 });
	}, []);

	const toggleReadMore = () => {
		setShowMore(!showMore);
	};

	return (
		<Container fluid className="p-0">
			{/* Header Section */}
			<Row className="header text-center">
				<Col>
					<section className="header-section mx-auto py-28 items-center" data-aos="fade-down">
						<div className="w-full">
							<h1 className="header1 text-3xl md:text-5xl font-bold mb-4">
								SMSWithoutBorders <br />
								<span className="header1-span space-y-4">SW|OB</span>
							</h1>
						</div>
					</section>
				</Col>
			</Row>

			{/* About SMSWithoutBorders */}
			<Row className="about bg-gray-100 py-5">
				<Col md={12}>
					<section className="about-section mx-auto flex flex-col md:flex-row items-center space-x-40">
						{/* Image Section */}
						<div className="md:w-1/2 md:mr-8 mt-8 md:mt-0" data-aos="fade-down">
							<img src="logo.png" alt="DekuSMS" className="rounded-lg shadow-lg img-fluid" />
						</div>

						{/* Content Section */}
						<div className="w-full md:w-2/3" data-aos="fade-left space-x-6">
							<em className="tag">ABOUT US</em>
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								What is <span className="header-span text-indigo-700">SMSWithoutBorders</span>?
							</h1>
							<p className="mb-4">
								SMSWithoutBorders is a pioneering project aimed at providing secure communication
								tools that function even in the absence of an internet connection. The project has
								evolved into two main applications:
							</p>
							<ul className="list-disc list-inside text-lg mb-4">
								<li className="mb-2">
									<strong>RelaySMS:</strong> A user-facing app that connects messaging platforms,
									allowing users to send messages even offline using SMS as a secure relay.
								</li>
								<li className="mb-2">
									<strong>DekuSMS:</strong> An offline, open-source, end-to-end encrypted messaging
									app for Android, designed for secure communication without internet.
								</li>
							</ul>

							<p className="mt-4">
								SMSWithoutBorders began as a simple idea to ensure reliable communication in areas
								with limited internet access. It has since grown into a robust platform that bridges
								offline and online communication, empowering users to stay connected, no matter the
								circumstances.
							</p>
						</div>
					</section>
				</Col>
			</Row>

			{/* About RelaySMS */}
			<Row className="about bg-gray-100 py-24  space-x-40">
				<Col md={12}>
					<section className="container mx-auto py-24 flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 md:mr-8 mt-8 md:mt-0" data-aos="fade-down">
							<img src="2.png" alt="DekuSMS" className="rounded-lg shadow-lg img-fluid" />
						</div>

						<div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
							<h1 className="text-4xl md:text-6xl font-bold mb-4">
								About <span className="header-span text-indigo-700">RelaySMS</span>
							</h1>
							<p className="mb-4">
								RelaySMS, formerly known as SMSWithoutBorders (Swob), is a user-friendly application
								that empowers you to send messages across your favorite messaging platforms, even
								when you are disconnected from the internet. Think of it as a secure bridge that
								connects your offline world to online communication channels. RelaySMS utilizes SMS
								technology as a reliable relay, allowing you to seamlessly transmit messages even in
								areas with limited or no internet access.
							</p>
							{showMore && (
								<p className="mb-4">
									The concept for SMSWithoutBorders, now RelaySMS, originated from a simple yet
									powerful vision: ensuring everyone has access to reliable communication,
									regardless of internet connectivity. Many regions around the world have limited or
									unreliable internet infrastructure, creating communication barriers that can be
									disruptive for individuals and communities. RelaySMS was born to bridge this gap,
									empowering users to stay connected with friends, family, and colleagues even when
									offline.
								</p>
							)}
							<button
								onClick={toggleReadMore}
								className="text-indigo-700 hover:underline focus:outline-none"
							>
								{showMore ? "Read less" : "Read more"}
							</button>
						</div>
					</section>
				</Col>
			</Row>

			{/* About DekuSMS */}
			<section className="container mx-auto py-24 flex flex-col md:flex-row items-center space-x-8">
				<div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-up">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						About <span className="header-span">DekuSMS</span>
					</h1>
					<p className="mb-4">
						DekuSMS is an open-source, end-to-end encrypted offline messaging application
						specifically designed for Android devices. Its primary focus is on providing a secure
						and private platform for offline communication.
					</p>
					{showMore && (
						<>
							<p className="mb-4">
								What sets DekuSMS apart is its commitment to end-to-end encryption. This means that
								your messages are encrypted on your device before being sent and can only be
								decrypted by the intended recipients device. This robust encryption ensures that
								only authorized parties can access your conversations, offering a higher level of
								security compared to traditional messaging apps.
							</p>
							<p className="mb-4">
								DekuSMS embraces the open-source philosophy. The applications source code is freely
								available on GitHub for public scrutiny, allowing security experts and developers to
								examine and contribute to the project. This transparency fosters trust and ensures
								the code is free from hidden vulnerabilities.
							</p>
							<p className="mb-4">
								While DekuSMS prioritizes offline security, it plays a valuable role within the
								broader SMSWithoutBorders project. It acts as a gateway client for the RelaySMS
								application, allowing users to securely relay SMS messages from RelaySMS to online
								messaging platforms.
							</p>
						</>
					)}
					<button
						onClick={toggleReadMore}
						className="text-indigo-700 hover:underline focus:outline-none"
					>
						{showMore ? "Read less" : "Read more"}
					</button>
				</div>
				<div className="md:w-1/2 md:mr-6 mt-8 md:mt-0" data-aos="fade-down">
					<img src="3.png" alt="DekuSMS" className="rounded-lg shadow-lg img-fluid" />
				</div>
			</section>

			{/* Partner Section */}
			<section className="partner-section">
				<Partner />
			</section>

			{/* Blog Section */}
			<section className="blog-section">
				<Blog />
			</section>
		</Container>
	);
};

export default Home;
