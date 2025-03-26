import client from "./contentfulClient";
import { NavigationLink } from "../types/contentful";
import { Entry, EntrySkeletonType } from "contentful";

interface MainNavigationEntry extends EntrySkeletonType<{ navItems: NavigationLink[] }> {
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

        if (response.items.length > 0) {
            const navItems: NavigationLink[] = (response.items[0].fields.navItems as NavigationLink[]).map((navItem: NavigationLink) => {
				if (navItem.fields.dropdownItems) {
					navItem.fields.dropdownItems = navItem.fields.dropdownItems.map((dropdownItem) => {
						return {
							...dropdownItem,
							fields: {
								...dropdownItem.fields,
								imageUrl: dropdownItem.fields.imageUrl || null,
							},
						};
					});
				}
				return navItem;
			});

			return {
				...response.items[0],
                fields: {
                    ...response.items[0].fields,
                    navItems,
                },
            } as Entry<MainNavigationEntry>;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching navigation:", error);
        return null;
    }
};