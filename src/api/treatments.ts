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

export const getTreatmentsBySelection = async (categoryId: number, subcategoryId: number | null) => {
	try {
		let url = `categories/${categoryId}/treatments`;

		const params: { subcategory_id?: number } = {};

		if(subcategoryId !== null){
			params.subcategory_id = subcategoryId;
		}

		const response = await api.get(url, { params });
		return response.data;
	} catch (error) {
		console.error("Error fetching treatments:", error);
		throw error;
	}
};