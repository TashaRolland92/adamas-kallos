import { useState, useEffect } from "react";
import { getAllTreatments } from "../api/treatments";

// Define types for treatments
interface Treatment {
	id: number;
	name: string;
	description: string;
	category: string;
	subcategory: string;
}

const Treatments = () => {
	const [treatments, setTreatments] = useState<Treatment[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchTreatments = async () => {
			try {
				// console.log("Fetching from:", import.meta.env.VITE_API_BASE_URL + "/treatments");

				const data = await getAllTreatments();
				// console.log('API response', data);
				setTreatments(data);
			} catch (err) {
				setError("Failed to fetch treatments.");
			} finally {
				setLoading(false);
			}
		};

		fetchTreatments();
	}, []);

	if (loading) return <p>Loading treatments...</p>;
	if (error) return <p>{error}</p>;

	return(
		<>
			<h1>Treatments</h1>
			<ul>
				{treatments.map((treatment) => (
					<li key={treatment.id}>
						<h3>{treatment.name}</h3>
					</li>
				))}
			</ul>
		</>
	);
}

export default Treatments;