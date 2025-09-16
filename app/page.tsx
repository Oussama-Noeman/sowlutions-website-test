import { getAllProducts } from "@/apis/getAllProducts";
import HomePage from "@/components/HomePage";
import Image from "next/image";
export default async function Home() {
  const products = await getAllProducts();
  
  return <div>
    <HomePage products={products}/>
  </div>
}
