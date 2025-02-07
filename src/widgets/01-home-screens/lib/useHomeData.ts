import { useQuery } from "@tanstack/react-query";
import { HomePageData } from "shared/lib/types/home.types";

export function useHomeData() {
    const { data } = useQuery<HomePageData>({ queryKey: ["home-page"] });
    return data!;
}
