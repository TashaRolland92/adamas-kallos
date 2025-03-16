import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Nav from "./components/Nav";

const App: React.FC = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/treatments" element={<Treatments />} />
				<Route path="/booking" element={<Booking />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
};

export default App;