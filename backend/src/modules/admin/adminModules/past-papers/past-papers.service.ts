
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PASTPAPER_PROVIDER } from 'src/config/constants/constants';
import { createPaperDto } from 'src/dtos/learnEnglish.dtos';
import { PastPaper } from 'src/models/lessonModels';

@Injectable()
export class PastPapersService {
    constructor(
        @Inject(PASTPAPER_PROVIDER)
        private paperModel:Model<PastPaper>
    ){}

    async getPapers(){
        return await this.paperModel.find({}).exec();
    }

    async createPaper(paperData:createPaperDto){
        const paper = await this.paperModel.create(paperData);
        // console.log(paper);
        return {msg:"paper creatd"}
    }

    async updatePaper(id:string , paperData:createPaperDto){
        try{
            const updatedPaper = await this.paperModel.findByIdAndUpdate(id ,paperData )
            return {msg:"Paper updated"}
        }catch(err){
            throw new HttpException('Error ' , HttpStatus.BAD_REQUEST);
        }
    }

    async deletePaper(id:string){
        const found = await this.paperModel.findOne({_id:id});
        if(found){
            const deletedPaper = await this.paperModel.findByIdAndDelete(id);
            return {msg:"paper deleted"}
        }
        throw new HttpException('Not Found ' , HttpStatus.NOT_FOUND);
    }
}
