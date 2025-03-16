import React from "react";
import Routes from "./routes/Routes";
import Nav from "./components/Nav";

const App: React.FC = () => {
	return (
		<>
			<Routes />
			<Nav />
		</>
	);
};

export default App;