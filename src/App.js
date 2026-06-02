import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import FeaturesPage from "./Pages/Feature/FeaturesPage";
import PageNotFound from "./Pages/PageNotFound";
import { CssBaseline } from "@mui/material";
import Privacy from "./Pages/Privacy";
import Footer from "./Components/Footer";
import ResearchPage from "./Pages/ResearchPage";
import PaperReader from "./Pages/PaperReader";

function App() {
	return (
		<Router>
			<CssBaseline />
			<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/features" element={<FeaturesPage />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="/privacy-policy/" element={<Privacy />} />
					<Route path="/research" element={<ResearchPage />} />
					<Route path="/research/:id" element={<PaperReader />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
