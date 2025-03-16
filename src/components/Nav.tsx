import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../api/categories";

interface Category {
	id: number;
	name: string;
}

// Reusable NavLink Component
const NavLinkItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
	<NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
		{children}
	</NavLink>
);

const Nav: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const data = await getCategories();
				setCategories(data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		fetchCategories();
	}, []);

	return (
		<nav>
			<ul>
				<li><NavLinkItem to="/">Home</NavLinkItem></li>
				<li>
					Treatments
					<ul>
						{categories.map((category) => (
							<li key={category.id}>
								<NavLinkItem to={`/categories/${category.id}`}>{category.name}</NavLinkItem>
							</li>
						))}
					</ul>
				</li>
				<li><NavLinkItem to="/booking">Book Online</NavLinkItem></li>
				<li><NavLinkItem to="/contact">Contact</NavLinkItem></li>
			</ul>
		</nav>
	);
};

export default Nav;