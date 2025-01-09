import { useState } from "react";
import Modal from "../../component/Modal";
import CreateProductsForm from "./CreateProductsForm";
import { HiOutlinePlus } from "react-icons/hi";
import FilterDropDown from "../../ui/FilterDropDown";
import useCategories from "../Hooks/useCategoryProduct";
import Filter from "../../ui/Filter";

const OrderQuantityOptionas = [
    {
        value: "minOrderQuantity",
        label: "minimum Order Quantity",
    },
    {
        value: "maxOrderQuantity",
        label: "max Order Quantity",
    },
];
const availabilityStatus = [
    {
        value: "all",
        label: "All",
    },
    {
        value: "lowStock",
        label: "Low Stock",
    },
    {
        value: "inStock",
        label: "In Stock",
    },
];

function ProductsHeader() {
    const [open, setOpen] = useState(false);
    const { categories } = useCategories();
    return (
        <>
            <div className="flex items-center justify-between text-secondary-700 mb-8">
                <h1 className="font-black text-secondary-700 text-xl">
                    Own Products
                </h1>
                <Modal
                    title="Create a new Products"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <CreateProductsForm onClose={() => setOpen(false)} />
                </Modal>
                <button
                    className="btn btn--primary flex items-center gap-x-2"
                    onClick={() => setOpen(true)}
                >
                    Create a new Products
                    <HiOutlinePlus />
                </button>
            </div>
            <div className="flex items-center gap-x-4 mb-8">
                <Filter
                    filterField={availabilityStatus}
                    options={availabilityStatus}
                />
                <FilterDropDown
                    filterField="category"
                    option={[
                        {
                            value: "All",
                            label: "Category(All)",
                        },
                        ...categories,
                    ]}
                />
                <FilterDropDown
                    filterField="OrderQuantity"
                    option={OrderQuantityOptionas}
                />
            </div>
        </>
    );
}

export default ProductsHeader;
