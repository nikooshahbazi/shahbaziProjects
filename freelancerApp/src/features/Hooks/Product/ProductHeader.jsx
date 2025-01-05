import { HiArrowLeft } from "react-icons/hi";
import useMoveBack from "../useMoveBack";

function ProductHeader({ product }) {
    const moveBack = useMoveBack();
    console.log(product);
    return (
        <div className="flex items-center gap-x-4 mb-8">
            <button onClick={moveBack}>
                <HiArrowLeft className="w-5 h-5 text-secondary-500" />
            </button>
            <h1 className="text-xl font-black text-secondary-700">
                {product.title}
            </h1>
        </div>
    );
}

export default ProductHeader;
