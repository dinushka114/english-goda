import { Document } from "mongoose";

export interface Category extends Document{
    name:string,
    description:string
}

export interface VocabularyCategory extends Document{
    name:string,
    description:string
}

export interface GrammerLesson extends Document{
    title:string,
    category:string
    content:string,
    created:Date,
    Isdraft:boolean
}

export interface Essay extends Document{
    title:string,
    content:string
    created:Date
}

export interface PastPaper extends Document{
    name:string,
    link:string,
    answers:string,
    created:Date
}

export interface Vocabulary extends Document{
    title:string,
    category:string
    content:string,
    created:Date,
    Isdraft:boolean
}