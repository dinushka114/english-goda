import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ESSAY_PROVIDER } from 'src/config/constants/constants';
import { createEssayDto } from 'src/dtos/learnEnglish.dtos';
import { Essay } from 'src/models/lessonModels';

@Injectable()
export class EssaysService {
    constructor(
        @Inject(ESSAY_PROVIDER)
        private essayModel:Model<Essay>
    ){}

    async getEssays(){
        return await this.essayModel.find({});
    }

    async createEssay(essayData:createEssayDto){
        const essay = await this.essayModel.create(essayData);
        return {msg:"essay created"};
    }

    async updateEssay(id:string , essayData:createEssayDto){
        try{
            const updatedEssay = await this.essayModel.findByIdAndUpdate(id , essayData);
            return {msg:"essay updated"}
        }catch(err){
            throw new HttpException('Error ' , HttpStatus.BAD_REQUEST);
        }
    }

    async deleteEssay(id:string){
        const found = await this.essayModel.findOne({_id:id});
        if(found){
            const deletedEssay = await this.essayModel.findByIdAndDelete(id);
            return {msg:"Essay deleted"}
        }
        throw new HttpException('Not Found ' , HttpStatus.NOT_FOUND);
    }
}
