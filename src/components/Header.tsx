import React from "react";
import Nav from "../components/Nav";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center absolute top-0 left-0 right-0 w-full h-20 z-10 px-5 text-white border-b border-babyblue">
			<h1 className="playfair-italic-700 text-2xl">Logo goes here</h1>
			<Nav />
		</header>
	);
};

export default Header;