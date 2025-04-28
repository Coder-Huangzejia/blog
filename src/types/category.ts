import { BasicItemType, Children } from "."


export interface Category extends BasicItemType{
    description:string
    children:Children[]
}