// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { removeProductById } from "../../services/ownerProducts";
// import toast from "react-hot-toast";

// export default function useRemoveProduct() {
//     // console.log(removeProductById, data);
//     const queryClient = useQueryClient();
//     const { isPending: isDeleting, mutate: removeProduct } = useMutation({
//         mutationFn: removeProductById,
//         onSuccess: (data) => {
//             console.log(data);
//             toast.success("محصول مورد نظر با موفقیت حذف شد", data);
//             queryClient.invalidateQueries({
//                 queryKey: ["products"],
//             });
//         },
//         onError: (error) => {
//             toast.error("Error removing product:", error);
//         },
//     });
//     return { removeProduct, isDeleting };
// }
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProductById } from "../../services/ownerProducts";
import toast from "react-hot-toast";

export default function useRemoveProduct() {
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation({
        mutationFn: removeProductById,
        onSuccess: (data) => {
            console.log("Product deleted successfully:", data); // لاگ موفقیت
            toast.success("محصول با موفقیت حذف شد");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (error) => {
            console.error("Error deleting product:", error); // لاگ خطا
            toast.error("خطا در حذف محصول");
        },
    });

    return { removeProduct: mutate, isDeleting: isLoading };
}
