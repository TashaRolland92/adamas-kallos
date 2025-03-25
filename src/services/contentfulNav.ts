import client from "./contentfulClient";
import { NavigationLink } from "../types/contentful";
import { Entry, EntrySkeletonType } from "contentful";

interface MainNavigationEntry extends EntrySkeletonType<{ navItems: NavigationLink[]}> {
	fields: {
		navItems: NavigationLink[];
	};
}

export const fetchNavigation = async (): Promise<Entry<MainNavigationEntry> | null> => {
    try {
        const response = await client.getEntries<MainNavigationEntry>({
            content_type: "navigation1",
            include: 2,
        });

        console.log("Contentful Response:", response);

        if (response.items.length > 0) {
            return response.items[0] as Entry<MainNavigationEntry>;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching navigation:", error);
        return null;
    }
};