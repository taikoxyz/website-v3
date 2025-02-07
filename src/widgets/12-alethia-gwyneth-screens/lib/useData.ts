import { useQuery } from "@tanstack/react-query";
import { AlethiaGwynethData } from "shared/lib/types/alethia-gwyneth.types";

export function useAlethiaData() {
    const { data } = useQuery<AlethiaGwynethData>({ queryKey: ["alethia-page"] });
    return data!;
}

export function useGwynethData() {
    const { data } = useQuery<AlethiaGwynethData>({ queryKey: ["gwyneth-page"] });
    return data!;
}