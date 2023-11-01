import { Brand } from "../../models/brand";

export async function brandsLoader() {
    const brands = await fetch('http://0.0.0.0:3000/brands').
        then(res => res.json()) as Brand[]
    return brands;
}