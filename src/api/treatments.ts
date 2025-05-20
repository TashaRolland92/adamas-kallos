import api from "./api";

export const getAllTreatments = async () => {
	try {
		const response = await api.get("/treatments");
		return response.data;
	} catch (error) {
		console.error("Error fetching treatments:", error);
		throw error;
	}
};

export const getTreatmentsForSubcategory = async (categoryId: number, subcategoryId: number) => {
	try {
		const response = await api.get(`categories/${categoryId}/subcategories/${subcategoryId}/treatments`);
		return response.data;
	} catch (error) {
		console.error("Error fetching treatments:", error);
		throw error;
	}
};