import { createClient } from "contentful";

const client = createClient({
	space: 'bcgrhf8n1c1q',
	accessToken: 'BIVFCWnKZC6x0xPJ4FElU3E-7ITH3KsFU4l2MMhmHGE',
	host: "cdn.contentful.com", // Use "preview.contentful.com" if fetching draft content
});

export default client;