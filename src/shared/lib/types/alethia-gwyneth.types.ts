import { ImageData } from "./utils.types";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface AlethiaGwynethData {
    id: number;
    hero_title: string;
    hero_text: string;
    about_title: string;
    about_text: string;
    about_subtext: string;
    features_suptitle: string;
    explore_suptitle: string;
    explore_title: string;
    explore_text: string;
    faq_title: string;
    faq_text: string;
    createdAt: string;
    updatedAt: string;
    hero_logo: ImageData;
    features_list: FeaturesList[];
    cards_list: CardsList[];
    faq_data: FaqData[];
}

export interface FeaturesList {
    id: number;
    title: string;
    text: string;
    disabled: boolean;
}

export interface CardsList {
    id: number;
    title: string;
    text: string;
    href: string;
    disabled: boolean;
    icon: ImageData;
}

export interface FaqData {
    id: number;
    question: string;
    answer: BlocksContent;
}
