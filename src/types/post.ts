import { BasicItemType,DELETE_STATUS_ENUM  } from ".";
import { Category } from "./category";

export interface Post extends BasicItemType{
    content:string
    pid:Category['id']
    status:'published'|'draft'
    created_at:string
    updated_at:string
    is_deleted:DELETE_STATUS_ENUM
}
export interface  PostFile {
    slug: string;
    date: string;
    hero: string;
    title: string;
    abstract: string;
    content: string;
};