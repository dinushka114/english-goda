import { UsersService } from './users.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get('categories')
    async getCategories(){
        return await this.userService.findAllGrammerCategories();
    }

    @Get('grammer-lessons')
    async getGrammerLessons(){
        return await this.userService.findAllGrammerLessons();
    }

    @Get('grammer')
    async getLessonsByCategory(
        @Query('category') category:string
    ){
        return await this.userService.getLessonsByCategory(category);
    }

    @Get('essays')
    async getEssays(){
        return await this.userService.getEssays();
    }

    @Get('papers')
    async getPastPepers(){
        return await this.userService.getPastPapers();
    }

    @Get('vocabulary-categories')
    async getVocabularyCategories(){
        return await this.userService.getVocabularyCats();
    }

    @Get('vocabulary')
    async getVocabularyByCategory(
        @Query('category') category:string
    ){
        return await this.userService.getVocabularyByCategiry(category)
    }

}
