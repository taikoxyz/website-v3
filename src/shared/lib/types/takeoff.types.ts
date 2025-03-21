import { BlocksContent } from "@strapi/blocks-react-renderer";
import { ButtonData, ImageData } from "./utils.types";
import { FaqData } from "./alethia-gwyneth.types";

export interface TakeoffData {
    id: number;
    hero_title: string;
    hero_subtitle: string;
    builders_suptitle: string;
    builders_title: string;
    builders_text: string;
    community_suptitle: string;
    community_title: string;
    community_text: string;
    hiw_suptitle: string;
    hiw_title: string;
    hiw_text: string;
    hiw_points_text: string;
    support_suptitle: string;
    support_title: string;
    createdAt: string;
    updatedAt: string;
    projects_suptitle: string;
    faq_title: string;
    faq_text: string;
    partners_suptitle: string;
    partners_title: string;
    partners_text: string;
    builders_cards: BuildersCard[];
    hiw_btn: ButtonData;
    support_benefits: SupportBenefit[];
    projects_list: ProjectsList[];
    faq_data: FaqData[];
    partners_data: PartnersData[];
    apply_banner?: ApplyBanner;
}

export interface BuildersCard {
    id: number;
    title: string;
    text: string;
    disabled: boolean;
}

export interface SupportBenefit {
    id: number;
    title: string;
    icon: ImageData;
    features: Feature[];
}

export interface Feature {
    id: number;
    text: string;
}

export interface ProjectsList {
    id: number;
    title: string;
    description: BlocksContent;
    url: string;
    icon: ImageData;
}

export interface PartnersData {
    id: number;
    name: string;
    description: string;
    url: any;
    icon: ImageData;
}

export interface ApplyBanner {
    id: number;
    title: string;
    text: string;
    disabled: boolean;
    button: ButtonData;
}