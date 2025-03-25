import { useQuery } from "@tanstack/react-query";
import { GwynethAppsData } from "shared/lib/types/gwyneth-app.types";

export function useGwynethAppsData() {
    const { data } = useQuery<GwynethAppsData>({ queryKey: ["gwyneth-apps"] });
    return data!;
}
