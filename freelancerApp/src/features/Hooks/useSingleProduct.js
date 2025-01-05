import { useQuery } from "@tanstack/react-query";
import { singleProduct } from "../../services/ownerProducts";
import { useParams } from "react-router-dom";

export default function useSingleProduct() {
    const { id } = useParams();
    if (!id) {
        throw new Error("Product ID is not undefined");
    }
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => singleProduct(id),
    });

    // const { product } = data || {};
    // console.log(data);
    return { isLoading, data };
}
