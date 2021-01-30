import { JwtAuthGuard } from './../auth/guard/jwt-auth-guard';

import { AdminService } from './admin.service';
import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { LoginUserDto } from 'src/dtos/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(
        private adminService:AdminService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get()
    get(){
        return this.adminService.getAdmins()
    }

    @Post('login')
    @HttpCode(200)
    async login(
        @Body() loginUser:LoginUserDto
    ){
        return this.adminService.login(loginUser);
    }
}
