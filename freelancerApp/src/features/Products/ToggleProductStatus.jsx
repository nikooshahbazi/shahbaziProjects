import { Field, Switch } from "@headlessui/react";
import { useState } from "react";
import useToggleProductStatus from "../Hooks/useToggleProductStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProductStatus({ product }) {
    const { isUpdating, toggleProductStatuss } = useToggleProductStatus();
    const [enabled, setEnabled] = useState(
        product.availabilityStatus === "Low Stock" ? "low" : "more"
    );

    const toggleHandler = () => {
        const status =
            product.availabilityStatus === "Low Stock" ? "more" : "less";
        toggleProductStatuss(
            {
                id: product.id,
                data: { status },
            },
            {
                onSuccess: () => {
                    setEnabled((prev) => !prev);
                },
            }
        );
    };

    return (
        <div className="w-[5rem]">
            {isUpdating ? (
                <Loading height={20} width={50} />
            ) : (
                <Toggle
                    enabled={enabled}
                    label={enabled ? "Yes" : "No"}
                    onChange={toggleHandler}
                />
            )}
        </div>
    );
}

export default ToggleProductStatus;
