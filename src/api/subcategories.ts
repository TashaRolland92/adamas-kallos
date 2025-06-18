import api from "./api";

export const getSubCategories = async (categoryId?: number) => {
	try {
		const url = categoryId ? `/subcategories?categoryId=${categoryId}` : `/subcategories`;

		const response = await api.get(url);
		return response.data;

	} catch (error) {
		console.error("Error fetching Sub Categories:", error);
		throw error;
	}
};