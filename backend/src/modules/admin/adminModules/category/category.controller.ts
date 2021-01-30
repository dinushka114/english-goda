import { CategoryService } from './category.service';
import { Body, Controller, Post, UseGuards, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dtos/learnEnglish.dtos';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth-guard';

@Controller('admin/category')
export class CategoryController {
    constructor(private catService:CategoryService){}

    @UseGuards(JwtAuthGuard)
    @Post('new')
    async createNew(
        @Body() createCatData:CreateCategoryDto
    ){
        console.log(createCatData);
        return this.catService.createNew(createCatData);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCategories(

    ){
        return await this.catService.getCategories()
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update/:id')
    async updateCategory(
        @Param('id') id:string,
        @Body() catData:CreateCategoryDto
    ){
        return await this.catService.updateCategory(id , catData);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    async deleteCategory(
        @Param('id') id:string,
    ){
        return await this.catService.deleteCategory(id);
    }

}
