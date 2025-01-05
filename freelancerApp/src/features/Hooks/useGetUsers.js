import { useQuery } from "@tanstack/react-query";
import { getUsersInfo } from "../../services/getUsers";

export function useGetUsers() {
    const { data, isLoading } = useQuery({
        queryKey: ["getUsers"],
        queryFn: getUsersInfo,
        retry: false,
    });
    // console.log(data);
    return { data, isLoading };
}
