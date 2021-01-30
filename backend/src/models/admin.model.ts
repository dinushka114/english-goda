import { Document } from 'mongoose';
export interface Admin extends Document{
    name:string;
    username:string,
    password:string
}