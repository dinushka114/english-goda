
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VOCABULARY_CATEGORY_PROVIDER, VOCABULARY_PROVIDER } from 'src/config/constants/constants';
import { createVocabularyLessonDto } from 'src/dtos/learnEnglish.dtos';
import { Vocabulary, VocabularyCategory } from 'src/models/lessonModels';

@Injectable()
export class VocabularyService {
    constructor(
        @Inject(VOCABULARY_PROVIDER)
        private vocModel:Model<Vocabulary>,
        @Inject(VOCABULARY_CATEGORY_PROVIDER)
        private vocCatModel:Model<VocabularyCategory>
    ){}

    async getVocabularies(){
        return await this.vocModel.find({}).populate('category');
    }

    async createVocabulary(vocData:createVocabularyLessonDto){
        const {_id} = await this.vocCatModel.findOne({name:vocData.category});
        const lesson = {
            title:vocData.title,
            content:vocData.content,
            category:_id,
            Isdraft:vocData.Isdraft
        }   
        const newLesson = await this.vocModel.create(lesson);
        return {msg:"vocabulary created"};
    }

    async updateVocabulary(id:string , vocData:createVocabularyLessonDto){
        // console.log(vocData);
        try{
            const {_id} = await this.vocCatModel.findOne({name:vocData.category});
            console.log(_id);
            const lesson = {
                title:vocData.title,
                content:vocData.content,
                category:_id,
                Isdraft:vocData.Isdraft
            }
            const updatedLesson = await this.vocModel.findByIdAndUpdate(id , lesson);
            return {msg:"lesson updated"};
        }catch(err){
            throw new HttpException('Lesson Not Found' , HttpStatus.NOT_FOUND);
        }
    }
    async deleteVocabulary(id:string){
        try{
            const deletedLesson = await this.vocModel.findByIdAndDelete(id);
            
            return {msg:"Deleted lesson"}
        }catch(err){
            throw new HttpException('Lesson Not Found' , HttpStatus.NOT_FOUND);
        }
    }
}
