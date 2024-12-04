import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProductById } from "../../../services/ownerProducts";
import toast from "react-hot-toast";

export default function useRemoveProduct() {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: removeProduct } = useMutation({
        mutationFn: removeProductById,
        onSuccess: (data) => {
            toast.success("محصول مورد نظر با موفقیت حذف شد", data);
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
        onError: (error) => {
            toast.error("Error removing product:", error);
        },
    });
    return { removeProduct, isDeleting };
}
