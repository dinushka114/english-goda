import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CATEGORY_PROVIDER, GRAMMER_PROVIDER } from 'src/config/constants/constants';
import { createGrammerLessonDto } from 'src/dtos/learnEnglish.dtos';
import { Category, GrammerLesson } from 'src/models/lessonModels';

@Injectable()
export class GrammerLessonsService {
    constructor(
        @Inject(GRAMMER_PROVIDER)
        private grammerModel:Model<GrammerLesson>,
        @Inject(CATEGORY_PROVIDER)
        private categoryModel:Model<Category>
    ){}

    async getGrammerLessons(){
        return await this.grammerModel.find({}).populate('category');
    }

    async createGrammerLesson(grammerLessonData:createGrammerLessonDto){
        const {_id} = await this.categoryModel.findOne({name:grammerLessonData.category});
        const lesson = {
            title:grammerLessonData.title,
            content:grammerLessonData.content,
            category:_id,
            Isdraft:grammerLessonData.Isdraft
        }   
        const newLesson = await this.grammerModel.create(lesson);
        return {msg:"lesson created"};
    }

    async updateGrammerLesson(id:string,  grammerLessonData:createGrammerLessonDto){
        try{
            const {_id} = await this.categoryModel.findOne({name:grammerLessonData.category});
            const lesson = {
                title:grammerLessonData.title,
                content:grammerLessonData.content,
                category:_id,
                Isdraft:grammerLessonData.Isdraft
            }
            const updatedLesson = await this.grammerModel.findByIdAndUpdate(id , lesson);
            return {msg:"Lesson updated"};
        }catch(err){
            throw new HttpException('Lesson Not Found' , HttpStatus.NOT_FOUND);
        }
    }

    async deleteGrammerLesson(id:string){
        try{
            const deletedLesson = await this.grammerModel.findByIdAndDelete(id);
            console.log(id);
            console.log(deletedLesson);
            return {msg:"Deleted lesson"}
        }catch(err){
            throw new HttpException('Lesson Not Found' , HttpStatus.NOT_FOUND);
        }
    }
}
