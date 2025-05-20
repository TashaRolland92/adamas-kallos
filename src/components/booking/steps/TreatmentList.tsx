import React, { useEffect, useState } from "react";
import { getTreatmentsForSubcategory } from "../../../api/treatments"; // we'll write this later

type Treatment = {
	id: number;
	name: string;
	description: string;
	price: number;
	duration: number;
	subcategoryId: number;
	categoryId: number;
};

type TreatmentListProps = {
	categoryId: number;
	subcategoryId: number;
};

const TreatmentList = ({ categoryId, subcategoryId }: TreatmentListProps) => {
	const [treatments, setTreatments] = useState<Treatment[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchTreatments = async () => {
			setLoading(true);

			try {
				const response = await getTreatmentsForSubcategory(categoryId, subcategoryId);
				setTreatments(response);
			} catch (error) {
				console.error("Error fetching treatments...", error);
			} finally {
				setLoading(false);
			}
		};

		fetchTreatments();
	}, [subcategoryId]);

	return (
		<>
			<h3>Select a treatment</h3>
			{loading ? (
				<p>Loading treatments...</p>
			) : (
				<ul>
					{treatments.map((treatment) => (
						<li
							key={treatment.id}
						>
							<h4 className="text-lg font-bold">{treatment.name}</h4>
							<p>{treatment.description}</p>
							<p><strong>Price:</strong> £{treatment.price}</p>
							<p><strong>Duration:</strong> {treatment.duration} minutes</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default TreatmentList;