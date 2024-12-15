import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProduct } from "../../services/ownerProducts";
import toast from "react-hot-toast";

export default function useCreateProduct() {
    const queryClient = useQueryClient();
    const { isPending: isCreating, mutate: createProduct } = useMutation({
        mutationFn: createNewProduct,
        onSuccess: (data) => {
            console.log(data);
            toast.success(`your product created: + ${data?.title}`);
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
        onError: (err) => toast.error("error in create product", err),
    });
    return { isCreating, createProduct };
}
