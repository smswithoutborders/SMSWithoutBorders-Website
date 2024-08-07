import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import About from "../Pages/About";
import Section from "../Pages/section";
import Partner from "../Components/partner";
import "../App.css";
import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Hom from "../Pages/Hom";

function Home() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="container-fluid mx-auto px-4">
			{/*=========================== Header Section ===========================================*/}

			<header className="bg-gray-800 text-yellow-300 flex justify-center items-center h-40 md:h-80">
				<h1 className="uppercase text-6xl md:text-4xl font-sans ">
					<span className="text-lg md:text-6xl">
						SMSWithout| <span className="text-highlight"> Borders</span>
					</span>
				</h1>
				<br />
				<span className="text-center section-subtitle justify-center items-center"> SWOB</span>
			</header>

			{/* ======================================================================================== */}

			<section className="text-gray-700 body-font border-t border-gray-200">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
						<img alt="feature" className="object-cover object-center h-auto w-80" src="/logo.png" />
					</div>
					<div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									SMSWithoutBorders
								</h2>
								<p className="leading-relaxed text-base">
									SMSWithoutBorders is an overarching project dedicated to developing and promoting
									secure, accessible communication tools that function even without an internet
									connection. This initiative encompasses two primary applications:
								</p>
								<a src="swob" className="mt-3 text-indigo-500 inline-flex items-center">
									Learn More on Swob
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">DekuSMS</h2>
								<p className="leading-relaxed text-base">
									An open-source, end-to-end encrypted offline messaging application for Android
									devices.
								</p>
								<a src="swob" className="mt-3 text-indigo-500 inline-flex items-center">
									Learn More on DekuSMS
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">RelaySMS</h2>
								<p className="leading-relaxed text-base">
									A user-friendly app that allows you to send messages across your favorite
									platforms, even offline.ronic four dollar toast vegan taxidermy. Gastropub indxgo
									juice poutine.
								</p>
								<a src="swob" className="mt-3 text-indigo-500 inline-flex items-center">
									Learn More one RelaySMS
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ========================================================================================= */}
			<div className="py-12 lg:py-16 lg:px-20 md:py-12 md:px-6">
				{/* =========================================About SWOB===================================== */}
				<section
					id="about-swob"
					className="flex flex-col lg:flex-row justify-between gap-8 py-12 bg-gray-100"
					data-aos="fade-up"
				>
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
						<Link to="/AboutSwob">
							<button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
								Read More
							</button>
						</Link>
					</div>
					<div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
						<img
							className="w-2/3 lg:w-4/4 h-auto rounded-md"
							src="/ab.svg"
							alt="Deku logo"
							data-aos="fade-right"
						/>
					</div>
				</section>

				{/*=============================== About RelaySMS============================== */}
				<section
					id="about-relaysms"
					className="flex flex-col lg:flex-row justify-between gap-8 py-12 bg-gray-100"
					data-aos="fade-left"
				>
					<div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
						<img
							className="w-2/3 lg:w-4/4 h-auto rounded-md"
							src="/o12.png"
							alt="Deku logo"
							data-aos="fade-left"
						/>
					</div>
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center lg:text-left">
							RelaySMS
						</h1>
						<p className="font-normal text-base leading-6 text-gray-600">
							RelaySMS is a versatile messaging app that lets you send messages across various
							platforms, even when you are offline. Designed with user-friendliness in mind, it
							provides a seamless experience for staying connected without relying on an internet
							connection.
						</p>
						<div className="text-center lg:text-left">
							<Link to="/AboutRelaySMS">
								<button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
									Read More
								</button>
							</Link>
						</div>
					</div>
				</section>

				{/*-===================================== About DekuSMS-================================================ */}
				<section
					className="flex flex-col lg:flex-row justify-between items-center gap-8 py-12 bg-gray-100"
					data-aos="fade-up"
				>
					<div className="w-full lg:w-7/12">
						<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
							About DekuSMS
						</h1>
						<p className="font-normal text-base leading-6 text-gray-600">
							DekuSMS is an open-source, end-to-end encrypted offline messaging application for
							Android devices. It offers secure communication by ensuring that your messages are
							protected from unauthorized access, even without internet connectivity...
						</p>
					</div>
					<div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
						<img
							className="w-2/3 lg:w-4/4 h-auto rounded-md"
							src="/o11.jpg"
							alt="Deku logo"
							data-aos="fade-up"
						/>
					</div>
				</section>

				{/* ====================================SWOB Projects ================================================*/}
				<section id="Project" className="py-12 bg-white" data-aos="fade-up">
					<Section />
				</section>

				{/* ====================================SWOB Projects ================================================*/}
				<section id="Project" className="py-12 bg-white" data-aos="fade-up">
					<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">
						Swob Project
					</h1>
					<About />
				</section>

				{/* ============================================================================== */}

				<Partner />

				<Hom />
			</div>
		</div>
	);
}

export default Home;
