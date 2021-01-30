import { VocabularyCategoryService } from './vocabulary-category.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth-guard';
import { createVocabularyCatDto } from 'src/dtos/learnEnglish.dtos';

@Controller('admin/vocabulary-category')
export class VocabularyCategoryController {

    constructor(private vocCatService:VocabularyCategoryService){}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async getCategories(){
        return await this.vocCatService.getCategories();
    }

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async createCategory(
        @Body() categoryData:createVocabularyCatDto
    ){
        return await this.vocCatService.createCategory(categoryData);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateCategory(
        @Param('id') id:string,
        @Body() catData:createVocabularyCatDto,
       
    ){
        return await this.vocCatService.updateCategory(id ,  catData);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteCategory(
        @Param('id') id:string
    ){
        return await this.vocCatService.deleteCategory(id);
    }


}
