import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Project from "../Components/Project";
import Partner from "../Components/Partner";
import Footer from "../Components/Footer";

function Landing() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Project />
			<Partner />
			<Footer />
		</>
	);
}

export default Landing;
