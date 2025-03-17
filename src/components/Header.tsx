import React from "react";
import Nav from "../components/Nav";

const Header: React.FC = () => {
	return (
		<header className="fixed top-0 left-0 w-full h-14 bg-babyblue">
			<h1 className="playfair-italic-700 text-2xl">Logo goes here</h1>
			<Nav />
		</header>
	);
};

export default Header;