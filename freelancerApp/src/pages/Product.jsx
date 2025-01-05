import ProductComments from "../features/Hooks/Product/ProductComments";
import ProductHeader from "../features/Hooks/Product/ProductHeader";
import useSingleProduct from "../features/Hooks/useSingleProduct";
import Loading from "../ui/Loading";

function Product() {
    const { isLoading, data } = useSingleProduct();
    console.log(data);
    if (isLoading) return <Loading />;
    return (
        <div>
            <ProductHeader product={data} />
            <ProductComments comments={data} />
        </div>
    );
}

export default Product;
