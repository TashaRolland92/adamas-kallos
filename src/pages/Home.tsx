import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Intro />
		</>
	);
};

export default Home;