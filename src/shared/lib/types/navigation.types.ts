import { ImageData } from "./utils.types";

export interface NavItem {
    id: number;
    name: string;
    media: ImageData;
    links: NavLink[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface NavLink {
    id: number;
    name: string;
    href?: string;
    disabled: boolean;
    column: string;
    icon: ImageData;
    desc?: string;
    children: NavChildLink[];
}

export interface NavChildLink {
    id: number;
    name: string;
    desc: string;
    href: string;
}
