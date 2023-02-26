import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Contact, Gallery, Auth } from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/auth" element={<Auth />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
