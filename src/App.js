// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import PageNotFound from "./Pages/PageNotFound";
import Footer from "./Components/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

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
					</Routes>
					<Footer />
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
