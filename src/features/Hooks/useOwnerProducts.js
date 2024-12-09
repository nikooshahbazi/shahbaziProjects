import { useQuery } from "@tanstack/react-query";
import { ownerProducts } from "../../services/ownerProducts";

export default function useOwnerProducts() {
    const { data, isLoading } = useQuery({
        queryKey: ["getproducts"],
        queryFn: ownerProducts,
        retry: false,
    });

    return { isLoading, data };
}
