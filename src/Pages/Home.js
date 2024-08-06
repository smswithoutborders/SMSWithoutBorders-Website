import React, { useEffect } from "react";
import About from "../Pages/About";
import Partner from "../Components/partner";
import { Link } from "react-router-dom";
import "../App.css";
import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import AOS from "aos";

function Home() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<>
			{/* ========= Header Caption ================ */}
			<header className="py-16 bg-blue-600 text-white text-center">
				<h1 className="text-4xl font-bold">
					What Information is the Swob Website Putting Out There?
				</h1>
			</header>

			<div className="w-full lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
				{/*======================= About Swob ================================*/}
				<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">
					SWOB
				</h1>
				<section id="about-swob" className="flex flex-col lg:flex-row justify-between gap-8 py-12">
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
							About Swob
						</h1>
						<p className="font-normal text-base leading-6 text-gray-600">
							SMSWithoutBorders is an overarching project dedicated to developing and promoting
							secure, accessible communication tools that function even without an internet
							connection. This initiative encompasses two primary applications:
							<ul className="list-disc ml-5 mt-3">
								<li>
									<strong>RelaySMS</strong>: A user-friendly app that allows you to send messages
									across your favorite platforms, even offline.
								</li>
								<li>
									<strong>DekuSMS</strong>: An open-source, end-to-end encrypted offline messaging
									application for Android devices.
								</li>
							</ul>
						</p>
						<div>
							<Link to="/AboutSwob">
								<button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
									Read More
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full lg:w-8/12">
						<img className="w-full h-full" src="assets/img/portfolio/about-us.jpg" alt="About Us" />
					</div>
				</section>
				<Partner />

				{/*======================= Our Journey ================================*/}
				<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">
					Our Journey: From an App to a Project
				</h1>
				<section id="our-journey" className="py-12 bg-gray-50">
					<div className="text-center text-gray-600">
						<p>
							SMSWithoutBorders began as a single application focused on offline messaging. As our
							vision expanded, it evolved into a comprehensive project. We now offer a suite of
							tools, including RelaySMS and DekuSMS, to enhance communication accessibility and
							security.
						</p>
					</div>
				</section>
				{/*======================= Features ================================*/}

				<section id="features" className="py-12 bg-gray-100">
					<div className="container mx-auto">
						<div className="flex flex-wrap justify-center">
							<div className="w-full md:w-1/3 px-4 mb-8">
								<div className="p-8 bg-white shadow-md rounded-lg">
									<i className="bi bi-shield-lock-fill text-blue-600 text-4xl mb-4"></i>
									<h4 className="text-2xl font-bold mb-2">Secure Communication</h4>
									<p className="text-gray-700">
										Both RelaySMS and DekuSMS prioritize robust security measures to protect your
										data and privacy.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/3 px-4 mb-8">
								<div className="p-8 bg-white shadow-md rounded-lg">
									<i className="bi bi-wifi-off text-blue-600 text-4xl mb-4"></i>
									<h4 className="text-2xl font-bold mb-2">Offline Messaging</h4>
									<p className="text-gray-700">
										Our tools ensure you can communicate even in areas without internet access.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/3 px-4 mb-8">
								<div className="p-8 bg-white shadow-md rounded-lg">
									<i className="bi bi-lightbulb-fill text-blue-600 text-4xl mb-4"></i>
									<h4 className="text-2xl font-bold mb-2">Open Source</h4>
									<p className="text-gray-700">
										Our commitment to open-source principles fosters innovation and transparency.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*======================= About RelaySMS ================================*/}
				<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">
					RelaySMS
				</h1>
				<section
					id="about-relaysms"
					className="flex flex-col lg:flex-row justify-between gap-8 py-12"
				>
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
							About RelaySMS
						</h1>
						<p className="font-normal text-base leading-6 text-gray-600">
							RelaySMS is a versatile messaging app that lets you send messages across various
							platforms, even when you are offline. Designed with user-friendliness in mind, it
							provides a seamless experience for staying connected without relying on an internet
							connection.
						</p>
						<div>
							<Link to="/AboutRelaySMS">
								<button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
									Read More
								</button>
							</Link>
						</div>
					</div>
					<div className="w-full lg:w-8/12">
						<img
							className="w-full h-full"
							src="assets/img/portfolio/relaysms.jpg"
							alt="About RelaySMS"
						/>
					</div>
				</section>

				{/*======================= Projects Section ================================*/}
				<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">
					Swob Project
				</h1>
				<section id="Project" className=" py-12">
					<About />
				</section>

				{/*======================= About DekuSMS ================================*/}
				<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">
					About DekuSMS
				</h1>
				<section className="section about-section" id="about-dekusms" data-aos="fade-up">
					<div className="thumbnail">
						<img className="left" src="/Deku.png" alt="deku logo" />
					</div>
					<div className="right">
						<h1>DEKU SMS</h1>

						<div className="separator"></div>
						<p>
							DekuSMS is an open-source, end-to-end encrypted offline messaging application for
							Android devices. It offers secure communication by ensuring that your messages are
							protected from unauthorized access, even without internet connectivity. This makes it
							an ideal choice for areas with limited or no internet access....
						</p>
						<ul>
							<li>
								<i className="fa fa-eye fa-2x"></i>
							</li>
							<li>
								<i className="fa fa-heart-o fa-2x"></i>
							</li>
							<li>
								<i className="fa fa-envelope-o fa-2x"></i>
							</li>
							<li>
								<i className="fa fa-share-alt fa-2x"></i>
							</li>
						</ul>
					</div>
				</section>
				{/* ============================= */}
			</div>
		</>
	);
}

export default Home;
