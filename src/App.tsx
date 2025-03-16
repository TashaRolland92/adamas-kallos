import React from "react";
import Routes from "./routes/Routes";
import Header from "./components/Header";

const App: React.FC = () => {
	return (
		<>
			<Routes />
			<Header />
		</>
	);
};

export default App;