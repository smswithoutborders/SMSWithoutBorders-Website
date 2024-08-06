import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "tailwindcss/tailwind.css";
import "../App.css";

const Project = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredItems =
		selectedCategory === "All"
			? portfolioItems
			: portfolioItems.filter((item) => item.category === selectedCategory);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const portfolioItems = [
		{ img: "app1.jpg", title: "App 1", category: "App" },
		{ img: "web3.jpg", title: "Web 3", category: "Web" },
		{ img: "app2.jpg", title: "App 2", category: "App" },
		{ img: "card2.jpg", title: "Card 2", category: "Card" },
		{ img: "web2.jpg", title: "Web 2", category: "Web" },
		{ img: "app3.jpg", title: "App 3", category: "App" },
		{ img: "card1.jpg", title: "Card 1", category: "Card" },
		{ img: "card3.jpg", title: "Card 3", category: "Card" },
		{ img: "web1.jpg", title: "Web 1", category: "Web" }
	];

	return (
		<Container className="py-5" data-aos="fade-up">
			<section id="portfolio" className="bg-gray-100 py-12">
				<div className="container mx-auto px-4" data-aos="fade-up">
					<header className="text-center mb-8">
						<h3 className="text-3xl font-bold">Our Portfolio</h3>
					</header>
					<div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
						<ul className="flex justify-center space-x-4">
							<li
								onClick={() => setSelectedCategory("All")}
								className={`cursor-pointer ${selectedCategory === "All" ? "text-blue-500 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
							>
								All
							</li>
							<li
								onClick={() => setSelectedCategory("Blog")}
								className={`cursor-pointer ${selectedCategory === "Blog" ? "text-blue-500 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
							>
								Blog
							</li>
							<li
								onClick={() => setSelectedCategory("Projects")}
								className={`cursor-pointer ${selectedCategory === "Projects" ? "text-blue-500 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
							>
								Projects
							</li>
							<li
								onClick={() => setSelectedCategory("Web")}
								className={`cursor-pointer ${selectedCategory === "Web" ? "text-blue-500 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
							>
								Websites
							</li>
						</ul>
					</div>
					<div className="flex flex-wrap -m-4" data-aos="fade-up" data-aos-delay="200">
						{filteredItems.map((item, index) => (
							<div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
								<div className="bg-white rounded-lg shadow-lg overflow-hidden">
									<figure className="relative">
										<img
											src={`assets/img/portfolio/${item.img}`}
											alt={item.title}
											className="w-full h-64 object-cover"
										/>
										<a
											href={`assets/img/portfolio/${item.img}`}
											className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
										>
											<i className="bi bi-plus text-2xl"></i>
										</a>
										<a
											href="portfolio-details.html"
											className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg text-blue-500"
										>
											<i className="bi bi-link"></i>
										</a>
									</figure>
									<div className="p-4 text-center">
										<h4 className="text-xl font-semibold">
											<a href="portfolio-details.html">{item.title}</a>
										</h4>
										<p className="text-gray-500">{item.category}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Project;
