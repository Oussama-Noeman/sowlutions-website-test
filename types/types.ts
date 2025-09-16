// export interface Category{
//     id:number;
//     name:string;
//     image:string;
//     slug:string;
// }
interface Rating{
    rate:number;
    count:number;
}
export interface Product{
    id:number;
    title:string;
    slug:string;
    price:number;
    description:string;
    category: string;
    image:string;
    rating:Rating;
}