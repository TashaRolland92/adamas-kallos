import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Reusable NavLink Component
const NavLinkItem: React.FC<{ to: string; children: React.ReactNode }> = ({
	to,
	children,
}) => {
	const handleClick = (e: React.MouseEvent) => {
		if (!to) {
			e.preventDefault();
		}
	};

	return(
		<NavLink
			to={to || ""}
			onClick={handleClick}
			className={({ isActive }) =>
				`transition-opacity duration-300 group-hover:opacity-50 group-hover:hover:opacity-100 hover:opacity-100 ${isActive ? "active" : ""
				}`
			}>
			{children}
		</NavLink>
	);
};

const Nav: React.FC = () => {
	return (
		<nav className="group">
			<ul className="flex flex-row gap-x-4 flex-wrap playfair-600 uppercase text-lg">
				<li><NavLinkItem to="/">Home</NavLinkItem></li>
				<li><NavLinkItem to="/about">About</NavLinkItem></li>
				<li>
					<NavLinkItem to={''}>Treatments</NavLinkItem>
					<ul className="absolute hidden">
						<li><NavLinkItem to={'/beauty-treatments'}>Beauty Treatments</NavLinkItem></li>
						<li><NavLinkItem to={'/waxing'}>Waxing</NavLinkItem></li>
						<li><NavLinkItem to={'/massages'}>Massages</NavLinkItem></li>
						<li><NavLinkItem to={'/facials'}>Facials</NavLinkItem></li>
						<li><NavLinkItem to={'/laser-treatments'}>Laser Treatments</NavLinkItem></li>
						<li><NavLinkItem to={'/aesthetic-treatments'}>Aesthetic Treatments</NavLinkItem></li>
						<li><NavLinkItem to={'/body-sculpting'}>Body Sculpting</NavLinkItem></li>
						<li><NavLinkItem to={'/hair-loss'}>Hair Loss</NavLinkItem></li>
						<li><NavLinkItem to={'/treatments'}>All Treatments</NavLinkItem></li>
					</ul>
				</li>
				<li><NavLinkItem to="/offers">Offers</NavLinkItem></li>
				<li><NavLinkItem to="/contact">Contact</NavLinkItem></li>
				<li>|</li>
				<li><NavLinkItem to="/booking">Book Online</NavLinkItem></li>
			</ul>
		</nav>
	);
};

export default Nav;