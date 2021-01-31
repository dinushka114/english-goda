import { PastPapersService } from './past-papers.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth-guard';
import { createPaperDto } from 'src/dtos/learnEnglish.dtos';

@Controller('admin/past-papers')
export class PastPapersController {
    constructor(private paperService:PastPapersService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getPapers(){
        return await this.paperService.getPapers()
    }

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async createPaper(
        @Body() paperData:createPaperDto
    ){
        // console.log(paperData)
        return await this.paperService.createPaper(paperData);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updatePaper(
        @Param('id') id:string,
        @Body() paperData:createPaperDto
    ){
        
        return this.paperService.updatePaper(id , paperData);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deletePaper(
        @Param('id') id:string
    ){
        return this.paperService.deletePaper(id);
    }

}
