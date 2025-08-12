import React from "react";

type Category = {
    id: number;
    name: string;
    has_subcategories: boolean;
	image_url?: string;
};

type CategoryListProps = {
    categories: Category[];
    onCategorySelect: (categoryId: number, hasSubCategories: boolean) => void;
};

const CategoryList = ({ categories, onCategorySelect }: CategoryListProps) => (
    <ul className="grid grid-cols-3">
        {categories.map((category) => (
            <li
                key={category.id}
                className="cursor-pointer"
                onClick={() => onCategorySelect(category.id, category.has_subcategories)}
            >
				{category.image_url && (
					<img src={category.image_url} alt={category.name} className="test" />
				)}
                {category.name}
            </li>
        ))}
    </ul>
);

export default CategoryList;