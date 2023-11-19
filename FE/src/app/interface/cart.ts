import { IProduct } from "./product";

export interface ICart {
    id?:string,
    product: IProduct;
    quantity: number,
    id_user:string
}