import axios from "axios";
import React, { useState, useEffect } from "react";

const Nav: React.FC = () => {
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/categories`);
				console.log("Fetch categories:", data);
				setCategories(data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		fetchCategories();
	}, []);

	return (
		<>
			{categories}
		</>
	);
};

export default Nav;