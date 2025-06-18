import React, { useEffect, useState } from "react";
import { getTreatmentsBySelection } from "../../../api/treatments"; // we'll write this later

type Treatment = {
	id: number;
	name: string;
	description: string;
	price: number;
	duration: number;
	subcategory_id: number | null;
	categoryId: number;
	subcategory_name?: string;
};

type TreatmentListProps = {
	categoryId: number;
	subcategoryId: number | null;
};

const TreatmentList = ({ categoryId, subcategoryId }: TreatmentListProps) => {
	const [treatments, setTreatments] = useState<Treatment[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchTreatments = async () => {
			setLoading(true);

			try {
				const response = await getTreatmentsBySelection(categoryId, subcategoryId);
				console.log(response);
				setTreatments(response);
			} catch (error) {
				console.error("Error fetching treatments...", error);
			} finally {
				setLoading(false);
			}
		};

		if(categoryId){
			fetchTreatments();
		} else{
			setTreatments([]);
			setLoading(false);
			console.error('No category selected');
		}
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