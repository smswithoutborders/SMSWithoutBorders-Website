import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Project from "../Components/Project";
import Partner from "../Components/Partner";
import About from "../Components/About";

function Landing() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Project />
			<Partner />
		</>
	);
}

export default Landing;
