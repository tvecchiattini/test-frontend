import { useLoaderData } from "react-router-dom";
import { Product } from "../../models/product";

function Products() {
    const products = useLoaderData() as Product[]
    return (
        <>
            <h1>Products</h1>
            {JSON.stringify(products)}
        </>
    )
}

export default Products
