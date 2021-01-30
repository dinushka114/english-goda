import { GrammerLessonsService } from './grammer-lessons.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth-guard';
import { createGrammerLessonDto } from 'src/dtos/learnEnglish.dtos';

@Controller('admin/grammer-lessons')
export class GrammerLessonsController {
    constructor(private grammerService:GrammerLessonsService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getLessons(){
        return this.grammerService.getGrammerLessons();
    }

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async createGrammerLesson(
        @Body() grammerLessonData:createGrammerLessonDto
    ){
        return this.grammerService.createGrammerLesson(grammerLessonData);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateGrammerLesson(
        @Param('id') id:string,
        @Body() grammerLessonData:createGrammerLessonDto
    ){
        return await this.grammerService.updateGrammerLesson(id , grammerLessonData);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteGrammerLesson(
        @Param('id') id:string,
    ){
        return await this.grammerService.deleteGrammerLesson(id );
    }
}
