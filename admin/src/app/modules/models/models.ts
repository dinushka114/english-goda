import { Category } from './category.model';

export interface GrammerLesson {
  _id: string;
  title: string;
  content: string;
  category: Category;
  created: Date;
  _v: number;
}

export interface VocabularyLesson{
  _id: string;
  title: string;
  content: string;
  category: Category;
  created: Date;
  _v: number;
}

export interface Essay{
  _id: string;
  title: string;
  content: string;
  created: Date;
}

export interface Paper{
  _id:string,
  name:string,
  past_paper:string,
  answers:string,
  created:Date
}