import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProductStatus } from "../../services/ownerProducts";
import toast from "react-hot-toast";

export default function useToggleProductStatus() {
    const queryClient = useQueryClient();
    const { isPending: isUpdating, mutate: toggleProductStatuss } = useMutation(
        {
            mutationFn: toggleProductStatus,
            onSuccess: (data) => {
                console.log(data.data.title);
                toast.success(
                    `تغییر وضعیت + ${data.data.title} + با موفقیت انجام شد`
                );
                queryClient.invalidateQueries({
                    queryKey: ["products"],
                });
            },
            onError: (err) => {
                console.error("خطا در تغییر وضعیت", err);
            },
        }
    );
    return { isUpdating, toggleProductStatuss };
}
