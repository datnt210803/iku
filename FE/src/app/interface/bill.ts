import { IProduct } from "./product";

export interface IBill {
    items: { product: IProduct[], quantity: number }[],
    totalAmount: number,
    id_user: string,
    id: string,
    status:number
}