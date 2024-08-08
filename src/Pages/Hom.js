// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "../App.css"; // Import custom CSS

// const App = () => {
// 	return (
// 		<div>
// 			<main className="flex">
// 				<section className="flex-content padding_2x">
// 					<article>
// 						{/* <em className="tag">WEBSITE NAM</em> */}
// 						<h1 className="title big">
// 							SMS<em>Without</em>Borders
// 						</h1>
// 						<p>
// 							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
// 							has been the industrys standard dummy text ever since the 1500s.
// 						</p>
// 					</article>
// 				</section>
// 				<section className="flex-content padding_2x"></section>
// 			</main>

// 			<div className="section1">
// 				<section className="flex-content padding_2x">
// 					<em className="tag">ABOUT US</em>
// 					<h1 className="title medium">We help you to keep your place clean</h1>
// 					<p>
// 						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
// 						has been the industrys standard dummy text ever since the 1500s, when an unknown printer
// 						took a galley of type and scrambled it to make a type specimen book. It has survived not
// 						only five centuries, but also the leap into electronic typesetting, remaining
// 						essentially unchanged.
// 					</p>
// 					<p>
// 						It was popularised in the 1960s with the release of Letraset sheets containing Lorem
// 						Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
// 						including versions of Lorem Ipsum.
// 					</p>
// 					<em style={{ color: "var(--secondary)" }}>It is a long established fact</em>
// 				</section>
// 				<section className="flex-content padding_2x">
// 					<img src="logo.png" alt="DekuSMS" className="rounded-lg shadow-lg img-fluid" />
// 				</section>
// 			</div>
// 			{/* <Row className="header text-center">
// 				<Col>
// 					<section className="container mx-auto py-28 items-center flash " id="lds">
// 						<div className="md:w-2/2">
// 							<h1 className="header1 text-4xl md:text-6xl text1 font-bold mb-4">
// 								SMSWithoutBorders <span className="header1-span txt2">SW|OB</span>
// 							</h1>
// 						</div>
// 					</section>
// 				</Col>
// 			</Row> */}
// 			<div className="sections section2 padding_2x">
// 				<article className="cards padding_2x">
// 					<Section imgSrc="https://i.postimg.cc/J7yFYNtr/01.png" title="Pick a <em>service</em>" />
// 					<Section
// 						imgSrc="https://i.postimg.cc/jSTkjBc2/02.png"
// 						title="<em>Schedule</em> with us"
// 					/>
// 					<Section imgSrc="https://i.postimg.cc/FKsWyc2Q/03.png" title="Get things <em>done</em>" />
// 				</article>
// 			</div>

// 			<div className="section4 flex">
// 				<section className="flex-content padding_2x">
// 					<figure>
// 						<img src="2.png" alt="" />
// 						<span className="padding_1x">
// 							<em>RelaySMS App</em>
// 						</span>
// 					</figure>
// 				</section>
// 				<section className="flex-content padding_2x">
// 					<em className="tag">RelaySMS App</em>
// 					<h1 className="title medium">everything you need to known about RelaySMS</h1>
// 					<p>
// 						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
// 						has been the industrys standard dummy text ever since the 1500s, when an unknown printer
// 						took a galley of type and scrambled it to make a type specimen book. It has survived not
// 						only five centuries, but also the leap into electronic typesetting, remaining
// 						essentially unchanged.
// 					</p>
// 					<ul>
// 						<li>Lorem Ipsum has been the industrstandard dummy text ever since the 1500s.</li>
// 						<li>
// 							When an unknown printer took a galley of type and scrambled it to make a type specimen
// 							book. It has survived not only five centuries.
// 						</li>
// 						<li>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</li>
// 					</ul>
// 				</section>
// 			</div>
// 		</div>
// 	);
// };

// const Section = ({ imgSrc, title }) => (
// 	<section className="flex-content padding_2x">
// 		<figure>
// 			<img src={imgSrc} alt="" />
// 		</figure>
// 		<em className="padding_1x"></em>
// 		<h3 className="title small" dangerouslySetInnerHTML={{ __html: title }}></h3>
// 	</section>
// );

// export default App;
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Partner from "../Components/partner";
import Blog from "../Components/Blog";
import "../App.css";

