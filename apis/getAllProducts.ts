import { Product } from "@/types/types";
import { fetching } from "./fetching";

export async function getAllProducts(): Promise<Product[]>{
    return await fetching('https://fakestoreapi.com/products');
}