import { useState, useEffect } from "react";
import client from "../services/contentfulClient";

const Intro: React.FC = () => {
	const [entries, setEntries] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getEntries = async () => {
			try {
				const response = await client.getEntries({content_type: "intro"});
				setEntries(response.items);
				console.log(response);
			} catch (error) {
				console.error("Error fetching content:", error);
			} finally{
				setLoading(false);
			}
		};

		getEntries();
	}, []);

	return (
		<section className="intro bg-babyblue">
			<div className="container mx-auto px-7 py-12">
				{loading ? (
					<p>Loading...</p>
				):(
					<>
						{entries && entries.map((item) => (
							<div key={item.sys.id} className="grid grid-cols-2 gap-5">
								<div className="col">
									<h3 className="
										uppercase
										text-primaryContent
										playfair
										text-xl
										pb-4"
									>
										{item.fields.heading}
									</h3>
									<h3 className="
										playfair-italic-700
										text-tiffanyblue
										text-5xl
										leading-12"
									>
										{item.fields.strapline}
									</h3>
								</div>
								<div className="col">
									<p className="
										playfair
										text-primaryContent
										text-2xl
										mb-2
										text-justify"
									>
										{item.fields.paragraph}
									</p>
									<p className="
										playfair-800
										text-tiffanyblue
										bg-primaryContent
										px-2
										inline"
									>
										{item.fields.outro}
									</p>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</section>
	);
};

export default Intro;