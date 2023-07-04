import { Document } from "mongoose";

export interface TodoInfo extends Document {
    name : string
    description : string
    status : boolean
}

export type CB = (error : Error | null, resutlt : any | null) =>void