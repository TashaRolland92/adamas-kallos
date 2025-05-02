import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import BookAppointment from "../components/BookAppointment";

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Intro />
			<BookAppointment />
		</>
	);
};

export default Home;