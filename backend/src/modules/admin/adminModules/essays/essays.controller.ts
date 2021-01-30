import { EssaysService } from './essays.service';
import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth-guard';
import { createEssayDto } from 'src/dtos/learnEnglish.dtos';

@Controller('admin/essays')
export class EssaysController {
    constructor(private essayService:EssaysService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getEssays(){
        return await this.essayService.getEssays()
    }

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async createEssay(
        @Body() essayData:createEssayDto
    ){
        return await this.essayService.createEssay(essayData);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateEssay(
        @Param('id') id:string,
        @Body() essayData:createEssayDto
    ){
        return await this.essayService.updateEssay(id , essayData);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteEssay(
        @Param('id') id:string
    ){
        return await this.essayService.deleteEssay(id);
    }
}
