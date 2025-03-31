import { useEffect, useState } from "react";
import client from "../services/contentfulClient";

const About: React.FC = () => {
	const [entries, setEntries] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getEntries = async () => {
			try {
				const response = await client.getEntries({content_type: "page"});
				setEntries(response.items);
				console.log(response);
			} catch (error) {
				console.error("Error fetching data:", error)
			} finally{
				setLoading(false);
			}
		};

		getEntries();
	}, []);

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			):(
				<>
					{entries && entries.map((item) => (
						<div key={item.sys.id}>
							<h1>
								{item.fields.title}
							</h1>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default About;