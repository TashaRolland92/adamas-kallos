import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
	const navItems = [
		"Home",
		"About",
		"Treatments",
		"Offers",
		"Contact",
		"Book Online"
	];

	const toggleMobileMenu = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<nav className="playfair-600 uppercase text-lg">
			{/* Desktop Menu */}
			<ul className="hidden lg:flex gap-6 group">
				<li className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100">
					<NavLink to="/about">About</NavLink>
				</li>
				<li
					className="relative transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100"
					onMouseEnter={() => setHoveredMenu("treatments")}
					onMouseLeave={() => setHoveredMenu(null)}
				>
					<span className="cursor-pointer">Treatments</span>
					<ul className={`absolute left-0 top-full bg-white shadow-lg p-2 ${hoveredMenu === "treatments" ? "block" : "hidden"}`}>
						<li><NavLink to="/beauty-treatments">Beauty Treatments</NavLink></li>
						<li><NavLink to="/waxing">Waxing</NavLink></li>
						<li><NavLink to="/massages">Massages</NavLink></li>
						<li><NavLink to="/facials">Facials</NavLink></li>
					</ul>
				</li>
				<li className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100">
					<NavLink to="/offers">Offers</NavLink>
				</li>
				<li className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100">
					<NavLink to="/contact">Contact</NavLink>
				</li>
				<li>|</li>
				<li
					className="relative transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100"
					onMouseEnter={() => setHoveredMenu("booking")}
					onMouseLeave={() => setHoveredMenu(null)}
				>
					<span className="cursor-pointer">Book Online</span>
					<ul className={`absolute left-0 top-full bg-white shadow-lg p-2 ${hoveredMenu === "booking" ? "block" : "hidden"}`}>
						<li><NavLink to="/booking">Book Now</NavLink></li>
						<li><NavLink to="/contact">Call Us</NavLink></li>
					</ul>
				</li>
			</ul>

			{/* Mobile Menu Button */}
			<button onClick={toggleMobileMenu} className="lg:hidden flex flex-col justify-between w-8 h-6 relative z-30">
				<div className={`bg-primaryContent h-1 w-full transition-transform duration-500 ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
				<div className={`bg-primaryContent h-1 w-full transition-opacity duration-500 ${mobileOpen ? "opacity-0" : ""}`}></div>
				<div className={`bg-primaryContent h-1 w-full transition-transform duration-500 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
			</button>

			{/* Mobile Menu Overlay */}
			<div className={`z-20 fixed inset-0 bg-babyblue transition-transform duration-700 ${mobileOpen ? "translate-x-0" : "translate-x-full"} flex flex-col lg:hidden`}>
				<ul className="p-5 text-2xl playfair-600 uppercase text-primaryContent">
					{navItems.map((item, index) => (
						<li key={index}>
							<NavLink to={`/${item.toLowerCase().replace(/ /g, "-")}`} onClick={toggleMobileMenu} className="block mt-2.5 mb-2.5">
								{item}
							</NavLink>
							{index !== navItems.length - 1 && (
								<div className={`h-[1px] bg-primaryContent transition-width duration-[2000ms] ${mobileOpen ? "w-full" : "w-0"}`}></div>
							)}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;