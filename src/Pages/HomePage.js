import React from "react";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import Project from "../Components/Project";
import Partner from "../Components/Partner";

function HomePage() {
	return (
		<>
			<Navbar />
			<Landing />
			<Project />
			<Partner />
		</>
	);
}

export default HomePage;
