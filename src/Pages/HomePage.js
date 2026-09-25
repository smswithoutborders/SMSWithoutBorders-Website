import React from "react";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import Project from "../Components/Project";
import Partner from "../Components/Partner";
import Seo from "../Components/Seo";

function HomePage() {
	return (
		<>
			<Seo
				title="SMSWithoutBorders | Open-Source Internet Freedom & Anti-Censorship Tools"
				description="Researching, developing and promoting secure and accessible communication tools that function even without an internet connection."
				path="/"
			/>
			<Navbar />
			<Landing />
			<Project />
			<Partner />
		</>
	);
}

export default HomePage;
