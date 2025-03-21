import { useQuery } from "@tanstack/react-query";
import { DaoData } from "shared/lib/types/dao.types";

export function useDaoData() {
    const { data } = useQuery<DaoData>({ queryKey: ["dao-page"] });
    return data!;
}
