import { VocabularyService } from './vocabulary.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth-guard';
import { createVocabularyLessonDto } from 'src/dtos/learnEnglish.dtos';

@Controller('admin/vocabulary')
export class VocabularyController {
    constructor(private vocService:VocabularyService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getVocabularies(){
        return await this.vocService.getVocabularies()
    }

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async createVocabulary(
        @Body() vocData:createVocabularyLessonDto
    ){
        return await this.vocService.createVocabulary(vocData);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateVocabulary(
        @Param('id') id:string,
        @Body() vocData:createVocabularyLessonDto
    ){
        return await this.vocService.updateVocabulary(id , vocData);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteVocabulary(
        @Param('id') id:string
    ){
        return await this.vocService.deleteVocabulary(id);
    }
}
