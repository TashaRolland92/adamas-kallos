import { createClient } from "contentful";

const client = createClient({
 	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
 	accessToken: import.meta.env.VITE_CONTENTFUL_API_TOKEN,
 	host: "cdn.contentful.com", // Use "preview.contentful.com" if fetching draft content
});

export default client;
//comment