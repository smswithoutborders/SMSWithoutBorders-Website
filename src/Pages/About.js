import React, { useState } from "react";
import "../index.css";

function Project() {
	const [searchTerm, setSearchTerm] = useState("");
	const [activeFilter, setActiveFilter] = useState("all");

	const projects = [];

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
