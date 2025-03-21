import { ButtonData, ImageData } from "./utils.types";

export interface GwynethAppsData {
    id: number;
    hero_title: string;
    hero_about_suptitle: string;
    hero_about_text: string;
    hero_about_btn?: ButtonData;
    hero_dapps?: HeroDapps;
    disclaimer_title: string;
    disclaimer_text: string;
    disclaimer_active: boolean;
    createdAt: string;
    updatedAt: string;
    apps_list: AppsItem[];
}

export interface HeroDapps {
    id: number;
    name: string;
    value: string;
    icons: ImageData[];
}

export interface AppsItem {
    id: number;
    name: string;
    text: string;
    type: string;
    active: boolean;
    icon: ImageData;
    categories: Category[];
    url?: string;
}

export interface Category {
    id: number;
    name: string;
}
