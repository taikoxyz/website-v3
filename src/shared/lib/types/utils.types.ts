export interface ButtonData {
    id: number;
    name: string;
    link: string;
    variant: string;
    newTab: boolean;
    disabledArrow: boolean;
}

export interface ImageData {
    url: string;
    alternativeText: string | null;
}