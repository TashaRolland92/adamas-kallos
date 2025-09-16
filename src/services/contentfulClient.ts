import { createClient } from "contentful";

type ContentfulClient = ReturnType<typeof createClient> | null;

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string | undefined;
const accessToken = import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN as string | undefined;

let client: ContentfulClient = null;

if (space && accessToken) {
	client = createClient({
		space,
		accessToken,
		host: "cdn.contentful.com", // Use "preview.contentful.com" if fetching draft content
	});
} else {
	if (typeof window !== "undefined") {
		console.warn(
			"Contentful client is not configured. Missing VITE_CONTENTFUL_SPACE_ID or VITE_CONTENTFUL_DELIVERY_API_TOKEN. Navigation will be skipped."
		);
	}
}

export default client;