import React from "react";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App: React.FC = () => {
	return (
		<>
			<Routes />
			<Header />
			<Hero />
		</>
	);
};

export default App;