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