const Home = () => {
	const [showMore, setShowMore] = useState(false);

	const toggleReadMore = () => {
		setShowMore(!showMore);
	};

	return (
		<Container fluid>
			{/* ===========================Header Section ==========================================*/}
			<Row className="header text-center py-5">
				<Col>
					<section className="container mx-auto py-5 items-center">
						<div className="md:w-2/2">
							<h1 className="header1 font-bold mb-4">
								SMSWithoutBorders <span className="header1-span">SW|OB</span>
							</h1>
						</div>
					</section>
				</Col>
			</Row>

			{/*============================ About SMSWithoutBorders=============================== */}
			<Row className="about bg-gray-100 py-5">
				<Col md={12}>
					<section className="container mx-auto md:flex-row items-center">
						{/* ======= first section =========== */}
						<div className="section1">
							<section className="flex-content padding_2x">
								<em className="tag">ABOUT US</em>
								<h1 className="text-4xl md:text-6xl font-bold mb-4">
									What is <span className="header-span text-indigo-700">SMSWithoutBorders</span> All
									About
								</h1>
								<p className="mb-4">
									SMSWithoutBorders is an overarching project dedicated to developing and promoting
									secure, accessible communication tools that function even without an internet
									connection. This initiative encompasses two primary applications:
								</p>
								<p className="mb-4">
									SMSWithoutBorders began its journey as a single, innovative application focused on
									empowering offline messaging. However, as the project matured and our vision
									expanded, we recognized the potential to create a broader ecosystem for secure
									communication. This led to the exciting transition from a standalone app to the
									SMSWithoutBorders project, encompassing two distinct but complementary
									applications:
								</p>
							</section>
							<section className="flex-content padding_2x">
								<img src="logo.png" alt="DekuSMS" className="rounded-lg shadow-lg img-fluid" />
							</section>
						</div>
						{/* ========= second section========== */}
						<div className="md:w-3/3">
							<ul className="list-disc list-inside text-lg mb-4">
								<li className="mb-2">
									<strong>RelaySMS:</strong> This user-facing application acts as the cornerstone of
									the project. Formerly known as SMSWithoutBorders, RelaySMS allows users to
									seamlessly connect their favorite messaging platforms and send messages even when
									offline. It utilizes SMS technology as a secure relay to bridge the gap between
									disconnected devices and online communication channels.
								</li>
								<li className="mb-2">
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

			{/* ========================Blog Section============================== */}
			<Row className="my-4">
				<Col md={12} sm={8}>
					<Blog />
				</Col>
			</Row>

			{/*========================== About RelaySMS============================== */}
			<section className="container mx-auto py-5 flex flex-col md:flex-row items-center">
				<Col md={6} className="mt-4 md:mt-0">
					<img src="o11.jpg" alt="DekuSMS" className="rounded-lg shadow-lg img-fluid" />
				</Col>
				<Col md={6} className="mt-4 md:mt-0">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						About <span className="header-span text-indigo-700">RelaySMS</span>
					</h1>
					<p className="mb-4">
						RelaySMS, formerly known as SMSWithoutBorders (Swob), is a user-friendly application
						that empowers you to send messages across your favorite messaging platforms, even when
						you are disconnected from the internet. Think of it as a secure bridge that connects
						your offline world to online communication channels. RelaySMS utilizes SMS technology as
						a reliable relay, allowing you to seamlessly transmit messages even in areas with
						limited or no internet access.
					</p>
					{showMore && (
						<p className="mb-4">
							The concept for SMSWithoutBorders, now RelaySMS, originated from a simple yet powerful
							vision: ensuring everyone has access to reliable communication, regardless of internet
							connectivity. Many regions around the world have limited or unreliable internet
							infrastructure, creating communication barriers that can be disruptive for individuals
							and communities. RelaySMS was born to bridge this gap, empowering users to stay
							connected with friends, family, and colleagues even when offline.
						</p>
					)}
					<button
						onClick={toggleReadMore}
						className="text-indigo-700 hover:underline focus:outline-none"
					>
						{showMore ? "Read less" : "Read more"}
					</button>
				</Col>
			</section>

			{/* =================== About DekuSMS =========================*/}
			<section className="container mx-auto py-5 flex flex-col md:flex-row items-center">
				<Col md={6} className="mt-4 md:mt-0">
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
				</Col>
				<Col md={6} className="mt-4 md:mt-0">
					<img src="o11.jpg" alt="DekuSMS" className="rounded-lg shadow-lg img-fluid" />
				</Col>
			</section>

			{/*========================= Our Partner Section =================================*/}
			<Row className="my-4">
				<Col md={12} sm={8}>
					<Partner />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
