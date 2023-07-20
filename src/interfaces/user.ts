import { Links } from "./link";

export interface User { 
    id?: string;
    image?:string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    links?: Links[];
}