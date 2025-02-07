import { instance } from "../utils/instance";
import { INavItem } from "widgets/header/lib";

export const partialApi = {
    async navigation() {
        const { data } = await instance.get<INavItem[]>("/navigations");
        return data;
    },
};
