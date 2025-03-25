export interface NavigationLink {
    sys: {
        id: string;
		contentTypeId: string;
    };
    fields: {
        title: string;
        slug: string;
        dropdownItems?: NavigationLink[]; // Optional dropdown items
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