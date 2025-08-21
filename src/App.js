import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import PageNotFound from "./Pages/PageNotFound";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Privacy from "./Pages/Privacy";
import Footer from "./Components/Footer";

const theme = createTheme();

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="*" element={<PageNotFound />} />
						<Route path="/privacy-policy/" element={<Privacy />} />
					</Routes>
				</div>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
