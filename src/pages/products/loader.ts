import { Brand } from "../../models/brand";

export async function productsLoader({ params }) {
    const products = await fetch(`http://0.0.0.0:3000/products?codes=${params.code}`).
        then(res => res.json()) as Brand[]
    return products;
}