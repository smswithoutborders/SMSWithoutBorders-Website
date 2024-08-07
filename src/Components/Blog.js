import React from "react";

const BlogSection = () => {
	return (
		<div id="blog" className="bg-gray-100 px-4 xl:px-4">
			<div className="mx-auto container">
				<h1 className="font-bold mb-4 text-2xl md:text-4xl text-center">
					Our <span className="header-span text-2xl md:text-5xl">Blog Post</span>
				</h1>
				<div tabIndex="0" aria-label="Group of cards" className="focus:outline-none mt-10 lg:mt-5">
					<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
						{/* ==== first blog=============== */}
						<div tabIndex="0" className="focus:outline-none" aria-label="card 1">
							<div
								tabIndex="0"
								className="focus:outline-none py-10 h-full flex flex-col"
								aria-label="card 5"
							>
								<img
									tabIndex="0"
									role="img"
									aria-label="Future plans"
									className="focus:outline-none w-full"
									src="vault2.png"
									alt="Future plans"
								/>
								<div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
									<p
										tabIndex="0"
										className="focus:outline-none text-sm text-white font-semibold tracking-wide"
									>
										Promise Fru
									</p>
									<p
										tabIndex="0"
										className="focus:outline-none text-sm text-white font-semibold tracking-wide"
									>
										June 28, 2024
									</p>
								</div>
								<div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl flex flex-col flex-grow">
									<h1
										tabIndex="0"
										className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
									>
										New Alpha Release: Vault 0.1.0
									</h1>
									<p
										tabIndex="0"
										className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 tracking-wide mt-2"
									>
										SMSWithoutBorders Vault 0.1.0 is Now Available in Alpha Release! The Vault is a
										technology developed by the SMSWithoutBorders team to secure users access tokens
										and facilitate the secure usage of these tokens for publishing users messages.
									</p>
									<div className="w-full flex justify-end mt-auto">
										<a
											href="https://blog.smswithoutborders.com/releases/vault-0-1-0"
											className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 flex items-center cursor-pointer"
											target="_blank"
											rel="noopener noreferrer"
										>
											<button className="flex items-center">
												<span className="text-base tracking-wide text-indigo-700">Read more</span>
												<svg
													className="ml-3 lg:ml-6 text-indigo-700"
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="18"
													viewBox="0 0 20 18"
													fill="none"
												>
													<path
														d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
													<path
														d="M1 8.53662H19"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
								{/* second blog */}
								<div
									tabIndex="0"
									className="focus:outline-none h-full flex flex-col"
									aria-label="card 2"
								>
									<img
										tabIndex="0"
										role="img"
										aria-label="DekuSMS overview"
										className="focus:outline-none w-full"
										src="ID.jpg"
										alt="DekuSMS overview"
									/>
									<div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
										<p
											tabIndex="0"
											className="focus:outline-none  text-sm text-white font-semibold tracking-wide"
										>
											Aysha Musa
										</p>
										<p
											tabIndex="0"
											className="focus:outline-none text-sm text-white font-semibold tracking-wide"
										>
											July 1, 2024
										</p>
									</div>
									<div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl flex flex-col flex-grow">
										<h1
											tabIndex="0"
											className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
										>
											RelaySMS Expands User Control with Device ID Registrations
										</h1>
										<p
											tabIndex="0"
											className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 tracking-wide mt-2"
										>
											RelaySMS (swob app) introduces a powerful new feature: Device ID Registration
											with RelaySMS Vault! This innovative approach gives you more control over your
											offline messaging experience.
										</p>
									</div>
								</div>
								{/* third blog */}
								<div
									tabIndex="0"
									className="focus:outline-none h-full flex flex-col"
									aria-label="card 3"
								>
									<img
										tabIndex="0"
										role="img"
										aria-label="SWOB updates"
										className="focus:outline-none w-full"
										src="resilience.jpg"
										alt="SWOB updates"
									/>
									<div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
										<p
											tabIndex="0"
											className="focus:outline-none text-sm text-white font-semibold tracking-wide"
										>
											Aysha Musa
										</p>
										<p
											tabIndex="0"
											className="focus:outline-none text-sm text-white font-semibold tracking-wide"
										>
											April 16, 2024
										</p>
									</div>
									<div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl flex flex-col flex-grow">
										<h1
											tabIndex="0"
											className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
										>
											Resilience Of Gateway Clients In SMSWithoutBorders
										</h1>
										<p
											tabIndex="0"
											className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 tracking-wide mt-2"
										>
											SMSWithoutBorders is pleased to announce a significant advancement in
											message-forwarding functionalities for its gateway clients.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
								{/* fourth blog */}
								<div
									tabIndex="0"
									className="focus:outline-none h-full flex flex-col"
									aria-label="card 4"
								>
									<img
										tabIndex="0"
										role="img"
										aria-label="User stories"
										className="focus:outline-none w-full"
										src="relia.jpg"
										alt="User stories"
									/>
									<div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
										<p
											tabIndex="0"
											className="focus:outline-none text-sm text-white font-semibold tracking-wide"
										>
											Aysha Musa
										</p>
										<p
											tabIndex="0"
											className="focus:outline-none text-sm text-white font-semibold tracking-wide"
										>
											April 5, 2024
										</p>
									</div>
									<div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl flex flex-col flex-grow">
										<h1
											tabIndex="0"
											className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
										>
											Reliability Of Gateways In The Swob Ecosystem
										</h1>
										<p
											tabIndex="0"
											className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 tracking-wide mt-2"
										>
											SMSWithoutBorders focuses on the reliability of gateways, which act as the
											conduits between users offline environments and the online communication
											channels.
										</p>
									</div>
								</div>
								{/* fifth blog */}
								<div
									tabIndex="0"
									className="focus:outline-none h-full flex flex-col"
									aria-label="card 5"
								>
									<img
										tabIndex="0"
										role="img"
										aria-label="Tech updates"
										className="focus:outline-none w-full"
										src="rebrand.jpg"
										alt="Tech updates"
									/>
									<div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
										<p
											tabIndex="0"
											className="focus:outline-none text-sm text-white font-semibold tracking-wide"
										>
											Aysha Musa
										</p>
										<p
											tabIndex="0"
											className="focus:outline-none text-sm text-white font-semibold tracking-wide"
										>
											June 27, 2024
										</p>
									</div>
									<div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl flex flex-col flex-grow">
										<h1
											tabIndex="0"
											className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
										>
											Rebranding
										</h1>
										<p
											tabIndex="0"
											className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 tracking-wide mt-2"
										>
											SMSWithoutBorders itself is becoming the umbrella project encompassing
											RelaySMS and other messaging tools. The core functionality remains the same,
											but users can expect a new name, enhanced security features, and a focus on
											future growth under the SMSWithoutBorders project.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
