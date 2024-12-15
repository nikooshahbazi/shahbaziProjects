import { useQuery } from "@tanstack/react-query";
import { categoryProducts } from "../../services/categoryProducts";

export default function useCategories() {
    const { data = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: categoryProducts,
    });
    const categories = data?.map((category) => ({
        label: category.name,
        value: category.slug,
    }));
    return { isLoading, categories };
}
