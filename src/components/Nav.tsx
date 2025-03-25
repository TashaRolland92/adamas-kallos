import React, { useState, useEffect } from "react";
import { fetchNavigation } from "../services/contentfulNav";
import { NavigationLink } from "../types/contentful";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
	const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
	const [navItems, setNavItems] = useState<NavigationLink[] | null>(null);

	const toggleMobileMenu = () => {
		setMobileOpen(!mobileOpen);
	};

	const toggleMobileDropdown = (id: string) => {
		setMobileDropdown(mobileDropdown === id ? null : id);
	};

	useEffect(() => {
		const getNavigation = async () => {
			const navigation = await fetchNavigation();
			if (navigation) {
				const fetchedNavItems = navigation.fields.navItems as unknown as NavigationLink[];
				setNavItems(fetchedNavItems);
			}
		};

		getNavigation();
	}, []);

	if (!navItems) {
        return <div>Loading...</div>; // Add loading state
    }

	return (
		<nav className="relative playfair-600 uppercase text-lg">
			{/* Desktop Menu */}
			<ul className="hidden lg:flex gap-6 items-center">
				{navItems.map((item) => (
                    <li
						key={item.sys.id}
						className="relative"
						onMouseEnter={() => setHoveredDropdown(item.sys.id)} // Set hovered dropdown ID
						onMouseLeave={() => setHoveredDropdown(null)} // Clear hovered dropdown ID
					>
						{item.fields.dropdownItems ? (
							<span className="relative flex items-center h-20 cursor-pointer">
								{item.fields.title}
							</span> // non-clickable link
						) : (
							<NavLink to={item.fields.slug} className="flex items-center h-20">{item.fields.title}</NavLink>
						)}

                        {item.fields.dropdownItems && (
							<div className={`
								submenu-container
								fixed
								left-0
								right-0
								w-screen
								bg-babyblue
								text-primaryContent
								shadow-lg
								transition-transform
								duration-300
								ease-in-out
								${hoveredDropdown === item.sys.id ? "block scale-100" : "hidden scale-90"}
							`}>
								<div className="submenu w-full px-5 py-10 grid grid-cols-3 gap-x-2.5">
									{item.fields.dropdownItems.map((dropdownItem) => (
										<li key={dropdownItem.sys.id}>
											<NavLink to={dropdownItem.fields.slug}>{dropdownItem.fields.title}</NavLink>
										</li>
									))}
								</div>
							</div>
                        )}
                    </li>
                ))}
			</ul>

			{/* Mobile Menu Button */}
			<button onClick={toggleMobileMenu} className="lg:hidden flex flex-col justify-between w-8 h-6 relative z-30">
				<div className={`h-1 w-full transition-transform duration-500 ${mobileOpen ? "bg-primaryContent rotate-45 translate-y-2.5" : "bg-white"}`}></div>
				<div className={`h-1 w-full transition-opacity duration-500 ${mobileOpen ? "bg-primaryContent opacity-0" : "bg-white"}`}></div>
				<div className={`h-1 w-full transition-transform duration-500 ${mobileOpen ? "bg-primaryContent -rotate-45 -translate-y-2.5" : "bg-white"}`}></div>
			</button>

			{/* Mobile Menu Overlay */}
			<div className={`
				z-20
				fixed
				inset-0
				bg-babyblue
				transition-transform
				duration-700
				${mobileOpen ? "translate-x-0" : "translate-x-full"}
				flex
				flex-col
				lg:hidden
			`}>
				<ul className="p-5 text-2xl playfair-600 uppercase text-primaryContent">
					{navItems.map((item) => (
						<li key={item.sys.id}>
							<div onClick={() => toggleMobileDropdown(item.sys.id)}>
								{item.fields.dropdownItems ? (
										<span className="cursor-pointer block mt-2.5 mb-2.5">
										{item.fields.title}
									</span> // non-clickable link
								) : (
									<NavLink
										to={item.fields.slug}
										onClick={toggleMobileMenu}
										className="block mt-2.5 mb-2.5"
									>
										{item.fields.title}
									</NavLink>
								)}
							</div>
							{item.fields.dropdownItems && (
								<ul className={`
									ml-4 mb-3
									${mobileDropdown === item.sys.id ? "block" : "hidden"}
								`}>
									{item.fields.dropdownItems.map((submenuItem) => (
										<li key={submenuItem.sys.id}>
											<NavLink to={submenuItem.fields.slug} onClick={toggleMobileMenu} className="block">
												{submenuItem.fields.title}
											</NavLink>
										</li>
									))}
								</ul>
							)}
							<div className={`border border-primaryContent transition-width duration-[2000ms] ${mobileOpen ? "w-full" : "w-0"}`}></div>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;