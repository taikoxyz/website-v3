import { AlethiaGwynethData } from "../types/alethia-gwyneth.types";
import { HomePageData } from "../types/home.types";
import { instance } from "../utils/instance";

export const pagesApi = {
    async home() {
        const { data } = await instance.get<HomePageData>("/home-page");
        return data;
    },

    async alethia() {
        const { data } = await instance.get<AlethiaGwynethData>("/alethia-page");
        return data;
    },

    async gwyneth() {
        const { data } = await instance.get<AlethiaGwynethData>("/gwyneth-page");
        return data;
    },
}