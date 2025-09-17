import React from "react";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import Project from "../Components/Project";
import Partner from "../Components/Partner";
import About from "../Components/About";

function HomePage() {
	return (
		<>
			<Navbar />
			<Landing />
			<About />
			<Project />
			<Partner />
		</>
	);
}

export default HomePage;
