import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import PageNotFound from "./Pages/PageNotFound";
import Loader from "./Components/Loader";
import "./App.css";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			{loading ? (
				<Loader />
			) : (
				<>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
					<Footer />
				</>
			)}
		</Router>
	);
}

export default App;
