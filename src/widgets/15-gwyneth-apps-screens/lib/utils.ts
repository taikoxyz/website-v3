import { AppsItem } from "shared/lib/types/gwyneth-app.types";

export interface AppsFilter {
    search: string;
    type: string | null;
    category: string | null;
    showCount: number;
}

export const getAppsCategories = (data: AppsItem[]) => {
    const list: string[] = [];

    for (const app of data) {
        for (const category of app.categories) {
            if (!list.includes(category.name)) {
                list.push(category.name);
            }
        }
    }

    return [
        { name: "All categories", value: "ALL" },
        ...list.map((item) => ({ name: item, value: item })),
    ];
};

export const getAppsTypes = (data: AppsItem[]) => {
    const list: string[] = [];

    for (const app of data) {
        if (!list.includes(app.type)) {
            list.push(app.type);
        }
    }

    return [
        { name: "All types", value: "ALL" },
        ...list.map((item) => ({ name: item, value: item })),
    ];
};

export const getFilteredApps = (data: AppsItem[], filter: AppsFilter) => {
    const list: AppsItem[] = [];

    for (const app of data) {
        if (filter.type) {
            if (!app.type.toLowerCase().includes(filter.type.toLowerCase())) {
                continue;
            }
        }
        if (filter.category) {
            if (
                app.categories.findIndex((category) =>
                    category.name.toLowerCase().includes(filter.category!.toLowerCase())
                ) === -1
            ) {
                continue;
            }
        }
        if (filter.search.trim() !== "") {
            const searchValue = filter.search.trim().toLowerCase();
            if (
                !app.name.toLowerCase().includes(searchValue) &&
                !app.text.toLowerCase().includes(searchValue) &&
                !app.type.toLowerCase().includes(searchValue) &&
                app.categories.findIndex((category) =>
                    category.name.toLowerCase().includes(searchValue)
                ) === -1
            ) {
                continue;
            }
        }
        list.push(app);
    }

    return list.slice(0, filter.showCount);
};
