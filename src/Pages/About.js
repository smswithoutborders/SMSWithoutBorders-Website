import React, { useState } from "react";
import "../index.css";

function Project() {
	const [searchTerm, setSearchTerm] = useState("");
	const [activeFilter, setActiveFilter] = useState("all");

	const projects = [
		{
			location: "Blog",
			category: "Blog",
			title: "Resilience: The Key to Overcoming Challenges",
			description:
				"Learn how resilience can help you overcome personal and professional challenges.",
			image: "/resilience.jpg",
			link: "https://blog.smswithoutborders.com/posts/resilience"
		},
		{
			location: "Blog",
			category: "Blog",
			title: "New Device ID Registration Feature",
			description:
				"Discover the new feature that expands user control with device ID registration.",
			image: "/ID.jpg",
			link: "https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
		},
		{
			location: "Blog",
			category: "Blog",
			title: "Our Brand Rebranding",
			description: "We are excited to unveil our new brand identity and vision for the future.",
			image: "/rebrand.jpg",
			link: "https://blog.smswithoutborders.com/posts/rebranding"
		},
		{
			location: "Github, PlayStore",
			category: "Project",
			title: "RelaySMS",
			description:
				"Stay Connected Anywhere, Send emails, posts, and messages via SMS without an internet connection.",
			image: "/rebrand.jpg",
			link: "https://www.google.com/search?q=Athen"
		},
		{
			location: "Github, PlayStore",
			category: "Project",
			title: "DEKU SMS",
			description:
				"An open-source, end-to-end encrypted offline messaging application specifically designed for Android devices.",
			image: "/rebrand.jpg",
			link: "https://www.google.com/search?q=Athen"
		}
	];

	const categories = ["all", "blog", "project"];
	const filteredProjects = projects.filter(
		(project) =>
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(activeFilter === "all" || project.category.toLowerCase() === activeFilter)
	);

	return (
		<div className="App">
			<h1>SMSWithoutBorders Projects</h1>
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search__input"
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button className="search__button">
						<i className="fa fa-search"></i>
					</button>
				</div>

				{categories.map((category) => (
					<button
						key={category}
						className={`button ${activeFilter === category ? "--active" : ""}`}
						onClick={() => setActiveFilter(category)}
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</button>
				))}
			</div>

			<section className="grid">
				{filteredProjects.map((project) => (
					<a
						key={project.title}
						className="card"
						href={project.link}
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						<picture className="card__picture">
							<img className="card__image" src={project.image} alt={project.title} />
						</picture>
						<div className="card__content">
							<p className="card__location">{project.location}</p>
							<h3 className="card__title">{project.title}</h3>
							<p className="card__description">{project.description}</p>
						</div>
					</a>
				))}
			</section>
		</div>
	);
}

export default Project;
