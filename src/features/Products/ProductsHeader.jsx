import { useState } from "react";
import Modal from "../../component/Modal";
import CreateProductsForm from "./CreateProductsForm";
import { HiOutlinePlus } from "react-icons/hi";

function ProductsHeader() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center justify-between mb-8">
            <h1 className="font-black text-secondary-700 text-xl">
                Own Products
            </h1>
            <Modal
                title="Create a new Products"
                open={open}
                onClose={() => setOpen(false)}
            >
                <CreateProductsForm />
            </Modal>
            <button
                className="btn btn--primary flex items-center gap-x-2"
                onClick={() => setOpen(true)}
            >
                Create a new Products
                <HiOutlinePlus />
            </button>
        </div>
    );
}

export default ProductsHeader;
