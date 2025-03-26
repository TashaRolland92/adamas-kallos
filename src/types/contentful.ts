export interface NavigationLink {
    sys: {
        id: string;
        contentTypeId: string;
    };
    fields: {
        title: string;
        slug: string;
        dropdownItems?: { // Optional dropdown items
            fields: {
                title: string;
                slug: string;
                imageUrl: {
					fields: {
						description?: string | null;
						file: {
							url: string | null;
						};
						title?: string | null;
					}
				};
            };
            sys: {
                id: string;
            };
        }[];
    };
}

export interface MainNavigation {
    sys: {
        id: string;
		contentTypeId: string;
    };
    fields: {
        navItems: NavigationLink[];
    };
}