import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import BookAppointment from "../components/BookAppointment";

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Hero className="h-screen">
				<h1 className="playfair-italic-700 text-6xl sm:text-8xl md:text-9xl">Adamas</h1>
				<h2 className="playfair-italic-700 text-4xl sm:text-6xl lg:text-8xl mb-2">Kallos</h2>
				<h3 className="playfair uppercase text-2xl sm:text-4xl lg:6xl">Diamond Beauty</h3>
			</Hero>
			<Intro />
			<BookAppointment />
		</>
	);
};

export default Home;