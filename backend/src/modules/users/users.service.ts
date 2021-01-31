import { CATEGORY_PROVIDER, GRAMMER_PROVIDER, ESSAY_PROVIDER, PASTPAPER_PROVIDER, VOCABULARY_CATEGORY_PROVIDER, VOCABULARY_PROVIDER } from './../../config/constants/constants';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Category, Essay, GrammerLesson, PastPaper, Vocabulary, VocabularyCategory } from 'src/models/lessonModels';

@Injectable()
export class UsersService {
    constructor(
        @Inject(CATEGORY_PROVIDER)
        private catModel:Model<Category>,
        @Inject(GRAMMER_PROVIDER)
        private grammerModel:Model<GrammerLesson>,
        @Inject(ESSAY_PROVIDER)
        private essayModel:Model<Essay>,
        @Inject(PASTPAPER_PROVIDER)
        private paperModel:Model<PastPaper>,
        @Inject(VOCABULARY_CATEGORY_PROVIDER)
        private vocCatModel:Model<VocabularyCategory>,
        @Inject(VOCABULARY_PROVIDER)
        private vocModel:Model<Vocabulary>
    ){}

    async findAllGrammerCategories(){
        return await this.catModel.find({});
    }

    async findAllGrammerLessons(){
        return await this.grammerModel.find({});
    }

    async getLessonsByCategory(category:string){
        const {_id} = await this.catModel.findOne({name:category});
        // console.log(_id)
        const lessons = await this.grammerModel.find({ category: { $in: [_id] },Isdraft:{$in:[false]} });
        return lessons;
        // console.log(_id);
    }

    async getEssays(){
        return await this.essayModel.find({}).exec()
    }

    async getPastPapers(){
        return await this.paperModel.find({Isdraft:{$in:[false]}}).exec();
    }

    async getVocabularyCats(){
        return await this.vocCatModel.find({});
    }

    async getVocabularyByCategiry(category:string){
        const {_id} = await this.vocCatModel.findOne({name:category});
        const lessons = await this.vocModel.find({ category: { $in: [_id] },Isdraft:{$in:[false]} });
        return lessons;
    }

}
