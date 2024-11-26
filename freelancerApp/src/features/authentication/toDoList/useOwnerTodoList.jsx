import { useQuery } from "@tanstack/react-query";
import { ownerToDoList } from "../../../services/ownerTodoList";

export default function useOwnerToDoList() {
    const { data, isLoading } = useQuery({
        // useQuery({
        queryKey: ["todoLists"],
        queryFn: ownerToDoList,
        // retry: false,
    });
    console.log( data );

    return { isLoading, data };
}
