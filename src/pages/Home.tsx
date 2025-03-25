import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: React.FC = () => {
	const [entries, setEntries] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	return (
		<>
			<Header />
			<Hero />
		</>
	);
};

export default Home;