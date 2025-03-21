import { FaqData, FeaturesList } from "./alethia-gwyneth.types";
import { ButtonData } from "./utils.types";

export interface DaoData {
    id: number;
    welcome_suptitle: string;
    welcome_title: string;
    welcome_text: string;
    about_suptitle: string;
    about_title: string;
    about_text: string;
    about_join_suptitle: string;
    about_join_title: string;
    faq_title: string;
    faq_text: string;
    createdAt: string;
    updatedAt: string;
    welcome_btn?: ButtonData;
    about_features: FeaturesList[];
    about_join_btn?: ButtonData;
    faq_data: FaqData[];
}
