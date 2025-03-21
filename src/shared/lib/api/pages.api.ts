import { AlethiaGwynethData } from "../types/alethia-gwyneth.types";
import { DaoData } from "../types/dao.types";
import { GwynethAppsData } from "../types/gwyneth-app.types";
import { HomePageData } from "../types/home.types";
import { TakeoffData } from "../types/takeoff.types";
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

    async gwynethApps() {
        const { data } = await instance.get<GwynethAppsData>("/gwyneth-apps-page");
        return data;
    },

    async dao() {
        const { data } = await instance.get<DaoData>("/dao-page");
        return data;
    },
};
