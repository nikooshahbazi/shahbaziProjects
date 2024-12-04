import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/userInformation";

export default function useUser() {
    return useQuery({
        queryKey: ["getuser"],
        queryFn: getUser,
        retry: false,
    });
}
