import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Offers from "../pages/Offers";
import Treatments from "../pages/Treatments";
import BeautyTreatments from "../pages/BeautyTreatments";
import Waxing from "../pages/Waxing";
import Massages from "../pages/Massages";
import Facials from "../pages/Facials";
import LaserTreatments from "../pages/LaserTreatments";
import AestheticTreatments from "../pages/AestheticTreatments";
import BodySculpting from "../pages/BodySculpting";
import HairLoss from "../pages/HairLoss";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/offers" element={<Offers />} />
			<Route path="/treatments" element={<Treatments />} />
			<Route path="/beauty-treatments" element={<BeautyTreatments />} />
			<Route path="/waxing" element={<Waxing />} />
			<Route path="/massages" element={<Massages />} />
			<Route path="/facials" element={<Facials />} />
			<Route path="/laser-treatments" element={<LaserTreatments />} />
			<Route path="/aesthetic-treatments" element={<AestheticTreatments />} />
			<Route path="/body-sculpting" element={<BodySculpting />} />
			<Route path="/hair-loss" element={<HairLoss />} />
			<Route path="/booking" element={<Booking />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default AppRoutes;
