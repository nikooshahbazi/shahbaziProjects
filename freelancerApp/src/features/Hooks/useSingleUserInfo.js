import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleUserInfo } from "../../services/getUsers";

export default function useSingleUserInfo() {
    const { id } = useParams();
    if (!id) {
        throw new Error("user id is not undefind");
    }
    const { data, isLoading } = useQuery({
        queryKey: ["getUsers", id],
        queryFn: () => getSingleUserInfo(id),
    });
    console.log(data);
    return { data, isLoading };
}
