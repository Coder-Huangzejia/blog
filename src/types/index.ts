export type DBIdType=number
 export enum STATUS_ENUM{
    Close,
    Open
 }
 export enum DELETE_STATUS_ENUM{
    NotDeleted,
    Deleted
 }
 export interface BasicItemType{
    id:DBIdType
    title:string
 }
 export type Children=BasicItemType