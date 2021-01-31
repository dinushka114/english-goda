export class CreateCategoryDto{
    name:string;
    description:string
}

export class createVocabularyCatDto{
    name:string;
    description:string
}

export class createGrammerLessonDto{
    title:string;
    content:string;
    category:string;
    Isdraft:boolean
}

export class createEssayDto{
    title:string;
    content:string
}

export class createPaperDto{
    name:string;
    paper:string;
    answers:string
}

export class createVocabularyLessonDto{
    title:string;
    content:string;
    category:string;
    Isdraft:boolean
}