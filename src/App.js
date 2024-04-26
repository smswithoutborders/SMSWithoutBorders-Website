import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //
import Landing from "./Pages/Landing";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MobileNav from "./Components/MobileNav";
import PageNotFound from "./Pages/PageNotFound";
import Loader from "./Components/Loader";

const darkTheme = createTheme({
	palette: {
		mode: "dark"
	}
});

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{loading ? (
				<div className="loader">
					<Loader />
				</div>
			) : (
				<Router>
					<Nav />
					<MobileNav />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
					<Footer />
				</Router>
			)}
		</ThemeProvider>
	);
}

export default App;
