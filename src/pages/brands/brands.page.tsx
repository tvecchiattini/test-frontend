import { Link, useLoaderData } from "react-router-dom";
import { Brand } from "../../models/brand";

function Brands() {
    const brands = useLoaderData() as Brand[]
    return (
        <>
            <h1>Brands</h1>
            {brands.map(brand => (
                <div>
                    <Link to={`/brands/${brand.code}`}>
                        {brand.name}
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Brands
