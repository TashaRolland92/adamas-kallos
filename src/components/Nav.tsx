import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hoveredMenu, setHoveredMenu] = useState<string | null>("treatments");

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
		<nav className="relative playfair-600 uppercase text-lg">
			{/* Desktop Menu */}
			<ul className="hidden lg:flex gap-6 group items-center">
				<li className="transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100">
					<NavLink to="/" className="flex items-center h-20">Home</NavLink>
				</li>
				<li className="transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100">
					<NavLink to="/about" className="flex items-center h-20">About</NavLink>
				</li>
				<li
					className="transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100"
					onMouseEnter={() => setHoveredMenu("treatments")}
					onMouseLeave={() => setHoveredMenu(null)}
				>
					<span className="cursor-pointer flex items-center h-20">Treatments</span>
					{/* ORIGINAL hoveredMenu ternary ${hoveredMenu === "treatments" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"} */}
					<div className={`
						submenu-container
						fixed
						left-0
						right-0
						w-screen
						bg-babyblue
						text-primaryContent
						shadow-lg
						transition-opacity
						duration-300
						ease-in-out
						transform
						${hoveredMenu === "treatments" ? "opacity-100 visible translate-y-0" : "opacity-100 visible translate-y-0"}
					`}>
						<div className="submenu w-full px-5 py-10 grid grid-cols-3 gap-x-2.5">
							<NavLink to="/beauty-treatments" className="pb-2.5">Beauty Treatments</NavLink>
							<NavLink to="/waxing" className="border-l border-r border-primaryContent pl-2.5 pb-2.5">Waxing</NavLink>
							<NavLink to="/massages" className="pb-2.5">Massages</NavLink>
							<NavLink to="/facials" className="pb-2.5">Facials</NavLink>
							<NavLink to="/laser-treatments" className="border-l border-r border-primaryContent pl-2.5 pb-2.5">Laser Treatments</NavLink>
							<NavLink to="/aesthetic-treatments" className="pb-2.5">Aesthetic Treatments</NavLink>
							<NavLink to="/body-sculplting" className="pb-2.5">Body Sculpting</NavLink>
							<NavLink to="/hair-loss" className="border-l border-r border-primaryContent pl-2.5 pb-2.5">Hair Loss</NavLink>
						</div>
					</div>
				</li>
				<li className="transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100">
					<NavLink to="/offers" className="flex items-center h-20">Offers</NavLink>
				</li>
				<li className="transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100">
					<NavLink to="/contact" className="flex items-center h-20">Contact</NavLink>
				</li>
				<li>|</li>
				<li
					className="relative transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100"
					onMouseEnter={() => setHoveredMenu("booking")}
					onMouseLeave={() => setHoveredMenu(null)}
				>
					<span className="cursor-pointer flex items-center h-20">Book Online</span>
					<ul className={`absolute left-0 top-full bg-babyblue text-primaryContent shadow-lg p-2 ${hoveredMenu === "booking" ? "block" : "hidden"}`}>
						<li><NavLink to="/booking">Book Now</NavLink></li>
						<li><NavLink to="/contact">Call Us</NavLink></li>
					</ul>
				</li>
			</ul>

			{/* Mobile Menu Button */}
			<button onClick={toggleMobileMenu} className="lg:hidden flex flex-col justify-between w-8 h-6 relative z-30">
				<div className={`h-1 w-full transition-transform duration-500 ${mobileOpen ? "bg-primaryContent rotate-45 translate-y-2.5" : "bg-white"}`}></div>
				<div className={`h-1 w-full transition-opacity duration-500 ${mobileOpen ? "bg-primaryContent opacity-0" : "bg-white"}`}></div>
				<div className={`h-1 w-full transition-transform duration-500 ${mobileOpen ? "bg-primaryContent -rotate-45 -translate-y-2.5" : "bg-white"}`}></div>
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
								<div className={`border border-primaryContent transition-width duration-[2000ms] ${mobileOpen ? "w-full" : "w-0"}`}></div>
							)}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;