import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProductById } from "../../services/ownerProducts";
import toast from "react-hot-toast";

export default function useRemoveProduct() {
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation({
        mutationFn: removeProductById,
        onSuccess: (data) => {
            console.log("Product deleted successfully:", data); // لاگ موفقیت
            toast.success("your product deleted");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (error) => {
            console.error("Error deleting product:", error); // لاگ خطا
            toast.error(" error in delete product  ");
        },
    });

    return { removeProduct: mutate, isDeleting: isLoading };
}
