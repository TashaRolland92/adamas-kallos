import React, { useState, useEffect } from "react";
import { fetchNavigation } from "../services/contentfulNav";
import { NavigationLink } from "../types/contentful";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
	const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

	const [navItems, setNavItems] = useState<NavigationLink[] | null>(null);
	const [hoveredImage, setHoveredImage] = useState<string | null>(null);
	const [hoveredImageTitle, setHoveredImageTitle] = useState<string | null>(null);
	const [hoveredImageDesc, setHoveredImageDesc] = useState<string | null>(null);

	const toggleMobileMenu = () => {
		setMobileOpen(!mobileOpen);
	};

	const toggleMobileDropdown = (id: string) => {
		setMobileDropdown(mobileDropdown === id ? null : id);
	};

    const getSubmenuDetails = (item: NavigationLink | NavigationLink["fields"]["dropdownItems"][0]) => {
        return {
            imageUrl: item.fields.imageUrl, // Direct access to imageUrl string
            imageTitle: item.fields.imageTitle || null,
            imageDescription: item.fields.imageDescription || null,
        };
    };

	useEffect(() => {
		const getNavigation = async () => {
			const navigation = await fetchNavigation();
			if (navigation) {
				const fetchedNavItems = navigation.fields.navItems as unknown as NavigationLink[];
				setNavItems(fetchedNavItems);
				// console.log('use effect:', fetchedNavItems);
                if (fetchedNavItems && fetchedNavItems.length > 0 && fetchedNavItems[0].fields.dropdownItems && fetchedNavItems[0].fields.dropdownItems.length > 0) {
                    const submenuDetails = getSubmenuDetails(fetchedNavItems[0].fields.dropdownItems[0]);
					setHoveredImage(submenuDetails.imageUrl);
					setHoveredImageTitle(submenuDetails.imageTitle);
					setHoveredImageDesc(submenuDetails.imageDescription);
				}
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
						className="relative text-white text-xl"
						onMouseEnter={() => {
							setHoveredDropdown(item.sys.id); // Set hovered dropdown ID
						}}
						onMouseLeave={() => {
							setHoveredDropdown(null); // Clear hovered dropdown ID
						}}
					>
						{item.fields.dropdownItems ? (
							<span className="relative flex items-center h-20 cursor-pointer transition-transform duration-200 transform scale-100 hover:scale-105">
								{item.fields.title}
							</span> // non-clickable link
						) : (
							<NavLink to={item.fields.slug} className="flex items-center h-20 transition-transform duration-200 transform scale-100 hover:scale-105">{item.fields.title}</NavLink>
						)}
						{item.fields.dropdownItems && (
							<ul>
								<div className={`
									submenu-container
									fixed
									left-0
									right-0
									w-screen
									bg-babyblue/70
									text-primaryContent
									shadow-lg
									transition-max-height
									duration-500
									ease-in-out
									overflow-hidden
									grid grid-cols-3 gap-x-2.5
									${hoveredDropdown === item.sys.id ? "max-h-[500px]" : "max-h-0"}
								`}>
									<div className="submenu w-full px-5 py-10">
										{item.fields.dropdownItems.map((dropdownItem) => (
											<li key={dropdownItem.sys.id} className="mb-2.5">
												<NavLink to={dropdownItem.fields.slug} className="block">{dropdownItem.fields.title}</NavLink>
											</li>
										))}
									</div>
									{/* Image, Title, and Description Display */}
									{hoveredImage && (
										<div className="col-span-2 w-full p-4">
											<img src={hoveredImage} alt="Hovered Nav Link" className="w-full h-32 object-cover mb-2" />
											{hoveredImageTitle && <h3 className="text-lg font-semibold">{hoveredImageTitle}</h3>}
											{hoveredImageDesc && <p className="text-sm">{hoveredImageDesc}</p>}
										</div>
									)}
								</div>
							</ul>
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
				flex
				flex-col
				lg:hidden
				${mobileOpen ? "translate-x-0" : "translate-x-full"}
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
									ml-4 mb-3 transition-max-height duration-500 ease-in-out overflow-hidden
									${mobileDropdown === item.sys.id ? "max-h-[500px]" : "max-h-0"}
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