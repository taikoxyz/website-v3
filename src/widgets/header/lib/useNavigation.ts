import React from "react";
import { useQuery } from "@tanstack/react-query";
import { NavItem, NavLink } from "shared/lib/types/navigation.types";

export function useNavigation() {
    const { data } = useQuery<NavItem[]>({ queryKey: ["navigation"] });
    return data!;
}

export function useNavigationOneLevel() {
    const data = useNavigation();

    const navigation = React.useMemo(() => {
        return data.map((item) => {
            const links: NavLink[] = [];

            for(const { children, ...data } of item.links) {
                if(children.length > 0) {
                    links.push(...children as NavLink[])
                } else {
                    links.push(data as NavLink);
                }
            }

            return { ...item, links }
        })

    }, [data]);

    return navigation;
}

export type NavHeader = Omit<NavItem, "links"> & {
    links: NavLink[][];
}

export function useNavigationHeader() {
    const data = useNavigation();

    const navigation = React.useMemo(
        () => {
            const nav: NavHeader[] = [];

            for(const { links, ...item } of data) {
                const currentLinks: NavLink[][] = [];

                let name = links[0].column;
                let templinks: NavLink[] = [];

                for(const link of links) {
                    if(name === link.column) {
                        templinks.push(link);
                        continue;
                    } else {
                        name = link.column;
                        if(templinks.length > 0) {
                            currentLinks.push(templinks);
                            templinks = [link];
                        }
                    }
                }

                if(templinks.length > 0) {
                    currentLinks.push(templinks);
                }

                nav.push({ ...item, links: currentLinks });
            }

            return nav;
        }, 
        [data]
    );

    return navigation;
}