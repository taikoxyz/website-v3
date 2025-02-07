import { ButtonData } from "./utils.types";

export interface HomePageData {
    id: number;
    hero_title: string;
    hero_buttons: ButtonData[];
    solution_screen_1_suptitle: string;
    solution_screen_1_title: string;
    solution_screen_2_title: string;
    solution_screen_3_title: string;
    solution_screen_4_title: string;
    solution_screen_2_btn: ButtonData;
    solution_screen_3_btn: ButtonData;
    solution_screen_4_btn: ButtonData;
    about_suptitle: string;
    about_title: string;
    about_text: string;
    governance_suptitle: string;
    governance_title: string;
    governance_text: string;
    explore_screens: ExploreScreen[];
    roadmap_suptitle: string;
    roadmap_title: string;
    roadmap_list: RoadmapList[];
    createdAt: string;
    updatedAt: string;
}

export interface ExploreScreen {
    id: number;
    title: string;
    text: string;
    suptitle: string;
    link: ButtonData;
}

export interface RoadmapList {
    id: number;
    title: string;
    data: RoadmapListItem[];
}

export interface RoadmapListItem {
    id: number;
    text: string;
}
