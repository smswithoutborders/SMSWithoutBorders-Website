import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import PageNotFound from "./Pages/PageNotFound";
import "./App.css";

function App() {
	return (
		<Router>
			<>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
			</>
		</Router>
	);
}

export default App;
