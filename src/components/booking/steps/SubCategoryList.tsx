import React, { useEffect, useState } from 'react';
import { getSubCategories } from '../../../api/subcategories';

type SubCategory = {
	id: number,
	name: string,
	category_id: number,
};

type SubCategoryListProps = {
	categoryId: number;
	onSelectSubcategory: (subcategoryId: number) => void;
};

const SubCategoryList = ({ categoryId, onSelectSubcategory }: SubCategoryListProps) => {
	const [subcategories, setSubCategories] = useState<SubCategory[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setSubCategories([]); // Clear old subcategories immediately
		setLoading(true);

		const fetchSubCategories = async () => {
			try {
				const response = await getSubCategories(categoryId);
				setSubCategories(response);
			} catch (error) {
				console.log("Error fetching subcategories:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchSubCategories();
	}, [categoryId]);

	return (
		<>
			<h2>Select a subcategory</h2>
			{loading ? (
				<p>
					<svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
					Loading subcategories...
				</p>
			): (
				<ul>
					{subcategories.map((sub) => (
						<li
							key={sub.id}
							className="cursor-pointer"
							onClick={() => onSelectSubcategory(sub.id)}
						>
							{sub.name}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default SubCategoryList;