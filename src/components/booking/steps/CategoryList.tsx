import React from "react";
import SubCategoryList from "./SubCategoryList";

type Category = {
    id: number;
    name: string;
    has_subcategories: boolean;
};

type CategoryListProps = {
    categories: Category[];
    onCategorySelect: (categoryId: number, hasSubCategories: boolean) => void;
};

const CategoryList = ({ categories, onCategorySelect }: CategoryListProps) => (
    <ul>
        {categories.map((category) => (
            <li
                key={category.id}
                className="cursor-pointer"
                onClick={() => onCategorySelect(category.id, category.has_subcategories)}
            >
                {category.name}
            </li>
        ))}
    </ul>
);

export default CategoryList;