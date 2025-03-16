import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Reusable NavLink Component
const NavLinkItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
	<NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
		{children}
	</NavLink>
);

const Nav: React.FC = () => {
	return (
		<nav>
			<ul>
				<li><NavLinkItem to="/">Home</NavLinkItem></li>
				<li><NavLinkItem to="/about">About</NavLinkItem></li>
				<li>
					Treatments
					<ul>
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
				<li><NavLinkItem to="/booking">Book Online</NavLinkItem></li>
				<li><NavLinkItem to="/offers">Offers</NavLinkItem></li>
				<li><NavLinkItem to="/contact">Contact</NavLinkItem></li>
			</ul>
		</nav>
	);
};

export default Nav;